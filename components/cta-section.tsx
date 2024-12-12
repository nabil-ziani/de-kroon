import Link from 'next/link';
import { FaHandHoldingHeart, FaUsers, FaRegClock } from 'react-icons/fa';

export default function CTASection() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Top Wave */}
            <div className="absolute top-0 left-0 right-0 w-[102%] -ml-[1%]">
                <svg className="w-full h-24" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 100L60 94.5C120 89 240 78 360 73C480 68 600 68.5 720 78.5C840 89 960 111 1080 116.5C1200 121.5 1320 111 1380 105.5L1440 100V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V100Z" fill="white"/>
                </svg>
            </div>

            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[radial-gradient(at_top_right,_#1dbffe_0%,_transparent_50%)]" />
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0 w-[102%] -ml-[1%]">
                <svg className="w-full h-24 -mb-px" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 48.5129L60 54.0129C120 59.5129 240 70.5129 360 75.5129C480 80.5129 600 80.0129 720 70.0129C840 59.5129 960 37.5129 1080 32.0129C1200 27.0129 1320 37.5129 1380 43.0129L1440 48.5129V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V48.5129Z" fill="white" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-white mb-6">
                            Word een Steunpilaar
                        </h2>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            Geef kinderen de kans om te leren, spelen en groeien
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Donatie CTA */}
                        <div className="bg-gradient-to-br from-girl to-girl/80 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                            <div className="flex flex-col h-full">
                                <div className="mb-8">
                                    <div className="flex-shrink-0 w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                        <FaRegClock className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-4xl font-bold text-white mb-6">
                                        Steun Maandelijks
                                    </h3>
                                    <div className="space-y-4 text-lg text-white/90 mb-8">
                                        <p>Met jouw vaste steun kunnen we:</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Activiteiten organiseren die inspireren</li>
                                            <li>Lesmateriaal vernieuwen</li>
                                            <li>Onze leerkrachten ondersteunen</li>
                                        </ul>
                                        <p className="italic text-sm mt-6">
                                            "De beste liefdadigheid is die welke regelmatig wordt gegeven, ook al is het weinig."
                                            <br />
                                            <span className="text-xs">- De Profeet Mohammed ﷺ</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <Link
                                        href="/donatie"
                                        className="inline-flex items-center bg-white text-girl px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-colors uppercase tracking-wide text-sm group-hover:scale-105 transform transition-transform duration-300"
                                    >
                                        Word Steunpilaar
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Vrijwilliger CTA */}
                        <div className="bg-gradient-to-br from-boy to-boy/80 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                            <div className="flex flex-col h-full">
                                <div className="mb-8">
                                    <div className="flex-shrink-0 w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                        <FaUsers className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-4xl font-bold text-white mb-6">
                                        Word Vrijwilliger
                                    </h3>
                                    <div className="space-y-4 text-lg text-white/90 mb-8">
                                        <p>Help mee om impact te maken:</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Ondersteun onze lesprogramma's</li>
                                            <li>Help bij activiteiten</li>
                                            <li>Deel jouw kennis en ervaring</li>
                                        </ul>
                                        <p className="mt-6">
                                            "Een investering in onze jongeren is een investering in een betere samenleving."
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <Link
                                        href="/vrijwilliger-worden"
                                        className="inline-flex items-center bg-white text-boy px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-colors uppercase tracking-wide text-sm group-hover:scale-105 transform transition-transform duration-300"
                                    >
                                        Word Vrijwilliger
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}