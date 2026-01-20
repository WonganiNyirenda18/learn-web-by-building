
export default function Hero() {
    return (
        <section className="bg-[#EBF7F8] min-h-[600px] flex items-center pt-20">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
                <div className="space-y-8">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900">
                        The Nature <br />
                        of <br />
                        the Web
                    </h1>
                    <p className="text-gray-600 text-lg max-w-md leading-relaxed">
                        Only through a fundamental understanding of the core technology
                        can developers be expected to grow with the technological changes
                        associated with web development
                    </p>
                    <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all">
                        Read More
                    </button>
                </div>
                <div className="relative h-[500px] w-full bg-black overflow-hidden rounded-lg">
                    {/* Placeholder for the blue/green abstract web image */}
                    <img
                        src="https://placehold.co/600x600/000000/00FFFF?text=Abstract+Web+Network"
                        alt="Abstract Web Network"
                        className="w-full h-full object-cover opacity-80"
                    />
                </div>
            </div>
        </section>
    );
}
