import { Form } from '@/components/ui/form';
import { contactFormSchema, type ContactFormData } from '@/utils/validation';
import { FaArrowRight } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function ContactForm() {
    const handleSubmit = async (data: ContactFormData) => {
        const promise = new Promise((resolve, reject) => {
            // Simuleer een API call
            setTimeout(() => {
                // Hier komt later de echte API call
                if (Math.random() > 0.1) { // 90% kans op succes voor test
                    resolve(data);
                } else {
                    reject(new Error('Er is iets misgegaan bij het versturen van het bericht.'));
                }
            }, 1000);
        });

        await toast.promise(
            promise,
            {
                loading: 'Bericht wordt verzonden...',
                success: 'Uw bericht is succesvol verzonden! We nemen zo snel mogelijk contact met u op.',
                error: (err) => err.message || 'Er is iets misgegaan bij het versturen van het bericht.',
            }
        );
    };

    // Eerste rij (2 kolommen)
    const firstRowFields = [
        {
            label: 'Naam',
            name: 'name',
            type: 'text' as const,
            placeholder: 'Uw naam',
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

    // Volle breedte velden
    const fullWidthFields = [
        {
            label: 'Onderwerp',
            name: 'subject',
            type: 'text' as const,
            placeholder: 'Onderwerp van uw bericht',
            required: true,
            gridCols: 2,
        },
        {
            label: 'Bericht',
            name: 'message',
            type: 'textarea' as const,
            placeholder: 'Uw bericht...',
            required: true,
            gridCols: 2,
        }
    ];

    // Combineer alle velden
    const fields = [...firstRowFields, ...fullWidthFields];

    return (
        <Form
            schema={contactFormSchema}
            onSubmit={handleSubmit}
            fields={fields}
            submitLabel={
                <div className="flex items-center justify-center">
                    <span>Verstuur bericht</span>
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