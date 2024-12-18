import { Suspense } from 'react';
import ConfirmationContent from '@/components/donation/confirmation-content';

export default function ConfirmationPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ConfirmationContent />
        </Suspense>
    );
} 