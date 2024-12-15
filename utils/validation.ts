import { z } from 'zod';

// Shared field validations
const nameSchema = z.string()
    .min(2, 'Naam moet minimaal 2 karakters bevatten')
    .max(50, 'Naam mag maximaal 50 karakters bevatten');

const emailSchema = z.string()
    .email('Ongeldig e-mailadres')
    .min(5, 'E-mailadres moet minimaal 5 karakters bevatten')
    .max(100, 'E-mailadres mag maximaal 100 karakters bevatten');

const messageSchema = z.string()
    .min(10, 'Bericht moet minimaal 10 karakters bevatten')
    .max(1000, 'Bericht mag maximaal 1000 karakters bevatten');

// ------------------------------------------------------------------------------------------------

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
}).superRefine((data, ctx) => {
    const hasAnyField = Object.values(data).some(value => value && value.length > 0);

    // Als er geen velden zijn ingevuld, is alles goed
    if (!hasAnyField) return true;

    // Als er wel velden zijn ingevuld, moeten ze allemaal ingevuld zijn
    // en aan de validatie regels voldoen
    if (data.firstName) {
        if (data.firstName.length < 2) {
            ctx.addIssue({
                code: z.ZodIssueCode.too_small,
                minimum: 2,
                type: "string",
                inclusive: true,
                message: "Naam moet minimaal 2 karakters bevatten",
                path: ["firstName"]
            });
        }
    }

    if (data.lastName) {
        if (data.lastName.length < 2) {
            ctx.addIssue({
                code: z.ZodIssueCode.too_small,
                minimum: 2,
                type: "string",
                inclusive: true,
                message: "Naam moet minimaal 2 karakters bevatten",
                path: ["lastName"]
            });
        }
    }

    if (data.phone) {
        if (data.phone.length < 10) {
            ctx.addIssue({
                code: z.ZodIssueCode.too_small,
                minimum: 10,
                type: "string",
                inclusive: true,
                message: "Telefoonnummer moet minimaal 10 cijfers bevatten",
                path: ["phone"]
            });
        }
        if (!/^[0-9+\-\s()]*$/.test(data.phone)) {
            ctx.addIssue({
                code: z.ZodIssueCode.invalid_string,
                validation: "regex",
                message: "Ongeldig telefoonnummer formaat",
                path: ["phone"]
            });
        }
    }

    if (data.email) {
        if (!emailSchema.safeParse(data.email).success) {
            ctx.addIssue({
                code: z.ZodIssueCode.invalid_string,
                validation: "email",
                message: "Ongeldig e-mailadres",
                path: ["email"]
            });
        }
    }

    // Als er tenminste één veld is ingevuld, moeten ze allemaal ingevuld zijn
    const isComplete = Object.values(data).every(value => value && value.length > 0);
    if (!isComplete) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Gelieve alle velden in te vullen",
            path: []
        });
    }
});

// Enrollment form schema
export const enrollmentFormSchema = z.object({
    // Kind gegevens
    childName: nameSchema.min(1, 'Vul de naam van het kind in'),
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
    pickupMethod: z.enum(['ALONE', 'PARENTS', 'SIBLINGS'], {
        required_error: 'Selecteer wie het kind ophaalt'
    }),

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