'use client';

import { useEffect, useState } from 'react';

interface FundraisingProgressProps {
    current: number;
    goal: number;
    progress: number;
}

export default function FundraisingProgress({ current, goal, progress }: FundraisingProgressProps) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const circumference = 2 * Math.PI * 140;
    const offset = circumference - (progress / 100) * circumference;
    const donorsCount = Math.round(current / 100);

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 320 320">
                    <circle
                        cx="160"
                        cy="160"
                        r="140"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="16"
                        className="text-gray-100"
                    />
                    {isClient && (
                        <circle
                            cx="160"
                            cy="160"
                            r="140"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="16"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            className="transition-[stroke-dashoffset] duration-1000 ease-out"
                        />
                    )}
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2fae55" />
                            <stop offset="100%" stopColor="#278f46" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                        {Math.round(progress)}%
                    </span>
                    <span className="text-sm md:text-base text-gray-500">van het doel</span>
                </div>
            </div>

            <div className="flex flex-col gap-8 animate-fade-in">
                <div className="text-center md:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                        €{current.toLocaleString()}
                    </div>
                    <div className="text-sm md:text-base text-gray-500">Opgehaald</div>
                </div>
                <div className="text-center md:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                        {donorsCount}
                    </div>
                    <div className="text-sm md:text-base text-gray-500">Donateurs</div>
                </div>
                <div className="text-center md:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                        €{goal.toLocaleString()}
                    </div>
                    <div className="text-sm md:text-base text-gray-500">Doel</div>
                </div>
            </div>

            {progress >= 100 && (
                <div
                    className="mt-12 p-6 bg-crown/5 border border-crown/10 rounded-2xl text-center max-w-lg mx-auto animate-fade-in"
                >
                    <div className="text-xl font-semibold mb-2 text-crown">🎉 Alhamdoulillah!</div>
                    <p className="text-gray-600">We hebben ons doel bereikt, moge Allah jullie rijkelijk belonen!</p>
                </div>
            )}
        </div>
    );
} 