'use client';

import { Calendar, dateFnsLocalizer, View } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import { nl } from 'date-fns/locale';
import { useState } from 'react';
import { FaCalendarAlt, FaTimes, FaMars, FaVenus, FaUsers, FaChevronLeft, FaChevronRight, FaCalendarDay, FaCalendarWeek, FaRegClock } from 'react-icons/fa';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Types
interface Event {
    id: string;
    title: string;
    start: Date;
    end: Date;
    description?: string;
    category: 'onderwijs' | 'activiteit' | 'special';
    audience: 'man' | 'vrouw' | 'gemengd';
    location?: string;
    maxParticipants?: number;
}

// Localisatie setup
const locales = {
    'nl-NL': nl,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay: (date: Date) => date.getDay(),
    locales,
});

// Voorbeeld events
const events: Event[] = [
    {
        id: '1',
        title: 'Arabische Les - Beginners',
        start: new Date(2024, 0, 15, 9, 0),
        end: new Date(2024, 0, 15, 12, 0),
        category: 'onderwijs',
        audience: 'gemengd',
        location: 'Lokaal 1.01',
        description: 'Arabische les voor beginners. Leer de basis van het Arabisch schrift en uitspraak.',
        maxParticipants: 15
    },
    {
        id: '2',
        title: 'Zusters Bijeenkomst',
        start: new Date(2024, 0, 20, 14, 0),
        end: new Date(2024, 0, 20, 17, 0),
        category: 'activiteit',
        audience: 'vrouw',
        location: 'Grote zaal',
        description: 'Speciale bijeenkomst voor zusters met diverse workshops en lezingen.',
        maxParticipants: 30
    },
    {
        id: '3',
        title: 'Sport & Fitness',
        start: new Date(2024, 0, 18, 18, 0),
        end: new Date(2024, 0, 18, 20, 0),
        category: 'activiteit',
        audience: 'man',
        location: 'Sportzaal',
        description: 'Sportactiviteiten en fitness training voor broeders.',
        maxParticipants: 20
    },
    {
        id: '4',
        title: 'Islamitische Studies',
        start: new Date(2024, 0, 21, 10, 0),
        end: new Date(2024, 0, 21, 12, 0),
        category: 'onderwijs',
        audience: 'gemengd',
        location: 'Lokaal 2.03',
        description: 'Verdiepende les over islamitische studies en fiqh.',
        maxParticipants: 25
    }
];

const eventStyleGetter = (event: Event) => {
    let backgroundColor = '#4F46E5';
    let borderColor = 'transparent';
    
    switch (event.category) {
        case 'onderwijs':
            backgroundColor = '#3B82F6';
            break;
        case 'activiteit':
            backgroundColor = '#EC4899';
            break;
        case 'special':
            backgroundColor = '#F59E0B';
            break;
    }

    // Add a subtle border for different audiences
    switch (event.audience) {
        case 'man':
            borderColor = '#2563EB';
            break;
        case 'vrouw':
            borderColor = '#DB2777';
            break;
    }

    return {
        style: {
            backgroundColor,
            borderLeft: `4px solid ${borderColor}`,
            borderRadius: '8px',
            opacity: 0.8,
            color: 'white',
            padding: '4px 8px',
            fontWeight: 500,
        }
    };
};

