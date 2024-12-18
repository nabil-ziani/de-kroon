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
        if (response.transactionKey) {
            await prisma.donation.create({
                data: {
                    amount: data.amount,
                    isRecurring: data.isRecurring || false,
                    status: 'pending',
                    buckarooKey: response.transactionKey,
                    transactionId: crypto.randomUUID()
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