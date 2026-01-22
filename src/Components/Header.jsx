import Logo from "../Assets/Logo2.png"
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed w-full top-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">


                <div className="flex-shrink-0">
                    <div className="w-15 h-15 rounded-lg overflow-hidden flex items-center justify-center">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>



                <nav className="hidden md:flex items-center gap-12">
                    <a href="#" className="text-gray-900 font-medium hover:text-blue-600 transition-colors border-b-2 border-black pb-1">Home</a>
                    <a href="#" className="text-gray-500 font-medium hover:text-blue-600 transition-colors">About</a>
                    <a href="#" className="text-gray-500 font-medium hover:text-blue-600 transition-colors">Contact</a>
                </nav>



                <div className="hidden md:block">
                    <button className="bg-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-all">
                        Blog
                    </button>
                </div>



                <button
                    className="md:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>


            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-lg">
                    <a href="#" className="text-gray-900 font-medium">Home</a>
                    <a href="#" className="text-gray-500 font-medium">About</a>
                    <a href="#" className="text-gray-500 font-medium">Contact</a>
                    <button className="bg-black text-white px-6 py-2.5 rounded-full font-medium w-full">
                        Blog
                    </button>
                </div>
            )}
        </header>
    );
}