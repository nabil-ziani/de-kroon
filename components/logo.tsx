export default function Logo() {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Kroon basis */}
            <path
                d="M8 25L14 15L20 22L26 15L32 25V30H8V25Z"
                fill="#FACC15" // Geel voor de kroon
            />
            {/* Kroon punten */}
            <path
                d="M14 15L12 10L14 15ZM20 22L18 8L20 22ZM26 15L28 10L26 15Z"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
            />
            {/* Gestileerde kinderen silhouetten */}
            <path
                d="M16 28C16 24 20 24 20 24C20 24 24 24 24 28"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
            />
            {/* Boek/onderwijs element */}
            <path
                d="M12 32H28C28 34 26 36 20 36C14 36 12 34 12 32Z"
                fill="#2563EB"
            />
        </svg>
    );
} 