'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';

type PrayerTime = {
    name: string;
    time: string;
    icon: string;
};

export default function PrayerTimes() {
    const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([]);
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        // Voorbeeld data - later te vervangen door echte API call
        const mockPrayerTimes: PrayerTime[] = [
            { name: 'Fajr', time: '05:23', icon: '🌅' },
            { name: 'Dhuhr', time: '13:15', icon: '☀️' },
            { name: 'Asr', time: '16:45', icon: '🌤️' },
            { name: 'Maghrib', time: '20:15', icon: '🌅' },
            { name: 'Isha', time: '22:00', icon: '🌙' },
        ];
        setPrayerTimes(mockPrayerTimes);
    }, []);

    return (
        <div className="max-w-4xl mx-auto">
            {/* Datum weergave */}
            <div className="text-center mb-8">
                <p className="text-lg text-blue">
                    {format(currentDate, 'EEEE d MMMM yyyy', { locale: nl })}
                </p>
            </div>

            {/* Gebedstijden Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {prayerTimes.map((prayer) => (
                    <div
                        key={prayer.name}
                        className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
                    >
                        <div className="text-center">
                            <span className="text-2xl mb-2 block">{prayer.icon}</span>
                            <h3 className="text-lg font-semibold text-blue mb-1">
                                {prayer.name}
                            </h3>
                            <p className="text-xl font-bold text-green">{prayer.time}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Volgende gebed indicator */}
            <div className="mt-8 text-center">
                <p className="text-blue">
                    Volgende gebed: <span className="font-bold">Asr</span> over{' '}
                    <span className="font-bold">2 uur en 15 minuten</span>
                </p>
            </div>
        </div>
    );
} 