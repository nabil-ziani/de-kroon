import { Form } from '@/components/ui/form';
import { enrollmentFormSchema, type EnrollmentFormData } from '@/utils/validation';
import { FaArrowRight } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useState } from 'react';

type Props = {
    onSuccess?: () => void;
    defaultValues?: Partial<EnrollmentFormData>;
};

export default function EnrollmentForm({ onSuccess, defaultValues }: Props) {
    const [showPreviousLevel, setShowPreviousLevel] = useState(false);

    const handleSubmit = async (data: EnrollmentFormData) => {
        const promise = fetch('/api/enrollment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(async (res) => {
            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message || 'Er is iets misgegaan bij het versturen van de inschrijving.');
            }
            const result = await res.json();
            if (result.success) {
                onSuccess?.();
            }
            return result;
        });

        await toast.promise(
            promise,
            {
                loading: 'Inschrijving wordt verwerkt...',
                success: 'Uw inschrijving is succesvol verzonden! We nemen zo snel mogelijk contact met u op.',
                error: (err) => err.message || 'Er is iets misgegaan bij het versturen van de inschrijving.',
            }
        );
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
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setShowPreviousLevel(e.target.checked),
            gridCols: 3,
            className: 'flex items-center h-[42px]',
            labelPosition: 'right' as const,
        },
        {
            label: 'Niveau en ervaring',
            name: 'previousLevel',
            type: 'textarea' as const,
            placeholder: 'Beschrijf het niveau en ervaring van het kind...',
            gridCols: 3,
            className: showPreviousLevel ? 'opacity-100 transition-opacity duration-200' : 'hidden',
        }
    ];

    // Vader gegevens
    const fatherFields = [
        {
            label: 'Voornaam',
            name: 'fatherFirstName',
            type: 'text' as const,
            placeholder: 'Voornaam',
            required: true,
            gridCols: 1,
        },
        {
            label: 'Familienaam',
            name: 'fatherLastName',
            type: 'text' as const,
            placeholder: 'Familienaam',
            required: true,
            gridCols: 2,
        },
        {
            label: 'Telefoon',
            name: 'fatherPhone',
            type: 'tel' as const,
            placeholder: '+32 ...',
            required: true,
            gridCols: 1,
        },
        {
            label: 'E-mailadres',
            name: 'fatherEmail',
            type: 'email' as const,
            placeholder: 'email@voorbeeld.be',
            gridCols: 2,
            hint: 'Minstens één e-mailadres van een ouder is verplicht',
        },
    ];

    // Moeder gegevens
    const motherFields = [
        {
            label: 'Voornaam',
            name: 'motherFirstName',
            type: 'text' as const,
            placeholder: 'Voornaam',
            required: true,
            gridCols: 1,
        },
        {
            label: 'Familienaam',
            name: 'motherLastName',
            type: 'text' as const,
            placeholder: 'Familienaam',
            required: true,
            gridCols: 2,
        },
        {
            label: 'Telefoon',
            name: 'motherPhone',
            type: 'tel' as const,
            placeholder: '+32 ...',
            required: true,
            gridCols: 1,
        },
        {
            label: 'E-mailadres',
            name: 'motherEmail',
            type: 'email' as const,
            placeholder: 'email@voorbeeld.be',
            gridCols: 2,
            hint: 'Minstens één e-mailadres van een ouder is verplicht',
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
        { title: 'Gegevens vader', fields: fatherFields },
        { title: 'Gegevens moeder', fields: motherFields },
        { title: 'Adres', fields: addressFields },
        { title: 'Extra informatie', fields: [...extraFields, ...messageField] },
    ];

    return (
        <Form
            schema={enrollmentFormSchema}
            onSubmit={handleSubmit}
            defaultValues={defaultValues}
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
            sectionTitleClassName="text-xl font-bold text-gray-800 mb-6"
            hintClassName="text-sm text-gray-500 mt-1"
        />
    );
} 