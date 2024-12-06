export default function EducationPage() {
    return (
        <main className="min-h-screen pt-12 pb-16 bg-gradient-to-b from-[#e8f4fb] to-white">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Onderwijs</h1>

                {/* Intro tekst */}
                <div className="max-w-5xl mb-12">
                    <p className="text-lg text-gray-700">
                        Bij Moskee De Kroon bieden we verschillende onderwijsprogramma's aan voor zowel kinderen als volwassenen. <br />
                        We streven ernaar om kwalitatief islamitisch onderwijs toegankelijk te maken voor iedereen.
                    </p>
                </div>

                {/* Onderwijs programma's */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <h2 className="text-2xl font-bold text-blue mb-4">Weekendlessen</h2>
                        <p className="text-gray-700 mb-4">
                            Programma omvat:
                        </p>
                        <ul className="text-gray-700 space-y-2 mb-4">
                            <li>• ...</li>
                            <li>• ...</li>
                            <li>• ...</li>
                            <li>• ...</li>
                        </ul>
                        <p className="text-gray-700">
                            Lestijden: ...
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <h2 className="text-2xl font-bold text-blue mb-4">Arabisch</h2>
                        <p className="text-gray-700 mb-4">
                            Leer de Arabische taal, verschillende niveaus beschikbaar.
                        </p>
                        <ul className="text-gray-700 space-y-2 mb-4">
                            <li>• ...</li>
                            <li>• ...</li>
                            <li>• ...</li>
                            <li>• ...</li>
                        </ul>
                        <p className="text-gray-700">
                            Lestijden: ...
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <h2 className="text-2xl font-bold text-blue mb-4">Koran</h2>
                        <p className="text-gray-700 mb-4">
                            Memoriseer de Koran en verbeter je recitatie.
                        </p>
                        <ul className="text-gray-700 space-y-2 mb-4">
                            <li>• ...</li>
                            <li>• ...</li>
                        </ul>
                        <p className="text-gray-700">
                            Lestijden: ...
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <h2 className="text-2xl font-bold text-blue mb-4">Fiqh</h2>
                        <p className="text-gray-700 mb-4">
                            Leer hoe je de verschillende aanbiddingen dient te verrichten en meer.
                        </p>
                        <ul className="text-gray-700 space-y-2 mb-4">
                            <li>• ...</li>
                            <li>• ...</li>
                        </ul>
                        <p className="text-gray-700">
                            Lestijden: ...
                        </p>
                    </div>
                </div>

                {/* Contact sectie */}
                <div className="bg-blue text-white rounded-xl p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Interesse in een van onze programma's?</h2>
                    <p className="mb-6">
                        Neem contact met ons op voor meer informatie of om je in te schrijven.
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