import { prisma } from '@/lib/prisma';
import ActivitiesContent from '@/components/activiteiten/activities-content';
import { Event } from '@/types';

export const revalidate = 60; // revalidate every minute

async function getEvents() {
    const events = await prisma.event.findMany({
        orderBy: {
            start: 'asc'
        }
    });

    // Convert dates from strings to Date objects and assert the audience type
    return events.map(event => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
        audience: event.audience as 'man' | 'vrouw' | 'gemengd'
    })) as Event[];
}

export default async function ActivitiesPage() {
    const events = await getEvents();
    return <ActivitiesContent events={events} />;
} 