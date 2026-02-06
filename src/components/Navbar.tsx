import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/logo.png" alt="Selvabhoomi Properties" className="w-10 h-10 object-contain" />
                    <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        Selvabhoomi Properties
                    </span>
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Home</Link>
                    <Link to="/about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">About Us</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Contact</Link>
                    <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all">
                        Schedule Visit
                    </button>
                </div>
            </div>
        </nav>
    );
}
