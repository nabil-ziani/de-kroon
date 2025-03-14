import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <div className="relative min-h-screen">
            {/* Wave transition */}
            <div className="absolute -bottom-1 left-0 right-0 z-20">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="white" d="M0 48.5129L60 54.0129C120 59.5129 240 70.5129 360 75.5129C480 80.5129 600 80.0129 720 70.0129C840 59.5129 960 37.5129 1080 32.0129C1200 27.0129 1320 37.5129 1380 43.0129L1440 48.5129V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V48.5129Z" />
                </svg>
            </div>

            {/* Background Image */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-boy">
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[radial-gradient(at_top_right,_#1dbffe_0%,_transparent_50%)]" />
                </div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-full">
                <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen pt-20 md:pt-32 pb-24">
                    {/* Text Content */}
                    <div className="text-white max-w-3xl text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl mb-4 md:mb-6">
                            <span className="block mb-2 font-thin">Welkom bij</span>
                            <span className="text-5xl md:text-8xl font-bold">De Kroon</span>
                        </h1>
                        <p className="text-md sm:text-lg md:text-xl mb-8 md:mb-12 text-white/90">
                            Educatief jeugdcentrum waar we samen bouwen aan de toekomst
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/vorming#courses"
                                className="bg-crown text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors uppercase tracking-wide text-sm w-full sm:w-auto text-center"
                            >
                                Bekijk onze cursussen
                            </Link>
                            <Link
                                href="/over-ons"
                                className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors uppercase tracking-wide text-sm w-full sm:w-auto text-center"
                            >
                                Meer over ons
                            </Link>
                        </div>
                    </div>

                    {/* Logo Illustration */}
                    <div className="hidden lg:block relative w-[800px] h-[800px]">
                        <Image
                            src="/images/hero-illustration.png"
                            alt="Hero Illustration"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}