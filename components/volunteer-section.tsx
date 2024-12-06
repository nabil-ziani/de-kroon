import Link from 'next/link';

type VolunteerRole = {
    title: string;
    description: string;
    commitment: string;
    icon: string;
};

export default function VolunteerSection() {
    const volunteerRoles: VolunteerRole[] = [
        {
            title: 'Onderwijs Assistent',
            description: 'Help onze docenten bij het lesgeven aan kinderen tijdens de weekend school.',
            commitment: '4 uur per week',
            icon: '👥',
        },
        {
            title: 'Evenementen Organisator',
            description: 'Organiseer en coördineer moskee evenementen en activiteiten.',
            commitment: 'Flexibel',
            icon: '📅',
        },
        {
            title: 'Administratieve Ondersteuning',
            description: 'Help bij de dagelijkse administratie en communicatie.',
            commitment: '2-4 uur per week',
            icon: '📝',
        },
        {
            title: 'Technische Ondersteuning',
            description: 'Ondersteun bij livestreams en technische faciliteiten.',
            commitment: 'Op oproepbasis',
            icon: '🎥',
        },
    ];

    return (
        <div className="max-w-7xl mx-auto">
            {/* Intro Text */}
            <div className="text-center max-w-3xl mx-auto mb-12">
                <p className="text-gray-600 text-lg">
                    Word onderdeel van onze gemeenschap en help mee om een verschil te maken.
                    We hebben verschillende mogelijkheden om bij te dragen.
                </p>
            </div>

            {/* Volunteer Roles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {volunteerRoles.map((role) => (
                    <div
                        key={role.title}
                        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <span className="text-4xl mb-4 block">{role.icon}</span>
                        <h3 className="text-xl font-bold text-blue-900 mb-2">
                            {role.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{role.description}</p>
                        <div className="flex items-center text-sm text-blue-600">
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            {role.commitment}
                        </div>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <Link
                    href="/vrijwilliger-worden"
                    className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                    Word vrijwilliger
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
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
} 