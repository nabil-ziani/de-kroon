'use client';

import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers, FaChalkboardTeacher, FaRunning, FaMosque } from 'react-icons/fa';

// Dit zou later uit een database of CMS komen
const activities = [
    {
        title: 'Iftar',
        date: 'Elke dag gedurende de Ramadan',
        time: '21:00 - 22:00',
        location: 'Kroonstraat 72',
        description: 'Gezamenlijke iftar voor de hele gemeenschap.',
        category: 'Sadaqah',
        maxParticipants: 100,
        status: 'Binnenkort',
        icon: FaMosque,
        color: 'bg-gradient-to-br from-girl to-girl/70'
    },
    {
        title: 'Jeugd Sportdag',
        date: '15 April 2024',
        time: '10:00 - 16:00',
        location: 'Sporthal Borgerhout',
        description: 'Sportieve activiteiten voor jongeren met verschillende workshops.',
        category: 'Sport',
        maxParticipants: 50,
        status: 'Inschrijving Open',
        icon: FaRunning,
        color: 'bg-gradient-to-br from-boy to-boy/70'
    },
    {
        title: 'Islamitische Lezing',
        date: 'Elke Zondag',
        time: '14:00 - 15:30',
        location: 'De Kroon',
        description: 'Wekelijkse lezingen over verschillende islamitische onderwerpen.',
        category: 'Educatief',
        maxParticipants: 30,
        status: 'Doorlopend',
        icon: FaChalkboardTeacher,
        color: 'bg-gradient-to-br from-crown to-crown/70'
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
                        <p className="text-xl text-white/90">
                            Ontdek wat er allemaal te doen is bij De Kroon
                        </p>
                    </div>
                </div>
            </section>

            {/* Bento Grid Layout */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Title Section */}
                        <div className="mb-12">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">Aankomende Activiteiten</h2>
                            {/*<p className="text-xl text-gray-600">Bekijk en schrijf je in voor onze geplande activiteiten</p>*/}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Featured Activity - Large Card */}
                            <div className="md:col-span-2 md:row-span-2">
                                <div className={`${activities[0].color} rounded-3xl p-8 h-full relative overflow-hidden group transition-all duration-300 hover:scale-[1.02] cursor-pointer`}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                                    <div className="relative z-20 h-full flex flex-col">
                                        <div className="flex-1">
                                            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                                                {activities[0].category}
                                            </span>
                                            <h3 className="text-3xl font-bold text-white mb-4">
                                                {activities[0].title}
                                            </h3>
                                            <p className="text-white/90 text-lg mb-6">
                                                {activities[0].description}
                                            </p>
                                        </div>
                                        <div className="space-y-3 text-white/80">
                                            <div className="flex items-center gap-3">
                                                <FaCalendarAlt />
                                                <span>{activities[0].date}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <FaClock />
                                                <span>{activities[0].time}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <FaMapMarkerAlt />
                                                <span>{activities[0].location}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <FaUsers />
                                                <span>Max {activities[0].maxParticipants} deelnemers</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute right-8 top-8 text-white/20 transform scale-150 transition-transform duration-300 group-hover:scale-[2]">
                                        {React.createElement(activities[0].icon, { size: 80 })}
                                    </div>
                                </div>
                            </div>

                            {/* Regular Activity Cards */}
                            {activities.slice(1).map((activity) => (
                                <div key={activity.title} className="md:col-span-1">
                                    <div className={`${activity.color} rounded-3xl p-6 h-full relative overflow-hidden group transition-all duration-300 hover:scale-105 cursor-pointer`}>
                                        <div className="relative z-20">
                                            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-3">
                                                {activity.category}
                                            </span>
                                            <h3 className="text-xl font-bold text-white mb-3">
                                                {activity.title}
                                            </h3>
                                            <p className="text-white/90 text-sm mb-4">
                                                {activity.description}
                                            </p>
                                            <div className="space-y-2 text-white/80 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <FaCalendarAlt className="w-4 h-4" />
                                                    <span>{activity.date}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <FaClock className="w-4 h-4" />
                                                    <span>{activity.time}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <FaMapMarkerAlt className="w-4 h-4" />
                                                    <span>{activity.location}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <FaUsers className="w-4 h-4" />
                                                    <span>Max {activity.maxParticipants} deelnemers</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute right-4 top-4 text-white/20 transform scale-150 transition-transform duration-300 group-hover:scale-[2]">
                                            {React.createElement(activity.icon, { size: 40 })}
                                        </div>
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