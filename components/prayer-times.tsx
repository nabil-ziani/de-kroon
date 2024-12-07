'use client';

import { useState, useEffect } from 'react';
import { WiSunrise, WiDaySunny, WiSunset, WiMoonrise, WiNightAltCloudy } from 'react-icons/wi';
import { getPrayerTimes, PrayerTimes as PrayerTimesType } from '@/lib/prayer-times';
import { format, parse, isAfter, addDays } from 'date-fns';
import { FaClock } from 'react-icons/fa';

type Prayer = {
    name: string;
    arabicName: string;
    time: string;
    isNext?: boolean;
};

export default function PrayerTimes() {
    const [prayerTimes, setPrayerTimes] = useState<Prayer[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [nextPrayer, setNextPrayer] = useState<{ name: string; timeUntil: string } | null>(null);

    useEffect(() => {
        async function fetchPrayerTimes() {
            try {
                setLoading(true);
                const times = await getPrayerTimes();
                const prayers: Prayer[] = [
                    { name: 'Fajr', arabicName: 'الفجر', time: times.fajr },
                    { name: 'Dhuhr', arabicName: 'الظهر', time: times.dhuhr },
                    { name: 'Asr', arabicName: 'العصر', time: times.asr },
                    { name: 'Maghrib', arabicName: 'المغرب', time: times.maghrib },
                    { name: 'Isha', arabicName: 'العشاء', time: times.isha },
                ];

                setPrayerTimes(prayers);
                setError(null);

                // Find next prayer
                const now = new Date();
                const todayStr = format(now, 'yyyy-MM-dd');
                let nextPrayerFound = false;

                for (const prayer of prayers) {
                    const fullPrayerTime = parse(
                        `${todayStr} ${prayer.time}`,
                        'yyyy-MM-dd HH:mm',
                        new Date()
                    );

                    if (isAfter(fullPrayerTime, now) && !nextPrayerFound) {
                        prayer.isNext = true;
                        nextPrayerFound = true;

                        // Calculate time until next prayer
                        const updateCountdown = () => {
                            const now = new Date();
                            const diffInSeconds = Math.floor((fullPrayerTime.getTime() - now.getTime()) / 1000);
                            const hours = Math.floor(diffInSeconds / 3600);
                            const minutes = Math.floor((diffInSeconds % 3600) / 60);

                            setNextPrayer({
                                name: prayer.name,
                                timeUntil: `${hours > 0 ? `${hours} uur en ` : ''}${minutes} minuten`
                            });
                        };

                        updateCountdown();
                        const interval = setInterval(updateCountdown, 1000);
                        return () => clearInterval(interval);
                    }
                }

                // If no next prayer found today, first prayer tomorrow is next
                if (!nextPrayerFound && prayers.length > 0) {
                    const tomorrow = addDays(now, 1);
                    const tomorrowStr = format(tomorrow, 'yyyy-MM-dd');
                    const firstPrayer = prayers[0];
                    const firstPrayerTomorrow = parse(
                        `${tomorrowStr} ${firstPrayer.time}`,
                        'yyyy-MM-dd HH:mm',
                        new Date()
                    );

                    firstPrayer.isNext = true;
                    const updateCountdown = () => {
                        const now = new Date();
                        const diffInSeconds = Math.floor((firstPrayerTomorrow.getTime() - now.getTime()) / 1000);
                        const hours = Math.floor(diffInSeconds / 3600);
                        const minutes = Math.floor((diffInSeconds % 3600) / 60);

                        setNextPrayer({
                            name: firstPrayer.name,
                            timeUntil: `${hours > 0 ? `${hours} uur en ` : ''}${minutes} minuten`
                        });
                    };

                    updateCountdown();
                    const interval = setInterval(updateCountdown, 1000);
                    return () => clearInterval(interval);
                }
            } catch (err) {
                console.error('Error fetching prayer times:', err);
                setError('Er is een fout opgetreden bij het ophalen van de gebedstijden.');
            } finally {
                setLoading(false);
            }
        }

        fetchPrayerTimes();
        const interval = setInterval(fetchPrayerTimes, 60000);
        return () => clearInterval(interval);
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
            default:
                return <WiSunrise className={iconClass} />;
        }
    };

    if (loading) {
        return (
            <div className="max-w-6xl mx-auto text-center py-12">
                <p className="text-gray-600">Gebedstijden worden geladen...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-6xl mx-auto text-center py-12">
                <p className="text-red-600">{error}</p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto">
            {/* Prayer Times Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {prayerTimes.map((prayer) => (
                    <div
                        key={prayer.name}
                        className={"bg-white rounded-xl p-8 transition-all duration-300 " +
                            (prayer.isNext ? "shadow-lg ring-2 ring-crown transform hover:scale-105 hover:shadow-xl" : "")}
                    >
                        <div className="text-center">
                            <div className={"mb-6 " + (prayer.isNext ? "text-crown" : "text-gray-400")}>
                                <PrayerIcon name={prayer.name} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-gray-800">
                                    {prayer.name}
                                </h3>
                                <p className="text-base text-gray-500 font-medium">
                                    {prayer.arabicName}
                                </p>
                                <p className={"text-3xl font-bold mt-4 " + (prayer.isNext ? "text-crown" : "text-gray-800")}>
                                    {prayer.time}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Next Prayer Indicator */}
            {nextPrayer && (
                <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl">
                    <div className="flex items-center">
                        <div className="flex items-center gap-2 text-gray-500">
                            <FaClock className="w-5 h-5 text-gray-800" />
                            <span className="text-lg text-gray-800">Volgende gebed is over {nextPrayer.timeUntil}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
} 