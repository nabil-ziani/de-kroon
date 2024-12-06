import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <div className="relative min-h-[80vh]">
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue/90 to-green/90" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-full">
                <div className="flex items-center justify-center min-h-[80vh]">
                    <div className="text-center text-white max-w-3xl">
                        <h1 className="text-5xl font-bold mb-6">
                            Welkom bij Moskee De Kroon
                        </h1>
                        <p className="text-xl mb-8 text-white/90">
                            Een plek voor educatie, spiritualiteit en gemeenschap
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                href="/courses"
                                className="bg-yellow text-blue px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
                            >
                                Bekijk onze cursussen
                            </Link>
                            <Link
                                href="/about"
                                className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
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