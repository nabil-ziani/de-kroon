'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FaTimes, FaArrowRight } from 'react-icons/fa';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    courseName: string;
};

export default function EnrollmentModal({ isOpen, onClose, courseName }: Props) {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog onClose={onClose} className="relative z-50">
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
                    <div className="min-h-full flex items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="bg-white rounded-2xl shadow-xl w-full max-w-4xl transform transition-all">
                                <div className="relative p-8">
                                    <button
                                        onClick={onClose}
                                        className="absolute right-6 top-6 text-gray-400 hover:text-gray-600 transition-colors rounded-lg p-2 hover:bg-gray-100"
                                    >
                                        <FaTimes className="w-5 h-5" />
                                    </button>
                                    
                                    <div className="mb-8">
                                        <Dialog.Title className="text-3xl font-bold text-gray-800 mb-2">
                                            Inschrijven voor {courseName}
                                        </Dialog.Title>
                                        <p className="text-gray-500">
                                            Vul het formulier in en we nemen zo snel mogelijk contact met u op.
                                        </p>
                                    </div>

                                    <form className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Naam
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-crown/50 transition-all duration-300"
                                                    placeholder="Uw volledige naam"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    E-mailadres
                                                </label>
                                                <input
                                                    type="email"
                                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-crown/50 transition-all duration-300"
                                                    placeholder="uw@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Telefoonnummer
                                            </label>
                                            <input
                                                type="tel"
                                                className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-crown/50 transition-all duration-300"
                                                placeholder="+32 XXX XX XX XX"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Bericht (optioneel)
                                            </label>
                                            <textarea
                                                className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-crown/50 transition-all duration-300"
                                                rows={3}
                                                placeholder="Uw bericht..."
                                            />
                                        </div>

                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                className="w-full bg-crown text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-opacity-90 transition-colors text-sm uppercase tracking-wide flex items-center justify-center group"
                                            >
                                                <span>Inschrijven</span>
                                                <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
} 