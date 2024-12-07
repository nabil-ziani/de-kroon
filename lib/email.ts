import { Resend } from 'resend';
import { ContactFormData, EnrollmentFormData } from '@/utils/validation';

import ContactEmail from '@/emails/contact-email';
import EnrollmentEmail from '@/emails/enrollment-email';
import ContactConfirmationEmail from '@/emails/contact-confirmation-email';
import EnrollmentConfirmationEmail from '@/emails/enrollment-confirmation-email';

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
            react: ContactConfirmationEmail({ data })
        });
    } catch (error) {
        console.error('Error sending contact email:', error);
        throw new Error('Er is iets misgegaan bij het versturen van de email.');
    }
}

export async function sendEnrollmentEmail(data: EnrollmentFormData) {
    try {
        // Email naar bestuur
        await resend.emails.send({
            from: `De Kroon <${FROM_EMAIL}>`,
            to: ADMIN_EMAIL,
            subject: `Nieuwe inschrijving voor ${data.courseName}`,
            react: EnrollmentEmail({ data })
        });

        // Bevestigingsmail naar gebruiker
        await resend.emails.send({
            from: `De Kroon <${FROM_EMAIL}>`,
            to: data.email,
            subject: 'Bedankt voor uw inschrijving',
            react: EnrollmentConfirmationEmail({ data })
        });
    } catch (error) {
        console.error('Error sending enrollment email:', error);
        throw new Error('Er is iets misgegaan bij het versturen van de email.');
    }
}