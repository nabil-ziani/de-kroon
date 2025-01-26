'use client';

import { useState, useEffect, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FaTimes } from 'react-icons/fa';
import FundraisingProgress from './progress';
import DonationForm from './donation-form';

interface FundraisingPageProps {
    totalDonated: number;
    progress: number;
    campaignId: string;
    goal: number;
}

export default function FundraisingPage({ totalDonated, progress, campaignId, goal }: FundraisingPageProps) {
    const [showDonationModal, setShowDonationModal] = useState(false);
    const [showAutoModal, setShowAutoModal] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAutoModal(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="min-h-screen bg-white">
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
                    <div className="max-w-4xl mx-auto text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">
                            Help ons groeien
                        </h1>
                    </div>
                </div>
            </section>

            <div id="donate-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <p className="text-lg text-gray-600">
                        Elke bijdrage, groot of klein, helpt ons dit doel te bereiken.
                        Samen maken we het verschil voor onze gemeenschap.
                    </p>
                </div>

                <div className="relative mb-16">
                    <FundraisingProgress
                        current={totalDonated}
                        goal={goal}
                        progress={progress}
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={() => setShowDonationModal(true)}
                        className="px-8 py-4 text-xl bg-crown text-white rounded-xl font-medium hover:bg-crown/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Doneer nu
                    </button>
                </div>
            </div>

            {/* Donation Modal */}
            <Transition show={showDonationModal || showAutoModal} as={Fragment}>
                <Dialog onClose={() => {
                    setShowDonationModal(false);
                    setShowAutoModal(false);
                }} className="relative z-50">
                    {/* Backdrop */}
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
                    </Transition.Child>

                    {/* Modal */}
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-5">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative w-full max-w-2xl transform transition-all">
                                    <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                                        <button
                                            onClick={() => {
                                                setShowDonationModal(false);
                                                setShowAutoModal(false);
                                            }}
                                            className="absolute right-6 top-6 text-gray-400 hover:text-gray-600 transition-colors rounded-lg p-2 hover:bg-gray-100"
                                        >
                                            <FaTimes className="w-5 h-5" />
                                        </button>
                                        <div className="p-8 md:p-12">
                                            <DonationForm campaignId={campaignId} />
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </main>
    );
} 
