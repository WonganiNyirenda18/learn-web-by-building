export default function Introduction() {
    return (
        <div>
            <section
                className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/background.jpg')"
                }}
            >
                <div className="absolute inset-0 bg-[#2a1b18]/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1b18] to-transparent"></div>

                <div className="relative z-10 w-full max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">The Nature Of <br /> The Web</h1>
                </div>
            </section>
        </div>
    );
}
