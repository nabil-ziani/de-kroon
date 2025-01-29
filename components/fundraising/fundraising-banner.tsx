'use client';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function FundraisingBanner() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false); // Scrolling down and past the header
            } else {
                setIsVisible(true); // Scrolling up or at the top
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Don't render anything on the fundraising page
    if (pathname === '/inzameling') return null;

    return (
        <div
            className={`w-full transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
            style={{
                height: isVisible ? 'auto' : 0,
                overflow: 'hidden'
            }}
        >
            <div className="bg-crown text-white shadow-lg">
                <Link
                    href="/inzameling"
                    className="max-w-[1800px] mx-auto px-4 py-2 md:py-3 flex items-center justify-between group/banner hover:bg-crown/90 transition-colors"
                >
                    <div className="flex items-center gap-3 md:gap-4">
                        {/* Pulserend effect */}
                        <div className="relative flex items-center justify-center w-6 h-6">
                            <div className="absolute w-2.5 h-2.5 bg-white rounded-full" />
                            <div className="absolute w-2.5 h-2.5 bg-white rounded-full animate-ping" />
                        </div>

                        <p className="text-sm md:text-base font-medium">
                            <span className="hidden md:inline">Help ons groeien - We zoeken </span>
                            <span className="md:hidden">Gezocht: </span>
                            <span className="font-semibold">100 donateurs</span>
                            <span className="hidden md:inline"> die elk €100 willen bijdragen</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm md:text-base font-medium">
                        <span className="hidden md:inline">Doe mee</span>
                        <span className="inline md:hidden">Meer info</span>
                        <FaArrowRight className="w-3 h-3 md:w-4 md:h-4 transform transition-transform duration-300 group-hover/banner:translate-x-1" />
                    </div>
                </Link>
            </div>
        </div>
    );
} 
