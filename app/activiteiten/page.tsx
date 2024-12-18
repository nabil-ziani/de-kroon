'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
import { FaTimes } from 'react-icons/fa';
import Calendar from '@/components/activiteiten/calendar';

type Event = {
    id: string;
    title: string;
    start: Date;
    end: Date;
    audience: 'man' | 'vrouw' | 'gemengd';
    location: string;
    description: string;
    maxParticipants: number;
};

// Voorbeeld events voor de huidige maand
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

const events: Event[] = [
    {
        id: '1',
        title: 'Arabische Les - Beginners',
        start: new Date(currentYear, currentMonth, 15, 9, 0),
        end: new Date(currentYear, currentMonth, 15, 12, 0),
        audience: 'gemengd',
        location: 'Lokaal 1.01',
        description: 'Arabische les voor beginners. Leer de basis van het Arabisch schrift en uitspraak.',
        maxParticipants: 15
    },
    {
        id: '2',
        title: 'Zusters Bijeenkomst',
        start: new Date(currentYear, currentMonth, 15, 9, 0),
        end: new Date(currentYear, currentMonth, 20, 17, 0),
        audience: 'vrouw',
        location: 'Grote zaal',
        description: 'Speciale bijeenkomst voor zusters met diverse workshops en lezingen.',
        maxParticipants: 30
    },
    {
        id: '3',
        title: 'Islamitische Studies',
        start: new Date(currentYear, currentMonth, 15, 9, 0),
        end: new Date(currentYear, currentMonth, 22, 20, 30),
        audience: 'gemengd',
        location: 'Lokaal 2.03',
        description: 'Verdiepende les over islamitische studies en fiqh.',
        maxParticipants: 25
    },
    {
        id: '4',
        title: 'Sport & Fitness (Broeders)',
        start: new Date(currentYear, currentMonth, 25, 19, 0),
        end: new Date(currentYear, currentMonth, 25, 21, 0),
        audience: 'man',
        location: 'Sportzaal',
        description: 'Sportactiviteiten en fitness training voor broeders.',
        maxParticipants: 20
    },
    {
        id: '5',
        title: 'Koran Recitatie',
        start: new Date(currentYear, currentMonth, 27, 10, 0),
        end: new Date(currentYear, currentMonth, 27, 12, 0),
        audience: 'gemengd',
        location: 'Gebedsruimte',
        description: 'Leer de juiste uitspraak en regels van Koran recitatie.',
        maxParticipants: 15
    },
    {
        id: '6',
        title: 'Iftar Bijeenkomst',
        start: new Date(currentYear, currentMonth + 2, 15, 18, 0),
        end: new Date(currentYear, currentMonth + 2, 15, 21, 0),
        audience: 'gemengd',
        location: 'Grote zaal',
        description: 'Gezamenlijke iftar tijdens Ramadan met een speciale lezing.',
        maxParticipants: 100
    }
];

