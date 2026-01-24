import Setup from "../Assets/setup.jpg"

export default function Concepts() {
    return (
        <section className="bg-white py-24 flex justify-center px-6">
            <div className="max-w-7xl w-full bg-[#EBF7F8] rounded-3xl p-12 md:p-20 flex items-center">

                <div className="relative">
                    <img className="w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto"
                        src={Setup} alt="Setup"
                    />
                </div>

                <h2>Relatad Concepts</h2>

                <div>
                    <h3> Be a jack of all trades and a master of all</h3>
                    <p>
                        Only through a fundamental understanding of the core technology
                        can developers be expected to grow with technological
                        changes associated with web development
                    </p>
                </div>

                <div>
                    <h3>Related concepts</h3>
                    <ul>
                        <li>Information Architecture</li>
                        <li>Digital Accessibility</li>
                        <li>API's</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}