// Custom Toolbar Component
function CustomToolbar(toolbar: any) {
    const goToBack = () => {
        toolbar.onNavigate('PREV');
    };

    const goToNext = () => {
        toolbar.onNavigate('NEXT');
    };

    const goToCurrent = () => {
        toolbar.onNavigate('TODAY');
    };

    const viewButtons = [
        { label: 'Maand', view: 'month', icon: FaCalendarAlt },
        { label: 'Week', view: 'week', icon: FaCalendarWeek },
        { label: 'Dag', view: 'day', icon: FaCalendarDay },
    ];

    return (
        <div className="flex flex-col gap-8">
            {/* Current Month/Week/Day Display */}
            <div className="flex items-baseline gap-4">
                <h2 className="text-4xl font-bold text-gray-800">
                    {toolbar.label}
                </h2>
                <div className="flex items-center gap-3">
                    <button
                        onClick={goToBack}
                        className="p-2 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                        <FaChevronLeft className="w-4 h-4 text-gray-400" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="p-2 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                        <FaChevronRight className="w-4 h-4 text-gray-400" />
                    </button>
                </div>
            </div>

            <div className="flex justify-between items-center">
                {/* View Switcher */}
                <div className="flex gap-2">
                    {viewButtons.map(({ label, view, icon: Icon }) => (
                        <button
                            key={view}
                            onClick={() => toolbar.onView(view)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-2xl transition-all duration-300 ${
                                toolbar.view === view 
                                    ? 'bg-gradient-to-r from-crown to-crown/90 text-white shadow-lg'
                                    : 'hover:bg-gray-50 text-gray-600'
                            }`}
                        >
                            <Icon className="w-4 h-4" />
                            <span>{label}</span>
                        </button>
                    ))}
                </div>

                <button
                    onClick={goToCurrent}
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-gray-200 hover:bg-gray-50 transition-all duration-300 text-gray-600"
                >
                    <FaRegClock className="w-4 h-4" />
                    <span>Vandaag</span>
                </button>
            </div>
        </div>
    );
}

export default function ActiviteitenPage() {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [view, setView] = useState<View>('month');

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
                        <h1 className="text-6xl font-bold text-white">
                            Activiteiten
                        </h1>
                    </div>
                </div>
            </section>

            {/* Calendar Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Legend */}
                        <div className="flex flex-wrap gap-8 mb-12">
                            <div className="space-y-3">
                                <h3 className="font-medium text-gray-900">Type Activiteit</h3>
                                <div className="flex gap-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-boy"></div>
                                        <span className="text-gray-600">Onderwijs</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-girl"></div>
                                        <span className="text-gray-600">Activiteiten</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-crown"></div>
                                        <span className="text-gray-600">Speciaal</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h3 className="font-medium text-gray-900">Voor Wie</h3>
                                <div className="flex gap-6">
                                    <div className="flex items-center gap-2">
                                        <FaMars className="text-boy" />
                                        <span className="text-gray-600">Broeders</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaVenus className="text-girl" />
                                        <span className="text-gray-600">Zusters</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaUsers className="text-gray-400" />
                                        <span className="text-gray-600">Iedereen</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Calendar */}
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100">
                            <Calendar
                                localizer={localizer}
                                events={events}
                                startAccessor="start"
                                endAccessor="end"
                                style={{ height: 800 }}
                                eventPropGetter={eventStyleGetter}
                                onSelectEvent={(event) => setSelectedEvent(event as Event)}
                                view={view}
                                onView={(newView) => setView(newView)}
                                messages={{
                                    week: 'Week',
                                    work_week: 'Werkweek',
                                    day: 'Dag',
                                    month: 'Maand',
                                    previous: '',
                                    next: '',
                                    today: 'Vandaag',
                                    agenda: 'Agenda',
                                }}
                                className="custom-calendar"
                                components={{
                                    toolbar: CustomToolbar,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Modal */}
            {selectedEvent && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                                    <FaCalendarAlt className="w-5 h-5 text-gray-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800">{selectedEvent.title}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        {selectedEvent.audience === 'man' && <FaMars className="text-boy" />}
                                        {selectedEvent.audience === 'vrouw' && <FaVenus className="text-girl" />}
                                        {selectedEvent.audience === 'gemengd' && <FaUsers className="text-gray-400" />}
                                        <span className="text-sm text-gray-500">
                                            {selectedEvent.audience === 'man' ? 'Alleen broeders' : 
                                             selectedEvent.audience === 'vrouw' ? 'Alleen zusters' : 
                                             'Voor iedereen'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button 
                                onClick={() => setSelectedEvent(null)}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <FaTimes className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500">Datum & Tijd</p>
                                <p className="text-gray-700">
                                    {format(selectedEvent.start, 'EEEE d MMMM yyyy', { locale: nl })}
                                </p>
                                <p className="text-gray-700">
                                    {format(selectedEvent.start, 'HH:mm', { locale: nl })} - {format(selectedEvent.end, 'HH:mm', { locale: nl })}
                                </p>
                            </div>
                            {selectedEvent.location && (
                                <div>
                                    <p className="text-sm text-gray-500">Locatie</p>
                                    <p className="text-gray-700">{selectedEvent.location}</p>
                                </div>
                            )}
                            {selectedEvent.description && (
                                <div>
                                    <p className="text-sm text-gray-500">Beschrijving</p>
                                    <p className="text-gray-700">{selectedEvent.description}</p>
                                </div>
                            )}
                            {selectedEvent.maxParticipants && (
                                <div>
                                    <p className="text-sm text-gray-500">Maximaal aantal deelnemers</p>
                                    <p className="text-gray-700">{selectedEvent.maxParticipants} personen</p>
                                </div>
                            )}
                            <div className="pt-4">
                                <button className="w-full bg-crown text-white px-6 py-3 rounded-xl font-medium hover:bg-crown/90 transition-colors">
                                    Inschrijven
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
} 