// Event Modal Component
function EventModal({ event, onClose, allEvents }: { event: Event; onClose: () => void; allEvents?: Event[] }) {
    const sameTimeEvents = allEvents?.filter(e =>
        format(e.start, 'yyyy-MM-dd') === format(event.start, 'yyyy-MM-dd')
    ) || [event];

    const isSingleEvent = sameTimeEvents.length === 1;

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in overflow-y-auto"
            onClick={onClose}>
            <div
                className={`bg-white rounded-3xl shadow-2xl animate-scale-in overflow-hidden max-h-[90vh] overflow-y-auto
                    ${isSingleEvent ? 'max-w-2xl' : 'max-w-4xl'} w-full my-auto`}
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 z-10">
                    <div className="relative h-32 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center px-6 md:px-12">
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                        >
                            <FaTimes className="w-5 h-5" />
                        </button>

                        <div>
                            <h3 className="text-white/80 text-sm font-medium mb-1">
                                {format(event.start, 'EEEE', { locale: nl })}
                            </h3>
                            <div className="text-2xl md:text-3xl text-white font-bold">
                                {format(event.start, 'd MMMM yyyy', { locale: nl })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 md:p-12">
                    {isSingleEvent ? (
                        // Single Event Layout
                        <div>
                            <div className="mb-8">
                                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{event.title}</h4>
                                <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-lg">
                                    {format(event.start, 'HH:mm', { locale: nl })} - {format(event.end, 'HH:mm', { locale: nl })} uur
                                </div>
                            </div>

                            <div className="grid gap-8">
                                <div>
                                    <div className="text-sm text-gray-400 mb-1">Locatie</div>
                                    <div className="text-gray-900">{event.location}</div>
                                </div>

                                <div>
                                    <div className="text-sm text-gray-400 mb-1">Voor wie?</div>
                                    <div className="text-gray-900">
                                        {event.audience === 'man' ? 'Alleen broeders' :
                                            event.audience === 'vrouw' ? 'Alleen zusters' :
                                                'Iedereen welkom'}
                                    </div>
                                </div>

                                {event.description && (
                                    <div>
                                        <div className="text-sm text-gray-400 mb-1">Beschrijving</div>
                                        <p className="text-gray-600 leading-relaxed">{event.description}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        // Multiple Events Layout
                        <div>
                            <div className="mb-8">
                                <h4 className="text-xl font-medium text-gray-400">
                                    {sameTimeEvents.length} activiteiten op deze dag
                                </h4>
                            </div>

                            <div className="grid gap-6">
                                {sameTimeEvents.map((evt) => (
                                    <div key={evt.id} className="p-6 rounded-2xl bg-gray-50">
                                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                                            <div>
                                                <h5 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{evt.title}</h5>
                                                <div className="text-sm text-gray-500">
                                                    {format(evt.start, 'HH:mm', { locale: nl })} - {format(evt.end, 'HH:mm', { locale: nl })} uur
                                                    <span className="mx-2">•</span>
                                                    {evt.location}
                                                </div>
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {evt.audience === 'man' ? 'Alleen broeders' :
                                                    evt.audience === 'vrouw' ? 'Alleen zusters' :
                                                        'Iedereen welkom'}
                                            </div>
                                        </div>

                                        {evt.description && (
                                            <p className="text-gray-600 text-sm leading-relaxed">{evt.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// Event List Component for Mobile
function EventList({ events, onEventClick }: { events: Event[]; onEventClick: (event: Event) => void }) {
    // Group events by month
    const groupedEvents = events.reduce((groups: { [key: string]: Event[] }, event) => {
        const monthKey = format(event.start, 'MMMM yyyy', { locale: nl });
        if (!groups[monthKey]) {
            groups[monthKey] = [];
        }
        groups[monthKey].push(event);
        return groups;
    }, {});

    return (
        <div className="space-y-8">
            {Object.entries(groupedEvents).map(([month, monthEvents]) => (
                <div key={month}>
                    <h3 className="text-lg font-semibold text-gray-400 mb-4 px-4">
                        {month.charAt(0).toUpperCase() + month.slice(1)}
                    </h3>
                    <div className="space-y-3">
                        {monthEvents.map((event) => (
                            <button
                                key={event.id}
                                onClick={() => onEventClick(event)}
                                className="w-full p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-left"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <h4 className="font-medium text-gray-900 mb-1">{event.title}</h4>
                                        <div className="text-sm text-gray-500">
                                            {format(event.start, 'EEEE d MMMM', { locale: nl })}
                                            <span className="mx-2">•</span>
                                            {format(event.start, 'HH:mm', { locale: nl })} uur
                                        </div>
                                    </div>
                                    <div className={`
                                        px-2 py-1 rounded-lg text-xs font-medium
                                        ${event.audience === 'man' ? 'bg-boy/10 text-boy' :
                                            event.audience === 'vrouw' ? 'bg-girl/10 text-girl' :
                                                'bg-crown/10 text-crown'}
                                    `}>
                                        {event.audience === 'man' ? 'Broeders' :
                                            event.audience === 'vrouw' ? 'Zusters' :
                                                'Iedereen'}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function ActiviteitenPage() {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-6 md:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-boy">
                    <div className="absolute inset-0 opacity-30 mix-blend-soft-light 
                                bg-[radial-gradient(at_top_right,_#1dbffe_0%,_transparent_50%)]" />
                </div>
                <div className="absolute -bottom-1 left-0 right-0">
                    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="white" d="M0 48.5129L60 54.0129C120 59.5129 240 70.5129 360 75.5129C480 80.5129 600 80.0129 720 70.0129C840 59.5129 960 37.5129 1080 32.0129C1200 27.0129 1320 37.5129 1380 43.0129L1440 48.5129V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V48.5129Z" />
                    </svg>
                </div>
                <div className="relative z-10 container mx-auto px-4 pt-24">
                    <div className="max-w-4xl animate-slide-up">
                        <h1 className="text-center md:text-left text-4xl md:text-6xl font-bold text-white mb-6">
                            Activiteiten
                        </h1>
                    </div>
                </div>
            </section>

            {/* Calendar/List Section */}
            <section className="py-12 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Title */}
                        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2 md:mb-4">
                                Bekijk onze agenda
                            </h2>
                            <p className="text-md sm:text-lg text-gray-600">
                                Ontdek onze diverse activiteiten voor het komende jaar.
                            </p>
                        </div>

                        {/* Legend */}
                        <div className="mb-8 md:mb-12 flex flex-wrap gap-4 md:gap-8 justify-center">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-boy"></div>
                                <span className="text-sm text-gray-600">Broeders</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-girl"></div>
                                <span className="text-sm text-gray-600">Zusters</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-crown"></div>
                                <span className="text-sm text-gray-600">Iedereen welkom</span>
                            </div>
                        </div>

                        {/* Calendar (Desktop) */}
                        <div className="hidden md:block">
                            <Calendar events={events} onEventClick={setSelectedEvent} />
                        </div>

                        {/* Event List (Mobile) */}
                        <div className="md:hidden">
                            <EventList events={events} onEventClick={setSelectedEvent} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Modal */}
            {selectedEvent && (
                <EventModal
                    event={selectedEvent}
                    onClose={() => setSelectedEvent(null)}
                    allEvents={events.filter(e =>
                        format(e.start, 'yyyy-MM-dd') === format(selectedEvent.start, 'yyyy-MM-dd')
                    )}
                />
            )}
        </main>
    );
} 