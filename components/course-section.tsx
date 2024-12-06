import Image from 'next/image';
import Link from 'next/link';

type Course = {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
};

export default function CourseSection() {
    const courses: Course[] = [
        {
            id: 1,
            title: 'Arabische Taal voor Beginners',
            description: 'Leer de basis van de Arabische taal in een ontspannen omgeving.',
            image: '/images/arabisch.png',
            category: 'Arabisch',
        },
        {
            id: 2,
            title: 'Koran Recitatie',
            description: 'Verbeter je Koran recitatie met professionele begeleiding.',
            image: '/images/koran.png',
            category: 'Koran',
        },
        {
            id: 3,
            title: 'Weekend Lessen',
            description: 'Islamitisch onderwijs voor kinderen in het weekend.',
            image: '/images/weekend.png',
            category: 'Kids',
        },
    ];

    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                        <div className="relative h-48">
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8">
                            <span className="text-sm text-crown font-semibold uppercase tracking-wide">
                                {course.category}
                            </span>
                            <h3 className="text-2xl font-bold text-gray-800 mt-3 mb-4">
                                {course.title}
                            </h3>
                            <p className="text-gray-700 mt-2">{course.description}</p>
                            <Link
                                href={`/courses/${course.id}`}
                                className="mt-6 inline-block bg-crown text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors uppercase tracking-wide text-sm"
                            >
                                Meer informatie
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <Link
                    href="/courses"
                    className="inline-flex items-center justify-center bg-crown/90 hover:bg-crown text-white px-8 py-3 rounded-lg font-semibold transition-colors uppercase tracking-wide text-sm"
                >
                    Bekijk alle cursussen
                    <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
} 