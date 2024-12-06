import { FaPlay, FaCalendarAlt, FaClock } from 'react-icons/fa';
import Link from 'next/link';

export default function LiveSection() {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Live Stream Preview */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden aspect-video relative shadow-lg">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <div className="bg-crown/90 backdrop-blur-sm text-white px-8 py-6 rounded-xl">
                                <div className="flex items-center justify-center mb-4">
                                    <FaPlay className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-bold text-xl mb-2">Volgende uitzending</h3>
                                <div className="flex items-center justify-center gap-4 text-white/90">
                                    <div className="flex items-center gap-2">
                                        <FaCalendarAlt className="w-4 h-4" />
                                        <span>Vrijdag</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaClock className="w-4 h-4" />
                                        <span>19:30</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Schedule & Info */}
                <div>
                    <div className="space-y-6">
                        {/* Upcoming Streams */}
                        <div className="space-y-4">
                            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-800 mb-1">
                                            Vrijdagpreek
                                        </h4>
                                        <div className="flex items-center gap-4 text-gray-500">
                                            <div className="flex items-center gap-2">
                                                <FaCalendarAlt className="w-4 h-4" />
                                                <span>Vrijdag 19:30</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="bg-crown/10 text-crown text-xs px-3 py-1 rounded-full font-medium">
                                        Wekelijks
                                    </span>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-800 mb-1">
                                            Ramadan Lezing
                                        </h4>
                                        <div className="flex items-center gap-4 text-gray-500">
                                            <div className="flex items-center gap-2">
                                                <FaCalendarAlt className="w-4 h-4" />
                                                <span>Zaterdag 21:00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="bg-boy/10 text-boy text-xs px-3 py-1 rounded-full font-medium">
                                        Speciaal
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Archive Link */}
                        <Link
                            href="/archief"
                            className="inline-flex items-center justify-center bg-crown/90 hover:bg-crown text-white px-6 py-3 rounded-lg font-semibold transition-colors uppercase tracking-wide text-sm w-full"
                        >
                            Bekijk eerdere uitzendingen
                            <svg
                                className="w-5 h-5 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
} 