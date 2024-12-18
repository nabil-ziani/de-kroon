'use client';

import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import EnrollmentModal from '@/components/dialogs/enrollment-modal';

export default function EnrollmentButton({ courseName }: { courseName: string }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-crown text-white px-6 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center group"
            >
                <span>Direct Inschrijven</span>
                <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <EnrollmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                courseName={courseName}
            />
        </>
    );
} 