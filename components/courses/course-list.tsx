'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import EnrollmentModal from '@/components/dialogs/enrollment-modal';
import DisabledTooltip from '@/components/ui/disabled-tooltip';
import { Course } from '@prisma/client';
import { truncateText } from '@/lib/utils';

interface CourseListProps {
    initialCourses: Course[];
}

// Tijdelijk gesloten tot juni 2024
const ENROLLMENTS_OPEN = false;

export default function CourseList({ initialCourses }: CourseListProps) {
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

    const buttonContent = (course: Course) => (
        <button
            onClick={(e) => {
                e.preventDefault();
                if (ENROLLMENTS_OPEN) {
                    setSelectedCourse(course.title);
                }
            }}
            disabled={!ENROLLMENTS_OPEN}
            className={`relative z-20 w-full px-4 md:px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group/btn
                ${ENROLLMENTS_OPEN
                    ? 'bg-crown text-white hover:bg-opacity-90'
                    : 'bg-gray-100 text-gray-400'}`}
        >
            <span className="uppercase tracking-wide text-sm">Direct Inschrijven</span>
            <FaArrowRight className={`ml-2 transform transition-transform duration-300 
                ${ENROLLMENTS_OPEN ? 'group-hover/btn:translate-x-1' : ''}`} />
        </button>
    );

    return (
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {initialCourses.map((course) => (
                <div
                    key={course.id}
                    className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col"
                >
                    <div className="relative h-48 md:h-56">
                        <Image
                            src={course.image || '/images/placeholder.png'}
                            alt={course.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                        <div className="inline-block px-3 py-1 rounded-full bg-crown/10 text-crown text-sm font-medium mb-3 md:mb-4 self-start">
                            {course.level}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">
                            {course.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 line-clamp-3">
                            {truncateText(course.description)}
                        </p>
                        <div className="mt-auto">
                            {ENROLLMENTS_OPEN ? (
                                buttonContent(course)
                            ) : (
                                <DisabledTooltip>{buttonContent(course)}</DisabledTooltip>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            <EnrollmentModal
                isOpen={!!selectedCourse}
                onClose={() => setSelectedCourse(null)}
                courseName={selectedCourse || ''}
            />
        </div>
    );
} 