import { Shield, Target, Users, History } from 'lucide-react';

export default function About() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Building Legacy Through <span className="text-emerald-400">Secure Land</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Selvabhoomi Properties is redefining land investment with transparency, legal security, and long-term value creation.
                    </p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                                <Target className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                            <p className="text-gray-600 leading-relaxed">
                                To be the most trusted land aggregator in India, enabling families to build generational wealth through legally secure and professionally managed land assets. We aim to transform land ownership from a complex, risky endeavor into a seamless, high-growth investment experience.
                            </p>
                        </div>

                        <div className="bg-teal-50 rounded-3xl p-8 border border-teal-100">
                            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                                <Shield className="w-6 h-6 text-teal-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We are committed to delivering 100% legally clear titles, strategic locations with high appreciation potential, and end-to-end management services. Our mission is to protect our investors' interests while maximizing the ecological and economic value of every square foot.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Our Journey
                            </h2>
                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    Founded with a singular purpose to bring transparency to the real estate sector, Selvabhoomi Properties has grown from a small consultancy to a premier land asset management firm.
                                </p>
                                <p>
                                    We identified a gap in the market: investors wanted land but feared legal tangles and encroachment. We solved this by creating a robust 3-tier legal verification process and offering post-purchase management.
                                </p>
                                <p>
                                    Today, we have successfully delivered over 500+ acres of premium land to 1000+ happy families, helping them secure their financial future.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                                alt="Team meeting"
                                className="rounded-2xl shadow-xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                <div className="flex items-center gap-4">
                                    <div className="bg-emerald-100 p-3 rounded-full">
                                        <History className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">10+ Years</div>
                                        <div className="text-sm text-gray-600">Of Excellence</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Integrity</h3>
                            <p className="text-gray-600">Uncompromising honesty in every transaction.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-6 h-6 text-teal-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Customer First</h3>
                            <p className="text-gray-600">Your wealth preservation is our top priority.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Target className="w-6 h-6 text-cyan-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Excellence</h3>
                            <p className="text-gray-600">Delivering quality that exceeds expectations.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
