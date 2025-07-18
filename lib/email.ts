import { Resend } from 'resend';
import { ContactFormData, EnrollmentFormData } from '@/utils/validation';

import ContactEmail from '@/emails/contact-email';
import ContactConfirmationEmail from '@/emails/contact-confirmation-email';

import EnrollmentEmail from '@/emails/enrollment-email';
import EnrollmentConfirmationEmail from '@/emails/enrollment-confirmation-email';

import { generateEnrollmentPDF } from './generate-enrollment-pdf';

if (!process.env.RESEND_API_KEY) {
    throw new Error('Missing RESEND_API_KEY environment variable');
}

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = 'info@kidskroon.be';
const ADMIN_EMAIL = 'info@kidskroon.be';

export async function sendContactEmail(data: ContactFormData) {
    try {
        // Email naar bestuur    
        await resend.emails.send({
            from: `De Kroon <${FROM_EMAIL}>`,
            to: ADMIN_EMAIL,
            subject: `Nieuw bericht: ${data.subject}`,
            react: ContactEmail({ data })
        });

        // Bevestigingsmail naar gebruiker
        await resend.emails.send({
            from: `De Kroon <${FROM_EMAIL}>`,
            to: data.email,
            subject: 'Bedankt voor uw bericht',
            react: ContactConfirmationEmail()
        });
    } catch (error) {
        console.error('Error sending contact email:', error);
        throw new Error('Er is iets misgegaan bij het versturen van de email.');
    }
}

export async function sendEnrollmentEmail(data: EnrollmentFormData) {
    try {
        // Only generate PDF if there's previous experience data
        let pdfBuffer: Buffer | undefined;
        if (data.previousExperience) {
            try {
                pdfBuffer = await generateEnrollmentPDF(data);
            } catch (pdfError) {
                console.error('Error generating PDF:', pdfError);
                // Continue without PDF if generation fails
                pdfBuffer = undefined;
            }
        }

        // Prepare attachments
        const attachments = [];
        if (pdfBuffer) {
            attachments.push({
                filename: `inschrijving-${data.childName.toLowerCase().replace(/\s+/g, '-')}.pdf`,
                content: pdfBuffer
            });
        }

        // Send email to admin
        await resend.emails.send({
            from: `De Kroon <${FROM_EMAIL}>`,
            to: ADMIN_EMAIL,
            subject: `Nieuwe inschrijving voor ${data.courseName}`,
            react: EnrollmentEmail({ data }),
            attachments: attachments.length > 0 ? attachments : undefined
        });

        // Bevestigingsmail naar beide ouders
        const parentEmails = [];
        if (data.father.email) {
            parentEmails.push(data.father.email);
        }
        if (data.mother.email && data.mother.email !== data.father.email) {
            parentEmails.push(data.mother.email);
        }

        if (parentEmails.length > 0) {
            await resend.emails.send({
                from: `De Kroon <${FROM_EMAIL}>`,
                to: parentEmails,
                subject: 'Bedankt voor uw inschrijving',
                react: EnrollmentConfirmationEmail()
            });
        }
    } catch (error) {
        console.error('Error sending enrollment email:', error);
        // Niet de error throwen, zodat de inschrijving wel wordt opgeslagen
        // maar de email later handmatig kan worden verstuurd
        console.warn('Email sending failed, but enrollment was saved');
    }
}