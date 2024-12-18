'use client';

import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaCheckCircle, FaTimesCircle, FaExclamationCircle, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

type StatusConfig = {
    title: string;
    description: string;
    icon: any;
    iconColor: string;
    quote?: string;
};

export default function ConfirmationContent() {
    const searchParams = useSearchParams();
    const status = searchParams.get('status') || 'completed';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const statusConfig: Record<string, StatusConfig> = useMemo(() => ({
        completed: {
            title: 'JazaakAllahoe khairan',
            description: 'Met jouw bijdrage kunnen we blijven investeren in de ontwikkeling van onze jeugd.',
            icon: FaCheckCircle,
            iconColor: 'text-green-500',
            quote: '"De beste liefdadigheid is die welke regelmatig wordt gegeven, ook al is het weinig."'
        },
        error: {
            title: 'Er is iets misgegaan',
            description: 'Er is helaas een fout opgetreden bij het verwerken van je donatie. Probeer het later opnieuw of neem contact met ons op.',
            icon: FaTimesCircle,
            iconColor: 'text-red-500'
        },
        failed: {
            title: 'Donatie niet gelukt',
            description: 'De betaling is helaas niet gelukt. Controleer je gegevens en probeer het opnieuw.',
            icon: FaTimesCircle,
            iconColor: 'text-red-500'
        },
        pending: {
            title: 'Donatie in behandeling',
            description: 'Je donatie wordt momenteel verwerkt. Je ontvangt een bevestiging zodra de betaling is afgerond.',
            icon: FaExclamationCircle,
            iconColor: 'text-blue-500'
        }
    }), []);

    const currentStatus = statusConfig[status] || statusConfig.error;
    const StatusIcon = currentStatus.icon;

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-6 md:py-24">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-boy">
                    <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[radial-gradient(at_top_right,_#1dbffe_0%,_transparent_50%)]" />
                </div>
                <div className="absolute -bottom-1 left-0 right-0">
                    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="white" d="M0 48.5129L60 54.0129C120 59.5129 240 70.5129 360 75.5129C480 80.5129 600 80.0129 720 70.0129C840 59.5129 960 37.5129 1080 32.0129C1200 27.0129 1320 37.5129 1380 43.0129L1440 48.5129V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V48.5129Z" />
                    </svg>
                </div>
                <div className="relative z-10 container mx-auto px-4 pt-24">
                    <div className="max-w-4xl mx-auto text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">
                            {currentStatus.title}
                        </h1>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8 md:mb-16">
                            <div className="mb-6 md:mb-8">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                                    <StatusIcon className={`w-10 h-10 md:w-12 md:h-12 ${currentStatus.iconColor}`} />
                                </div>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                                {status === 'completed' ? 'Bedankt voor je steun' : 'Donatie status'}
                            </h2>
                            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
                                {currentStatus.description}
                            </p>
                        </div>

                        {currentStatus.quote && (
                            <div className="bg-gray-50 rounded-3xl p-6 md:p-8 mb-8 md:mb-12">
                                <blockquote className="text-center">
                                    <p className="text-base md:text-xl text-gray-600 italic mb-4">
                                        {currentStatus.quote}
                                    </p>
                                    <footer className="text-sm text-gray-500">
                                        - De Profeet Mohammed ﷺ
                                        <br />
                                        <span className="text-xs">(Sahih al-Bukhari, 6465; Sahih Muslim, 2853)</span>
                                    </footer>
                                </blockquote>
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center bg-crown text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 text-sm md:text-base uppercase tracking-wide group"
                            >
                                <FaArrowLeft className="mr-2 transform transition-transform duration-300 group-hover:-translate-x-1" />
                                <span>Terug naar home</span>
                            </Link>
                            {(status === 'error' || status === 'failed') && (
                                <Link
                                    href="/donatie"
                                    className="inline-flex items-center justify-center bg-gray-100 text-gray-800 px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 text-sm md:text-base uppercase tracking-wide"
                                >
                                    Opnieuw proberen
                                </Link>
                            )}
                            {status === 'pending' && (
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center bg-gray-100 text-gray-800 px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 text-sm md:text-base uppercase tracking-wide"
                                >
                                    Contact opnemen
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 