'use client';

import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import EnrollmentModal from '@/components/dialogs/enrollment-modal';
import Link from 'next/link';
import { COURSES } from '@/constants';

export default function VormingPage() {
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

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
                            Vorming & Groei
                        </h1>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl order-last">
                                <div className="absolute inset-0 bg-gradient-to-br from-boy/20 to-transparent" />
                                <Image
                                    src="/images/placeholder.png"
                                    alt="Onze activiteiten"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative">
                                <div className="relative">
                                    <h2 className="text-5xl font-bold text-gray-800 mb-6">
                                        Islamitisch Onderwijs
                                    </h2>
                                    <p className="text-xl text-gray-600 mb-8">
                                        Bij De Kroon bieden we kwalitatief islamitisch onderwijs aan voor alle leeftijden.
                                        Onze lessen worden gegeven door gekwalificeerde docenten die de kennis op een
                                        moderne en toegankelijke manier overbrengen.
                                    </p>
                                    <div className="space-y-4">
                                        {[
                                            'Arabische taal',
                                            'Koran recitatie',
                                            'Islamitische studies',
                                            'Weekend lessen'
                                        ].map((item) => (
                                            <div key={item} className="flex items-start gap-4">
                                                <div className="w-2 h-2 rounded-full bg-crown mt-2.5" />
                                                <p className="text-gray-700 leading-relaxed">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Grid */}
            <section id="courses" className="py-24 bg-gradient-to-b from-white to-gray-50/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-5xl font-bold text-gray-800 mb-16">
                            Onze Lessen
                        </h2>
                        <div className="grid md:grid-cols-2 gap-16">
                            {COURSES.map((course) => (
                                <div key={course.title} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                    <Link
                                        href={`/vorming/${course.slug}`}
                                        className="absolute inset-0 z-10"
                                        aria-label={`Meer informatie over ${course.title}`}
                                    />
                                    <div className="flex flex-col md:flex-row h-full">
                                        <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                                            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/20 group-hover:opacity-70 transition-opacity duration-300" />
                                            <Image
                                                src={course.image}
                                                alt={course.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="w-full md:w-3/5 p-8 md:p-10">
                                            <div className="inline-block px-3 py-1 rounded-full bg-crown/10 text-crown text-sm font-medium mb-6">
                                                {course.level}
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                                {course.title}
                                            </h3>
                                            <p className="text-gray-600 mb-8 text-lg">
                                                {course.description}
                                            </p>
                                            <div className="mt-auto">
                                                <button
                                                    onClick={() => setSelectedCourse(course.title)}
                                                    className="relative z-20 w-full bg-crown text-white px-6 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-colors text-sm uppercase tracking-wide flex items-center justify-center group"
                                                >
                                                    <span>Inschrijven</span>
                                                    <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <EnrollmentModal
                isOpen={!!selectedCourse}
                onClose={() => setSelectedCourse(null)}
                courseName={selectedCourse || ''}
            />
        </main>
    );
}