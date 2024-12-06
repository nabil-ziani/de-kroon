'use client';

import { useState, useEffect } from 'react';

type PrayerTime = {
    name: string;
    arabicName: string;
    time: string;
    isNext?: boolean;
};

export default function PrayerTimes() {
    const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([]);

    useEffect(() => {
        // Voorbeeld data - later te vervangen door Mawaaqit API
        const mockPrayerTimes: PrayerTime[] = [
            { name: 'Fajr', arabicName: 'الفجر', time: '05:23' },
            { name: 'Dhuhr', arabicName: 'الظهر', time: '13:15' },
            { name: 'Asr', arabicName: 'العصر', time: '16:45', isNext: true },
            { name: 'Maghrib', arabicName: 'المغرب', time: '20:15' },
            { name: 'Isha', arabicName: 'العشاء', time: '22:00' },
        ];
        setPrayerTimes(mockPrayerTimes);
    }, []);

    const PrayerIcon = () => (
        <svg className="w-8 h-8 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 5h16M4 12h16M4 19h16"
            />
        </svg>
    );

    return (
        <div className="max-w-4xl mx-auto">
            {/* Gebedstijden Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {prayerTimes.map((prayer) => (
                    <div
                        key={prayer.name}
                        className={`bg-white rounded-xl p-6 transition-all duration-300 
                            ${prayer.isNext ? 'shadow-lg ring-1 ring-crown/50 transform hover:scale-105' : 'hover:shadow-lg'}`}
                    >
                        <div className="text-center">
                            <div className={`${prayer.isNext ? 'text-crown' : 'text-gray-400'}`}>
                                <PrayerIcon />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-lg font-bold text-gray-800">
                                    {prayer.name}
                                </h3>
                                <p className="text-sm text-gray-500 font-medium">
                                    {prayer.arabicName}
                                </p>
                                <p className={`text-2xl font-bold ${prayer.isNext ? 'text-crown' : 'text-gray-800'}`}>
                                    {prayer.time}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Volgende gebed indicator */}
            <div className="mt-12 bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-crown/10">
                <p className="text-gray-600">
                    Volgende gebed is{' '}
                    <span className="font-bold text-crown">Asr</span>{' '}
                    <span className="text-gray-500">over 2 uur en 15 minuten</span>
                </p>
            </div>
        </div>
    );
} 