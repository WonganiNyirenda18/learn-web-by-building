import Setup from "../Assets/setup.jpg";

export default function JackOfAllTrades() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-[#EBF7F8] p-12 md:p-20 relative overflow-hidden min-h-[500px] flex items-center">

                    <div className="grid md:grid-cols-2 gap-16 items-center w-full relative z-10">

                        <div className="relative">
                            <div className="w-[400px] h-[400px] rounded-full overflow-hidden shadow-2xl mx-auto">
                                <img
                                    src={Setup}
                                    alt="Workspace"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>


                        <div className="space-y-16">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gray-900">
                                    Be a jack of all trades and a master all
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                                    Only through a fundamental understanding of the core technology
                                    can developers be expected to grow with the technological
                                    changes associated with web development
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-xl font-bold text-gray-900">
                                    Related Concepts
                                </h4>
                                <ul className="space-y-2 text-gray-500 text-sm">
                                    <li>Information Architecture</li>
                                    <li>Digital Accessibility</li>
                                    <li>API's</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
