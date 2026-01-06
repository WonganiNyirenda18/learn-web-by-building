import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 w-full z-50 px-6 py-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Navigation Links */}
                <nav className={`
                    fixed inset-0 bg-[#2a1b18] flex flex-col items-center justify-center transition-transform duration-300 ease-in-out
                    md:relative md:bg-transparent md:flex-row md:items-center md:translate-x-0 md:inset-auto md:block
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
                `}>
                    <ul className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12 text-center">
                        <li>
                            <a href="#" className="text-xl md:text-sm font-medium text-white hover:text-cyan-400 transition-colors uppercase tracking-wider">Introduction</a>
                        </li>
                        <li>
                            <a href="#" className="text-xl md:text-sm font-medium text-white hover:text-cyan-400 transition-colors uppercase tracking-wider">Architecture</a>
                        </li>
                        <li>
                            <a href="#" className="text-xl md:text-sm font-medium text-white hover:text-cyan-400 transition-colors uppercase tracking-wider">Accessibility</a>
                        </li>
                        <li>
                            <a href="#" className="text-xl md:text-sm font-medium text-white hover:text-cyan-400 transition-colors uppercase tracking-wider">API's</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

