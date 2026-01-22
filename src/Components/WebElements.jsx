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
                    <h2 className="text-2xl font-bold text-gray-500 mb-4">
                        Elements of the Web
                    </h2>
                </div>

                <div className="text-center gap-12">
                    {elements.map((element) => (
                        <div className="flex flex-col items-center group">
                            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                {element.number} </div>
                            <h2> {element.title} </h2>
                            <p> {element.desc} </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}