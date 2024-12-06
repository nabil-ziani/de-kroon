'use client';

import { FaGraduationCap, FaBook, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import EnrollmentModal from '@/components/enrollment-modal';
import Link from 'next/link';

export default function OnderwijsPage() {
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
                            Ons Onderwijs
                        </h1>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">
                                Islamitisch Onderwijs
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
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
                                    <div key={item} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-crown" />
                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl text-gray-500">
                            <Image
                                src="/images/education.jpg"
                                alt="Islamitisch onderwijs"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Grid */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
                            Onze Lessen
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Arabische Taal',
                                    level: 'Beginners tot Gevorderd',
                                    description: 'Leer de Arabische taal van ervaren docenten.',
                                    image: '/images/arabisch.png',
                                    slug: 'arabische-taal'
                                },
                                {
                                    title: 'Koran Recitatie',
                                    level: 'Alle Niveaus',
                                    description: 'Verbeter je Koran recitatie met professionele begeleiding.',
                                    image: '/images/koran.png',
                                    slug: 'koran-recitatie'
                                },
                                {
                                    title: 'Weekend School',
                                    level: 'Kinderen',
                                    description: 'Islamitisch onderwijs voor kinderen in het weekend.',
                                    image: '/images/weekend.png',
                                    slug: 'weekend-school'
                                }
                            ].map((course) => (
                                <div key={course.title} className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                    <Link
                                        href={`/onderwijs/${course.slug}`}
                                        className="absolute inset-0 z-10"
                                        aria-label={`Meer informatie over ${course.title}`}
                                    />
                                    <div className="relative h-48">
                                        <Image
                                            src={course.image}
                                            alt={course.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                                            {course.title}
                                        </h3>
                                        <p className="text-sm text-crown font-medium mb-4">
                                            {course.level}
                                        </p>
                                        <p className="text-gray-600 mb-6">
                                            {course.description}
                                        </p>
                                        <div className="space-y-3">
                                            <button
                                                onClick={() => setSelectedCourse(course.title)}
                                                className="relative z-20 w-full bg-crown text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors text-sm uppercase tracking-wide flex items-center justify-center"
                                            >
                                                <span>Inschrijven</span>
                                            </button>
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