import Image from 'next/image';
import { FaClock, FaGraduationCap, FaBook } from 'react-icons/fa';
import EnrollmentButton from '@/components/courses/enrollment-button';
import { Course, Schedule } from '@prisma/client';

interface CourseDetailProps {
    course: Course & {
        schedules: Schedule[];
    };
}

export default function CourseDetail({ course }: CourseDetailProps) {
    const saturdaySchedules = course.schedules.filter(s => s.isSaturday);
    const sundaySchedules = course.schedules.filter(s => !s.isSaturday);

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-24">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-boy">
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover mix-blend-overlay opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[radial-gradient(at_top_right,_#1dbffe_0%,_transparent_50%)]" />
                </div>
                <div className="absolute -bottom-1 left-0 right-0">
                    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="white" d="M0 48.5129L60 54.0129C120 59.5129 240 70.5129 360 75.5129C480 80.5129 600 80.0129 720 70.0129C840 59.5129 960 37.5129 1080 32.0129C1200 27.0129 1320 37.5129 1380 43.0129L1440 48.5129V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V48.5129Z" />
                    </svg>
                </div>
                <div className="relative z-10 container mx-auto px-4 pt-12">
                    <div className="max-w-4xl">
                        <div className="flex flex-wrap gap-3 mb-8">
                            <div className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
                                {course.ageRange} jaar
                            </div>
                            <div className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
                                Zaterdag & Zondag
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            {course.title}
                        </h1>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            {/* Main Content */}
                            <div className="lg:col-span-8 space-y-16">
                                {/* Description */}
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                        <FaBook className="w-8 h-8 text-crown" />
                                        Beschrijving
                                    </h2>
                                    <div className="text-lg max-w-none">
                                        <p className="text-gray-600 leading-relaxed">
                                            {course.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Subjects */}
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                        <FaGraduationCap className="w-8 h-8 text-crown" />
                                        Inhoud
                                    </h2>
                                    <div className="grid gap-4">
                                        {course.subjects.map((subject, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-crown"></div>
                                                <span className="text-lg text-gray-700">{subject}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Schedule */}
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                        <FaClock className="w-8 h-8 text-crown" />
                                        Lestijden
                                    </h2>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* Saturday Schedule */}
                                        <div className="bg-gradient-to-br from-crown/5 to-crown/10 p-6 rounded-2xl border border-crown/10">
                                            <h3 className="text-xl font-bold text-gray-800 mb-4">Zaterdag</h3>
                                            <p className="text-crown font-medium mb-4">Koranlessen</p>
                                            <div className="space-y-3">
                                                {saturdaySchedules.map((schedule) => (
                                                    <div
                                                        key={schedule.id}
                                                        className="flex justify-between items-center p-3 rounded-lg bg-white"
                                                    >
                                                        <span className="text-gray-700 font-medium capitalize">
                                                            {schedule.period}
                                                        </span>
                                                        <span className="text-crown font-semibold">
                                                            {schedule.startTime} - {schedule.endTime}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Sunday Schedule */}
                                        <div className="bg-gradient-to-br from-boy/5 to-boy/10 p-6 rounded-2xl border border-boy/10">
                                            <h3 className="text-xl font-bold text-gray-800 mb-4">Zondag</h3>
                                            <p className="text-boy font-medium mb-4">Arabisch en Islam</p>
                                            <div className="space-y-3">
                                                {sundaySchedules.map((schedule) => (
                                                    <div
                                                        key={schedule.id}
                                                        className="flex justify-between items-center p-3 rounded-lg bg-white"
                                                    >
                                                        <span className="text-gray-700 font-medium capitalize">
                                                            {schedule.period}
                                                        </span>
                                                        <span className="text-boy font-semibold">
                                                            {schedule.startTime} - {schedule.endTime}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Enrollment Widget */}
                            <div className="lg:col-span-4">
                                <div className="sticky top-8 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                            Schrijf je in
                                        </h3>
                                        <EnrollmentButton courseName={course.title} />
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