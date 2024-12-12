import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const recurringCount = await prisma.donation.count({
            where: {
                isRecurring: true,
                status: 'completed'
            }
        });

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