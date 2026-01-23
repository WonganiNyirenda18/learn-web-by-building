import reactCardImage from "../Assets/react.jpg";
import cssCardImage from "../Assets/css.jpg"

export default function Tools() {

    const cards = [
        {
            id: 1,
            type: "text",
            title: "Technologies used",
            items: [
                "HTML, CSS, JavaScript",
                "Libraries i.e React",
                "Frameworks i.e Next.js",
            ],
            bg: "#EBF7F8",
        },
        {
            id: 2,
            type: "image",
            image: reactCardImage,
            alt: "React",
            buttonText: "Learn React",
            bg: "#EBF7F8",
        },
        {
            id: 3,
            type: "image",
            image: cssCardImage,
            alt: "CSS",
            buttonText: "Learn CSS",
            bg: "#EBF7F8",
        },
    ];

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">

                <div className="bg-[#EBF7F8] rounded-2xl p-8 flex flex-col justify-between">
                    <div>
                        <h2 className="text-gray-900 text-2xl font-bold mb-6">
                            Technologies used
                        </h2>
                        <ul className="text-gray-500 text-sm space-y-3">
                            <li>HTML, CSS, JavaScript</li>
                            <li>Libraries i.e React</li>
                            <li>Frameworks i.e Next.js</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-[#EBF7F8] rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col">
                    <div className="h-40">
                        <img
                            src={reactCardImage}
                            alt="React"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-4 mt-auto">
                        <button className="bg-black text-white text-sm px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform">
                            Learn React
                        </button>
                    </div>
                </div>

                <div className="bg-[#EBF7F8] rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col">
                    <div className="h-40">
                        <img
                            src={cssCardImage}
                            alt="CSS"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-4 mt-auto">
                        <button className="bg-black text-white text-sm px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform">
                            Learn CSS
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}