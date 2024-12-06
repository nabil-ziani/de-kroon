export default function LogoAlt() {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Centrale kroon */}
            <path
                d="M12 22L20 12L28 22H12Z"
                fill="#FACC15"
            />
            {/* Kinderen silhouetten */}
            <path
                d="M16 26a4 4 0 1 1 8 0"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <circle cx="20" cy="20" r="2" fill="#2563EB" />
            {/* Kleine kroontjes voor de kinderen */}
            <path
                d="M14 18l3-2 3 2M20 18l3-2 3 2"
                stroke="#FACC15"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            {/* Educatieve elementen */}
            <path
                d="M10 30h20M13 34h14"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
} 