'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FaTimes } from 'react-icons/fa';
import EnrollmentForm from '@/components/forms/enrollment-form';

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
                    <div className="flex min-h-full items-center justify-center p-2 sm:p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="relative w-full max-w-6xl transform transition-all">
                                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[85vh]">
                                    {/* Header - Fixed */}
                                    <div className="sticky top-0 bg-white px-4 sm:px-8 py-4 sm:py-6 border-b border-gray-100 z-10">
                                        <button
                                            onClick={onClose}
                                            className="absolute right-3 sm:right-6 top-3 sm:top-6 text-gray-400 hover:text-gray-600 transition-colors rounded-lg p-2 hover:bg-gray-100"
                                        >
                                            <FaTimes className="w-5 h-5" />
                                        </button>

                                        <Dialog.Title className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2 pr-12">
                                            Inschrijven voor {courseName}
                                        </Dialog.Title>
                                        <p className="text-sm sm:text-base text-gray-500">
                                            Vul het formulier in en we nemen zo snel mogelijk contact met u op.
                                        </p>
                                    </div>

                                    {/* Scrollable Content */}
                                    <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-4 sm:py-6">
                                        <EnrollmentForm
                                            onSuccess={onClose}
                                            defaultValues={{ courseName }}
                                        />
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
} 