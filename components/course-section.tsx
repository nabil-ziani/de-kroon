import { Course } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaGraduationCap, FaArrowRight } from 'react-icons/fa';

function truncateText(text: string, maxLength: number = 150) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
}

interface CourseSectionProps {
    courses: Course[];
}

export default function CourseSection({ courses }: CourseSectionProps) {
    if (!courses.length) return null;

    const featuredCourse = courses[0];
    const otherCourses = courses.slice(1);

    return (
        <section id="courses" className="bg-gradient-to-b from-white to-gray-50/30">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Featured Course */}
                    <div className="mb-16">
                        <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="grid md:grid-cols-2 h-full">
                                <div className="relative h-64 md:h-auto">
                                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/20 group-hover:opacity-70 transition-opacity duration-300" />
                                    <Image
                                        src={featuredCourse.image}
                                        alt={featuredCourse.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <div className="inline-block px-3 py-1 rounded-full bg-crown/10 text-crown text-sm font-medium mb-6 self-start">
                                        {featuredCourse.level}
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                        {featuredCourse.title}
                                    </h3>
                                    <div className="flex gap-6 mb-6">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <FaClock className="w-4 h-4 text-crown" />
                                            <span>Zaterdag & Zondag</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <FaGraduationCap className="w-4 h-4 text-crown" />
                                            <span>{featuredCourse.ageRange} jaar</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-8 text-lg line-clamp-3">
                                        {truncateText(featuredCourse.description)}
                                    </p>
                                    <div className="mt-auto">
                                        <Link
                                            href={`/vorming/${featuredCourse.slug}`}
                                            aria-label={`Meer informatie over ${featuredCourse.title}`}
                                        >
                                            <button
                                                className="relative z-20 w-full md:w-auto bg-crown text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center group/btn"
                                            >
                                                <span className="uppercase tracking-wide text-sm">Meer informatie</span>
                                                <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Other Courses - Grid */}
                    {otherCourses.length > 0 && (
                        <div className="grid md:grid-cols-2 gap-8">
                            {otherCourses.map((course) => (
                                <div
                                    key={course.id}
                                    className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
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
                                                <Link
                                                    href={`/vorming/${course.slug}`}
                                                    aria-label={`Meer informatie over ${course.title}`}
                                                >
                                                    <button
                                                        className="relative z-20 w-full bg-crown text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center group/btn"
                                                    >
                                                        <span className="uppercase tracking-wide text-sm">Meer informatie</span>
                                                        <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
} 