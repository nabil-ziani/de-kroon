'use client';

import { FaPlay, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

export default function LiveSection() {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-stretch">
                {/* Live Stream Preview */}
                <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden relative shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    <div className="h-full flex items-center justify-center p-6 md:p-12 min-h-[300px] md:min-h-[400px]">
                        <div className="text-center relative z-10">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                                <FaYoutube className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Live uitzendingen</h3>
                            <p className="text-base md:text-lg text-white/90">
                                Binnenkort kunt u hier onze diensten en lezingen live volgen.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Info Section */}
                <div className="space-y-4 md:space-y-6">
                    {/* Info Card */}
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                        <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">
                            Live streaming
                        </h4>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            We werken momenteel aan de implementatie van live streaming.
                            Binnenkort kunt u hier onze diensten en lezingen live volgen vanuit
                            het comfort van uw eigen huis.
                        </p>
                    </div>

                    {/* Archive Link */}
                    {/*
                    <Link
                        href="/archief"
                        className="block bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                                    Bekijk eerdere uitzendingen
                                </h4>
                                <p className="text-sm md:text-base text-gray-600">
                                    Vrijdagpreken en lezingen terugkijken
                                </p>
                            </div>
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-crown/10 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                                <FaPlay className="w-4 h-4 md:w-5 md:h-5 text-crown ml-0.5" />
                            </div>
                        </div>
                    </Link>
                    */}
                </div>
            </div>
        </div>
    );
}