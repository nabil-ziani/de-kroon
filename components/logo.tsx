export default function Logo() {
    return (
        <div className="relative group">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <svg 
                    width="48" 
                    height="40" 
                    viewBox="0 0 48 40" 
                    className="transform transition-all duration-300 group-hover:scale-105"
                >
                    {/* Kroon bovenaan */}
                    <path 
                        d="M22 4L28 8L34 4L32 12H16L14 4L20 8L22 4Z" 
                        className="fill-yellow"
                    />
                    
                    {/* Jongen silhouet (links) */}
                    <path 
                        d="M14 28c0-4 4-8 4-8s1-1 2-1m-3 9c0-3 2-5 2-5"
                        stroke="#50aae3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                    />
                    <circle 
                        cx="20" 
                        cy="16" 
                        r="3" 
                        className="fill-blue"
                    />

                    {/* Meisje silhouet (rechts) */}
                    <path 
                        d="M34 28c0-4-4-8-4-8s-1-1-2-1m3 9c0-3-2-5-2-5"
                        stroke="#50aae3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                    />
                    <circle 
                        cx="28" 
                        cy="16" 
                        r="3" 
                        className="fill-blue"
                    />
                </svg>
            </div>

            <span className="font-nunito font-black text-4xl tracking-wide pt-8">
                <span className="text-blue transition-colors duration-300 hover:text-green">
                    De Kroon
                </span>
            </span>
        </div>
    );
} 