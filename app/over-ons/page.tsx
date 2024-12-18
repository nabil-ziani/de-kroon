'use client';

import Image from 'next/image';
import { FaGraduationCap, FaHeart, FaUsers, FaEnvelope, FaArrowRight } from 'react-icons/fa';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-6 md:py-24">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-boy">
                    <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[radial-gradient(at_top_right,_#1dbffe_0%,_transparent_50%)]" />
                </div>
                <div className="absolute -bottom-1 left-0 right-0">
                    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="white" d="M0 48.5129L60 54.0129C120 59.5129 240 70.5129 360 75.5129C480 80.5129 600 80.0129 720 70.0129C840 59.5129 960 37.5129 1080 32.0129C1200 27.0129 1320 37.5129 1380 43.0129L1440 48.5129V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V48.5129Z" />
                    </svg>
                </div>
                <div className="relative z-10 container mx-auto px-4 pt-24">
                    <div className="max-w-4xl">
                        <h1 className="text-center md:text-left text-4xl md:text-6xl font-bold text-white mb-6">
                            Wie zijn wij?
                        </h1>
                    </div>
                </div>
            </section>

            {/* Introduction Section - Centered */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
                        <span className="text-crown font-semibold mb-2 block text-sm md:text-base">Sinds 2022</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
                            Educatief Jeugdcentrum
                        </h2>
                        <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                            De Kroon is een vereniging gevestigd in het hart van Borgerhout. We zetten ons in voor de ontwikkeling en vorming van jongeren, met als doel hen te helpen een actieve rol in de samenleving te vervullen.
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto relative">
                        <div className="absolute -top-8 -left-8 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-crown/30 to-crown/0 rounded-full blur-2xl" />
                        <div className="absolute -bottom-8 -right-8 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-boy/30 to-boy/0 rounded-full blur-2xl" />
                        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-crown/20 to-transparent" />
                            <Image
                                src="/images/placeholder.png"
                                alt="De Kroon locatie"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                            <div className="hidden md:block relative h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl md:order-last order-first">
                                <div className="absolute inset-0 bg-gradient-to-br from-boy/20 to-transparent" />
                                <Image
                                    src="/images/placeholder.png"
                                    alt="Onze activiteiten"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative text-center md:text-left">
                                <span className="text-boy font-semibold mb-2 block text-sm md:text-base">Onze Missie</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
                                    Ontwikkeling & Vorming
                                </h2>
                                <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8">
                                    Bij De Kroon streven we ernaar om een inspirerende leeromgeving te creëren waar jongeren zich kunnen ontwikkelen op alle vlakken.
                                </p>
                                <div className="text-left space-y-3 md:space-y-4">
                                    {[
                                        'Een vormingsaanbod van hoge kwaliteit organiseren en waarborgen',
                                        'Jongeren pedagogisch begeleiden in hun ontwikkeling',
                                        'Een aangename omgeving creëren voor samen leren en spelen',
                                        'Culturele en ontspanningsactiviteiten organiseren voor alle sociale klassen',
                                        'Ruimte bieden voor schoolactiviteiten en huiswerkbegeleiding',
                                        'Samenwerken met lokale organisaties en instanties'
                                    ].map((item) => (
                                        <div key={item} className="flex items-start gap-3 md:gap-4">
                                            <div className="w-2 h-2 rounded-full bg-boy mt-2" />
                                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-center md:text-left text-3xl md:text-5xl font-bold text-gray-800 mb-8 md:mb-16">
                            Kernwaarden
                        </h2>
                        <div className="grid gap-4 md:gap-8">
                            {/* Top row - 3 equal cards */}
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                                {[
                                    {
                                        icon: FaGraduationCap,
                                        title: 'Ontwikkeling',
                                        description: 'Focus op educatieve vorming en persoonlijke groei',
                                        bgColor: 'from-boy/90 to-boy/70'
                                    },
                                    {
                                        icon: FaHeart,
                                        title: 'Respect',
                                        description: 'Positief omgaan met diversiteit en gelijkwaardigheid',
                                        bgColor: 'from-girl/90 to-girl/70'
                                    },
                                    {
                                        icon: FaUsers,
                                        title: 'Samenwerking',
                                        description: 'Verbinding tussen jongeren en de gemeenschap stimuleren',
                                        bgColor: 'from-crown/90 to-crown/70'
                                    }
                                ].map((value) => (
                                    <div key={value.title}
                                        className={`bg-gradient-to-br ${value.bgColor} p-6 md:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300`}
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                                            <value.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
                                            {value.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-white/80">
                                            {value.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom row - Full width card */}
                            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900 p-6 md:p-10 rounded-3xl shadow-lg mt-4 md:mt-8">
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                                        <FaEnvelope className="w-6 h-6 md:w-8 md:h-8 text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                                        Wil je meer weten over De Kroon?
                                    </h2>
                                    <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-3xl">
                                        Bezoek ons op de Kroonstraat 72 in Borgerhout of neem contact met ons op.
                                        <span className="hidden md:inline">Samen bouwen we aan een inspirerende toekomst voor jongeren.</span>
                                    </p>
                                    <a
                                        href="/contact"
                                        className="group inline-flex items-center bg-white text-gray-900 px-4 sm:px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors uppercase tracking-wide text-sm"
                                    >
                                        Contact opnemen
                                        <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 