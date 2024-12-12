'use client';

import { Calendar, DateLocalizer } from 'react-big-calendar';
import { dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { nl } from 'date-fns/locale';
import { useState } from 'react';
import { FaCalendarAlt, FaTimes, FaMars, FaVenus, FaUsers, FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaUserFriends, FaClock } from 'react-icons/fa';
import 'react-big-calendar/lib/css/react-big-calendar.css';

type Event = {
    id: string;
    title: string;
    start: Date;
    end: Date;
    category: 'onderwijs' | 'activiteit' | 'special';
    audience: 'man' | 'vrouw' | 'gemengd';
    location: string;
    description: string;
    maxParticipants: number;
};

const locales = {
    'nl': nl,
};

const localizer: DateLocalizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: () => startOfWeek(new Date(), { locale: nl }),
    getDay,
    locales,
});

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
        category: 'onderwijs',
        audience: 'gemengd',
        location: 'Lokaal 1.01',
        description: 'Arabische les voor beginners. Leer de basis van het Arabisch schrift en uitspraak.',
        maxParticipants: 15
    },
    {
        id: '2',
        title: 'Zusters Bijeenkomst',
        start: new Date(currentYear, currentMonth, 20, 14, 0),
        end: new Date(currentYear, currentMonth, 20, 17, 0),
        category: 'activiteit',
        audience: 'vrouw',
        location: 'Grote zaal',
        description: 'Speciale bijeenkomst voor zusters met diverse workshops en lezingen.',
        maxParticipants: 30
    },
    {
        id: '3',
        title: 'Islamitische Studies',
        start: new Date(currentYear, currentMonth, 22, 18, 30),
        end: new Date(currentYear, currentMonth, 22, 20, 30),
        category: 'onderwijs',
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
        category: 'activiteit',
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
        category: 'onderwijs',
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
        category: 'special',
        audience: 'gemengd',
        location: 'Grote zaal',
        description: 'Gezamenlijke iftar tijdens Ramadan met een speciale lezing.',
        maxParticipants: 100
    }
];

// Custom Toolbar Component
function CustomToolbar(toolbar: any) {
    return (
        <div className="flex flex-col items-center gap-8">
            {/* Current Month Display */}
            <h2 className="text-4xl font-bold text-gray-800">
                {format(new Date(toolbar.date), 'MMMM yyyy', { locale: nl })}
            </h2>
            
            {/* Navigation Buttons */}
            <div className="fixed bottom-12 left-1/2 -translate-x-1/2 flex gap-4 bg-white/80 
                          backdrop-blur-md rounded-full px-6 py-3 shadow-lg z-50">
                <button
                    onClick={() => toolbar.onNavigate('PREV')}
                    className="p-2 rounded-xl hover:bg-gray-50/80 transition-colors"
                >
                    <FaChevronLeft className="w-4 h-4 text-gray-400" />
                </button>
                <button
                    onClick={() => toolbar.onNavigate('NEXT')}
                    className="p-2 rounded-xl hover:bg-gray-50/80 transition-colors"
                >
                    <FaChevronRight className="w-4 h-4 text-gray-400" />
                </button>
            </div>
        </div>
    );
}

