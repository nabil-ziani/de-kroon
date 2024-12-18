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
                            {course.title}
                        </h1>
                        <div className="flex gap-4">
                            <div className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-lg font-medium">
                                {course.level}
                            </div>
                            <div className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-lg font-medium">
                                {course.ageRange} jaar
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <div className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Left Column - Schedule */}
                            <div className="grid gap-8">
                                {/* Saturday Schedule */}
                                <div className="bg-gradient-to-br from-crown/5 to-crown/10 p-8 rounded-2xl border border-crown/10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="bg-crown/10 p-3 rounded-xl">
                                            <FaClock className="w-6 h-6 text-crown" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">Zaterdag</h3>
                                            <p className="text-crown font-medium">Koranlessen</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        {saturdaySchedules.map((schedule) => (
                                            <div
                                                key={schedule.id}
                                                className="bg-white p-4 rounded-xl shadow-sm border border-crown/5 hover:shadow-md transition-shadow duration-200"
                                            >
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-900 font-medium capitalize">
                                                        {schedule.period}
                                                    </span>
                                                    <span className="text-crown font-semibold">
                                                        {schedule.startTime} - {schedule.endTime}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Sunday Schedule */}
                                <div className="bg-gradient-to-br from-boy/5 to-boy/10 p-8 rounded-2xl border border-boy/10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="bg-boy/10 p-3 rounded-xl">
                                            <FaClock className="w-6 h-6 text-boy" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">Zondag</h3>
                                            <p className="text-boy font-medium">Arabisch en Islam</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        {sundaySchedules.map((schedule) => (
                                            <div
                                                key={schedule.id}
                                                className="bg-white p-4 rounded-xl shadow-sm border border-boy/5 hover:shadow-md transition-shadow duration-200"
                                            >
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-900 font-medium capitalize">
                                                        {schedule.period}
                                                    </span>
                                                    <span className="text-boy font-semibold">
                                                        {schedule.startTime} - {schedule.endTime}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Info */}
                            <div className="grid gap-8">
                                {/* Description */}
                                <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 p-8 rounded-2xl border border-gray-200">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="bg-gray-200/50 p-3 rounded-xl">
                                            <FaBook className="w-6 h-6 text-gray-600" />
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-900">Beschrijving</h2>
                                    </div>
                                    <div className="prose prose-lg max-w-none">
                                        <p className="text-gray-600 leading-relaxed">
                                            {course.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Subjects */}
                                <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 p-8 rounded-2xl border border-gray-200">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="bg-gray-200/50 p-3 rounded-xl">
                                            <FaGraduationCap className="w-6 h-6 text-gray-600" />
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-900">Inhoud</h2>
                                    </div>
                                    <ul className="list-disc pl-5 space-y-2">
                                        {course.subjects.map((subject, index) => (
                                            <li key={index} className="text-lg text-gray-600">
                                                {subject}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Enrollment Button */}
                        <div className="max-w-md mx-auto">
                            <EnrollmentButton courseName={course.title} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
} 