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
    // Kind gegevens
    childName: nameSchema,
    birthDate: z.string().min(1, 'Selecteer een geboortedatum'),
    hadPreviousClasses: z.boolean().default(false),
    previousLevel: z.string().optional(),
    
    // Vader gegevens
    fatherFirstName: nameSchema.optional(),
    fatherLastName: nameSchema.optional(),
    fatherPhone: phoneSchema.optional(),
    fatherEmail: emailSchema.optional(),
    
    // Moeder gegevens
    motherFirstName: nameSchema.optional(),
    motherLastName: nameSchema.optional(),
    motherPhone: phoneSchema.optional(),
    motherEmail: emailSchema.optional(),
    
    // Adres
    street: z.string().min(2, 'Straatnaam moet minimaal 2 karakters bevatten'),
    houseNumber: z.string().min(1, 'Huisnummer is verplicht'),
    city: z.string().min(2, 'Gemeente moet minimaal 2 karakters bevatten'),
    
    // Extra info
    learningDisorders: z.string().optional(),
    allergies: z.string().optional(),
    pickupMethod: z.enum(['ALONE', 'PARENTS', 'SIBLINGS']),
    
    // Cursus info
    courseName: z.string().min(1, 'Selecteer een cursus'),
    message: messageSchema.optional(),
}).refine(
    (data) => {
        // Check if at least one parent's information is complete
        const fatherComplete = data.fatherFirstName && data.fatherLastName && data.fatherPhone && data.fatherEmail;
        const motherComplete = data.motherFirstName && data.motherLastName && data.motherPhone && data.motherEmail;
        return fatherComplete || motherComplete;
    },
    {
        message: "Vul de gegevens van minstens één ouder volledig in",
        path: ["fatherFirstName"] // This will show the error at the first father field
    }
);

// Types
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type EnrollmentFormData = z.infer<typeof enrollmentFormSchema>; 