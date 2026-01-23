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

                {cards.map((card) => (

                    <div
                        key={card.id}
                        className="rounded-2xl bg-[#EBF7F8] overflow-hidden border border-gray-100 shadow-sm flex flex-col"
                    >
                        {/* TEXT CARD */}
                        {card.type === "text" && (
                            <div className="p-8">
                                <h2 className="text-gray-900 text-2xl font-bold mb-6">
                                    {card.title}
                                </h2>
                                <ul className="text-gray-500 text-sm space-y-3">
                                    {card.items.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
            ))}

                    </div>
        </section>
    );
}