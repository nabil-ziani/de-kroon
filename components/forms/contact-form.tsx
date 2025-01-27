import { Form } from '@/components/ui/form';
import { contactFormSchema, type ContactFormData } from '@/utils/validation';
import { FaArrowRight } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function ContactForm() {
    const handleSubmit = async (data: ContactFormData) => {
        const promise = fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(async (res) => {
            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message || 'Er is iets misgegaan bij het versturen van het bericht.');
            }
            return res.json();
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
            labelClassName="block text-gray-700 font-medium mb-2"
            inputClassName="w-full pl-8 pr-4 py-3 rounded-xl border-2 text-gray-800 border-gray-200 focus:border-crown focus:ring-0 transition-all duration-300 outline-none text-sm md:text-base"
            submitClassName="w-full bg-crown text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-opacity-90 transition-colors text-sm uppercase tracking-wide flex items-center justify-center group"
            gridClassName="grid md:grid-cols-1 gap-4"
        />
    );
} 