'use client';

import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import EnrollmentModal from '@/components/dialogs/enrollment-modal';
import DisabledTooltip from '@/components/ui/disabled-tooltip';
import { ENROLLMENTS_OPEN } from '@/constants';

interface EnrollmentButtonProps {
    courseName: string;
}

export default function EnrollmentButton({ courseName }: EnrollmentButtonProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const buttonContent = (
        <button
            disabled={!ENROLLMENTS_OPEN}
            onClick={() => ENROLLMENTS_OPEN && setIsModalOpen(true)}
            className={`w-full px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group
                ${ENROLLMENTS_OPEN
                    ? 'bg-crown/95 text-white hover:bg-crown'
                    : 'bg-gray-100 text-gray-400'}`}
        >
            <span>Inschrijven</span>
            <FaArrowRight className={`ml-2 transform transition-transform duration-300 
                ${ENROLLMENTS_OPEN ? 'group-hover:translate-x-1' : ''}`} />
        </button>
    );

    return (
        <>
            {ENROLLMENTS_OPEN ? (
                buttonContent
            ) : (
                <DisabledTooltip>{buttonContent}</DisabledTooltip>
            )}

            <EnrollmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                courseName={courseName}
            />
        </>
    );
} 