// Event Modal Component
function EventModal({ event, onClose }: { event: Event; onClose: () => void }) {
    return (
        <div className="event-modal" onClick={onClose}>
            <div className="event-modal-content" onClick={e => e.stopPropagation()}>
                <div className="event-modal-header">
                    <h3 className="event-modal-title">{event.title}</h3>
                    <button onClick={onClose} className="event-modal-close">
                        <FaTimes className="w-5 h-5 text-gray-400" />
                    </button>
                </div>
                
                <div className="event-modal-body">
                    <div className="event-modal-info">
                        <FaClock className="w-5 h-5 text-gray-400" />
                        <div>
                            <div className="event-modal-label">Datum & Tijd</div>
                            <div className="event-modal-value">
                                {format(event.start, 'EEEE d MMMM', { locale: nl })}
                                <br />
                                {format(event.start, 'HH:mm', { locale: nl })} - {format(event.end, 'HH:mm', { locale: nl })} uur
                            </div>
                        </div>
                    </div>

                    <div className="event-modal-info">
                        <FaMapMarkerAlt className="w-5 h-5 text-gray-400" />
                        <div>
                            <div className="event-modal-label">Locatie</div>
                            <div className="event-modal-value">{event.location}</div>
                        </div>
                    </div>

                    <div className="event-modal-info">
                        <FaUserFriends className="w-5 h-5 text-gray-400" />
                        <div>
                            <div className="event-modal-label">Voor wie?</div>
                            <div className="event-modal-value flex items-center gap-2">
                                {event.audience === 'man' && <FaMars className="text-boy" />}
                                {event.audience === 'vrouw' && <FaVenus className="text-girl" />}
                                {event.audience === 'gemengd' && <FaUsers className="text-crown" />}
                                {event.audience === 'man' ? 'Alleen broeders' :
                                 event.audience === 'vrouw' ? 'Alleen zusters' :
                                 'Iedereen welkom'}
                            </div>
                        </div>
                    </div>

                    <div className="event-modal-description">
                        {event.description}
                    </div>
                </div>

                <div className="event-modal-footer">
                    <button 
                        className="event-modal-button event-modal-button-secondary"
                        onClick={onClose}
                    >
                        Sluiten
                    </button>
                    <button className="event-modal-button event-modal-button-primary">
                        Inschrijven
                    </button>
                </div>
            </div>
        </div>
    );
}

const eventStyleGetter = (event: Event) => {
    return {
        className: `event-${event.category}`,
        style: {
            borderLeft: event.audience === 'man' ? '3px solid #2563EB' :
                       event.audience === 'vrouw' ? '3px solid #DB2777' :
                       'none'
        }
    };
};

// Nederlandse vertalingen
const messages = {
    month: 'Maand',
    previous: '',
    next: '',
    today: '',
    agenda: 'Agenda',
    allDay: 'Hele dag',
    date: 'Datum',
    time: 'Tijd',
    event: 'Activiteit',
    noEventsInRange: 'Geen activiteiten in deze periode',
    showMore: (total: number) => `+${total} meer`,
};

// Nederlandse dagen en maanden
const formats = {
    monthHeaderFormat: (date: Date) => format(date, 'MMMM yyyy', { locale: nl }),
    weekdayFormat: (date: Date) => format(date, 'EEEE', { locale: nl }),
    dayFormat: (date: Date) => format(date, 'd', { locale: nl }),
    dayRangeHeaderFormat: ({ start, end }: { start: Date, end: Date }) => 
        `${format(start, 'd MMMM', { locale: nl })} - ${format(end, 'd MMMM', { locale: nl })}`,
};

export default function ActiviteitenPage() {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-crown/5 to-transparent py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl font-bold text-gray-800 mb-6">
                            Activiteiten & Onderwijs
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Ontdek onze diverse activiteiten en onderwijsprogramma's. 
                            Van Arabische lessen tot sportactiviteiten, er is voor ieder wat wils.
                        </p>
                    </div>
                </div>
            </section>

            {/* Calendar Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Legend */}
                        <div className="mb-12 flex flex-wrap gap-8">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-boy"></div>
                                    <span className="text-sm text-gray-600">Onderwijs</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-girl"></div>
                                    <span className="text-sm text-gray-600">Activiteiten</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-crown"></div>
                                    <span className="text-sm text-gray-600">Speciale events</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <FaMars className="text-boy" />
                                    <span className="text-sm text-gray-600">Broeders</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaVenus className="text-girl" />
                                    <span className="text-sm text-gray-600">Zusters</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaUsers className="text-crown" />
                                    <span className="text-sm text-gray-600">Iedereen</span>
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
                                messages={messages}
                                formats={formats}
                                className="custom-calendar"
                                components={{
                                    toolbar: CustomToolbar,
                                }}
                                views={['month']}
                                defaultView="month"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Modal */}
            {selectedEvent && (
                <EventModal 
                    event={selectedEvent} 
                    onClose={() => setSelectedEvent(null)} 
                />
            )}
        </main>
    );
} 