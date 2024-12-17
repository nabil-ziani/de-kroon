import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

interface BuckarooPaymentButtonProps {
    amount: number;
    description: string;
    isRecurring?: boolean;
    interval?: 'monthly' | 'yearly';
    onSuccess?: () => void;
    onError?: (error: Error) => void;
    className?: string;
    children?: React.ReactNode;
}

export default function BuckarooPaymentButton({
    amount,
    description,
    isRecurring = false,
    interval,
    onSuccess,
    onError,
    className = '',
    children
}: BuckarooPaymentButtonProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        try {
            setIsLoading(true);

            const response = await fetch('/api/buckaroo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount,
                    description,
                    isRecurring,
                    interval,
                    returnUrl: `${window.location.origin}/donatie/bedankt`,
                    currency: 'EUR'
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Payment creation failed');
            }

            // Redirect naar Buckaroo checkout
            window.location.href = data.redirectUrl;
            
            onSuccess?.();
        } catch (error) {
            console.error('Payment error:', error);
            onError?.(error as Error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={isLoading}
            className={`relative ${className}`}
        >
            <span className={`flex items-center justify-center ${isLoading ? 'opacity-0' : 'opacity-100'} text-inherit`}>
                {children}
            </span>
            {isLoading && (
                <span className="absolute inset-0 flex items-center justify-center">
                    <FaSpinner className="w-5 h-5 animate-spin text-inherit" />
                </span>
            )}
        </button>
    );
} 