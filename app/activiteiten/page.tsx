'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
import { FaMars, FaVenus, FaUsers, FaTimes, FaMapMarkerAlt, FaUserFriends, FaClock } from 'react-icons/fa';
import Calendar from '../components/Calendar/Calendar';
import { motion, AnimatePresence } from 'framer-motion';

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

// Event Modal Component
function EventModal({ event, onClose }: { event: Event; onClose: () => void }) {
    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onClose}>
            <motion.div
                className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl transform transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">{event.title}</h3>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100/80 rounded-xl transition-colors">
                        <FaTimes className="w-5 h-5 text-gray-400" />
                    </button>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-3 text-gray-600">
                        <FaClock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <div>
                            <div className="text-sm font-medium text-gray-500">Datum & Tijd</div>
                            <div className="text-base text-gray-800">
                                {format(event.start, 'EEEE d MMMM', { locale: nl })}
                                <br />
                                {format(event.start, 'HH:mm', { locale: nl })} - {format(event.end, 'HH:mm', { locale: nl })} uur
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 text-gray-600">
                        <FaMapMarkerAlt className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <div>
                            <div className="text-sm font-medium text-gray-500">Locatie</div>
                            <div className="text-base text-gray-800">{event.location}</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 text-gray-600">
                        <FaUserFriends className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <div>
                            <div className="text-sm font-medium text-gray-500">Voor wie?</div>
                            <div className="text-base text-gray-800 flex items-center gap-2">
                                {event.audience === 'man' && <FaMars className="text-boy" />}
                                {event.audience === 'vrouw' && <FaVenus className="text-girl" />}
                                {event.audience === 'gemengd' && <FaUsers className="text-crown" />}
                                {event.audience === 'man' ? 'Alleen broeders' :
                                    event.audience === 'vrouw' ? 'Alleen zusters' :
                                        'Iedereen welkom'}
                            </div>
                        </div>
                    </div>

                    <div className="text-gray-600 leading-relaxed">
                        {event.description}
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col-reverse md:flex-row gap-3 md:justify-end">
                    <button
                        className="w-full md:w-auto px-6 py-3 rounded-xl text-sm font-medium bg-gray-100/80 
                                 text-gray-600 hover:bg-gray-200/80 transition-all duration-300
                                 hover:shadow-md active:transform active:scale-95"
                        onClick={onClose}
                    >
                        Sluiten
                    </button>
                    <button
                        className="w-full md:w-auto px-6 py-3 rounded-xl text-sm font-medium bg-gradient-to-r 
                                 from-crown to-crown/90 text-white transition-all duration-300
                                 hover:shadow-md active:transform active:scale-95"
                    >
                        Inschrijven
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

export default function ActiviteitenPage() {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-boy">
                    <div className="absolute inset-0 opacity-30 mix-blend-soft-light 
                                  bg-[radial-gradient(at_top_right,_#1dbffe_0%,_transparent_50%)]" />
                </div>
                <div className="absolute -bottom-1 left-0 right-0">
                    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="white" d="M0 48.5129L60 54.0129C120 59.5129 240 70.5129 360 75.5129C480 80.5129 600 80.0129 720 70.0129C840 59.5129 960 37.5129 1080 32.0129C1200 27.0129 1320 37.5129 1380 43.0129L1440 48.5129V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V48.5129Z" />
                    </svg>
                </div>
                <div className="relative z-10 container mx-auto px-4 pt-12 md:pt-24">
                    <motion.div
                        className="max-w-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Activiteiten & Onderwijs
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                            Ontdek onze diverse activiteiten en onderwijsprogramma's.
                            Van Arabische lessen tot sportactiviteiten, er is voor ieder wat wils.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Calendar Section */}
            <section className="py-12 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Legend */}
                        <div className="mb-12 flex flex-wrap gap-y-6 gap-x-8">
                            <div className="flex flex-wrap items-center gap-4 md:gap-6">
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
                            <div className="flex flex-wrap items-center gap-4 md:gap-6">
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
                        <motion.div
                            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-4 md:p-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Calendar
                                events={events}
                                onEventClick={setSelectedEvent}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Event Modal */}
            <AnimatePresence>
                {selectedEvent && (
                    <EventModal
                        event={selectedEvent}
                        onClose={() => setSelectedEvent(null)}
                    />
                )}
            </AnimatePresence>
        </main>
    );
} 