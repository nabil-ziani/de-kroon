'use client';

import { useState } from 'react';
import { Form } from '@/components/ui/form';
import { donorSchema } from '@/utils/validation';
import BuckarooPaymentButton from '@/components/donation/buckaroo-payment-button';
import { FaArrowRight } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { donorFields } from '@/utils/form-fields';

interface DonationFormProps {
    campaignId: string;
}

const SUGGESTED_AMOUNTS = [10, 25, 50, 100, 200];

export default function DonationForm({ campaignId }: DonationFormProps) {
    const [amount, setAmount] = useState<number>(100);
    const [customAmount, setCustomAmount] = useState<string>('');
    const [formRef, setFormRef] = useState<any>(null);

    const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        setCustomAmount(value);

        if (value) {
            setAmount(parseInt(value) || 0);
        } else {
            setAmount(100);
        }
    };

    const handlePaymentError = (error: Error) => {
        toast.error('Er is iets misgegaan bij het verwerken van de betaling.');
    };

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            {/* Bedrag sectie */}
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Kies je donatiebedrag
                </h2>

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

                <div className="mb-8">
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
            </div>

            {/* Gegevens sectie */}
            <div className="mt-6 mb-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Persoonlijke gegevens
                </h2>

                <Form
                    schema={donorSchema}
                    onSubmit={() => { }}
                    formRef={setFormRef}
                    fields={donorFields}
                    className="space-y-4"
                    inputClassName="w-full pl-8 pr-4 py-3 rounded-xl border-2 text-gray-800 border-gray-200 focus:border-crown focus:ring-0 transition-all duration-300 outline-none text-sm md:text-base"
                    labelClassName="block text-gray-700 font-medium mb-2"
                    submitClassName="w-full bg-crown text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-opacity-90 transition-colors text-sm uppercase tracking-wide flex items-center justify-center group"
                    gridClassName="grid md:grid-cols-1 gap-4"
                />

                {/* Doneer knop */}
                <BuckarooPaymentButton
                    amount={amount}
                    description={`Inzameling` + ` - ${campaignId}`}
                    customerName={formRef?.getValues('name')}
                    customerEmail={formRef?.getValues('email')}
                    onError={handlePaymentError}
                    className="w-full px-8 py-4 bg-crown text-white rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-200 disabled:opacity-50"
                    formRef={formRef}
                >
                    Doneer €{amount.toLocaleString()}
                    <FaArrowRight className="ml-2 transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                </BuckarooPaymentButton>

                <p className="text-sm text-gray-500 text-center mt-2">
                    Je donatie wordt veilig verwerkt door Buckaroo
                </p>
            </div>
        </div>
    );
} 