'use client';

import { useState, useEffect, useCallback } from 'react';
import { WiSunrise, WiDaySunny, WiSunset, WiMoonrise, WiNightAltCloudy } from 'react-icons/wi';
import { getPrayerTimes } from '@/lib/prayer-times';

type Prayer = {
    name: string;
    arabicName: string;
    time: string;
    isNext: boolean;
};

export default function PrayerTimes() {
    const [prayerTimes, setPrayerTimes] = useState<Prayer[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPrayerTimes = useCallback(async () => {
        try {
            setError(null);
            const times = await getPrayerTimes();
            
            // Calculate next prayer
            const now = new Date();
            const currentTime = now.getHours() * 60 + now.getMinutes();
            
            const prayers = [
                { name: 'Fajr', time: times.fajr },
                { name: 'Dhuhr', time: times.dhuhr },
                { name: 'Asr', time: times.asr },
                { name: 'Maghrib', time: times.maghrib },
                { name: 'Isha', time: times.isha }
            ];
            
            const prayerTimes = prayers.map(p => {
                const [hours, minutes] = p.time.split(':').map(Number);
                const prayerMinutes = hours * 60 + minutes;
                return { ...p, minutes: prayerMinutes };
            });
            
            let nextPrayer = prayerTimes[0].name.toLowerCase();
            for (let i = 0; i < prayerTimes.length; i++) {
                if (prayerTimes[i].minutes > currentTime) {
                    nextPrayer = prayerTimes[i].name.toLowerCase();
                    break;
                }
            }

            const formattedPrayers: Prayer[] = [
                { name: 'Fajr', arabicName: 'الفجر', time: times.fajr, isNext: nextPrayer === 'fajr' },
                { name: 'Dhuhr', arabicName: 'الظهر', time: times.dhuhr, isNext: nextPrayer === 'dhuhr' },
                { name: 'Asr', arabicName: 'العصر', time: times.asr, isNext: nextPrayer === 'asr' },
                { name: 'Maghrib', arabicName: 'المغرب', time: times.maghrib, isNext: nextPrayer === 'maghrib' },
                { name: 'Isha', arabicName: 'العشاء', time: times.isha, isNext: nextPrayer === 'isha' }
            ];

            setPrayerTimes(formattedPrayers);
            setLoading(false);
        } catch (err) {
            setError('Er is een fout opgetreden bij het ophalen van de gebedstijden. Probeer het later opnieuw.');
            setLoading(false);
            console.error('Error fetching prayer times:', err);
        }
    }, []);

    useEffect(() => {
        fetchPrayerTimes();
        
        // Update every minute
        const interval = setInterval(() => {
            fetchPrayerTimes();
        }, 60000);

        return () => clearInterval(interval);
    }, [fetchPrayerTimes]);

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
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="bg-white rounded-xl p-8 animate-pulse">
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-gray-200 rounded-full mb-6" />
                                <div className="h-6 w-24 bg-gray-200 rounded mb-2" />
                                <div className="h-4 w-16 bg-gray-200 rounded mb-4" />
                                <div className="h-8 w-20 bg-gray-200 rounded" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-6xl mx-auto text-center py-12">
                <p className="text-red-600">{error}</p>
                <button 
                    onClick={fetchPrayerTimes}
                    className="mt-4 px-4 py-2 bg-crown text-white rounded-lg hover:bg-opacity-90 transition-colors"
                >
                    Probeer opnieuw
                </button>
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
        </div>
    );
} 