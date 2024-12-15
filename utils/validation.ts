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

// Parent schema
const parentSchema = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().optional()
}).refine((data) => {
    const hasAnyField = Object.values(data).some(value => value && value.length > 0);
    if (!hasAnyField) return true;

    const isComplete = Object.values(data).every(value => value && value.length > 0);
    if (!isComplete) return false;

    // Als alle velden zijn ingevuld, valideer ze
    if (data.firstName && data.firstName.length < 2) return false;
    if (data.lastName && data.lastName.length < 2) return false;
    if (data.phone && data.phone.length < 10) return false;
    if (data.email && !emailSchema.safeParse(data.email).success) return false;

    return true;
}, {
    message: "Gelieve alle velden correct in te vullen",
    path: []
});

// Enrollment form schema
export const enrollmentFormSchema = z.object({
    // Kind gegevens
    childName: nameSchema,
    birthDate: z.string().min(1, 'Selecteer een geboortedatum'),
    hadPreviousClasses: z.boolean().default(false),
    previousLevel: z.string().optional(),

    // Ouder gegevens
    father: parentSchema,
    mother: parentSchema,

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
}).refine((data) => {
    const fatherComplete = Object.values(data.father).every(value => value && value.length > 0);
    const motherComplete = Object.values(data.mother).every(value => value && value.length > 0);
    return fatherComplete || motherComplete;
}, {
    message: "Vul alle gegevens van minstens één ouder in",
    path: ["father"]
});

// Types
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type EnrollmentFormData = z.infer<typeof enrollmentFormSchema>; 