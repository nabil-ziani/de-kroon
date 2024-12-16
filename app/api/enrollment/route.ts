import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { enrollmentFormSchema } from '@/utils/validation';
import { sendEnrollmentEmail } from '@/lib/email';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Validate the data
        const validatedData = enrollmentFormSchema.parse(data);

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

        // Send confirmation emails
        await sendEnrollmentEmail(validatedData);

        return NextResponse.json({
            success: true,
            enrollment
        });
    } catch (error) {
        console.error('Error processing enrollment:', error);
        return NextResponse.json(
            { error: 'Er is iets misgegaan bij het verwerken van de inschrijving.' },
            { status: 500 }
        );
    }
}