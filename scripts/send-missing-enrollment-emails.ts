import { Parent, PreviousExperience, PrismaClient } from '@prisma/client';
import { Resend } from 'resend';

import { generateEnrollmentPDF } from '../lib/generate-enrollment-pdf';
import EnrollmentEmail from '../emails/enrollment-email';
import { EnrollmentFormData } from '@/utils/validation';

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = 'info@kidskroon.be';
const ADMIN_EMAIL = 'info@kidskroon.be';

interface EnrollmentWithRelations {
  id: string;
  childName: string;
  birthDate: Date;
  hadPreviousClasses: boolean;
  street: string;
  houseNumber: string;
  city: string;
  learningDisorders: string | null;
  allergies: string | null;
  pickupMethod: 'ALONE' | 'PARENTS' | 'SIBLINGS';
  courseName: string;
  message: string | null;
  father: Parent | null;
  mother: Parent | null;
  previousExperience: EnrollmentFormData['previousExperience'] | null;
}

async function sendEnrollmentEmail(enrollment: EnrollmentWithRelations) {
  try {
    // Convert enrollment data to the format expected by the email function
    const enrollmentData: EnrollmentFormData = {
      childName: enrollment.childName,
      birthDate: enrollment.birthDate.toISOString().split('T')[0], // Convert to YYYY-MM-DD format
      hadPreviousClasses: enrollment.hadPreviousClasses,
      previousExperience: enrollment.previousExperience || undefined,
      father: {
        firstName: enrollment.father?.firstName || undefined,
        lastName: enrollment.father?.lastName || undefined,
        phone: enrollment.father?.phone || undefined,
        email: enrollment.father?.email || undefined
      },
      mother: {
        firstName: enrollment.mother?.firstName || undefined,
        lastName: enrollment.mother?.lastName || undefined,
        phone: enrollment.mother?.phone || undefined,
        email: enrollment.mother?.email || undefined
      },
      street: enrollment.street,
      houseNumber: enrollment.houseNumber,
      city: enrollment.city,
      learningDisorders: enrollment.learningDisorders || undefined,
      allergies: enrollment.allergies || undefined,
      pickupMethod: enrollment.pickupMethod,
      courseName: enrollment.courseName,
      message: enrollment.message || undefined
    };

    // Only generate PDF if there's previous experience data
    let pdfBuffer: Buffer | undefined;
    if (enrollment.previousExperience) {
      try {
        pdfBuffer = await generateEnrollmentPDF(enrollmentData);
      } catch (pdfError) {
        console.error(`Error generating PDF for enrollment ${enrollment.id}:`, pdfError);
        pdfBuffer = undefined;
      }
    }

    // Prepare attachments
    const attachments = [];
    if (pdfBuffer) {
      attachments.push({
        filename: `inschrijving-${enrollment.childName.toLowerCase().replace(/\s+/g, '-')}.pdf`,
        content: pdfBuffer
      });
    }

    // Send email to admin
    await resend.emails.send({
      from: `De Kroon <${FROM_EMAIL}>`,
      to: ADMIN_EMAIL,
      subject: `Nieuwe inschrijving voor ${enrollment.courseName}`,
      react: EnrollmentEmail({ data: enrollmentData }),
      attachments: attachments.length > 0 ? attachments : undefined
    });

    console.log(`✅ Email sent for enrollment: ${enrollment.childName} (${enrollment.id})`);

  } catch (error) {
    console.error(`❌ Error sending email for enrollment ${enrollment.id}:`, error);
  }
}

async function sendMissingEnrollmentEmails() {
  try {
    console.log('🚀 Starting to send missing enrollment emails...');

    // Fetch all enrollments with their related data
    const enrollments = await prisma.enrollment.findMany({
      include: {
        father: true,
        mother: true,
        previousExperience: true,
      },
      orderBy: {
        createdAt: 'asc'
      }
    });

    console.log(`📊 Found ${enrollments.length} enrollments in total`);

    if (enrollments.length === 0) {
      console.log('No enrollments found in the database.');
      return;
    }

    // Send emails for each enrollment
    for (let i = 0; i < enrollments.length; i++) {
      const enrollment = enrollments[i];
      console.log(`\n📧 Processing enrollment ${i + 1}/${enrollments.length}: ${enrollment.childName}`);
      
      await sendEnrollmentEmail(enrollment as EnrollmentWithRelations);
      
      // Add a small delay between emails to avoid rate limiting
      if (i < enrollments.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    console.log('\n✅ Finished sending all enrollment emails!');

  } catch (error) {
    console.error('❌ Error in main function:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script
sendMissingEnrollmentEmails()
  .then(() => {
    console.log('Script completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Script failed:', error);
    process.exit(1);
  });