'use client';

import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import ContactForm from '@/components/forms/contact-form';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-6 md:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-boy">
                    <div className="absolute inset-0 opacity-30 mix-blend-soft-light 
                                bg-[radial-gradient(at_top_right,_#1dbffe_0%,_transparent_50%)]" />
                </div>
                <div className="absolute -bottom-1 left-0 right-0">
                    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="white" d="M0 48.5129L60 54.0129C120 59.5129 240 70.5129 360 75.5129C480 80.5129 600 80.0129 720 70.0129C840 59.5129 960 37.5129 1080 32.0129C1200 27.0129 1320 37.5129 1380 43.0129L1440 48.5129V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V48.5129Z" />
                    </svg>
                </div>
                <div className="relative z-10 container mx-auto px-4 pt-24">
                    <div className="max-w-4xl animate-slide-up">
                        <h1 className="text-center md:text-left text-4xl md:text-6xl font-bold text-white mb-6">
                            Contact
                        </h1>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-12 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Title */}
                        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-4">
                                Neem contact met ons op
                            </h2>
                            <p className="text-md sm:text-lg md:text-xl text-gray-600">
                                Heeft u vragen of wilt u meer informatie? Neem gerust contact met ons op.
                                We staan voor u klaar.
                            </p>
                        </div>

                        {/* Contact Form - Full width */}
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-4 md:p-8 mb-8 md:mb-12">
                            <ContactForm />
                        </div>

                        {/* Contact Info Cards - Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {/* Location Card */}
                            <div className="bg-gradient-to-br from-crown/5 to-crown/10 rounded-3xl p-4 md:p-6">
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-crown to-crown/80 
                                                flex items-center justify-center flex-shrink-0">
                                        <FaMapMarkerAlt className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1.5 md:mb-2">Locatie</h3>
                                        <p className="text-sm text-gray-600 mb-2 md:mb-3">
                                            Kroonstraat 72<br />
                                            2140 Borgerhout
                                        </p>
                                        <a
                                            href="https://www.google.com/maps/place/Kroonstraat+72,+2140+Antwerpen"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-crown font-medium text-sm hover:underline"
                                        >
                                            Route plannen
                                            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="bg-gradient-to-br from-boy/5 to-boy/10 rounded-3xl p-4 md:p-6">
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-boy to-boy/80 
                                                flex items-center justify-center flex-shrink-0">
                                        <FaPhone className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1.5 md:mb-2">Telefoon</h3>
                                        <p className="text-sm text-gray-600 mb-2 md:mb-3">
                                            Bereikbaar op<br />
                                            werkdagen
                                        </p>
                                        <a
                                            href="tel:+32486133960"
                                            className="inline-flex items-center text-boy font-medium text-sm hover:underline"
                                        >
                                            +32 486 13 39 60
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div className="bg-gradient-to-br from-girl/5 to-girl/10 rounded-3xl p-4 md:p-6">
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-girl to-girl/80 
                                                flex items-center justify-center flex-shrink-0">
                                        <FaEnvelope className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1.5 md:mb-2">E-mail</h3>
                                        <p className="text-sm text-gray-600 mb-2 md:mb-3">
                                            Reactie binnen<br />
                                            24 uur
                                        </p>
                                        <a
                                            href="mailto:info@kidskroon.be"
                                            className="inline-flex items-center text-girl font-medium text-sm hover:underline"
                                        >
                                            info@kidskroon.be
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Card */}
                            <div className="bg-gradient-to-br from-green-500/5 to-green-500/10 rounded-3xl p-4 md:p-6">
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 
                                                flex items-center justify-center flex-shrink-0">
                                        <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1.5 md:mb-2">WhatsApp</h3>
                                        <p className="text-sm text-gray-600 mb-2 md:mb-3">
                                            Direct contact<br />
                                            via WhatsApp
                                        </p>
                                        <a
                                            href="https://wa.me/32486133960"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-green-500 font-medium text-sm hover:underline"
                                        >
                                            Start chat
                                            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
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