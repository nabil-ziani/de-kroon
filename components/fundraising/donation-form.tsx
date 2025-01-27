'use client';

import { useState } from 'react';
import BuckarooPaymentButton from '@/components/donation/buckaroo-payment-button';
import { FaArrowRight } from 'react-icons/fa';

interface DonationFormProps {
    campaignId: string;
}

const SUGGESTED_AMOUNTS = [10, 25, 50, 100, 200];

export default function DonationForm({ campaignId }: DonationFormProps) {
    const [amount, setAmount] = useState<number>(100);
    const [customAmount, setCustomAmount] = useState<string>('');

    const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        setCustomAmount(value);

        if (value) {
            setAmount(parseInt(value) || 0);
        } else {
            setAmount(100);
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Kies je donatiebedrag
            </h2>

            {/* Suggested amounts */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-6">
                {SUGGESTED_AMOUNTS.map((suggestedAmount) => (
                    <button
                        key={suggestedAmount}
                        onClick={() => {
                            setAmount(suggestedAmount);
                            setCustomAmount('');
                        }}
                        className={`py-3 px-4 rounded-xl text-lg font-semibold transition-all duration-200
                            ${amount === suggestedAmount
                                ? 'bg-crown text-white shadow-sm'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        €{suggestedAmount}
                    </button>
                ))}
            </div>

            {/* Custom Amount Input */}
            <div className="mb-6 md:mb-8">
                <label className="block text-sm md:text-base text-gray-700 font-medium mb-2">
                    Of voer een eigen bedrag in
                </label>
                <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                        €
                    </span>
                    <input
                        type="text"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        placeholder="Voer bedrag in"
                        className="w-full pl-8 pr-4 py-3 rounded-xl border-2 text-gray-800 border-gray-200 focus:border-crown focus:ring-0 transition-all duration-300 outline-none text-sm md:text-base"
                    />
                </div>
            </div>

            {/* Payment button */}
            <div className="flex justify-center">
                <BuckarooPaymentButton
                    amount={amount}
                    description={`Donatie - ${campaignId}`}
                    campaign={campaignId}
                    className="w-full sm:w-auto px-8 py-4 bg-crown text-white rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-200 disabled:opacity-50"
                >
                    Doneer €{amount.toLocaleString()}
                </BuckarooPaymentButton>
            </div>

            <p className="mt-4 text-sm text-gray-500 text-center">
                Je donatie wordt veilig verwerkt door Buckaroo
            </p>
        </div>
    );
} 