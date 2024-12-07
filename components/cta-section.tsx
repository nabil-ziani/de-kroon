import Link from 'next/link';
import { FaHandHoldingHeart, FaUsers } from 'react-icons/fa';

export default function CTASection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Donatie CTA */}
                        <div className="bg-gradient-to-br from-girl/90 to-girl/70 p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="flex flex-col h-full">
                                <div className="mb-8">
                                    <div className="flex-shrink-0 w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                                        <FaHandHoldingHeart className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4">
                                        Steun Ons
                                    </h3>
                                    <p className="text-lg text-white/90 mb-8">
                                        Help ons om onderwijs en gemeenschapsactiviteiten mogelijk te maken.
                                        Uw bijdrage maakt het verschil.
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <Link
                                        href="/donatie"
                                        className="inline-flex items-center bg-white text-girl px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors uppercase tracking-wide text-sm"
                                    >
                                        Doneer nu
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Vrijwilliger CTA */}
                        <div className="bg-gradient-to-br from-boy/90 to-boy/70 p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="flex flex-col h-full">
                                <div className="mb-8">
                                    <div className="flex-shrink-0 w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                                        <FaUsers className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4">
                                        Word Vrijwilliger
                                    </h3>
                                    <p className="text-lg text-white/90 mb-8">
                                        Zet je in voor de gemeenschap en help mee bij verschillende activiteiten.
                                        We hebben diverse mogelijkheden.
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <Link
                                        href="mailto:info@kidskroon.be"
                                        className="inline-flex items-center bg-white text-boy px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors uppercase tracking-wide text-sm"
                                    >
                                        Meld je aan
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