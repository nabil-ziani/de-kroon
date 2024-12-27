import { NextResponse } from 'next/server';
import { enrollmentFormSchema } from '@/lib/validations/enrollment';
import { generateEnrollmentPDF } from '@/lib/generate-enrollment-pdf';
import { sendEmail } from '@/lib/email';
import EnrollmentEmail from '@/emails/enrollment-email';

// Tijdelijk gesloten tot juni 2024
const ENROLLMENTS_OPEN = false;

export async function POST(request: Request) {
    if (!ENROLLMENTS_OPEN) {
        return NextResponse.json(
            { success: false, message: 'Inschrijvingen zijn momenteel gesloten. Nieuwe inschrijvingen zijn mogelijk vanaf juni 2024.' },
            { status: 403 }
        );
    }

    try {
        const data = await request.json();
        const validatedData = enrollmentFormSchema.parse(data);

        // Generate PDF
        const pdfBuffer = await generateEnrollmentPDF(validatedData);

        // Send email with PDF attachment
        await sendEmail({
            to: process.env.ADMIN_EMAIL!,
            subject: `Nieuwe inschrijving: ${validatedData.courseName}`,
            react: EnrollmentEmail({ data: validatedData }),
            attachments: [
                {
                    filename: `inschrijving-${validatedData.childName.toLowerCase().replace(/\s+/g, '-')}.pdf`,
                    content: pdfBuffer,
                },
            ],
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Error processing enrollment:', error);
        return NextResponse.json(
            { success: false, message: error.message || 'Er is iets misgegaan bij het verwerken van de inschrijving.' },
            { status: 400 }
        );
    }
}