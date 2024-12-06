'use client';

import { useState, useEffect } from 'react';
import { WiSunrise, WiDaySunny, WiSunset, WiMoonrise, WiNightAltCloudy } from 'react-icons/wi';

type PrayerTime = {
    name: string;
    arabicName: string;
    time: string;
    isNext?: boolean;
};

export default function PrayerTimes() {
    const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([]);

    useEffect(() => {
        const mockPrayerTimes: PrayerTime[] = [
            { name: 'Fajr', arabicName: 'الفجر', time: '05:23' },
            { name: 'Dhuhr', arabicName: 'الظهر', time: '13:15' },
            { name: 'Asr', arabicName: 'العصر', time: '16:45', isNext: true },
            { name: 'Maghrib', arabicName: 'المغرب', time: '20:15' },
            { name: 'Isha', arabicName: 'العشاء', time: '22:00' },
        ];
        setPrayerTimes(mockPrayerTimes);
    }, []);

    const PrayerIcon = ({ name }: { name: string }) => {
        const iconClass = "w-16 h-16 mx-auto";

        switch (name) {
            case 'Fajr':
                return <WiSunrise className={iconClass} />;
            case 'Dhuhr':
                return <WiDaySunny className={iconClass} />;
            case 'Asr':
                return <WiSunset className={iconClass} />;
            case 'Maghrib':
                return <WiMoonrise className={iconClass} />;
            case 'Isha':
                return <WiNightAltCloudy className={iconClass} />;
        }
    };

    return (
        <div className="max-w-6xl mx-auto">
            {/* Gebedstijden Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {prayerTimes.map((prayer) => (
                    <div
                        key={prayer.name}
                        className={`bg-white rounded-xl p-8 transition-all duration-300 
                            ${prayer.isNext ? 'shadow-lg ring-2 ring-crown transform hover:scale-105' : 'hover:shadow-xl'}`}
                    >
                        <div className="text-center">
                            <div className={`mb-6 ${prayer.isNext ? 'text-crown' : 'text-gray-400'}`}>
                                <PrayerIcon name={prayer.name} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-gray-800">
                                    {prayer.name}
                                </h3>
                                <p className="text-base text-gray-500 font-medium">
                                    {prayer.arabicName}
                                </p>
                                <p className={`text-3xl font-bold mt-4 ${prayer.isNext ? 'text-crown' : 'text-gray-800'}`}>
                                    {prayer.time}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Volgende gebed indicator */}
            <div className="mt-12 bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-crown/10">
                <p className="text-gray-600 text-lg">
                    Volgende gebed is{' '}
                    <span className="font-bold text-crown">Asr</span>{' '}
                    <span className="text-gray-500">over 2 uur en 15 minuten</span>
                </p>
            </div>
        </div>
    );
} 