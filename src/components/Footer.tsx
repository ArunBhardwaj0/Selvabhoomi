import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/logo.png" alt="Selvabhoomi Properties" className="w-10 h-10 object-contain" />
                            <span className="text-xl font-bold text-white">Selvabhoomi Properties</span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Curating secure, future-ready land assets for wealth preservation and family legacy.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Offerings</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Residential Plots</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Managed Farmlands</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Current Projects</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Sold Out Projects</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
                            <li><Link to="/about" className="hover:text-emerald-400 transition-colors">Why Choose Us</Link></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Legal Process</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Testimonials</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-emerald-500" />
                                Chennai, Tamil Nadu
                            </li>
                            <li>info@selvabhoomiproperties.com</li>
                            <li>+91 98765 43210</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; 2024 Selvabhoomi Properties. All rights reserved. Built for legacy, secured by trust.</p>
                </div>
            </div>
        </footer>
    );
}
