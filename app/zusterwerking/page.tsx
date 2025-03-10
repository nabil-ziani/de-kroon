'use client';

import { FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function ZusterwerkingPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-6 md:py-24">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-boy">
                    <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[radial-gradient(at_top_right,_#ff69b4_0%,_transparent_50%)]" />
                </div>
                <div className="absolute -bottom-1 left-0 right-0">
                    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="white" d="M0 48.5129L60 54.0129C120 59.5129 240 70.5129 360 75.5129C480 80.5129 600 80.0129 720 70.0129C840 59.5129 960 37.5129 1080 32.0129C1200 27.0129 1320 37.5129 1380 43.0129L1440 48.5129V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V48.5129Z" />
                    </svg>
                </div>
                <div className="relative z-10 container mx-auto px-4 pt-24">
                    <div className="max-w-4xl">
                        <h1 className="text-center md:text-left text-4xl md:text-6xl font-bold text-white mb-6">
                            Zusterwerking
                        </h1>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
                            <span className="text-girl font-semibold mb-2 block text-sm md:text-base">Sinds 2023</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
                                Zusterwerking De Kroon
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                                Wij zijn een dynamische organisatie die zich inzet voor de educatieve ontwikkeling van kinderen,
                                geïnspireerd door islamitische waarden en normen. Sinds 2023 hebben wij de zusterwerking onder
                                De Kroon opgestart!
                            </p>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                Ons team van vier toegewijde en hechte meiden organiseert inspirerende en leerzame activiteiten
                                die bijdragen aan persoonlijke en gemeenschappelijke groei. Deze zeer uiteenlopende activiteiten
                                zijn tot stand gekomen door te luisteren naar de vraag, waardoor ze perfect passen bij de
                                gemeenschap en zorgen voor recreatie en educatie binnen Borgerhout.
                            </p>
                        </div>
                    </div>

                    {/* Contact Cards */}
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-gradient-to-br from-gray-800/90 to-gray-900 rounded-3xl p-6 md:p-8 shadow-lg mb-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <a
                                    href="https://www.instagram.com/zusterwerkingdekroonvzw/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-white/5 hover:bg-white/10 rounded-2xl p-6 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-girl flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                                            <FaInstagram className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Instagram</h4>
                                            <p className="text-white/80">Volg onze activiteiten</p>
                                        </div>
                                    </div>
                                </a>

                                <a
                                    href="mailto:zusterwerking@kidsennassr.be"
                                    className="group bg-white/5 hover:bg-white/10 rounded-2xl p-6 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-girl flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                                            <FaEnvelope className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">E-mail</h4>
                                            <p className="text-white/80">Neem contact op</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 text-center mb-6">
                            Meet the Team!
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    name: 'Juf Farah',
                                    role: 'Teamleider',
                                    description: 'Met 8 jaar ervaring in het lesgeven en een groot hart voor kinderen, is Farah de verbindende kracht van het team. Haar leiderschap en toewijding zorgen ervoor dat elke activiteit niet alleen goed georganiseerd, maar ook bijzonder betekenisvol is.'
                                },
                                {
                                    name: 'Juf Chaima',
                                    role: 'Creatief Brein',
                                    description: 'De creatieve geest van het team. Met haar grenzeloze fantasie en innovatieve aanpak weet Chaima leren en plezier op een unieke manier te combineren. Ze inspireert anderen met haar energie en maakt van elke uitdaging een kans.'
                                },
                                {
                                    name: 'Juf Kaoutar',
                                    role: 'Studietrajectbegeleider',
                                    description: 'De empathische mentor en studietrajectbegeleider. Kaoutar weet als geen ander hoe belangrijk het is om naar mensen te luisteren en hen te begeleiden naar hun doelen. Haar warme persoonlijkheid en doordachte adviezen maken haar een ankerpunt binnen het team.'
                                },
                                {
                                    name: 'Juf Nihad',
                                    role: 'Sfeermaker',
                                    description: 'De vrolijke noot en sfeermaker. Nihad brengt een glimlach op ieders gezicht met haar humor en charme. Ze weet hoe ze een luchtige sfeer kan creëren, zelfs tijdens de meest uitdagende momenten, waardoor iedereen zich welkom en op hun gemak voelt.'
                                }
                            ].map((member) => (
                                <div key={member.name} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="flex flex-col h-full">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                                        <span className="text-girl font-medium text-sm mb-4">{member.role}</span>
                                        <p className="text-gray-600 leading-relaxed">{member.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 