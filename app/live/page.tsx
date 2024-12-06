'use client';

import React, { useState, useRef } from 'react';
import { FaVideo, FaCalendarAlt, FaClock, FaArchive, FaYoutube, FaBookReader, FaArrowRight, FaExpand, FaCompress } from 'react-icons/fa';

export default function LivePage() {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const videoContainerRef = useRef<HTMLDivElement>(null);

    const toggleFullscreen = async () => {
        if (!videoContainerRef.current) return;

        try {
            if (!isFullscreen) {
                if (videoContainerRef.current.requestFullscreen) {
                    await videoContainerRef.current.requestFullscreen();
                } else if ((videoContainerRef.current as any).webkitRequestFullscreen) {
                    await (videoContainerRef.current as any).webkitRequestFullscreen();
                } else if ((videoContainerRef.current as any).msRequestFullscreen) {
                    await (videoContainerRef.current as any).msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    await document.exitFullscreen();
                } else if ((document as any).webkitExitFullscreen) {
                    await (document as any).webkitExitFullscreen();
                } else if ((document as any).msExitFullscreen) {
                    await (document as any).msExitFullscreen();
                }
            }
        } catch (error) {
            console.error('Error toggling fullscreen:', error);
        }
    };

    // Update fullscreen state when browser fullscreen changes
    React.useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(Boolean(
                document.fullscreenElement ||
                (document as any).webkitFullscreenElement ||
                (document as any).msFullscreenElement
            ));
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('msfullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('msfullscreenchange', handleFullscreenChange);
        };
    }, []);

    return (
        <main className="min-h-screen bg-white">
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
                        <h1 className="text-6xl font-bold text-white mb-6">
                            Live Uitzendingen
                        </h1>
                    </div>
                </div>
            </section>

            {/* Bento Grid Layout */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Title Section */}
                        <div className="mb-12">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">Huidige Uitzending</h2>
                            <p className="text-xl text-gray-600">Bekijk onze live uitzendingen of eerdere opnames</p>
                        </div>

                        <div className={`grid grid-cols-1 ${isFullscreen ? '' : 'md:grid-cols-3'} gap-6`}>
                            {/* Live Stream - Large Card */}
                            <div className={`${isFullscreen ? 'col-span-full' : 'md:col-span-2 md:row-span-2'} transition-all duration-300`}>
                                <div className="bg-gradient-to-br from-boy to-boy/70 rounded-3xl overflow-hidden shadow-lg">
                                    {/* Video container with ref */}
                                    <div
                                        ref={videoContainerRef}
                                        className="aspect-video bg-gray-900/50 flex items-center justify-center relative group"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                        <div className="relative z-20 text-center text-white p-8">
                                            <FaYoutube className="w-20 h-20 mx-auto mb-4 text-white/80" />
                                            <h3 className="text-2xl font-bold mb-2">Volgende uitzending</h3>
                                            <p className="text-lg">Vrijdag 13:30 - Vrijdaggebed</p>
                                        </div>
                                        {/* Fullscreen toggle button */}
                                        <button
                                            onClick={toggleFullscreen}
                                            className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 p-3 rounded-lg transition-all duration-300 text-white/80 hover:text-white z-30"
                                        >
                                            {isFullscreen ? <FaCompress size={20} /> : <FaExpand size={20} />}
                                        </button>
                                    </div>

                                    {/* Stream informatie - alleen zichtbaar als niet in fullscreen */}
                                    {!isFullscreen && (
                                        <div className="p-8">
                                            <h2 className="text-2xl font-bold text-white mb-4">Live Stream</h2>
                                            <p className="text-white/90">
                                                De stream start automatisch wanneer de uitzending begint.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Schedule and Archive cards - Only show when not fullscreen */}
                            {!isFullscreen && (
                                <>
                                    {/* Schedule Card */}
                                    <div className="bg-gradient-to-br from-girl to-girl/70 rounded-3xl p-6 relative overflow-hidden group transition-all duration-300 hover:scale-105">
                                        <div className="relative z-20">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                                    <FaCalendarAlt className="w-5 h-5 text-white" />
                                                </div>
                                                <h3 className="text-xl font-bold text-white">Uitzendschema</h3>
                                            </div>
                                            <div className="space-y-4 text-white/90">
                                                <div>
                                                    <h4 className="font-semibold">Vrijdaggebed</h4>
                                                    <p className="text-sm text-white/80">Elke vrijdag • 13:30 - 14:30</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold">Lezingen</h4>
                                                    <p className="text-sm text-white/80">Za/Zo • Na Maghreb gebed</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute right-4 top-4 text-white/20 transform scale-150 transition-transform duration-300 group-hover:scale-[2]">
                                            <FaClock size={40} />
                                        </div>
                                    </div>

                                    {/* Archive Card */}
                                    <div className="bg-gradient-to-br from-crown to-crown/70 rounded-3xl p-6 relative overflow-hidden group transition-all duration-300 hover:scale-105">
                                        <div className="relative z-20">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                                    <FaArchive className="w-5 h-5 text-white" />
                                                </div>
                                                <h3 className="text-xl font-bold text-white">Archief</h3>
                                            </div>
                                            <p className="text-white/90 mb-4">Bekijk eerdere uitzendingen terug</p>
                                            <ul className="space-y-2 text-white/80 text-sm">
                                                <li className="flex items-center gap-2">
                                                    <FaVideo className="w-4 h-4" />
                                                    <span>Vrijdagpreken</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <FaBookReader className="w-4 h-4" />
                                                    <span>Lezingen</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="absolute right-4 top-4 text-white/20 transform scale-150 transition-transform duration-300 group-hover:scale-[2]">
                                            <FaArchive size={40} />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Support Section - Only show when not fullscreen */}
                        {!isFullscreen && (
                            <div className="mt-12">
                                <div className="bg-gradient-to-br from-gray-800/90 to-gray-900 p-10 rounded-xl">
                                    <div className="flex flex-col items-center">
                                        <div className="flex-shrink-0 w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                                            <FaVideo className="w-8 h-8 text-white" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-white mb-6">
                                            Technische ondersteuning nodig?
                                        </h2>
                                        <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto text-center">
                                            Heeft u problemen met het bekijken van de livestream? Neem contact met ons op.
                                        </p>
                                        <a
                                            href="/contact"
                                            className="group inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors uppercase tracking-wide text-sm"
                                        >
                                            Contact opnemen
                                            <FaArrowRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
} 