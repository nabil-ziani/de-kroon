'use client';

import { FaMosque } from 'react-icons/fa';
import { WiSunrise, WiDaySunny, WiSunset, WiMoonrise, WiNightAltCloudy } from 'react-icons/wi';
import { useState, useEffect } from 'react';
import { getPrayerTimes } from '@/lib/prayer-times';
import { format } from 'date-fns';
import { nlBE } from 'date-fns/locale';

export default function PrayerTimesPage() {
    const [prayerTimes, setPrayerTimes] = useState([
        { name: 'Fajr', time: '--:--', icon: WiSunrise, arabicName: 'الفجر' },
        { name: 'Dhuhr', time: '--:--', icon: WiDaySunny, arabicName: 'الظهر' },
        { name: 'Asr', time: '--:--', icon: WiSunset, arabicName: 'العصر' },
        { name: 'Maghrib', time: '--:--', icon: WiMoonrise, arabicName: 'المغرب' },
        { name: 'Isha', time: '--:--', icon: WiNightAltCloudy, arabicName: 'العشاء' }
    ]);

    useEffect(() => {
        async function fetchPrayerTimes() {
            try {
                const times = await getPrayerTimes();
                setPrayerTimes([
                    { name: 'Fajr', time: times.fajr, icon: WiSunrise, arabicName: 'الفجر' },
                    { name: 'Dhuhr', time: times.dhuhr, icon: WiDaySunny, arabicName: 'الظهر' },
                    { name: 'Asr', time: times.asr, icon: WiSunset, arabicName: 'العصر' },
                    { name: 'Maghrib', time: times.maghrib, icon: WiMoonrise, arabicName: 'المغرب' },
                    { name: 'Isha', time: times.isha, icon: WiNightAltCloudy, arabicName: 'العشاء' }
                ]);
            } catch (error) {
                console.error('Error fetching prayer times:', error);
            }
        }

        fetchPrayerTimes();
        const interval = setInterval(fetchPrayerTimes, 60000);
        return () => clearInterval(interval);
    }, []);

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
                            Gebedstijden
                        </h1>
                        <p className="text-xl text-white/90">
                            Indicatieve gebedstijden voor Borgerhout
                        </p>
                    </div>
                </div>
            </section>

            {/* Prayer Times Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-5xl font-bold text-gray-800 mb-16">
                            Vandaag
                        </h2>

                        {/* Prayer Times Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
                            {prayerTimes.map((prayer) => (
                                <div key={prayer.name} className="flex flex-col items-center text-center p-8">
                                    <div className="w-24 h-24 bg-crown/10 rounded-2xl flex items-center justify-center mb-6">
                                        <prayer.icon className="w-16 h-16 text-crown" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                        {prayer.name}
                                    </h3>
                                    <p className="text-lg text-gray-500 mb-4 font-arabic">
                                        {prayer.arabicName}
                                    </p>
                                    <p className="text-4xl font-bold text-crown">
                                        {prayer.time}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Additional Info Card */}
                        <div className="bg-gradient-to-br from-gray-800/90 to-gray-900 rounded-3xl p-10 shadow-lg">
                            <div className="grid md:grid-cols-2 gap-16 items-center">
                                <div>
                                    <div className="flex-shrink-0 w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                                        <FaMosque className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        Belangrijk
                                    </h3>
                                    <div className="space-y-4">
                                        <p className="text-lg text-white/90">
                                            Dit zijn berekende tijden voor de regio Borgerhout. Voor de exacte gebedstijden van Moskee Ennassr,
                                            verwijzen we u graag door naar{' '}
                                            <a
                                                href="https://mawaqit.net/en/moskee-ennassr-borgerhout-2140-belgium"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-crown hover:underline"
                                            >
                                                mawaqit
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white/10 rounded-2xl p-8">
                                    <h3 className="text-xl font-bold text-white mb-4">Opmerking</h3>
                                    <p className="text-lg text-white/90">
                                        Gebedstijden kunnen verschillen per moskee. Raadpleeg altijd de officiële tijden van uw lokale moskee.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 