export const donorFields = [
    {
        label: 'Naam',
        name: 'name',
        type: 'text' as const,
        placeholder: 'Jouw naam',
        required: true,
    },
    {
        label: 'E-mailadres',
        name: 'email',
        type: 'email' as const,
        placeholder: 'email@voorbeeld.be',
        required: true
    },
];