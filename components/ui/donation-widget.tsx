'use client';

import { useState, useEffect } from 'react';
import { FaHandHoldingHeart, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function DonationWidget() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);
    const [donorCount, setDonorCount] = useState<number>(0);
    const router = useRouter();

    useEffect(() => {
        // Wacht 30 seconden voordat de widget verschijnt
        const timer = setTimeout(() => {
            if (!isDismissed) {
                setIsVisible(true);
            }
        }, 10000);

        // Haal het aantal donateurs op
        fetch('/api/donations/count')
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setDonorCount(data.recurringCount);
                }
            })
            .catch(console.error);

        return () => clearTimeout(timer);
    }, [isDismissed]);

    const handleDonateClick = () => {
        setIsDismissed(true);
        router.push('/donatie');
    };

    if (!isVisible || isDismissed) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 max-w-sm w-full md:w-96 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative">
                {/* Close button */}
                <button
                    onClick={() => setIsDismissed(true)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <FaTimes />
                </button>

                <div className="text-center">
                    <div className="w-16 h-16 bg-girl/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <FaHandHoldingHeart className="w-8 h-8 text-girl" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Word ook Steunpilaar
                    </h3>

                    <p className="text-sm text-gray-600 italic mb-4 px-4">
                        "De meest geliefde daden bij Allah zijn degene die constant worden verricht, ook al zijn ze klein."
                    </p>

                    {donorCount > 0 && (
                        <p className="text-sm text-gray-600 mb-4">
                            Sluit je aan bij {donorCount} andere steunpilaren
                        </p>
                    )}

                    <button
                        onClick={handleDonateClick}
                        className="block w-full bg-gradient-to-br from-girl/80 to-girl text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300"
                    >
                        Steun vanaf €10 per maand
                    </button>
                </div>
            </div>
        </div>
    );
}