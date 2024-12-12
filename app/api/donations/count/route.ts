import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        console.log("Fetching donation count...");
        const recurringCount = await prisma.donation.count({
            where: {
                isRecurring: true,
                status: 'completed'
            }
        });
        console.log("Recurring count:", recurringCount);

        return NextResponse.json({
            recurringCount,
            success: true
        });
    } catch (error) {
        console.error('Error fetching donation count:', error);
        return NextResponse.json(
            { error: 'Failed to fetch donation count' },
            { status: 500 }
        );
    }
} 