import Image from 'next/image';
import { FaGraduationCap, FaHeart, FaUsers, FaEnvelope, FaArrowRight } from 'react-icons/fa';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-24">
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
                        <h1 className="text-6xl font-bold text-white mb-6">
                            Wie zijn wij?
                        </h1>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">
                                Onze Missie
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Bij De Kroon streven we ernaar om een inspirerende leeromgeving te creëren
                                waar jongeren zich kunnen ontwikkelen op alle vlakken.
                            </p>
                            <div className="space-y-4">
                                {[
                                    'Kwalitatief islamitisch onderwijs',
                                    'Persoonlijke ontwikkeling',
                                    'Gemeenschapsvorming',
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-crown" />
                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl text-gray-500">
                            <Image
                                src="/images/mission.jpg"
                                alt="Foto van een groep jongeren"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
                            Onze Kernwaarden
                        </h2>
                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                {
                                    icon: FaGraduationCap,
                                    title: 'Educatie',
                                    description: 'Focus op kwalitatief onderwijs en persoonlijke groei',
                                    bgColor: 'from-boy/90 to-boy/70'
                                },
                                {
                                    icon: FaHeart,
                                    title: 'Betrokkenheid',
                                    description: 'Actieve participatie in de gemeenschap',
                                    bgColor: 'from-girl/90 to-girl/70'
                                },
                                {
                                    icon: FaUsers,
                                    title: 'Inclusiviteit',
                                    description: 'Een warme welkom voor iedereen',
                                    bgColor: 'from-crown/90 to-crown/70'
                                }
                            ].map((value) => (
                                <div key={value.title}
                                    className={`bg-gradient-to-br ${value.bgColor} p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                                >
                                    <div className="flex-shrink-0 w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                                        <value.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="text-white/80">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team/Contact CTA */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-800/90 to-gray-900 p-10 rounded-xl">
                        <div className="flex flex-col items-center">
                            <div className="flex-shrink-0 w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                                <FaEnvelope className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold mb-6">
                                Wil je meer weten over De Kroon?
                            </h2>
                            <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
                                Neem contact met ons op of kom gerust langs, we staan je graag te woord!
                            </p>
                            <a
                                href="/contact"
                                className="group inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors uppercase tracking-wide text-sm"
                            >
                                Contact opnemen
                                <FaArrowRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 