import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaClock, FaGraduationCap } from 'react-icons/fa';
import { COURSES } from '@/constants';
import EnrollmentModal from '@/components/dialogs/enrollment-modal';
import { useState } from 'react';

function truncateText(text: string, maxLength: number = 150) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
}

export default function CourseSection() {
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

    return (
        <div className="max-w-6xl mx-auto">
            {/* Featured Course - Full Width */}
            <div className="mb-12">
                <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <Link
                        href={`/vorming/${COURSES[0].slug}`}
                        className="absolute inset-0 z-10"
                        aria-label={`Meer informatie over ${COURSES[0].title}`}
                    />
                    <div className="grid md:grid-cols-2 h-full">
                        <div className="relative h-72 md:h-[500px]">
                            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/20 group-hover:opacity-70 transition-opacity duration-300" />
                            <Image
                                src={COURSES[0].image}
                                alt={COURSES[0].title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <div className="inline-block px-3 py-1 rounded-full bg-crown/10 text-crown text-sm font-medium mb-6 self-start">
                                {COURSES[0].level}
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 group-hover:text-crown transition-colors">
                                {COURSES[0].title}
                            </h3>
                            <div className="flex gap-6 mb-6">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <FaClock className="w-4 h-4 text-crown" />
                                    <span>Zaterdag & Zondag</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <FaGraduationCap className="w-4 h-4 text-crown" />
                                    <span>6-15 jaar</span>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-8 text-lg line-clamp-3">
                                {truncateText(COURSES[0].description)}
                            </p>
                            <div className="mt-auto">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSelectedCourse(COURSES[0].title);
                                    }}
                                    className="relative z-20 w-full md:w-auto bg-crown text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center group/btn"
                                >
                                    <span>Direct Inschrijven</span>
                                    <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Courses - Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {COURSES.slice(1).map((course) => (
                    <div
                        key={course.title}
                        className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <Link
                            href={`/vorming/${course.slug}`}
                            className="absolute inset-0 z-10"
                            aria-label={`Meer informatie over ${course.title}`}
                        />
                        <div className="flex flex-col h-full">
                            <div className="relative h-64">
                                <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/20 group-hover:opacity-70 transition-opacity duration-300" />
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="inline-block px-3 py-1 rounded-full bg-crown/10 text-crown text-sm font-medium mb-4 self-start">
                                    {course.level}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-crown transition-colors">
                                    {course.title}
                                </h3>
                                <p className="text-gray-600 mb-6 line-clamp-3">
                                    {truncateText(course.description)}
                                </p>
                                <div className="mt-auto">
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setSelectedCourse(course.title);
                                        }}
                                        className="relative z-20 w-full bg-crown text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center group/btn"
                                    >
                                        <span>Direct Inschrijven</span>
                                        <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/*<div className="text-center mt-16">
                <Link
                    href="/vorming#courses"
                    className="inline-flex items-center justify-center bg-crown/90 hover:bg-crown text-white px-10 py-4 rounded-xl font-semibold transition-colors uppercase tracking-wide text-base group"
                >
                    <span>Bekijk alle cursussen</span>
                    <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>*/}

            <EnrollmentModal
                isOpen={!!selectedCourse}
                onClose={() => setSelectedCourse(null)}
                courseName={selectedCourse || ''}
            />
        </div>
    );
} 