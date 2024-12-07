import { NextResponse } from 'next/server';
import { enrollmentFormSchema } from '@/utils/validation';
import { sendEnrollmentEmail } from '@/lib/email';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate the data
        const validatedData = enrollmentFormSchema.parse(body);

        // Send email
        await sendEnrollmentEmail(validatedData);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Enrollment form error:', error);
        return NextResponse.json(
            { error: 'Er is iets misgegaan bij het versturen van het formulier.' },
            { status: 500 }
        );
    }
} 