import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { enrollmentFormSchema } from '@/utils/validation';
import { sendEnrollmentEmail } from '@/lib/email';

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

        // Validate the data
        const validatedData = enrollmentFormSchema.parse(data);

        try {
            // Create the enrollment
            const enrollment = await prisma.enrollment.create({
                data: {
                    childName: validatedData.childName,
                    birthDate: new Date(validatedData.birthDate),
                    hadPreviousClasses: validatedData.hadPreviousClasses,
                    previousExperience: validatedData.previousExperience ? {
                        create: validatedData.previousExperience
                    } : undefined,
                    father: validatedData.father.firstName ? {
                        create: {
                            firstName: validatedData.father.firstName,
                            lastName: validatedData.father.lastName,
                            phone: validatedData.father.phone,
                            email: validatedData.father.email,
                        }
                    } : undefined,
                    mother: validatedData.mother.firstName ? {
                        create: {
                            firstName: validatedData.mother.firstName,
                            lastName: validatedData.mother.lastName,
                            phone: validatedData.mother.phone,
                            email: validatedData.mother.email,
                        }
                    } : undefined,
                    street: validatedData.street,
                    houseNumber: validatedData.houseNumber,
                    city: validatedData.city,
                    learningDisorders: validatedData.learningDisorders,
                    allergies: validatedData.allergies,
                    pickupMethod: validatedData.pickupMethod,
                    courseName: validatedData.courseName,
                    message: validatedData.message,
                },
                include: {
                    father: true,
                    mother: true,
                    previousExperience: true,
                }
            });

            console.log('Enrollment created:', enrollment);

            // Send confirmation emails
            await sendEnrollmentEmail(validatedData);
            console.log('Confirmation emails sent');

            return NextResponse.json({
                success: true,
                enrollment
            });
        } catch (error) {
            console.error('Database or email error:', error);
            // Log the full error details
            if (error instanceof Error) {
                console.error('Error name:', error.name);
                console.error('Error message:', error.message);
                console.error('Error stack:', error.stack);
            }
            return NextResponse.json(
                {
                    success: false,
                    message: 'Er is iets misgegaan bij het verwerken van de inschrijving in de database.',
                    error: error instanceof Error ? error.message : 'Unknown error',
                    details: error instanceof Error ? error.stack : undefined
                },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('Validation error:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'De ingevoerde gegevens zijn niet geldig.',
                error: error instanceof Error ? error.message : 'Unknown error',
                details: error instanceof Error ? error.stack : undefined
            },
            { status: 400 }
        );
    }
}