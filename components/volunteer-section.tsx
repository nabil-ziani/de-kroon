'use client';

import Link from 'next/link';
import { FaChalkboardTeacher, FaCalendarAlt, FaPencilAlt, FaVideo } from 'react-icons/fa';

type VolunteerRole = {
    title: string;
    description: string;
    commitment: string;
    icon: React.ElementType;
};

export default function VolunteerSection() {
    const volunteerRoles: VolunteerRole[] = [
        {
            title: 'Onderwijs Assistent',
            description: 'Help onze docenten bij het lesgeven aan kinderen tijdens de weekend school.',
            commitment: '4 uur per week',
            icon: FaChalkboardTeacher,
        },
        {
            title: 'Evenementen Organisator',
            description: 'Organiseer en coördineer moskee evenementen en activiteiten.',
            commitment: 'Flexibel',
            icon: FaCalendarAlt,
        },
        {
            title: 'Administratieve Ondersteuning',
            description: 'Help bij de dagelijkse administratie en communicatie.',
            commitment: '2-4 uur per week',
            icon: FaPencilAlt,
        },
        {
            title: 'Technische Ondersteuning',
            description: 'Ondersteun bij livestreams en technische faciliteiten.',
            commitment: 'Op oproepbasis',
            icon: FaVideo,
        },
    ];

    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {volunteerRoles.map((role) => {
                    const Icon = role.icon;
                    return (
                        <div
                            key={role.title}
                            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            <div className="text-center">
                                <div className="mb-6 text-crown">
                                    <Icon className="w-12 h-12 mx-auto" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-gray-800">
                                        {role.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {role.description}
                                    </p>
                                    <div className="flex items-center justify-center text-sm text-gray-500 pt-2">
                                        <span className="font-medium">{role.commitment}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="text-center mt-12">
                <Link
                    href="/vrijwilliger-worden"
                    className="inline-flex items-center justify-center bg-crown/90 hover:bg-crown text-white px-8 py-3 rounded-lg font-semibold transition-colors uppercase tracking-wide text-sm"
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