import { NextResponse } from 'next/server';
import { BuckarooService, buckarooConfig } from '@/lib/buckaroo';
import prisma from '@/lib/prisma';
import crypto from 'crypto';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        const buckaroo = new BuckarooService(buckarooConfig);
        const response = await buckaroo.createPayment(data);

        // Create initial donation record
        if (response.RequiredAction?.RedirectURL) {
            await prisma.donation.create({
                data: {
                    amount: data.amount,
                    isRecurring: data.isRecurring || false,
                    status: 'pending',
                    buckarooKey: response.Key,
                    transactionId: crypto.randomUUID(),
                    donorName: data.customerName,
                    donorEmail: data.customerEmail,
                    campaign: data.description?.includes('Inzameling') ? 'dekroon-2025' : undefined,
                }
            });
        }

        return NextResponse.json(response);
    } catch (error) {
        console.error('Buckaroo API error:', error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Payment creation failed' },
            { status: 500 }
        );
    }
} 