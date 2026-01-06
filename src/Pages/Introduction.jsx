export default function Introduction() {
    return (
        <div>
            <section
                className="relative h-[70vh] bg-cover bg-center flex items-center justify-center p-8"
                style={{
                    // Using a placeholder image that matches the "code/nature" vibe since local file might not exist
                    backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')"
                }}
            >
                <div className="absolute inset-0 bg-[#2a1b18]/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1b18] to-transparent"></div>

                <div className="relative z-10 w-full max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">The Nature Of <br /> The Web</h1>
                </div>
            </section>

            <section className="bg-[#2a1b18] px-8 py-16">
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="max-w-3xl">
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                            The WWW is the universe of network-accessible resources, may be interlinked by hypertext.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-500 pl-4">Elements of the Web</h2>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-center"><span className="text-cyan-500 mr-2">›</span> Markup</li>
                                <li className="flex items-center"><span className="text-cyan-500 mr-2">›</span> Protocol</li>
                                <li className="flex items-center"><span className="text-cyan-500 mr-2">›</span> Uniform resource access notation</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-500 pl-4">Categories of Web resources</h2>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-center"><span className="text-cyan-500 mr-2">›</span> Websites</li>
                                <li className="flex items-center"><span className="text-cyan-500 mr-2">›</span> Web applications</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
