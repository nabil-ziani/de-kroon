'use client';

import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import ContactForm from '@/components/contact-form';

export default function ContactPage() {
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
                            Contact
                        </h1>
                        <p className="text-xl text-white/90">
                            Heeft u vragen of wilt u meer informatie? Neem gerust contact met ons op.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto space-y-6">
                        {/* Contact Form - Full width */}
                        <div className="bg-white rounded-3xl p-8 relative overflow-hidden shadow-xl">
                            <div className="relative z-20">
                                <span className="inline-block px-4 py-2 rounded-full bg-crown/10 text-crown text-sm font-medium mb-4">
                                    Bericht
                                </span>
                                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                                    Stuur ons een bericht
                                </h2>
                                <ContactForm />
                            </div>
                        </div>

                        {/* Contact Info and Map - Side by side */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Contact Details */}
                            <div className="bg-gradient-to-br from-boy to-boy/70 rounded-3xl p-8 relative overflow-hidden shadow-xl h-[400px] transition-all duration-300 hover:scale-[1.02] group">
                                <div className="relative z-20">
                                    <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                                        Contact
                                    </span>
                                    <h2 className="text-2xl font-bold text-white mb-6">Contactgegevens</h2>
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                                <FaMapMarkerAlt className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-white/90">Kroonstraat 72</h3>
                                                <p className="text-white/80">2140 Borgerhout</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                                <FaPhone className="w-5 h-5 text-white" />
                                            </div>
                                            <p className="text-white/90">+32 486 13 39 60</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                                <FaEnvelope className="w-5 h-5 text-white" />
                                            </div>
                                            <p className="text-white/90">info@kidskroon.be</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute right-4 top-4 text-white/20">
                                    <FaEnvelope size={40} />
                                </div>
                            </div>

                            {/* Google Maps */}
                            <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-[400px] transition-all duration-300 hover:scale-[1.02]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.614824243935!2d4.443359776926787!3d51.21770883948415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f7c5ac3fdb33%3A0x7f5ef33737d8f2dd!2sKroonstraat%2072%2C%202140%20Antwerpen!5e0!3m2!1snl!2sbe!4v1708536144707!5m2!1snl!2sbe"
                                    width="100%"
                                    height="400"
                                    style={{
                                        border: 0,
                                        filter: 'contrast(1.1) saturate(1.2)'
                                    }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 