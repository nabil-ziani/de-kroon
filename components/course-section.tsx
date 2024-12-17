import Image from 'next/image';
import Link from 'next/link';
import { COURSES } from '@/constants';

export default function CourseSection() {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {COURSES.map((course) => (
                    <div
                        key={course.title}
                        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-[500px]"
                    >
                        <div className="relative h-48">
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex-grow">
                                <span className="text-sm text-crown font-semibold uppercase tracking-wide">
                                    {course.level}
                                </span>
                                <h3 className="text-2xl font-bold text-gray-800 mt-3 mb-4">
                                    {course.title}
                                </h3>
                                <p className="text-gray-700 line-clamp-3">{course.description}</p>
                            </div>
                            <Link
                                href={`/vorming/${course.slug}`}
                                className="mt-6 inline-block bg-crown text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors uppercase tracking-wide text-sm text-center w-full"
                            >
                                Meer informatie
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-16">
                <Link
                    href="/vorming#courses"
                    className="inline-flex items-center justify-center bg-crown/90 hover:bg-crown text-white px-10 py-4 rounded-xl font-semibold transition-colors uppercase tracking-wide text-base group"
                >
                    Bekijk alle cursussen
                    <svg
                        className="w-6 h-6 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
} 