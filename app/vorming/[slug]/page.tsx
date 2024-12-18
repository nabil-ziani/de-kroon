import { Metadata } from 'next';
import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import EnrollmentButton from './enrollment-button';

type PageProps = {
    params: {
        slug: string;
    };
    searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function CoursePage({ params }: PageProps) {
    const course = await prisma.course.findUnique({
        where: { slug: params.slug }
    });

    if (!course) notFound();

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
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <div className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-start">
                            {/* Course Image */}
                            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-xl">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Course Information */}
                            <div className="space-y-8">
                                {/* Level Badge */}
                                <div className="inline-block px-4 py-2 rounded-full bg-crown/10 text-crown text-lg font-medium">
                                    {course.level}
                                </div>

                                {/* Description */}
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-xl text-gray-600 leading-relaxed whitespace-pre-wrap">
                                        {course.description}
                                    </p>
                                </div>

                                {/* Course Details */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gray-50 p-4 rounded-xl">
                                        <p className="text-sm text-gray-500 mb-1">Dag</p>
                                        <p className="font-medium capitalize">{course.dayOfWeek}</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-xl">
                                        <p className="text-sm text-gray-500 mb-1">Tijdslot</p>
                                        <p className="font-medium capitalize">{course.timeSlot}</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-xl">
                                        <p className="text-sm text-gray-500 mb-1">Tijden</p>
                                        <p className="font-medium">{course.startTime} - {course.endTime}</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-xl">
                                        <p className="text-sm text-gray-500 mb-1">Leeftijd</p>
                                        <p className="font-medium">{course.ageRange} jaar</p>
                                    </div>
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

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const course = await prisma.course.findUnique({
        where: { slug: params.slug }
    });

    if (!course) {
        return {
            title: 'Cursus niet gevonden'
        };
    }

    return {
        title: course.title,
        description: course.description
    };
} 