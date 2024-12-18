import { format } from 'date-fns';

export interface PrayerTimes {
    fajr: string;
    sunrise: string;
    dhuhr: string;
    asr: string;
    maghrib: string;
    isha: string;
    date: string;
}

export async function getPrayerTimes(date?: Date): Promise<PrayerTimes> {
    const targetDate = date || new Date();
    const formattedDate = format(targetDate, 'dd-MM-yyyy');

    try {
        const response = await fetch('/api/prayer-times');

        if (!response.ok) {
            throw new Error('Failed to fetch prayer times');
        }

        const data = await response.json();
        const timings = data.data.timings;

        return {
            fajr: timings.Fajr,
            sunrise: timings.Sunrise,
            dhuhr: timings.Dhuhr,
            asr: timings.Asr,
            maghrib: timings.Maghrib,
            isha: timings.Isha,
            date: formattedDate,
        };
    } catch (error) {
        console.error('Error fetching prayer times:', error);
        throw error;
    }
} 