import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/utils/validation';
import { sendContactEmail } from '@/lib/email';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate the data
        const validatedData = contactFormSchema.parse(body);

        // Send email
        await sendContactEmail(validatedData);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Er is iets misgegaan bij het versturen van het formulier.' },
            { status: 500 }
        );
    }
} 