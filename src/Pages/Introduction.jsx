export default function Introduction() {
    return (
        <div>
            <setion
                className="relative h-[70vh] bg-cover flex items-center"
                style={{
                    backgroundImage: "url('/images/background.jpg')"
                }}
            >

                <div className="absolute inset-0 bg-black/60"></div>
                <div>
                    <h1>The Nature Of The Web</h1>
                </div>
            </setion>

            <section>
                <div>
                    <p>The WWW is the universe of network-accessible resources, may be interlinked
                        by hypertext
                    </p>
                </div>

                <div>
                    <h2>Elements of the Web</h2>
                    <ul>
                        <li>Markup</li>
                        <li>Protocol</li>
                        <li>Uniform resource access notation</li>
                    </ul>

                    <h2>Categories of Web resources</h2>
                    <ul>
                        <li>Websites</li>
                        <li>Web applications</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}