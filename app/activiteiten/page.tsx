export default function ActivitiesPage() {
    return (
        <main className="min-h-screen pt-12 pb-16 bg-gradient-to-b from-[#e8f4fb] to-white">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Activiteiten</h1>

                {/* Intro tekst */}
                <div className="max-w-5xl mb-12">
                    <p className="text-lg text-gray-700">
                        Bij De Kroon organiseren we regelmatig verschillende activiteiten voor jong en oud.
                        Van educatieve programma's tot sociale bijeenkomsten, er is voor ieder wat wils.
                    </p>
                </div>

                {/* Regelmatige activiteiten */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Regelmatige Activiteiten</h2>
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <h3 className="text-xl font-bold text-blue mb-4">Vrijdaggebed</h3>
                        <p className="text-gray-700 mb-4">
                            Wekelijks vrijdaggebed met khutbah in het Nederlands en Arabisch.
                        </p>
                        <div className="text-sm text-gray-600">
                            <p>Eerste gebed: 13:30</p>
                            <p>Tweede gebed: 14:30</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <h3 className="text-xl font-bold text-blue mb-4">Lezingen</h3>
                        <p className="text-gray-700 mb-4">
                            Wekelijkse lezingen over verschillende islamitische onderwerpen.
                        </p>
                        <div className="text-sm text-gray-600">
                            <p>Zaterdag na Maghreb</p>
                            <p>Zondag na Asr</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <h3 className="text-xl font-bold text-blue mb-4">Kinderactiviteiten</h3>
                        <p className="text-gray-700 mb-4">
                            Educatieve en recreatieve activiteiten voor kinderen.
                        </p>
                        <div className="text-sm text-gray-600">
                            <p>Zaterdag: 10:00 - 12:00</p>
                            <p>Zondag: 10:00 - 12:00</p>
                        </div>
                    </div>
                </div>

                {/* Speciale evenementen */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Speciale Evenementen</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <h3 className="text-xl font-bold text-blue mb-4">Ramadan Programma</h3>
                        <p className="text-gray-700 mb-4">
                            Tijdens de Ramadan hebben we een speciaal programma met:
                        </p>
                        <ul className="text-gray-700 space-y-2">
                            <li>• Dagelijkse iftar</li>
                            <li>• Taraweeh gebeden</li>
                            <li>• Speciale lezingen</li>
                            <li>• Qiyam ul-layl</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <h3 className="text-xl font-bold text-blue mb-4">Eid Vieringen</h3>
                        <p className="text-gray-700 mb-4">
                            Tijdens beide Eid vieringen organiseren we:
                        </p>
                        <ul className="text-gray-700 space-y-2">
                            <li>• Eid gebeden</li>
                            <li>• Feestelijke bijeenkomsten</li>
                            <li>• Kinderactiviteiten</li>
                            <li>• Gemeenschappelijke maaltijden</li>
                        </ul>
                    </div>
                </div>

                {/* Contact sectie */}
                <div className="bg-blue text-white rounded-xl p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Wil je op de hoogte blijven?</h2>
                    <p className="mb-6">
                        Schrijf je in voor onze nieuwsbrief om updates te ontvangen over onze activiteiten.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-green text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
                    >
                        Aanmelden nieuwsbrief
                    </a>
                </div>
            </div>
        </main>
    );
} 