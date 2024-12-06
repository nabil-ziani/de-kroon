export default function AboutPage() {
    return (
        <main className="min-h-screen pt-12 pb-16 bg-gradient-to-b from-[#e8f4fb] to-white">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Over Ons</h1>

                {/* Intro tekst */}
                <div className="max-w-5xl mb-12">
                    <p className="text-lg text-gray-700">
                        De Kroon is een bruisend centrum voor de moslimgemeenschap in Borgerhout,
                        waar educatie, spiritualiteit en gemeenschap samenkomen. We streven ernaar om een plek te zijn
                        waar iedereen zich welkom voelt en zich kan ontwikkelen.
                    </p>
                </div>

                {/* Missie & Visie */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <h2 className="text-2xl font-bold text-blue mb-4">Onze Missie</h2>
                        <p className="text-gray-700 mb-4">
                            Wij zetten ons in voor:
                        </p>
                        <ul className="text-gray-700 space-y-2 mb-4">
                            <li>• Kwalitatief islamitisch onderwijs</li>
                            <li>• Een sterke gemeenschap</li>
                            <li>• Spirituele ontwikkeling</li>
                            <li>• Maatschappelijke betrokkenheid</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <h2 className="text-2xl font-bold text-blue mb-4">Onze Visie</h2>
                        <p className="text-gray-700 mb-4">
                            We streven naar:
                        </p>
                        <ul className="text-gray-700 space-y-2 mb-4">
                            <li>• Een inclusieve gemeenschap</li>
                            <li>• Moderne faciliteiten</li>
                            <li>• Toegankelijk onderwijs</li>
                            <li>• Interreligieuze dialoog</li>
                        </ul>
                    </div>
                </div>

                {/* Extra informatie */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <h2 className="text-2xl font-bold text-blue mb-4">Geschiedenis</h2>
                        <p className="text-gray-700">
                            Al meer dan 20 jaar zijn wij een vast onderdeel van de gemeenschap in Borgerhout.
                            Begonnen als kleine gebedsruimte, uitgegroeid tot een volwaardig centrum.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <h2 className="text-2xl font-bold text-blue mb-4">Bestuur</h2>
                        <p className="text-gray-700">
                            Ons bestuur bestaat uit betrokken vrijwilligers die zich inzetten voor
                            het welzijn van de gemeenschap en de ontwikkeling van het centrum.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <h2 className="text-2xl font-bold text-blue mb-4">Faciliteiten</h2>
                        <p className="text-gray-700">
                            We beschikken over moderne faciliteiten waaronder gebedsruimtes,
                            leslokalen, en ontmoetingsruimtes voor de gemeenschap.
                        </p>
                    </div>
                </div>

                {/* Contact sectie */}
                <div className="bg-blue text-white rounded-xl p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Wil je meer weten over De Kroon?</h2>
                    <p className="mb-6">
                        Kom gerust langs of neem contact met ons op.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-green text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
                    >
                        Contact opnemen
                    </a>
                </div>
            </div>
        </main>
    );
} 