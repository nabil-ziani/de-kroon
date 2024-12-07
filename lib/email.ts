import { Resend } from 'resend';
import { ContactFormData, EnrollmentFormData } from '@/utils/validation';
import ContactEmail from '@/emails/contact-email';
import EnrollmentEmail from '@/emails/enrollment-email';
import ContactConfirmationEmail from '@/emails/contact-confirmation-email';
import EnrollmentConfirmationEmail from '@/emails/enrollment-confirmation-email';
import { render } from '@react-email/components';

if (!process.env.RESEND_API_KEY) {
    throw new Error('Missing RESEND_API_KEY environment variable');
}

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = 'info@kidskroon.be';
const ADMIN_EMAIL = 'info@kidskroon.be';

export async function sendContactEmail(data: ContactFormData) {
    try {
        // Email naar bestuur
        /**
         *  const adminHtml = await render(ContactEmail({ data }));
        await resend.emails.send({
            from: FROM_EMAIL,
            to: ADMIN_EMAIL,
            subject: `Nieuw contactformulier bericht: ${data.subject}`,
            html: adminHtml,
        });
         */

        // Bevestigingsemail naar gebruiker
        const userHtml = await render(ContactConfirmationEmail({ data }));
        await resend.emails.send({
            from: FROM_EMAIL,
            to: data.email,
            subject: 'Bedankt voor uw bericht - Kids Kroon',
            html: userHtml,
        });
    } catch (error) {
        console.error('Error sending contact email:', error);
        throw new Error('Er is iets misgegaan bij het versturen van de email.');
    }
}

export async function sendEnrollmentEmail(data: EnrollmentFormData) {
    try {
        // Email naar bestuur
        const adminHtml = await render(EnrollmentEmail({ data }));
        await resend.emails.send({
            from: FROM_EMAIL,
            to: ADMIN_EMAIL,
            subject: `Nieuwe inschrijving voor ${data.courseName}`,
            html: adminHtml,
        });

        // Bevestigingsemail naar gebruiker
        const userHtml = await render(EnrollmentConfirmationEmail({ data }));
        await resend.emails.send({
            from: FROM_EMAIL,
            to: data.email,
            subject: 'Bedankt voor uw inschrijving - Kids Kroon',
            html: userHtml,
        });
    } catch (error) {
        console.error('Error sending enrollment email:', error);
        throw new Error('Er is iets misgegaan bij het versturen van de email.');
    }
} 