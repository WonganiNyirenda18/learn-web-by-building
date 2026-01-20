
export default function Technologies() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
                {/* Info Card */}
                <div className="bg-[#EBF7F8] p-10 rounded-2xl flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h3>
                    <ul className="space-y-3 text-gray-500 text-sm">
                        <li>HTML, CSS, & JavaScript</li>
                        <li>Libraries i.e React</li>
                        <li>Frameworks, etc.</li>
                    </ul>
                </div>

                {/* React Card */}
                <div className="bg-[#F0FDF4] p-6 rounded-2xl relative group overflow-hidden border border-gray-100 shadow-sm">
                    {/* Placeholder for React Code image */}
                    <div className="absolute inset-0 bg-gray-900/90 z-0">
                        <img src="https://placehold.co/400x300/1e293b/61dafb?text=React+Code+Internal" alt="React" className="w-full h-full object-cover opacity-50 mix-blend-overlay" />
                    </div>
                    <div className="relative z-10 pt-32">
                        <button className="bg-black text-white text-xs px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform">
                            Learn React
                        </button>
                    </div>
                </div>

                {/* CSS Card */}
                <div className="bg-[#EFF6FF] p-6 rounded-2xl relative group overflow-hidden border border-gray-100 shadow-sm">
                    {/* Placeholder for CSS Code image */}
                    <div className="absolute inset-0 bg-gray-900/90 z-0">
                        <img src="https://placehold.co/400x300/1e293b/38bdf8?text=CSS+Code+Internal" alt="CSS" className="w-full h-full object-cover opacity-50 mix-blend-overlay" />
                    </div>
                    <div className="relative z-10 pt-32">
                        <button className="bg-black text-white text-xs px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform">
                            Learn CSS
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
