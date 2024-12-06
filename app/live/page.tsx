export default function LivePage() {
    return (
        <main className="min-h-screen pt-12 pb-16 bg-gradient-to-b from-[#e8f4fb] to-white">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Live Uitzendingen</h1>

                {/* Intro tekst */}
                <div className="max-w-5xl mb-12">
                    <p className="text-lg text-gray-700">
                        Volg onze live uitzendingen van het vrijdaggebed, lezingen en andere belangrijke evenementen.
                        Ideaal voor als u niet naar de moskee kunt komen.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Live Stream Sectie */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            {/* Placeholder voor YouTube/livestream embed */}
                            <div className="aspect-video bg-gray-900 flex items-center justify-center">
                                <div className="text-center text-white p-8">
                                    <h3 className="text-xl font-bold mb-2">Volgende uitzending</h3>
                                    <p>Vrijdag 13:30 - Vrijdaggebed</p>
                                </div>
                            </div>
                            
                            {/* Stream informatie */}
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-blue mb-2">Live Stream</h2>
                                <p className="text-gray-700">
                                    De stream start automatisch wanneer de uitzending begint.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Programma Overzicht */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                            <h2 className="text-2xl font-bold text-blue mb-4">Uitzendschema</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-gray-800">Vrijdaggebed</h3>
                                    <p className="text-gray-600">Elke vrijdag</p>
                                    <p className="text-sm text-gray-500">13:30 - 14:30</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Lezingen</h3>
                                    <p className="text-gray-600">Zaterdag en zondag</p>
                                    <p className="text-sm text-gray-500">Na Maghreb gebed</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Speciale uitzendingen</h3>
                                    <p className="text-gray-600">Tijdens Ramadan</p>
                                    <p className="text-sm text-gray-500">Taraweeh en lezingen</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                            <h2 className="text-2xl font-bold text-blue mb-4">Archief</h2>
                            <p className="text-gray-700 mb-4">
                                Bekijk eerdere uitzendingen terug in ons archief.
                            </p>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Vrijdagpreken</li>
                                <li>• Lezingen</li>
                                <li>• Speciale evenementen</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Contact sectie */}
                <div className="mt-12 bg-blue text-white rounded-xl p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Technische ondersteuning nodig?</h2>
                    <p className="mb-6">
                        Heeft u problemen met het bekijken van de livestream? Neem contact met ons op.
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