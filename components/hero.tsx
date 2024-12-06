import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <div className="relative min-h-[80vh] flex items-center">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90" />

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-white">
                        <h1 className="text-5xl font-bold mb-6">
                            Welkom bij Moskee De Kroon
                        </h1>
                        <p className="text-xl mb-8 text-blue-50">
                            Een plek voor educatie, spiritualiteit en gemeenschap
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/courses"
                                className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
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

                    <div className="hidden md:block">
                        {/* Placeholder voor een mooie moskee illustratie of foto */}
                        <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                            <Image
                                src="/images/mosque.jpg"
                                alt="Moskee De Kroon"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}