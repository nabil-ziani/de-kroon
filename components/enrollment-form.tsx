import { Form } from '@/components/ui/form';
import { enrollmentFormSchema, type EnrollmentFormData } from '@/utils/validation';
import { FaArrowRight } from 'react-icons/fa';
import toast from 'react-hot-toast';

type Props = {
    onSuccess?: () => void;
    defaultValues?: Partial<EnrollmentFormData>;
};

export default function EnrollmentForm({ onSuccess, defaultValues }: Props) {
    const handleSubmit = async (data: EnrollmentFormData) => {
        const promise = new Promise((resolve, reject) => {
            // Simuleer een API call
            setTimeout(() => {
                // Hier komt later de echte API call
                if (Math.random() > 0.1) { // 90% kans op succes voor test
                    resolve(data);
                    onSuccess?.(); // Sluit de modal bij succes
                } else {
                    reject(new Error('Er is iets misgegaan bij het versturen van de inschrijving.'));
                }
            }, 1000);
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

    // Eerste rij (2 kolommen)
    const firstRowFields = [
        {
            label: 'Naam student',
            name: 'studentName',
            type: 'text' as const,
            placeholder: 'Naam van de student',
            required: true,
            gridCols: 1,
        },
        {
            label: 'Telefoonnummer',
            name: 'phone',
            type: 'tel' as const,
            placeholder: '+32 XXX XX XX XX',
            required: true,
            gridCols: 1,
        }
    ];

    // Tweede rij (2 kolommen)
    const secondRowFields = [
        {
            label: 'Geboortedatum',
            name: 'birthDate',
            type: 'date' as const,
            required: true,
            gridCols: 1,
        },
        {
            label: 'E-mailadres',
            name: 'email',
            type: 'email' as const,
            placeholder: 'uw@email.com',
            required: true,
            gridCols: 1,
        }
    ];

    // Extra informatie (volle breedte)
    const fullWidthFields = [
        {
            label: 'Extra informatie',
            name: 'message',
            type: 'textarea' as const,
            placeholder: 'Eventuele opmerkingen of vragen...',
            gridCols: 2,
        }
    ];

    // Combineer alle velden
    const fields = [...firstRowFields, ...secondRowFields, ...fullWidthFields];

    return (
        <Form
            schema={enrollmentFormSchema}
            onSubmit={handleSubmit}
            fields={fields}
            defaultValues={defaultValues}
            submitLabel={
                <div className="flex items-center justify-center">
                    <span>Inschrijven</span>
                    <FaArrowRight className="ml-2 transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                </div>
            }
            className="space-y-4"
            inputClassName="w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-crown/50 transition-all duration-300"
            labelClassName="block text-gray-700 font-medium mb-2"
            submitClassName="w-full bg-crown text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-opacity-90 transition-colors text-sm uppercase tracking-wide flex items-center justify-center group"
            gridClassName="grid md:grid-cols-2 gap-4"
        />
    );
} 