import Link from 'next/link';

export default function CTASection() {
    return (
        <section className="py-16 bg-blue">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Steun Moskee De Kroon
                    </h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Help ons om onderwijs en gemeenschapsactiviteiten mogelijk te maken.
                        Uw bijdrage maakt het verschil.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/donatie"
                            className="bg-yellow text-blue px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-colors"
                        >
                            Doneer nu
                        </Link>
                        <Link
                            href="/vrijwilliger"
                            className="bg-green text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-colors"
                        >
                            Word vrijwilliger
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
} 