import Image from 'next/image';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers } from 'react-icons/fa';

// Dit zou later uit een database of CMS komen
const activities = [
    {
        title: 'Iftar Bijeenkomst',
        date: '23 Maart 2024',
        time: '18:30 - 21:00',
        location: 'De Kroon',
        image: '/images/placeholder.png',
        description: 'Gezamenlijke iftar tijdens de Ramadan met de hele gemeenschap.',
        category: 'Sociaal',
        maxParticipants: 100,
        status: 'Binnenkort'
    },
    {
        title: 'Jeugd Sportdag',
        date: '15 April 2024',
        time: '10:00 - 16:00',
        location: 'Sporthal Borgerhout',
        image: '/images/placeholder.png',
        description: 'Sportieve activiteiten voor jongeren met verschillende workshops.',
        category: 'Sport',
        maxParticipants: 50,
        status: 'Inschrijving Open'
    },
    {
        title: 'Islamitische Lezing',
        date: 'Elke Zondag',
        time: '14:00 - 15:30',
        location: 'De Kroon',
        image: '/images/placeholder.png',
        description: 'Wekelijkse lezingen over verschillende islamitische onderwerpen.',
        category: 'Educatief',
        maxParticipants: 30,
        status: 'Doorlopend'
    }
];

export default function ActivitiesPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative py-24">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-boy">
                    <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[radial-gradient(at_top_right,_#1dbffe_0%,_transparent_50%)]" />
                </div>
                <div className="absolute -bottom-1 left-0 right-0">
                    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="white" d="M0 48.5129L60 54.0129C120 59.5129 240 70.5129 360 75.5129C480 80.5129 600 80.0129 720 70.0129C840 59.5129 960 37.5129 1080 32.0129C1200 27.0129 1320 37.5129 1380 43.0129L1440 48.5129V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V48.5129Z" />
                    </svg>
                </div>
                <div className="relative z-10 container mx-auto px-4 pt-24">
                    <div className="max-w-4xl">
                        <h1 className="text-6xl font-bold text-white mb-6">
                            Onze Activiteiten
                        </h1>
                    </div>
                </div>
            </section>

            {/* Activities Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {activities.map((activity, index) => (
                                <div
                                    key={activity.title}
                                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="relative h-48">
                                        <Image
                                            src={activity.image}
                                            alt={activity.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="mb-4">
                                            <h3 className="text-xl font-bold mb-2 text-gray-800">
                                                {activity.title}
                                            </h3>
                                            <p className="text-gray-600">
                                                {activity.description}
                                            </p>
                                        </div>
                                        <div className="space-y-2 text-sm text-gray-500 mb-6">
                                            <div className="flex items-center gap-2">
                                                <FaCalendarAlt className="text-crown" />
                                                <span>{activity.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaClock className="text-crown" />
                                                <span>{activity.time}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaMapMarkerAlt className="text-crown" />
                                                <span>{activity.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaUsers className="text-crown" />
                                                <span>Max {activity.maxParticipants} deelnemers</span>
                                            </div>
                                        </div>
                                        <button className="w-full bg-crown text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors text-sm uppercase tracking-wide">
                                            Inschrijven
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 