import Link from 'next/link';
import { FaEnvelope, FaFacebook, FaPhone, FaYoutube, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-12">
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
                        <div className="space-y-4">
                            <p>
                                <Link href="/gebedstijden" className="hover:text-crown transition-colors flex items-center space-x-2">
                                    <span>→</span>
                                    <span>Gebedstijden</span>
                                </Link>
                            </p>
                            <p>
                                <Link href="/activiteiten" className="hover:text-crown transition-colors flex items-center space-x-2">
                                    <span>→</span>
                                    <span>Activiteiten</span>
                                </Link>
                            </p>
                            <p>
                                <Link href="/donatie" className="hover:text-crown transition-colors flex items-center space-x-2">
                                    <span>→</span>
                                    <span>Doneren</span>
                                </Link>
                            </p>
                            <p>
                                <Link href="/contact" className="hover:text-crown transition-colors flex items-center space-x-2">
                                    <span>→</span>
                                    <span>Contact</span>
                                </Link>
                            </p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Volg Ons</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/profile.php?id=61570247316924"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-crown transition-colors"
                                aria-label="Facebook"
                            >
                                <div className="flex-shrink-0 w-10 h-10 bg-crown/10 rounded-full flex items-center justify-center">
                                    <FaFacebook className="w-5 h-5 text-crown" />
                                </div>
                            </a>

                            <a
                                href="https://mawaqit.net/en/moskee-ennassr-borgerhout-2140-belgium"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-crown transition-colors"
                                aria-label="Instagram"
                            >
                                <div className="flex-shrink-0 w-10 h-10 bg-crown/10 rounded-full flex items-center justify-center">
                                    <FaClock className="w-5 h-5 text-crown" />
                                </div>
                            </a>

                            <a
                                href="https://www.youtube.com/@dekroon-72"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-crown transition-colors"
                                aria-label="Youtube"
                            >
                                <div className="flex-shrink-0 w-10 h-10 bg-crown/10 rounded-full flex items-center justify-center">
                                    <FaYoutube className="w-5 h-5 text-crown" />
                                </div>
                            </a>
                        </div>
                        <p className="mt-6 text-sm text-gray-400">
                            Volg ons op sociale media voor de laatste updates en activiteiten.
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} VZW Educatief Jeugdcentrum De Kroon. Alle rechten voorbehouden.</p>
                </div>
            </div>
        </footer>
    );
}