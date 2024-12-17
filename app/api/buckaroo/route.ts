import { NextResponse } from 'next/server';
import { BuckarooService, buckarooConfig } from '@/lib/buckaroo';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const buckaroo = new BuckarooService(buckarooConfig);
        const response = await buckaroo.createPayment(data);
        
        return NextResponse.json(response);
    } catch (error) {
        console.error('Buckaroo API error:', error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Payment creation failed' },
            { status: 500 }
        );
    }
} 