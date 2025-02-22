import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

interface BuckarooPaymentButtonProps {
    amount: number;
    description: string;
    isRecurring?: boolean;
    onSuccess?: () => void;
    onError?: (error: Error) => void;
    className?: string;
    children?: React.ReactNode;
    formRef?: any;
}

export default function BuckarooPaymentButton({
    amount,
    description,
    isRecurring,
    onSuccess,
    onError,
    className = '',
    children,
    formRef,
}: BuckarooPaymentButtonProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        try {
            if (!formRef) {
                return;
            }

            // Trigger validation and wait for it
            const isValid = await formRef.trigger();

            if (!isValid) {
                return;
            }

            setIsLoading(true);

            const returnUrl = new URL('/api/buckaroo/return', window.location.origin).toString();

            // Get form values at time of click
            const customerName = formRef.getValues('name');
            const customerEmail = formRef.getValues('email');

            const response = await fetch('/api/buckaroo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount,
                    description,
                    isRecurring,
                    returnUrl,
                    returnUrlCancel: returnUrl,
                    returnUrlError: returnUrl,
                    returnUrlReject: returnUrl,
                    currency: 'EUR',
                    customerName,
                    customerEmail
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Payment creation failed');
            }

            // Redirect naar Buckaroo checkout
            if (data.RequiredAction?.RedirectURL) {
                window.location.href = data.RequiredAction.RedirectURL;
                onSuccess?.();
            } else {
                throw new Error('No redirect URL received');
            }
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
            disabled={isLoading || amount <= 0}
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