'use client';

import { useState } from 'react';
import { FaArrowRight, FaCreditCard, FaQrcode, FaEuroSign, FaRegClock, FaGraduationCap, FaUsers } from 'react-icons/fa';
import BuckarooPaymentButton from '@/components/donation/buckaroo-payment-button';
import toast from 'react-hot-toast';

// Voorgestelde donatiebedragen
const SUGGESTED_AMOUNTS = [10, 15, 25, 50, 100, 250];

interface DonationAmount {
    amount: number;
    isCustom: boolean;
}

export default function DonatePage() {
    const [selectedAmount, setSelectedAmount] = useState<DonationAmount>({ amount: 10, isCustom: false });
    const [customAmount, setCustomAmount] = useState<string>('');
    const [isRecurring, setIsRecurring] = useState<boolean>(true);

    const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        setCustomAmount(value);
        if (value) {
            setSelectedAmount({ amount: parseInt(value) || 0, isCustom: true });
        } else {
            setSelectedAmount({ amount: 10, isCustom: false });
        }
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
            <section className="relative py-6 md:py-24">
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
                        <h1 className="text-center md:text-left text-4xl md:text-6xl font-bold text-white mb-6">
                            Word een Steunpilaar
                        </h1>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="text-center md:text-left py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                            Jouw bijdrage is essentieel
                        </h2>
                        <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-12">
                            Help ons bouwen aan een betere toekomst voor onze jongeren. Met jouw steun kunnen we kinderen
                            de kans geven om te leren, spelen en groeien in een veilige, inspirerende omgeving.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 md:gap-12 mb-8 md:mb-16">
                            <div className="bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-crown/5 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8">
                                    <FaGraduationCap className="w-6 h-6 md:w-8 md:h-8 text-crown" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 text-center">Educatie</h3>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center">
                                    Kwaliteitsvolle lessen en educatieve momenten voor talentontwikkeling
                                </p>
                            </div>
                            <div className="bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-crown/5 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8">
                                    <FaUsers className="w-6 h-6 md:w-8 md:h-8 text-crown" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 text-center">Activiteiten</h3>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center">
                                    Inspirerende indoor en outdoor activiteiten die kinderen verbinden
                                </p>
                            </div>
                            <div className="bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-crown/5 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8">
                                    <FaRegClock className="w-6 h-6 md:w-8 md:h-8 text-crown" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 text-center">Duurzame Steun</h3>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center">
                                    Vaste maandelijkse steun voor continue ontwikkeling
                                </p>
                            </div>
                        </div>
                        <blockquote className="text-base md:text-xl text-gray-600 italic mb-8 text-center max-w-3xl mx-auto">
                            "De beste liefdadigheid is die welke regelmatig wordt gegeven, ook al is het weinig."
                            <footer className="text-sm text-gray-500 mt-4">
                                - De Profeet Mohammed ﷺ
                                <br />
                                <span className="text-xs">(Sahih al-Bukhari, 6465; Sahih Muslim, 2853)</span>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* Donation Options */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center md:text-left max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
                            Word Steunpilaar
                        </h2>
                        <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-12">
                            Kies een maandelijkse bijdrage die bij jou past. Elke bijdrage, hoe klein ook, maakt een verschil
                            in het leven van onze kinderen.
                        </p>
                        <div className="grid gap-4 md:gap-8">
                            {/* Donation Amount Selection */}
                            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-gray-100">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 mb-6 md:mb-8">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                                        Kies je bijdrage
                                    </h3>
                                    <div className="flex items-center">
                                        <label className="flex items-center bg-crown/5 px-4 py-2 rounded-xl border-2 border-crown/10">
                                            <input
                                                type="checkbox"
                                                checked={isRecurring}
                                                onChange={(e) => setIsRecurring(e.target.checked)}
                                                className="w-5 h-5 rounded border-gray-300 focus:ring-crown focus:ring-offset-0"
                                            />
                                            <span className="ml-2 text-gray-700 font-medium text-sm md:text-base">Maandelijkse donatie</span>
                                            <span className="ml-2 text-xs bg-crown/10 text-crown px-2 py-1 rounded-full">Aanbevolen</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 mb-6 md:mb-8">
                                    {SUGGESTED_AMOUNTS.map((amount) => (
                                        <button
                                            key={amount}
                                            onClick={() => {
                                                setSelectedAmount({ amount, isCustom: false });
                                                setCustomAmount('');
                                            }}
                                            className={`p-3 md:p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-center gap-2
                                                ${selectedAmount.amount === amount && !selectedAmount.isCustom
                                                    ? 'border-crown bg-crown/10 text-crown'
                                                    : 'border-gray-200 hover:border-crown/50 text-gray-600 hover:text-crown'
                                                }`}
                                        >
                                            <FaEuroSign className="w-3 h-3 md:w-4 md:h-4" />
                                            <span className="text-base md:text-lg font-semibold">{amount}</span>
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

                                {/* Recurring Info */}
                                {isRecurring && (
                                    <div className="mb-6 md:mb-8">
                                        <div className="bg-gray-50 rounded-xl p-4 md:p-6">
                                            <h4 className="text-sm md:text-base font-medium text-gray-800 mb-2">
                                                Informatie over maandelijkse donaties
                                            </h4>
                                            <div className="space-y-2 text-sm text-gray-600">
                                                <p>
                                                    Door een maandelijkse donatie in te stellen, geeft u toestemming voor een doorlopende SEPA-incasso.
                                                </p>
                                                <p>
                                                    U kunt uw machtiging op twee manieren stopzetten:
                                                </p>
                                                <ul className="list-disc list-inside ml-2 space-y-1">
                                                    <li>Via uw eigen bank (intrekken SEPA-machtiging)</li>
                                                    <li>Door contact op te nemen met De Kroon via{' '}
                                                        <a href="mailto:info@kidskroon.be" className="text-crown hover:underline">
                                                            info@kidskroon.be
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Donation Buttons */}
                                <div className="grid gap-4">
                                    <BuckarooPaymentButton
                                        amount={selectedAmount.amount}
                                        description={`${isRecurring ? 'Maandelijkse' : 'Eenmalige'} donatie aan De Kroon`}
                                        isRecurring={isRecurring}
                                        onSuccess={handlePaymentSuccess}
                                        onError={handlePaymentError}
                                        className="bg-crown text-white px-6 py-3 md:py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center group relative"
                                    >
                                        <span>{isRecurring ? 'Word Steunpilaar' : 'Doneer nu'}</span>
                                        <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                                    </BuckarooPaymentButton>
                                </div>
                            </div>

                            {/* Bank Details Card */}
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 md:p-10 shadow-lg relative overflow-hidden">
                                {/* Subtle yellow gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-crown/5 to-transparent" />

                                <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                                    <div>
                                        <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-crown/10 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                                            <FaCreditCard className="w-6 h-6 md:w-8 md:h-8 text-crown" />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                                            Bankgegevens
                                        </h3>
                                        <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8">
                                            U kunt uw donatie ook direct overmaken naar onze bankrekening.
                                        </p>
                                        <div className="space-y-3 md:space-y-4">
                                            <p className="text-white/90">
                                                <span className="font-semibold text-crown/90">Naam:</span> De Kroon
                                            </p>
                                            <p className="text-white/90">
                                                <span className="font-semibold text-crown/90">IBAN:</span> BE93 9501 6793 9667
                                            </p>
                                            <p className="text-white/90">
                                                <span className="font-semibold text-crown/90">BIC:</span> CTBKBEBX
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8">
                                        <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Vragen?</h3>
                                        <p className="text-base md:text-lg text-white/90 mb-6">
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
        </main>
    );
} 