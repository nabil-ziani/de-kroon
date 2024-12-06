export default function Logo() {
    return (
        <div className="relative group">
            <svg width="48" height="48" viewBox="0 0 48 48" className="transform transition-all duration-300 group-hover:scale-105">
                {/* Elegante kroon vorm */}
                <path
                    className="fill-blue transition-colors duration-300"
                    d="M24 8L36 20L32 36H16L12 20L24 8Z"
                />
                
                {/* Decoratieve elementen */}
                <circle 
                    cx="24" 
                    cy="16" 
                    r="2" 
                    className="fill-yellow transition-all duration-300 group-hover:fill-green"
                />
                <circle 
                    cx="18" 
                    cy="22" 
                    r="2" 
                    className="fill-yellow transition-all duration-300 group-hover:fill-green"
                />
                <circle 
                    cx="30" 
                    cy="22" 
                    r="2" 
                    className="fill-yellow transition-all duration-300 group-hover:fill-green"
                />

                {/* Subtiele glans effect */}
                <path
                    d="M24 12L28 16L24 20L20 16L24 12Z"
                    className="fill-white opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                />
            </svg>
        </div>
    );
} 