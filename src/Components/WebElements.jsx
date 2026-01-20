
export default function WebElements() {
    const elements = [
        {
            number: "1",
            title: "Markup",
            desc: "formats and cross-references hypertext document"
        },
        {
            number: "2",
            title: "Protocol",
            desc: "allows for the retrieval of linked resources from across the web"
        },
        {
            number: "3",
            title: "Notation",
            desc: "URI uniquely identifies a resource and tells how to access it"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Elements of the Web</h2>
                    <div className="w-24 h-1.5 bg-black mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-12 text-center">
                    {elements.map((el, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                {el.number}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{el.title}</h3>
                            <p className="text-gray-500 text-sm max-w-[250px] leading-relaxed">
                                {el.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
