import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaClock } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h3 className="text-xl font-bold mb-6">Contact</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center space-x-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-crown/10 rounded-full flex items-center justify-center">
                                        <FaMapMarkerAlt className="w-4 h-4 text-crown" />
                                    </div>
                                    <div className="flex-1">
                                        <p>Kroonstraat 72</p>
                                        <p>2140 Borgerhout</p>
                                    </div>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-crown/10 rounded-full flex items-center justify-center">
                                        <FaPhone className="w-4 h-4 text-crown" />
                                    </div>
                                    <a href="tel:+32486133960" className="hover:text-crown transition-colors">
                                        +32 486 13 39 60
                                    </a>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-crown/10 rounded-full flex items-center justify-center">
                                        <FaEnvelope className="w-4 h-4 text-crown" />
                                    </div>
                                    <a href="mailto:info@kidskroon.be" className="hover:text-crown transition-colors">
                                        info@kidskroon.be
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-bold mb-6">Snelle Links</h3>
                            <ul className="space-y-3">
                                {['Gebedstijden', 'Onderwijs', 'Activiteiten', 'Live', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={`/${item.toLowerCase()}`}
                                            className="hover:text-crown transition-colors flex items-center space-x-2"
                                        >
                                            <span>→</span>
                                            <span>{item}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Openingstijden */}
                        <div>
                            <h3 className="text-xl font-bold mb-6">Openingstijden</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center space-x-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-crown/10 rounded-full flex items-center justify-center">
                                        <FaClock className="w-4 h-4 text-crown" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Maandag - Vrijdag</p>
                                        <p className="text-gray-400">05:00 - 22:00</p>
                                    </div>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-crown/10 rounded-full flex items-center justify-center">
                                        <FaClock className="w-4 h-4 text-crown" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Zaterdag - Zondag</p>
                                        <p className="text-gray-400">06:00 - 22:00</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="text-xl font-bold mb-6">Nieuwsbrief</h3>
                            <p className="text-gray-400 mb-4">
                                Blijf op de hoogte van het laatste nieuws.
                            </p>
                            <form className="space-y-3">
                                <div className="flex flex-col space-y-2">
                                    <input
                                        type="email"
                                        placeholder="E-mailadres"
                                        className="px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-crown text-white"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-crown text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                                    >
                                        Aanmelden
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Social & Copyright */}
                    <div className="mt-16 pt-8 border-t border-gray-800">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <p className="text-gray-400 text-sm">
                                © {new Date().getFullYear()} De Kroon. Alle rechten voorbehouden.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.facebook.com/p/Moskee-Ennassr-Borgerhout-100066575117579"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-crown transition-colors"
                                    aria-label="Facebook"
                                >
                                    <FaFacebook className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}