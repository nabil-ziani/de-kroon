'use client';

import React from 'react';
import Link from 'next/link';
import { FaArchive, FaPlay, FaExpand, FaCompress } from 'react-icons/fa';

export default function LivePage() {
    const [isFullscreen, setIsFullscreen] = React.useState(false);
    const videoRef = React.useRef<HTMLDivElement>(null);

    const toggleFullscreen = async () => {
        if (!videoRef.current) return;

        if (!isFullscreen) {
            try {
                await videoRef.current.requestFullscreen();
                setIsFullscreen(true);
            } catch (err) {
                console.error('Error attempting to enable fullscreen:', err);
            }
        } else {
            try {
                await document.exitFullscreen();
                setIsFullscreen(false);
            } catch (err) {
                console.error('Error attempting to exit fullscreen:', err);
            }
        }
    };

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-boy">
                    <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[radial-gradient(at_top_right,_#1dbffe_0%,_transparent_50%)]" />
                </div>
                <div className="absolute -bottom-1 left-0 right-0">
                    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="white" d="M0 48.5129L60 54.0129C120 59.5129 240 70.5129 360 75.5129C480 80.5129 600 80.0129 720 70.0129C840 59.5129 960 37.5129 1080 32.0129C1200 27.0129 1320 37.5129 1380 43.0129L1440 48.5129V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V48.5129Z" />
                    </svg>
                </div>
                <div className="relative z-10 container mx-auto px-4 pt-12 md:pt-24">
                    <div className="max-w-4xl animate-slide-up">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Live uitzendingen
                        </h1>
                    </div>
                </div>
            </section>

            {/* Live Content Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Title */}
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="text-5xl font-bold text-gray-800 mb-6">
                                Volg ons live
                            </h2>
                            <p className="text-xl text-gray-600">
                                Volg onze live uitzendingen en bekijk eerdere opnames in het archief.
                                Mis nooit meer een belangrijke lezing of evenement.
                            </p>
                        </div>

                        {/* Bento Grid Layout */}
                        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                            {/* Main Live Stream */}
                            <div className="md:col-span-2 rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-100">
                                <div
                                    ref={videoRef}
                                    className={`relative aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 ${isFullscreen ? 'fixed inset-0 z-50 h-screen w-screen' : ''
                                        }`}
                                >
                                    {/* Placeholder content */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80">
                                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                                            <FaPlay className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-medium mb-2">Geen live uitzending</h3>
                                        <p className="text-sm opacity-80">De volgende uitzending start vrijdag om 13:30</p>
                                    </div>

                                    {/* Fullscreen button */}
                                    <button
                                        onClick={toggleFullscreen}
                                        className="absolute top-4 right-4 p-3 rounded-xl bg-black/20 hover:bg-black/30 transition-colors"
                                    >
                                        {isFullscreen ? (
                                            <FaCompress className="w-5 h-5 text-white" />
                                        ) : (
                                            <FaExpand className="w-5 h-5 text-white" />
                                        )}
                                    </button>
                                </div>
                                {!isFullscreen && (
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <span className="flex h-3 w-3">
                                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-300"></span>
                                                </span>
                                                <span className="font-medium text-gray-400">Offline</span>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Vrijdagpreek
                                        </h3>
                                        <p className="text-gray-600">
                                            De live uitzending start automatisch wanneer we online gaan.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Archive Card */}
                            <Link href="/archief" className="group">
                                <div className="h-full rounded-3xl bg-gradient-to-br from-crown/5 to-crown/10 border border-crown/10 p-8 
                                            transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1">
                                    <div className="h-full flex flex-col">
                                        <div className="flex-1">
                                            <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-crown to-crown/80 
                                                        flex items-center justify-center transform -rotate-6 
                                                        transition-transform group-hover:rotate-0">
                                                <FaArchive className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                                Bekijk het archief
                                            </h3>
                                            <p className="text-gray-600 mb-8">
                                                Toegang tot alle eerdere uitzendingen, lezingen en evenementen.
                                                Nooit meer een belangrijke uitzending missen.
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center gap-2 text-crown font-medium">
                                            Ga naar archief
                                            <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 