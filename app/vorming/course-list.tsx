'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import EnrollmentModal from '@/components/dialogs/enrollment-modal';
import { Course } from '@prisma/client';

interface CourseListProps {
    initialCourses: Course[];
}

function truncateText(text: string, maxLength: number = 150) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
}

export default function CourseList({ initialCourses }: CourseListProps) {
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

    return (
        <>
            <div className="grid md:grid-cols-2 gap-8">
                {initialCourses.map((course) => (
                    <div key={course.id} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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

            <EnrollmentModal
                isOpen={!!selectedCourse}
                onClose={() => setSelectedCourse(null)}
                courseName={selectedCourse || ''}
            />
        </>
    );
} 