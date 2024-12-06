export default function Favicon() {
    return {
        icon: [
            {
                rel: 'icon',
                type: 'image/svg+xml',
                sizes: 'any',
                url: `data:image/svg+xml,${encodeURIComponent(`
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 4L24 12L21 24H11L8 12L16 4Z" fill="#50aae3"/>
                        <circle cx="16" cy="10" r="1.5" fill="#7ac991"/>
                        <circle cx="12" cy="14" r="1.5" fill="#7ac991"/>
                        <circle cx="20" cy="14" r="1.5" fill="#7ac991"/>
                    </svg>
                `)}`,
            },
        ],
    };
} 