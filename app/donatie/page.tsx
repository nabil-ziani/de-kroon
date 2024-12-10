'use client';

import { useState } from 'react';
import { FaHandHoldingHeart, FaArrowRight, FaCreditCard, FaQrcode, FaEuroSign } from 'react-icons/fa';
import BuckarooPaymentButton from '@/components/buckaroo-payment-button';
import toast from 'react-hot-toast';

// Voorgestelde donatiebedragen
const SUGGESTED_AMOUNTS = [5, 10, 25, 50, 100, 250];

interface DonationAmount {
    amount: number;
    isCustom: boolean;
}

export default function DonatePage() {
    const [selectedAmount, setSelectedAmount] = useState<DonationAmount>({ amount: 25, isCustom: false });
    const [customAmount, setCustomAmount] = useState<string>('');
    const [isRecurring, setIsRecurring] = useState<boolean>(false);
    const [interval, setInterval] = useState<'monthly' | 'yearly'>('monthly');
    const [showQR, setShowQR] = useState<boolean>(false);

    const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        setCustomAmount(value);
        setSelectedAmount({ amount: parseInt(value) || 0, isCustom: true });
    };

    const handlePaymentSuccess = () => {
        toast.success('Doorverwijzen naar betaalpagina...');
    };

    const handlePaymentError = (error: Error) => {
        toast.error('Er is iets misgegaan bij het verwerken van uw donatie. Probeer het opnieuw.');
    };

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
                            Doneren
                        </h1>
                        <p className="text-xl text-white/90">
                            Steun ons bij het organiseren van activiteiten, onderhoud van het gebouw
                            en het verzorgen van onderwijs. Uw bijdrage maakt het verschil.
                        </p>
                    </div>
                </div>
            </section>

            {/* Donation Options */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-5xl font-bold text-gray-800 mb-16">
                            Donatie Opties
                        </h2>
                        <div className="grid gap-8">
                            {/* Donation Amount Selection */}
                            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                    Kies een bedrag
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                                    {SUGGESTED_AMOUNTS.map((amount) => (
                                        <button
                                            key={amount}
                                            onClick={() => setSelectedAmount({ amount, isCustom: false })}
                                            className={`p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-center gap-2
                                                ${selectedAmount.amount === amount && !selectedAmount.isCustom
                                                    ? 'border-crown bg-crown/10 text-crown'
                                                    : 'border-gray-200 hover:border-crown/50 text-gray-600 hover:text-crown'
                                                }`}
                                        >
                                            <FaEuroSign className="w-4 h-4" />
                                            <span className="text-lg font-semibold">{amount}</span>
                                        </button>
                                    ))}
                                </div>

                                {/* Custom Amount Input */}
                                <div className="mb-8">
                                    <label className="block text-gray-700 font-medium mb-2">
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
                                            className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-crown focus:ring-2 focus:ring-crown/20 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                {/* Recurring Options */}
                                <div className="mb-8">
                                    <label className="flex items-center mb-4">
                                        <input
                                            type="checkbox"
                                            checked={isRecurring}
                                            onChange={(e) => setIsRecurring(e.target.checked)}
                                            className="w-5 h-5 rounded border-gray-300 text-crown focus:ring-crown"
                                        />
                                        <span className="ml-2 text-gray-700">Maak dit een terugkerende donatie</span>
                                    </label>

                                    {isRecurring && (
                                        <div className="flex gap-4 ml-7">
                                            <button
                                                onClick={() => setInterval('monthly')}
                                                className={`px-4 py-2 rounded-lg border transition-all duration-300
                                                    ${interval === 'monthly'
                                                        ? 'border-crown bg-crown/10 text-crown'
                                                        : 'border-gray-200 hover:border-crown/50 text-gray-600'
                                                    }`}
                                            >
                                                Maandelijks
                                            </button>
                                            <button
                                                onClick={() => setInterval('yearly')}
                                                className={`px-4 py-2 rounded-lg border transition-all duration-300
                                                    ${interval === 'yearly'
                                                        ? 'border-crown bg-crown/10 text-crown'
                                                        : 'border-gray-200 hover:border-crown/50 text-gray-600'
                                                    }`}
                                            >
                                                Jaarlijks
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Donation Buttons */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <BuckarooPaymentButton
                                        amount={selectedAmount.amount}
                                        description={`Donatie aan De Kroon${isRecurring ? ` (${interval})` : ''}`}
                                        isRecurring={isRecurring}
                                        interval={isRecurring ? interval : undefined}
                                        onSuccess={handlePaymentSuccess}
                                        onError={handlePaymentError}
                                        className="bg-crown text-white px-6 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center group"
                                    >
                                        <span>Doneer nu met Bancontact/iDEAL</span>
                                        <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                                    </BuckarooPaymentButton>
                                    <button
                                        onClick={() => setShowQR(true)}
                                        className="bg-gray-800 text-white px-6 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center group"
                                    >
                                        <FaQrcode className="mr-2" />
                                        <span>Toon QR-code</span>
                                    </button>
                                </div>
                            </div>

                            {/* Bank Details Card - Behouden */}
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 shadow-lg relative overflow-hidden">
                                {/* Subtle yellow gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-crown/5 to-transparent" />
                                
                                <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                                    <div>
                                        <div className="flex-shrink-0 w-16 h-16 bg-crown/10 rounded-xl flex items-center justify-center mb-6">
                                            <FaCreditCard className="w-8 h-8 text-crown" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">
                                            Bankgegevens
                                        </h3>
                                        <p className="text-lg text-white/90 mb-8">
                                            U kunt uw donatie ook direct overmaken naar onze bankrekening.
                                        </p>
                                        <div className="space-y-4">
                                            <p className="text-white/90">
                                                <span className="font-semibold text-crown/90">Naam:</span> De Kroon
                                            </p>
                                            <p className="text-white/90">
                                                <span className="font-semibold text-crown/90">IBAN:</span> BE...
                                            </p>
                                            <p className="text-white/90">
                                                <span className="font-semibold text-crown/90">BIC:</span> ...
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-crown/10">
                                        <h3 className="text-xl font-bold text-white mb-4">Vragen?</h3>
                                        <p className="text-lg text-white/90 mb-6">
                                            Heeft u vragen over doneren of wilt u meer informatie? Neem gerust contact met ons op.
                                        </p>
                                        <a
                                            href="/contact"
                                            className="inline-flex items-center bg-crown/90 hover:bg-crown text-white px-6 py-3 rounded-xl font-semibold transition-colors text-sm uppercase tracking-wide group"
                                        >
                                            <span>Contact opnemen</span>
                                            <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* QR Code Modal */}
            {showQR && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Scan QR-code om te doneren
                        </h3>
                        <div className="aspect-square bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
                            {/* TODO: Implement actual QR code */}
                            <FaQrcode className="w-32 h-32 text-gray-400" />
                        </div>
                        <p className="text-gray-600 mb-6">
                            Scan deze code met uw bank app om €{selectedAmount.amount} te doneren
                        </p>
                        <button
                            onClick={() => setShowQR(false)}
                            className="w-full bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300"
                        >
                            Sluiten
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
} 