import { z } from 'zod';

// Shared field validations
const nameSchema = z.string()
    .min(2, 'Naam moet minimaal 2 karakters bevatten')
    .max(50, 'Naam mag maximaal 50 karakters bevatten');

const emailSchema = z.string()
    .email('Ongeldig e-mailadres')
    .min(5, 'E-mailadres moet minimaal 5 karakters bevatten')
    .max(100, 'E-mailadres mag maximaal 100 karakters bevatten');

const phoneSchema = z.string()
    .min(10, 'Telefoonnummer moet minimaal 10 cijfers bevatten')
    .max(15, 'Telefoonnummer mag maximaal 15 cijfers bevatten')
    .regex(/^[0-9+\-\s()]*$/, 'Ongeldig telefoonnummer formaat');

const messageSchema = z.string()
    .min(10, 'Bericht moet minimaal 10 karakters bevatten')
    .max(1000, 'Bericht mag maximaal 1000 karakters bevatten');

// Contact form schema
export const contactFormSchema = z.object({
    name: z.string().min(2, 'Naam moet minimaal 2 karakters bevatten'),
    email: z.string().email('Ongeldig e-mailadres'),
    subject: z.string().min(3, 'Onderwerp moet minimaal 3 karakters bevatten'),
    message: z.string().min(10, 'Bericht moet minimaal 10 karakters bevatten'),
});

// Enrollment form schema
export const enrollmentFormSchema = z.object({
    studentName: nameSchema,
    email: emailSchema,
    phone: phoneSchema,
    courseName: z.string().min(1, 'Selecteer een cursus'),
    birthDate: z.string().min(1, 'Selecteer een geboortedatum'),
    message: messageSchema.optional(),
});

// Types
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type EnrollmentFormData = z.infer<typeof enrollmentFormSchema>; 