'use client';

import { FaHandHoldingHeart, FaArrowRight, FaCreditCard } from 'react-icons/fa';

export default function DonatePage() {
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
                            Doneren
                        </h1>
                        <p className="text-xl text-white/90">
                            Steun ons bij het organiseren van activiteiten, onderhoud van het gebouw
                            en het verzorgen van onderwijs. Uw bijdrage maakt het verschil.
                        </p>
                    </div>
                </div>
            </section>

            {/* Donation Options */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-5xl font-bold text-gray-800 mb-16">
                            Donatie Opties
                        </h2>
                        <div className="grid gap-8">
                            {/* Top row - Donation cards */}
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Eenmalige Donatie */}
                                <div className="bg-gradient-to-br from-girl/90 to-girl/70 rounded-3xl p-10 shadow-lg">
                                    <div className="flex flex-col h-full">
                                        <div className="flex-shrink-0 w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                                            <FaHandHoldingHeart className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">
                                            Eenmalige Donatie
                                        </h3>
                                        <p className="text-lg text-white/90 mb-8">
                                            Steun ons met een eenmalige bijdrage van een zelf gekozen bedrag.
                                        </p>
                                        <button className="mt-auto w-full bg-white text-girl px-6 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-colors text-sm uppercase tracking-wide flex items-center justify-center group">
                                            <span>Doneer eenmalig</span>
                                            <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                                        </button>
                                    </div>
                                </div>

                                {/* Maandelijkse Donatie */}
                                <div className="bg-gradient-to-br from-boy/90 to-boy/70 rounded-3xl p-10 shadow-lg">
                                    <div className="flex flex-col h-full">
                                        <div className="flex-shrink-0 w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                                            <FaHandHoldingHeart className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">
                                            Maandelijkse Donatie
                                        </h3>
                                        <p className="text-lg text-white/90 mb-8">
                                            Help ons structureel met een maandelijkse bijdrage.
                                        </p>
                                        <button className="mt-auto w-full bg-white text-boy px-6 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-colors text-sm uppercase tracking-wide flex items-center justify-center group">
                                            <span>Word vaste donateur</span>
                                            <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom row - Bank details */}
                            <div className="bg-gradient-to-br from-crown/90 to-crown/70 rounded-3xl p-10 shadow-lg">
                                <div className="grid md:grid-cols-2 gap-16 items-center">
                                    <div>
                                        <div className="flex-shrink-0 w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                                            <FaCreditCard className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">
                                            Bankgegevens
                                        </h3>
                                        <p className="text-lg text-white/90 mb-8">
                                            U kunt uw donatie ook direct overmaken naar onze bankrekening.
                                        </p>
                                        <div className="space-y-4">
                                            <p className="text-white/90"><span className="font-semibold">Naam:</span> De Kroon</p>
                                            <p className="text-white/90"><span className="font-semibold">IBAN:</span> BE...</p>
                                            <p className="text-white/90"><span className="font-semibold">BIC:</span> ...</p>
                                        </div>
                                    </div>

                                    <div className="bg-white/10 rounded-2xl p-8">
                                        <h3 className="text-xl font-bold text-white mb-4">Vragen?</h3>
                                        <p className="text-lg text-white/90 mb-6">
                                            Heeft u vragen over doneren of wilt u meer informatie? Neem gerust contact met ons op.
                                        </p>
                                        <a
                                            href="/contact"
                                            className="inline-flex items-center bg-white text-crown px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors text-sm uppercase tracking-wide group"
                                        >
                                            <span>Contact opnemen</span>
                                            <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 