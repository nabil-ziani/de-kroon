'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'Over ons', href: '/over-ons' },
        { name: 'Onderwijs', href: '/onderwijs' },
        { name: 'Activiteiten', href: '/activiteiten' },
        { name: 'Live', href: '/live' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="bg-white shadow-sm fixed w-full z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-24">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <Image
                            src="/logo-2.png"
                            alt="Logo"
                            width={200}
                            height={80}
                            className="w-auto h-24"
                            priority
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-600 hover:text-blue transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/donatie"
                            className="bg-green text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-colors"
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
                                    className="text-gray-600 hover:text-blue transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/donatie"
                                className="bg-green text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-colors inline-block text-center"
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