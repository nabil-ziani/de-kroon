'use client';

import { useEffect } from 'react';
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function ThankYouPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        <h1 className="text-6xl font-bold text-white mb-6">
                            JazaakAllahoe khairan
                        </h1>
                    </div>
                </div>
            </section>

            {/* Thank You Content */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="mb-8">
                                <FaCheckCircle className="w-20 h-20 text-green-500 mx-auto" />
                            </div>
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">
                                Bedankt voor je steun
                            </h2>
                            <p className="text-xl text-gray-600">
                                Met jouw bijdrage kunnen we blijven investeren in de ontwikkeling van onze jeugd.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-3xl p-8 mb-12">
                            <blockquote className="text-center">
                                <p className="text-xl text-gray-600 italic mb-4">
                                    "De beste liefdadigheid is die welke regelmatig wordt gegeven, ook al is het weinig."
                                </p>
                                <footer className="text-sm text-gray-500">
                                    - De Profeet Mohammed ﷺ
                                    <br />
                                    <span className="text-xs">(Sahih al-Bukhari, 6465; Sahih Muslim, 2853)</span>
                                </footer>
                            </blockquote>
                        </div>

                        <div className="text-center">
                            <Link
                                href="/"
                                className="inline-flex items-center bg-crown text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 group"
                            >
                                <FaArrowLeft className="mr-2 transform transition-transform duration-300 group-hover:-translate-x-1" />
                                <span>Terug naar home</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 