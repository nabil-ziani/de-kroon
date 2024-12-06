import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-blue text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li>Kroonstraat 72</li>
                            <li>2140 Borgerhout</li>
                            <li className="pt-2">
                                <a href="#" className="hover:text-green">
                                    +32 XXX XX XX XX
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@centrum-dekroon.be" className="hover:text-green">
                                    info@centrum-dekroon.be
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Snelle Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/gebedstijden" className="hover:text-green">
                                    Gebedstijden
                                </Link>
                            </li>
                            <li>
                                <Link href="/onderwijs" className="hover:text-green">
                                    Onderwijs
                                </Link>
                            </li>
                            <li>
                                <Link href="/activiteiten" className="hover:text-green">
                                    Activiteiten
                                </Link>
                            </li>
                            <li>
                                <Link href="/donatie" className="hover:text-green">
                                    Doneren
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Openingstijden */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Openingstijden</h3>
                        <ul className="space-y-2">
                            <li>Maandag - Vrijdag</li>
                            <li>05:00 - 22:00</li>
                            <li className="pt-2">Zaterdag - Zondag</li>
                            <li>06:00 - 22:00</li>
                        </ul>
                    </div>

                    {/* Social Media & Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Volg Ons</h3>
                        <div className="flex space-x-4 mb-6">
                            <a
                                href="https://www.facebook.com/p/Moskee-Ennassr-Borgerhout-100066575117579"
                                className="hover:text-green"
                                aria-label="Facebook"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://mawaqit.net/en/moskee-ennassr-borgerhout-2140-belgium"
                                className="hover:text-green"
                                aria-label="Mawaqit"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-9V7a1 1 0 112 0v4a1 1 0 01-.293.707l-3 3a1 1 0 11-1.414-1.414L11 11z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                        <form className="mt-4">
                            <label className="block mb-2">Nieuwsbrief</label>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="E-mailadres"
                                    className="px-4 py-2 rounded-l-lg text-gray-900 w-full"
                                />
                                <button
                                    type="submit"
                                    className="bg-green text-white px-4 py-2 rounded-r-lg font-semibold hover:opacity-90 transition-colors"
                                >
                                    Aanmelden
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-blue-800 text-center text-sm">
                    <p>© {new Date().getFullYear()} De Kroon. Alle rechten voorbehouden.</p>
                </div>
            </div>
        </footer>
    );
}