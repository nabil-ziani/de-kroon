const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    // Delete existing data
    await prisma.schedule.deleteMany();
    await prisma.course.deleteMany();

    // Create the weekend course
    const weekendCourse = await prisma.course.create({
        data: {
            title: 'Weekendlessen',
            description: 'Bij De Kroon helpen we kinderen van 6 tot 15 jaar groeien door toegankelijke en kwalitatieve vorming. Onze lessen zijn eigentijds en praktijkgericht.',
            slug: 'weekendlessen',
            image: 'https://your-project.supabase.co/storage/v1/object/public/course-images/weekendlessen.jpg',
            level: 'Kinderen',
            subjects: ['Arabische taal', 'Koran recitatie', 'Islamitische studies'],
            ageRange: '6-15',
            schedules: {
                create: [
                    // Zaterdag lessen
                    {
                        period: 'Voormiddag',
                        startTime: '10:00',
                        endTime: '12:30',
                        subject: 'Koran',
                        isSaturday: true
                    },
                    {
                        period: 'Namiddag',
                        startTime: '13:00',
                        endTime: '15:30',
                        subject: 'Koran',
                        isSaturday: true
                    },
                    // Zondag lessen
                    {
                        period: 'Voormiddag',
                        startTime: '10:00',
                        endTime: '13:00',
                        subject: 'Arabisch en Islam',
                        isSaturday: false
                    },
                    {
                        period: 'Namiddag',
                        startTime: '13:30',
                        endTime: '16:30',
                        subject: 'Arabisch en Islam',
                        isSaturday: false
                    }
                ]
            }
        }
    });

    console.log('Database has been seeded. 🌱');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    }); 