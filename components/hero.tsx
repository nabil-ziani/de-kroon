import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <div className="relative min-h-screen">
            {/* Wave transition */}
            <div className="absolute -bottom-1 left-0 right-0 z-20">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="white" d="M0 48.5129L60 54.0129C120 59.5129 240 70.5129 360 75.5129C480 80.5129 600 80.0129 720 70.0129C840 59.5129 960 37.5129 1080 32.0129C1200 27.0129 1320 37.5129 1380 43.0129L1440 48.5129V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V48.5129Z"/>
                </svg>
            </div>

            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/mosque.jpg"
                    alt="Moskee De Kroon"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-full">
                <div className="flex items-center min-h-screen pt-32">
                    <div className="text-white max-w-3xl">
                        <h1 className="text-6xl mb-6">
                            <span className="block mb-2 font-extralight">Welkom bij</span>
                            <span className="text-8xl font-bold">De Kroon</span>
                        </h1>
                        <p className="text-xl mb-12 text-white/90">
                            Een plek voor educatie, ...
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/courses"
                                className="bg-crown text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors uppercase tracking-wide text-sm"
                            >
                                Bekijk onze cursussen
                            </Link>
                            <Link
                                href="/about"
                                className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors uppercase tracking-wide text-sm"
                            >
                                Meer over ons
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}