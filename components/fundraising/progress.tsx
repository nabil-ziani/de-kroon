'use client';

import { useEffect, useState } from 'react';

interface FundraisingProgressProps {
    current: number;
    goal: number;
    progress: number;
    donorCount: number;
}

export default function FundraisingProgress({ current, goal, progress, donorCount }: FundraisingProgressProps) {
    const [displayProgress, setDisplayProgress] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setIsAnimating(true);
        const duration = 700; // 2 seconds
        const steps = 60; // 60 steps for smooth animation
        const increment = progress / steps;
        const stepDuration = duration / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
            if (currentStep < steps) {
                setDisplayProgress(prev => Math.min(progress, prev + increment));
                currentStep++;
            } else {
                clearInterval(timer);
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [progress]);

    const radius = 140;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (displayProgress / 100) * circumference;

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 320 320">
                    <circle
                        cx="160"
                        cy="160"
                        r={radius}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="16"
                        className="text-gray-100"
                    />
                    <circle
                        cx="160"
                        cy="160"
                        r={radius}
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="16"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        style={{ strokeDashoffset: offset }}
                        className="transition-all duration-75 ease-linear"
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2fae55" />
                            <stop offset="100%" stopColor="#278f46" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                        {Math.round(displayProgress)}%
                    </span>
                    <span className="text-sm md:text-base text-gray-500">van het doel</span>
                </div>
            </div>

            <div className="flex flex-col gap-8">
                <div className="text-center md:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                        €{current.toLocaleString()}
                    </div>
                    <div className="text-sm md:text-base text-gray-500">Opgehaald</div>
                </div>
                <div className="text-center md:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                        {donorCount}
                    </div>
                    <div className="text-sm md:text-base text-gray-500">{donorCount === 1 ? 'Donateur' : 'Donateurs'}</div>
                </div>
                <div className="text-center md:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                        €{goal.toLocaleString()}
                    </div>
                    <div className="text-sm md:text-base text-gray-500">Doel</div>
                </div>
            </div>

            {progress >= 100 && (
                <div className="mt-12 p-6 bg-crown/5 border border-crown/10 rounded-2xl text-center max-w-lg mx-auto">
                    <div className="text-xl font-semibold mb-2 text-crown">🎉 Alhamdoulillah!</div>
                    <p className="text-gray-600">We hebben ons doel bereikt, moge Allah jullie rijkelijk belonen!</p>
                </div>
            )}
        </div>
    );
} 