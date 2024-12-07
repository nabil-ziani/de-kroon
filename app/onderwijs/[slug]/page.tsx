import CourseDetail from './course-detail';

// Dit zou later uit een database of CMS komen
const courseDetails = {
    'arabische-taal': {
        title: 'Arabische Taal',
        level: 'Beginners tot Gevorderd',
        description: 'Leer de Arabische taal van ervaren docenten.',
        image: '/images/arabisch.png',
        schedule: {
            days: 'Zaterdag en Zondag',
            time: '10:00 - 12:00',
            duration: '2 uur per les'
        },
        content: [
            'Basis Arabische grammatica',
            'Uitspraak en fonetiek',
            'Lezen en schrijven',
            'Conversatie oefeningen'
        ],
        requirements: 'Geen voorkennis vereist voor beginners',
        maxStudents: 15
    },
    'koran-recitatie': {
        title: 'Koran Recitatie',
        level: 'Alle Niveaus',
        description: 'Verbeter je Koran recitatie met professionele begeleiding.',
        image: '/images/koran.png',
        schedule: {
            days: 'Woensdag en Vrijdag',
            time: '18:00 - 20:00',
            duration: '2 uur per les'
        },
        content: [
            'Tajweed regels',
            'Correcte uitspraak',
            'Memorisatie technieken',
            'Praktijk oefeningen'
        ],
        requirements: 'Basis kennis van het Arabisch alfabet',
        maxStudents: 12
    },
    'weekend-school': {
        title: 'Weekend School',
        level: 'Kinderen',
        description: 'Islamitisch onderwijs voor kinderen in het weekend.',
        image: '/images/weekend.png',
        schedule: {
            days: 'Zaterdag',
            time: '09:00 - 13:00',
            duration: '4 uur per les'
        },
        content: [
            'Basis islamitische kennis',
            'Arabische taal voor kinderen',
            'Koran recitatie',
            'Sociale vaardigheden'
        ],
        requirements: 'Leeftijd tussen 6 en 12 jaar',
        maxStudents: 20
    }
};

// Bovenaan het bestand, voeg deze type definitie toe
type PageProps = {
    params: {
        slug: string;
    };
    searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function CourseDetailPage({ params }: PageProps) {
    const { slug } = params;
    const course = courseDetails[slug as keyof typeof courseDetails];

    if (!course) {
        return <div>Cursus niet gevonden</div>;
    }

    return <CourseDetail course={course} />;
} 