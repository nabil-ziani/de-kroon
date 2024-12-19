const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const events = [
        {
            title: 'Arabische Les - Beginners',
            start: new Date(currentYear, currentMonth, 15, 9, 0),
            end: new Date(currentYear, currentMonth, 15, 12, 0),
            audience: 'gemengd',
            location: 'Lokaal 1.01',
            description: 'Arabische les voor beginners. Leer de basis van het Arabisch schrift en uitspraak.',
            maxParticipants: 15
        },
        {
            title: 'Zusters Bijeenkomst',
            start: new Date(currentYear, currentMonth, 15, 9, 0),
            end: new Date(currentYear, currentMonth, 20, 17, 0),
            audience: 'vrouw',
            location: 'Grote zaal',
            description: 'Speciale bijeenkomst voor zusters met diverse workshops en lezingen.',
            maxParticipants: 30
        },
        {
            title: 'Islamitische Studies',
            start: new Date(currentYear, currentMonth, 15, 9, 0),
            end: new Date(currentYear, currentMonth, 22, 20, 30),
            audience: 'gemengd',
            location: 'Lokaal 2.03',
            description: 'Verdiepende les over islamitische studies en fiqh.',
            maxParticipants: 25
        },
        {
            title: 'Sport & Fitness (Broeders)',
            start: new Date(currentYear, currentMonth, 25, 19, 0),
            end: new Date(currentYear, currentMonth, 25, 21, 0),
            audience: 'man',
            location: 'Sportzaal',
            description: 'Sportactiviteiten en fitness training voor broeders.',
            maxParticipants: 20
        },
        {
            title: 'Koran Recitatie',
            start: new Date(currentYear, currentMonth, 27, 10, 0),
            end: new Date(currentYear, currentMonth, 27, 12, 0),
            audience: 'gemengd',
            location: 'Gebedsruimte',
            description: 'Leer de juiste uitspraak en regels van Koran recitatie.',
            maxParticipants: 15
        },
        {
            title: 'Iftar Bijeenkomst',
            start: new Date(currentYear, currentMonth + 2, 15, 18, 0),
            end: new Date(currentYear, currentMonth + 2, 15, 21, 0),
            audience: 'gemengd',
            location: 'Grote zaal',
            description: 'Gezamenlijke iftar tijdens Ramadan met een speciale lezing.',
            maxParticipants: 100
        }
    ];

    // Verwijder eerst alle bestaande events
    await prisma.event.deleteMany();

    // Voeg de nieuwe events toe
    for (const event of events) {
        await prisma.event.create({
            data: event
        });
    }

    console.log('Database has been seeded');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    }); 