import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
    try {
        const data = await request.formData();

        // Extract data from Buckaroo's response
        const transactionKey = data.get('brq_transactions') as string;
        const statusCode = data.get('brq_statuscode') as string;
        const donorName = data.get('brq_customer_name') as string;
        const amount = parseFloat(data.get('brq_amount') as string);
        const description = data.get('brq_description') as string;
        const isRecurring = description?.toLowerCase().includes('maandelijkse');

        // Map Buckaroo status codes to our status
        let status = 'error'; // Default to error for unknown status codes
        switch (statusCode) {
            case '190':
            case '191':
                status = 'completed';
                break;
            case '490':
            case '491':
            case '492':
                status = 'failed';
                break;
            case '690':
                status = 'failed';
                break;
            case '790':
            case '791':
            case '792':
            case '793':
                status = 'pending';
                break;
            case '890':
            case '891':
                status = 'failed';
                break;
        }

        // Create or update donation record
        if (transactionKey) {
            const updateData: any = {
                status
            };

            // If this is a completed recurring donation, set the next payment date
            if (status === 'completed' && isRecurring) {
                const nextMonth = new Date();
                nextMonth.setMonth(nextMonth.getMonth() + 1);
                updateData.nextPaymentDate = nextMonth;
            }

            await prisma.donation.upsert({
                where: {
                    buckarooKey: transactionKey
                },
                update: updateData,
                create: {
                    buckarooKey: transactionKey,
                    transactionId: crypto.randomUUID(),
                    amount,
                    isRecurring,
                    status,
                    ...(isRecurring && status === 'completed' ? {
                        nextPaymentDate: new Date(new Date().setMonth(new Date().getMonth() + 1))
                    } : {})
                }
            });
        }

        // Use a relative URL for the redirect
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/donatie/bevestiging?status=${status}`, {
            status: 303 // Use 303 See Other for POST redirects
        });
    } catch (error) {
        console.error('Error processing Buckaroo return:', error);
        // Fallback redirect in case of error
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/donatie/bevestiging?status=error`, {
            status: 303
        });
    }
}

// Also handle GET requests for direct browser access
export async function GET(request: NextRequest) {
    try {
        const url = new URL(request.url);
        const status = url.searchParams.get('status') || 'completed';

        // Validate status to prevent unknown values
        if (!['completed', 'error', 'failed', 'pending'].includes(status)) {
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/donatie/bevestiging?status=error`, {
                status: 303
            });
        }

        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/donatie/bevestiging?status=${status}`, {
            status: 303
        });
    } catch (error) {
        console.error('Error processing GET request:', error);
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/donatie/bevestiging?status=error`, {
            status: 303
        });
    }
} 