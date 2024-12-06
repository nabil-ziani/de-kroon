'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'Over ons', href: '/over-ons' },
        { name: 'Onderwijs', href: '/onderwijs' },
        { name: 'Activiteiten', href: '/activiteiten' },
        { name: 'Live', href: '/live' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 
            ${isScrolled ? 'bg-white/70 backdrop-blur-md shadow-sm' : ''}`}>
            <div className="max-w-[1800px] mx-auto px-2">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
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
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6 text-gray-600"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4">
                        <div className="flex flex-col space-y-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative text-gray-600 group inline-block"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-crown transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                            <Link
                                href="/donatie"
                                className="bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-colors inline-block text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Doneer
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
} 