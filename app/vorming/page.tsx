import Image from 'next/image';
import { Suspense } from 'react';
import prisma from '@/lib/prisma';
import CourseList from '@/components/courses/course-list';

export default async function VormingPage() {
    const courses = await prisma.course.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });

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
                    <div className="max-w-4xl">
                        <h1 className="text-center md:text-left text-4xl md:text-6xl font-bold text-white mb-6">
                            Vorming & Groei
                        </h1>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl md:order-last order-first">
                                <div className="absolute inset-0 bg-gradient-to-br from-boy/20 to-transparent" />
                                <Image
                                    src="/images/placeholder.png"
                                    alt="Onze activiteiten"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative">
                                <div className="relative text-center md:text-left">
                                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
                                        Islamitisch Onderwijs
                                    </h2>
                                    <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8">
                                        Bij De Kroon bieden we kwalitatief islamitisch onderwijs aan voor alle leeftijden.
                                        Onze lessen worden gegeven door gekwalificeerde docenten die de kennis op een
                                        moderne en toegankelijke manier overbrengen.
                                    </p>
                                    <div className="hidden md:block space-y-3 md:space-y-4">
                                        {[
                                            'Arabische taal',
                                            'Koran recitatie',
                                            'Islamitische studies',
                                            'Weekend lessen'
                                        ].map((item) => (
                                            <div key={item} className="flex items-start gap-3 md:gap-4">
                                                <div className="w-2 h-2 rounded-full bg-crown mt-2" />
                                                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{item}</p>
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
            <section id="courses" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-center md:text-left text-3xl md:text-5xl font-bold text-gray-800 mb-8 md:mb-16">
                            Onze Lessen
                        </h2>
                        <Suspense fallback={
                            <div className="flex items-center justify-center min-h-[200px]">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-crown"></div>
                            </div>
                        }>
                            <CourseList initialCourses={courses} />
                        </Suspense>
                    </div>
                </div>
            </section>
        </main>
    );
}