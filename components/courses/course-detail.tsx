import Image from 'next/image';
import { FaClock, FaGraduationCap, FaBook, FaQuran, FaMosque } from 'react-icons/fa';
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
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-start">
                            {/* Left Column */}
                            <div className="space-y-12">
                                {/* Course Image */}
                                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Schedule */}
                                <div className="grid gap-6">
                                    <div className="bg-gray-50 p-6 rounded-xl">
                                        <div className="flex items-center gap-3 mb-4">
                                            <FaClock className="w-5 h-5 text-crown" />
                                            <h3 className="text-lg font-semibold">Zaterdag: Koranlessen</h3>
                                        </div>
                                        <div className="space-y-3 ml-8">
                                            {saturdaySchedules.map((schedule) => (
                                                <div key={schedule.id} className="flex justify-between items-center">
                                                    <span className="text-gray-600 capitalize">{schedule.period}</span>
                                                    <span className="font-medium">{schedule.startTime} - {schedule.endTime}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-6 rounded-xl">
                                        <div className="flex items-center gap-3 mb-4">
                                            <FaClock className="w-5 h-5 text-crown" />
                                            <h3 className="text-lg font-semibold">Zondag: Arabisch en Islam</h3>
                                        </div>
                                        <div className="space-y-3 ml-8">
                                            {sundaySchedules.map((schedule) => (
                                                <div key={schedule.id} className="flex justify-between items-center">
                                                    <span className="text-gray-600 capitalize">{schedule.period}</span>
                                                    <span className="font-medium">{schedule.startTime} - {schedule.endTime}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-12">
                                {/* Description */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Beschrijving</h2>
                                    <div className="prose prose-lg max-w-none">
                                        <p className="text-xl text-gray-600 leading-relaxed">
                                            {course.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Subjects */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Inhoud</h2>
                                    <ul className="space-y-4">
                                        {course.subjects.map((subject, index) => (
                                            <li key={index} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                                                {subject === 'Arabische taal' && (
                                                    <FaBook className="w-6 h-6 text-crown" />
                                                )}
                                                {subject === 'Koran recitatie' && (
                                                    <FaQuran className="w-6 h-6 text-crown" />
                                                )}
                                                {subject === 'Islamitische studies' && (
                                                    <FaMosque className="w-6 h-6 text-crown" />
                                                )}
                                                <span className="text-lg font-medium text-gray-800">{subject}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Enrollment Button */}
                                <div className="pt-4">
                                    <EnrollmentButton courseName={course.title} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
} 