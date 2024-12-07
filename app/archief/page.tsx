'use client';

import { useState } from 'react';
import { FaPlay, FaCalendarAlt, FaClock, FaFilter } from 'react-icons/fa';

type Recording = {
    title: string;
    date: string;
    time: string;
    duration: string;
    type: 'Vrijdaggebed' | 'Lezing' | 'Speciaal';
    thumbnail: string;
};

export default function ArchivePage() {
    const [selectedType, setSelectedType] = useState<string | null>(null);

    const recordings: Recording[] = [
        {
            title: 'Vrijdaggebed - De Waarde van Kennis',
            date: '15 maart 2024',
            time: '13:30',
            duration: '45 min',
            type: 'Vrijdaggebed',
            thumbnail: '/images/placeholder.png'
        },
        {
            title: 'Lezing - Ramadan Voorbereiding',
            date: '10 maart 2024',
            time: '20:00',
            duration: '1 uur',
            type: 'Lezing',
            thumbnail: '/images/placeholder.png'
        },
        {
            title: 'Vrijdaggebed - Geduld in Moeilijke Tijden',
            date: '8 maart 2024',
            time: '13:30',
            duration: '45 min',
            type: 'Vrijdaggebed',
            thumbnail: '/images/placeholder.png'
        },
        {
            title: 'Speciale Lezing - Isra en Miraj',
            date: '1 maart 2024',
            time: '19:30',
            duration: '1.5 uur',
            type: 'Speciaal',
            thumbnail: '/images/placeholder.png'
        },
        {
            title: 'Lezing - De Schoonheid van de Koran',
            date: '25 februari 2024',
            time: '20:00',
            duration: '1 uur',
            type: 'Lezing',
            thumbnail: '/images/placeholder.png'
        }
    ];

    const filteredRecordings = selectedType
        ? recordings.filter(recording => recording.type === selectedType)
        : recordings;

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
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
                            Video Archief
                        </h1>
                        <p className="text-xl text-white/90">
                            Bekijk eerdere opnames van vrijdagpreken en lezingen terug.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-4 mb-12">
                            <FaFilter className="text-crown w-5 h-5" />
                            <div className="flex gap-4">
                                {['Vrijdaggebed', 'Lezing', 'Speciaal'].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => setSelectedType(selectedType === type ? null : type)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                                            ${selectedType === type
                                                ? 'bg-crown text-white'
                                                : 'bg-crown/10 text-crown hover:bg-crown/20'
                                            }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Recordings Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredRecordings.map((recording, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    {/* Thumbnail */}
                                    <div className="relative aspect-video">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 group-hover:from-black/70 group-hover:to-black/30 transition-all duration-300" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-crown/90 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                                <FaPlay className="w-6 h-6 text-white ml-1" />
                                            </div>
                                        </div>
                                        <img
                                            src={recording.thumbnail}
                                            alt={recording.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="mb-4">
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium
                                                ${recording.type === 'Vrijdaggebed' ? 'bg-crown/10 text-crown' :
                                                    recording.type === 'Lezing' ? 'bg-boy/10 text-boy' :
                                                        'bg-girl/10 text-girl'}`}
                                            >
                                                {recording.type}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                                            {recording.title}
                                        </h3>
                                        <div className="flex items-center gap-6 text-gray-500 text-sm">
                                            <div className="flex items-center gap-2">
                                                <FaCalendarAlt className="w-4 h-4" />
                                                <span>{recording.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaClock className="w-4 h-4" />
                                                <span>{recording.duration}</span>
                                            </div>
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