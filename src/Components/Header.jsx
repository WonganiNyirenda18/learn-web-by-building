export default function Header() {
    return (
        <header className="fixed top-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div>
                    <p>Logo</p>
                </div>

                <nav className="hidden md:flex items-center gap-12">
                    <a href="#" className="text-gray-500 font-medium hover:text-gray-900 transition-colors">Home</a>
                    <a href="#" className="text-gray-500 font-medium hover:text-gray-900 transition-colors">About</a>
                    <a href="#" className="text-gray-500 font-medium hover:text-gray-900 transition-colors">Contact</a>
                </nav>

                <div className="hidden md:block">
                    <button className="bg-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-all">
                        Blog
                    </button>
                </div>
            </div>
        </header>
    );
}