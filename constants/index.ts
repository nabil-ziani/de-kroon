import { Course } from '@/types';

export const COURSES: Course[] = [
    {
        title: 'Arabische Taal',
        level: 'Beginners tot Gevorderd',
        description: 'Leer de Arabische taal van ervaren docenten.',
        image: '/images/arabisch.png',
        slug: 'arabische-taal',
        gradient: 'from-boy/80 to-boy/20'
    },
    {
        title: 'Koran Recitatie',
        level: 'Alle Niveaus',
        description: 'Verbeter je Koran recitatie met professionele begeleiding.',
        image: '/images/koran.png',
        slug: 'koran-recitatie',
        gradient: 'from-crown/80 to-crown/20'
    },
    {
        title: 'Weekend School',
        level: 'Kinderen',
        description: 'Islamitisch onderwijs voor kinderen in het weekend.',
        image: '/images/weekend.png',
        slug: 'weekend-school',
        gradient: 'from-girl/80 to-girl/20'
    }
]

export const YOUTUBE_CHANNEL_ID = 'UCrm5292knI_xLYQZHntfPhg'