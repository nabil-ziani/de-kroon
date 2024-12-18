import { Metadata } from 'next';
import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import CourseDetail from '@/components/courses/course-detail';

type PageProps = {
    params: {
        slug: string;
    };
    searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function CoursePage({ params }: PageProps) {
    const course = await prisma.course.findUnique({
        where: { slug: params.slug },
        include: {
            schedules: true
        }
    });

    if (!course) notFound();

    return <CourseDetail course={course} />;
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