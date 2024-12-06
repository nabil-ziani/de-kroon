export default function DonatePage() {
    return (
        <main className="min-h-screen pt-12 pb-16 bg-gradient-to-b from-[#e8f4fb] to-white">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Doneren</h1>

                {/* Intro tekst */}
                <div className="max-w-5xl mb-12">
                    <p className="text-lg text-gray-700">
                        Steun ons bij het organiseren van activiteiten, onderhoud van het gebouw
                        en het verzorgen van onderwijs. Uw bijdrage maakt het verschil.
                    </p>
                </div>

                {/* Donatie opties */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <h2 className="text-2xl font-bold text-blue mb-4">Eenmalige Donatie</h2>
                        <p className="text-gray-700 mb-6">
                            Steun ons met een eenmalige bijdrage van een zelf gekozen bedrag.
                        </p>
                        <button className="w-full bg-blue text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors">
                            Doneer eenmalig
                        </button>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <h2 className="text-2xl font-bold text-blue mb-4">Maandelijkse Donatie</h2>
                        <p className="text-gray-700 mb-6">
                            Help ons structureel met een maandelijkse bijdrage.
                        </p>
                        <button className="w-full bg-blue text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors">
                            Word vaste donateur
                        </button>
                    </div>
                </div>

                {/* Bankgegevens */}
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-12">
                    <h2 className="text-2xl font-bold text-blue mb-6">Bankgegevens</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-2">Overschrijving</h3>
                            <p className="text-gray-700 mb-4">
                                U kunt uw donatie ook overmaken naar:
                            </p>
                            <div className="space-y-2">
                                <p className="text-gray-600"><b>Naam:</b> De Kroon</p>
                                <p className="text-gray-600"><b>IBAN:</b> BE...</p>
                                <p className="text-gray-600"><b>BIC:</b> ...</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact sectie */}
                <div className="bg-blue text-white rounded-xl p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Vragen over doneren?</h2>
                    <p className="mb-6">
                        Heeft u vragen over doneren of wilt u meer informatie? Neem gerust contact met ons op.
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