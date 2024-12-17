import { Form } from '@/components/ui/form';
import { enrollmentFormSchema, type EnrollmentFormData } from '@/utils/validation';
import { FaArrowRight } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';
import PreviousExperienceModal from './previous-experience-modal';
import { Dialog } from '@headlessui/react';

type Props = {
    onSuccess?: () => void;
    defaultValues?: Partial<EnrollmentFormData>;
};

export default function EnrollmentForm({ onSuccess, defaultValues }: Props) {
    const [showPreviousExperienceModal, setShowPreviousExperienceModal] = useState(false);
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
    const [formRef, setFormRef] = useState<any>(null);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        if (formRef) {
            const subscription = formRef.watch((value: any) => {
                console.log("previousExperience", !!value.previousExperience);
                setIsDisabled(!!value.previousExperience);
                console.log("isDisabled", isDisabled);
            });
            return () => subscription.unsubscribe();
        }
    }, [formRef]);

    const handleSubmit = async (data: EnrollmentFormData) => {
        try {
            const loadingToast = toast.loading('Inschrijving verwerken...');
            const response = await fetch('/api/enrollment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();

            if (!response.ok) {
                console.error('Server error:', responseData);
                toast.dismiss(loadingToast);
                throw new Error(responseData.message || 'Er is iets misgegaan bij het versturen van de inschrijving.');
            }

            if (responseData.success) {
                toast.dismiss(loadingToast);
                toast.success('Uw inschrijving is succesvol verzonden! We nemen zo snel mogelijk contact met u op.');
                onSuccess?.();
            }

            return responseData;
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error(error instanceof Error ? error.message : 'Er is iets misgegaan bij het versturen van de inschrijving.');
            throw error;
        }
    };

    const handlePreviousExperience = (experienceData: any) => {
        formRef.setValue('previousExperience', experienceData);
        formRef.setValue('hadPreviousClasses', true);
        toast.success('Test succesvol voltooid!');
        setShowPreviousExperienceModal(false);
    };

    const handlePreviousExperienceClose = () => {
        if (showPreviousExperienceModal) {
            setShowPreviousExperienceModal(false);
            // Reset alleen als er geen test resultaten zijn
            if (!formRef.getValues('previousExperience')) {
                formRef.setValue('hadPreviousClasses', false);
            }
        }
    };

    const handleConfirmationCancel = () => {
        setShowConfirmationDialog(false);
        formRef.setValue('hadPreviousClasses', false);
    };

    // Kind gegevens
    const childFields = [
        {
            label: 'Naam kind',
            name: 'childName',
            type: 'text' as const,
            placeholder: 'Volledige naam van het kind',
            required: true,
            gridCols: 2,
        },
        {
            label: 'Geboortedatum',
            name: 'birthDate',
            type: 'date' as const,
            required: true,
            gridCols: 1,
        },
        {
            label: 'Eerder les gevolgd?',
            name: 'hadPreviousClasses',
            type: 'checkbox' as const,
            gridCols: 3,
            className: 'flex items-center h-[42px]',
            labelPosition: 'right' as const,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                const checked = e.target.checked;
                formRef.setValue('hadPreviousClasses', checked);
                if (checked && !formRef.getValues('previousExperience')) {
                    setShowConfirmationDialog(true);
                }
            },
            disabled: isDisabled,
        }
    ];

    // Vader gegevens
    const fatherFields = [
        {
            label: 'Voornaam',
            name: 'father.firstName',
            type: 'text' as const,
            placeholder: 'Voornaam',
            gridCols: 1,
            hint: 'Vul de gegevens van minstens één ouder volledig in'
        },
        {
            label: 'Familienaam',
            name: 'father.lastName',
            type: 'text' as const,
            placeholder: 'Familienaam',
            gridCols: 2,
        },
        {
            label: 'Telefoon',
            name: 'father.phone',
            type: 'tel' as const,
            placeholder: '+32 ...',
            gridCols: 1,
        },
        {
            label: 'E-mailadres',
            name: 'father.email',
            type: 'email' as const,
            placeholder: 'email@voorbeeld.be',
            gridCols: 2,
        },
    ];

    // Moeder gegevens
    const motherFields = [
        {
            label: 'Voornaam',
            name: 'mother.firstName',
            type: 'text' as const,
            placeholder: 'Voornaam',
            gridCols: 1,
            hint: 'Vul de gegevens van minstens één ouder volledig in'
        },
        {
            label: 'Familienaam',
            name: 'mother.lastName',
            type: 'text' as const,
            placeholder: 'Familienaam',
            gridCols: 2,
        },
        {
            label: 'Telefoon',
            name: 'mother.phone',
            type: 'tel' as const,
            placeholder: '+32 ...',
            gridCols: 1,
        },
        {
            label: 'E-mailadres',
            name: 'mother.email',
            type: 'email' as const,
            placeholder: 'email@voorbeeld.be',
            gridCols: 2,
        },
    ];

    // Adres gegevens
    const addressFields = [
        {
            label: 'Straat',
            name: 'street',
            type: 'text' as const,
            placeholder: 'Kroonstraat',
            required: true,
            gridCols: 1,
        },
        {
            label: 'Huisnummer',
            name: 'houseNumber',
            type: 'text' as const,
            placeholder: '72',
            required: true,
            gridCols: 1,
        },
        {
            label: 'Gemeente',
            name: 'city',
            type: 'text' as const,
            placeholder: 'Borgerhout',
            required: true,
            gridCols: 1,
        },
    ];

    // Extra info
    const extraFields = [
        {
            label: 'Wie haalt het kind op?',
            name: 'pickupMethod',
            type: 'select' as const,
            options: [
                { value: 'ALONE', label: 'Kind gaat alleen naar huis' },
                { value: 'PARENTS', label: 'Ouders halen kind op' },
                { value: 'SIBLINGS', label: 'Broer/zus haalt kind op' },
            ],
            required: true,
            gridCols: 3,
        },
        {
            label: 'Leerstoornissen',
            name: 'learningDisorders',
            type: 'textarea' as const,
            placeholder: 'Beschrijf eventuele leerstoornissen...',
            gridCols: 3,
        },
        {
            label: 'Allergieën',
            name: 'allergies',
            type: 'textarea' as const,
            placeholder: 'Beschrijf eventuele allergieën...',
            gridCols: 3,
        },
    ];

    // Extra opmerkingen
    const messageField = [
        {
            label: 'Extra opmerkingen',
            name: 'message',
            type: 'textarea' as const,
            placeholder: 'Eventuele opmerkingen of vragen...',
            gridCols: 3,
            className: 'col-span-full',
        }
    ];

    // Combineer alle velden
    const fields = [
        { title: 'Gegevens kind', fields: [...childFields] },
        {
            title: 'Gegevens vader',
            hint: 'Vul de gegevens van minstens één ouder volledig in',
            fields: fatherFields.map(field => ({ ...field, hint: undefined }))
        },
        {
            title: 'Gegevens moeder',
            hint: 'Vul de gegevens van minstens één ouder volledig in',
            fields: motherFields.map(field => ({ ...field, hint: undefined }))
        },
        { title: 'Adres', fields: addressFields },
        { title: 'Extra informatie', fields: [...extraFields, ...messageField] },
    ];

    return (
        <>
            <Form
                schema={enrollmentFormSchema}
                onSubmit={handleSubmit}
                defaultValues={defaultValues}
                formRef={setFormRef}
                submitLabel={
                    <div className="flex items-center justify-center">
                        <span>Inschrijven</span>
                        <FaArrowRight className="ml-2 transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                    </div>
                }
                className="space-y-8"
                sections={fields}
                inputClassName="w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-crown/50 transition-all duration-300"
                labelClassName="block text-gray-700 font-medium mb-2"
                submitClassName="w-full bg-crown text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-opacity-90 transition-colors text-sm uppercase tracking-wide flex items-center justify-center group"
                gridClassName="grid md:grid-cols-3 gap-4"
                sectionClassName="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                sectionTitleClassName="text-xl font-bold text-gray-800 mb-2"
                hintClassName="text-sm text-gray-500"
            />

            {/* Confirmation Dialog */}
            <Dialog
                open={showConfirmationDialog}
                onClose={() => setShowConfirmationDialog(false)}
                className="relative z-[200]"
            >
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="mx-auto max-w-lg bg-white rounded-2xl p-8 relative z-[200] max-h-[90vh] flex flex-col">
                        <Dialog.Title className="text-2xl font-bold text-gray-800 mb-4">
                            Niveau test
                        </Dialog.Title>
                        <div className="overflow-y-auto flex-1 mb-6">
                            <p className="text-gray-600">
                                Om het niveau van uw kind beter te kunnen inschatten en in de juiste groep te kunnen plaatsen, vragen we u om een korte vragenlijst in te vullen.
                            </p>
                            <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                                <p className="text-amber-700 text-sm">
                                    <strong>Let op:</strong> Deze test is verplicht voor leerlingen die eerder les hebben gevolgd.
                                    Zonder deze informatie kunnen we de inschrijving niet verwerken.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
                            <button
                                onClick={handleConfirmationCancel}
                                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors focus:outline-none"
                            >
                                Annuleren
                            </button>
                            <button
                                onClick={() => {
                                    setShowConfirmationDialog(false);
                                    setShowPreviousExperienceModal(true);
                                }}
                                className="bg-crown text-white px-6 py-2 rounded-xl font-medium hover:bg-opacity-90 transition-colors focus:outline-none"
                            >
                                Start test
                            </button>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>

            {/* Previous Experience Modal */}
            <PreviousExperienceModal
                isOpen={showPreviousExperienceModal}
                onClose={handlePreviousExperienceClose}
                onSubmit={handlePreviousExperience}
            />
        </>
    );
}