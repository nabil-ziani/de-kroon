'use client';

import Image from 'next/image';
import { FaClock, FaCalendarAlt, FaUsers, FaGraduationCap } from 'react-icons/fa';
import { useState } from 'react';
import EnrollmentModal from '@/components/dialogs/enrollment-modal';

type CourseDetailProps = {
    course: {
        title: string;
        level: string;
        description: string;
        image: string;
        schedule: {
            days: string;
            time: string;
            duration: string;
        };
        content: string[];
        requirements: string;
        maxStudents: number;
    };
};

export default function CourseDetail({ course }: CourseDetailProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                <div className="relative z-10 container mx-auto px-4">
                    <div className="max-w-4xl">
                        <h1 className="text-6xl font-bold text-white mb-4">
                            {course.title}
                        </h1>
                        <p className="text-xl text-white/90">
                            {course.level}
                        </p>
                    </div>
                </div>
            </section>

            {/* Course Details */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl mb-8">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: FaCalendarAlt, text: course.schedule.days },
                                        { icon: FaClock, text: course.schedule.time },
                                        { icon: FaUsers, text: `Max ${course.maxStudents} studenten` },
                                        { icon: FaGraduationCap, text: course.requirements }
                                    ].map((item, index) => (
                                        <div key={index} className="bg-gray-50 p-4 rounded-xl flex items-center gap-3">
                                            <div className="w-10 h-10 bg-crown/10 rounded-lg flex items-center justify-center">
                                                <item.icon className="w-5 h-5 text-crown" />
                                            </div>
                                            <span className="text-sm text-gray-600">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                    Cursus Inhoud
                                </h2>
                                <p className="text-lg text-gray-600 mb-8">
                                    {course.description}
                                </p>
                                <div className="space-y-4 mb-12">
                                    {course.content.map((item, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-crown" />
                                            <p className="text-gray-700">{item}</p>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full bg-crown text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-opacity-90 transition-colors text-sm uppercase tracking-wide flex items-center justify-center group"
                                >
                                    <span>Inschrijven voor deze cursus</span>
                                    <svg className="w-5 h-5 ml-2 transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <EnrollmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                courseName={course.title}
            />
        </main>
    );
} 