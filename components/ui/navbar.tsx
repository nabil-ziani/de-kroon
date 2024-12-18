'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const menuItems = [
        { name: 'Over ons', href: '/over-ons' },
        { name: 'Vorming', href: '/vorming' },
        { name: 'Activiteiten', href: '/activiteiten' },
        { name: 'Live', href: '/live' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 
            ${isOpen ? 'bg-white' : isScrolled ? 'bg-white/70 backdrop-blur-md shadow-sm' : ''}`}>
            <div className="max-w-[1800px] mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 relative z-50">
                        <Image
                            src="/logo-2.png"
                            alt="Logo"
                            width={200}
                            height={80}
                            className="w-auto h-16"
                            priority
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-10">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`relative group text-base tracking-wide
                                    ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/90 hover:text-white'}`}
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-crown transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                        <Link
                            href="/donatie"
                            className="bg-crown/90 hover:bg-crown text-white px-6 py-2.5 rounded-lg font-semibold transition-colors uppercase tracking-wide text-base"
                        >
                            Doneer
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg relative z-50"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-6 flex items-center justify-center">
                            <span className={`transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-0.5' : ''}`}>
                                <span className={`absolute block h-0.5 w-6 transform transition-all duration-300 ease-in-out 
                                    ${isOpen ? 'rotate-90 bg-gray-900' : isScrolled ? 'bg-gray-600' : 'bg-white'}`} />
                                <span className={`absolute block h-0.5 w-6 transform transition-all duration-300 ease-in-out
                                    ${isOpen ? '-rotate-180 bg-gray-900' : isScrolled ? 'bg-gray-600' : 'bg-white'}`} />
                            </span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col justify-center items-center min-h-screen space-y-8 p-6">
                        {menuItems.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-2xl font-medium text-gray-900 transition-all duration-300 transform
                                    ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                                    ${pathname === item.href ? 'text-crown' : 'hover:text-crown'}
                                `}
                                style={{ transitionDelay: `${index * 100}ms` }}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/donatie"
                            className={`bg-crown text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform
                                ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                                text-lg uppercase tracking-wide mt-4`}
                            style={{ transitionDelay: `${menuItems.length * 100}ms` }}
                            onClick={() => setIsOpen(false)}
                        >
                            Doneer
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
} 