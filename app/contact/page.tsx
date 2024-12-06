export default function ContactPage() {
    return (
        <main className="min-h-screen pt-12 pb-16 bg-gradient-to-b from-[#e8f4fb] to-white">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact</h1>

                {/* Intro tekst */}
                <div className="max-w-5xl mb-12">
                    <p className="text-lg text-gray-700">
                        Heeft u vragen of wilt u meer informatie? Neem gerust contact met ons op.
                        We staan u graag te woord.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Contact Formulier */}
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <h2 className="text-2xl font-bold text-blue mb-6">Stuur ons een bericht</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 mb-2">Naam</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue text-gray-900"
                                    placeholder="Uw naam"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 mb-2">E-mailadres</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue text-gray-900"
                                    placeholder="uw@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-gray-700 mb-2">Onderwerp</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue text-gray-900"
                                    placeholder="Onderwerp van uw bericht"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 mb-2">Bericht</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue text-gray-900"
                                    placeholder="Uw bericht..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
                            >
                                Verstuur bericht
                            </button>
                        </form>
                    </div>

                    {/* Contact Informatie */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                            <h2 className="text-2xl font-bold text-blue mb-4">Contactgegevens</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-gray-800">Adres</h3>
                                    <p className="text-gray-600">Kroonstraat 72</p>
                                    <p className="text-gray-600">2140 Borgerhout</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Telefoon</h3>
                                    <p className="text-gray-600">+32 XXX XX XX XX</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">E-mail</h3>
                                    <p className="text-gray-600">info@centrum-dekroon.be</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                            <h2 className="text-2xl font-bold text-blue mb-4">Openingstijden</h2>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Maandag - Vrijdag</span>
                                    <span className="text-gray-600">05:00 - 22:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Zaterdag - Zondag</span>
                                    <span className="text-gray-600">06:00 - 22:00</span>
                                </div>
                            </div>
                        </div>

                        {/* Placeholder voor Google Maps */}
                        <div className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center">
                            <p className="text-gray-500">Google Maps kaart komt hier</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
} 