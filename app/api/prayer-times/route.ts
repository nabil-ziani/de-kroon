import { NextResponse } from 'next/server';
import { format } from 'date-fns';

export async function GET() {
    const formattedDate = format(new Date(), 'dd-MM-yyyy');

    try {
        const response = await fetch(
            `https://api.aladhan.com/v1/timings?latitude=51.2090&longitude=4.4489&method=3&school=0&date=${formattedDate}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch prayer times');
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching prayer times:', error);
        return NextResponse.json(
            { error: 'Failed to fetch prayer times' },
            { status: 500 }
        );
    }
} 