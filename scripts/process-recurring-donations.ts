import { PrismaClient, Donation } from '@prisma/client';
import { BuckarooService, buckarooConfig } from '../lib/buckaroo';

const prisma = new PrismaClient();
const buckaroo = new BuckarooService(buckarooConfig);

async function processRecurringDonations(): Promise<void> {
    try {
        // Find all recurring donations that need to be processed today
        const dueRecurringDonations: Donation[] = await prisma.donation.findMany({
            where: {
                isRecurring: true,
                status: 'completed',
                nextPaymentDate: {
                    lte: new Date()  // Due today or overdue
                }
            }
        });

        console.log(`Found ${dueRecurringDonations.length} donations to process`);

        for (const donation of dueRecurringDonations) {
            try {
                if (!donation.buckarooKey) {
                    console.error(`Donation ${donation.id} has no buckarooKey, skipping`);
                    continue;
                }

                // Calculate next month's date while keeping the same day
                const nextMonth = new Date(donation.nextPaymentDate!);
                nextMonth.setMonth(nextMonth.getMonth() + 1);

                console.log(donation)

                // Process the recurring payment
                await buckaroo.createRecurringPayment({
                    amount: donation.amount,
                    currency: 'EUR',
                    description: `Herhaling donatie aan De Kroon`,
                    returnUrl: new URL('/api/buckaroo/return', process.env.NEXT_PUBLIC_BASE_URL || '').toString(),
                    originalTransactionKey: donation.buckarooKey,
                    collectDate: nextMonth.toISOString().split('T')[0],
                    customerName: donation.donorName || undefined,
                    customerEmail: donation.donorEmail || undefined,
                });

                // Update the donation record
                await prisma.donation.update({
                    where: { id: donation.id },
                    data: {
                        nextPaymentDate: nextMonth,
                        lastProcessedAt: new Date()
                    }
                });

                console.log(`Processed donation ${donation.id}, next payment date: ${nextMonth}`);
            } catch (error) {
                console.error(`Error processing donation ${donation.id}:`, error);
            }
        }
    } finally {
        await prisma.$disconnect();
    }
}

// Run the script
processRecurringDonations()
    .catch((error: Error) => {
        console.error('Fatal error:', error);
        process.exit(1);
    }); 