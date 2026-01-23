import reactCardImage from "../Assets/react.jpg";
import cssCardImage from "../Assets/css.jpg"

export default function Tools() {
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