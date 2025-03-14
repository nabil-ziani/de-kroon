'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
import { FaTimes, FaLink } from 'react-icons/fa';
import Calendar from '@/components/activiteiten/calendar';
import { Event } from '@/types';
import QRCode from 'react-qr-code';
import ReactMarkdown from 'react-markdown';

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

                            <div className="grid gap-4">
                                <div>
                                    <div className="text-sm text-gray-500 mb-1">Locatie</div>
                                    <div className="prose prose-md text-gray-900 max-w-none">{event.location}</div>
                                </div>

                                <div>
                                    <div className="text-sm text-gray-500 mb-1">Voor wie?</div>
                                    <div className="text-gray-900 prose prose-md max-w-none">
                                        {event.audience === 'man' ? 'Alleen broeders' :
                                            event.audience === 'vrouw' ? 'Alleen zusters' :
                                                'Iedereen welkom'}
                                    </div>
                                </div>

                                {event.description && (
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">Beschrijving</div>
                                        <div className="prose prose-md text-gray-900 max-w-none">
                                            <ReactMarkdown>{event.description}</ReactMarkdown>
                                        </div>
                                    </div>
                                )}

                                {event.url && (
                                    <div>
                                        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 md:p-6">
                                            <div className="grid md:grid-cols-2 items-center">
                                                <div className="relative group mx-auto">
                                                    {/* QR Container */}
                                                    <div className="relative bg-white rounded-xl p-3 ring-1 ring-gray-200/50 w-fit">
                                                        <QRCode
                                                            value={event.url}
                                                            className="w-[160px] h-[160px]"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-4 text-center md:text-left">
                                                    <h4 className="font-medium text-gray-900">Inschrijven</h4>
                                                    <p className="text-gray-600 text-sm">
                                                        Scan de QR-code met je telefoon of gebruik onderstaande link om je in te schrijven.
                                                    </p>
                                                    <a
                                                        href={event.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-crown hover:text-crown/80 transition-all duration-300 group/link w-fit mx-auto md:mx-0"
                                                    >
                                                        <FaLink className="w-4 h-4 transition-transform duration-300 group-hover/link:rotate-[-12deg]" />
                                                        <span className="underline underline-offset-4">Bezoek link</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
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
                                            <div className="prose prose-sm prose-gray max-w-none mb-4">
                                                <ReactMarkdown>{evt.description}</ReactMarkdown>
                                            </div>
                                        )}

                                        {evt.url && (
                                            <div className="mt-4 pt-4 border-t border-gray-200">
                                                <div className="grid md:grid-cols-2 gap-6 items-start">
                                                    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                                                        <QRCode
                                                            value={evt.url}
                                                            className="w-full h-auto max-w-[200px] mx-auto"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col gap-4">
                                                        <p className="text-gray-600 text-sm">
                                                            Scan de QR-code of gebruik onderstaande link:
                                                        </p>
                                                        <a
                                                            href={evt.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 text-crown hover:text-crown/80 transition-colors"
                                                        >
                                                            <FaLink className="w-4 h-4" />
                                                            <span className="underline">Open link</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
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

interface ActivitiesContentProps {
    events: Event[];
}

export default function ActivitiesContent({ events }: ActivitiesContentProps) {
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