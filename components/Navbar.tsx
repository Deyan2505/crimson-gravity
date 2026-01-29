"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, BookOpen } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 glass border-b-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="bg-brand-accent/10 p-2 rounded-lg group-hover:bg-brand-accent/20 transition-colors">
                                <BookOpen className="h-6 w-6 text-brand-accent" />
                            </div>
                            <span className="font-serif text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-black to-brand-dark">
                                Подбрано от Дани
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/categories" className="text-gray-600 hover:text-brand-accent font-medium transition-colors text-sm uppercase tracking-wide">
                            Категории
                        </Link>
                        <Link href="/about" className="text-gray-600 hover:text-brand-accent font-medium transition-colors text-sm uppercase tracking-wide">
                            За нас
                        </Link>
                        <Link href="/mission" className="text-gray-600 hover:text-brand-accent font-medium transition-colors text-sm uppercase tracking-wide">
                            Мисия
                        </Link>
                        <Link href="/psychology" className="text-gray-600 hover:text-brand-accent font-medium transition-colors text-sm uppercase tracking-wide">
                            Психология
                        </Link>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-gray-500 hover:text-brand-accent transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-gray-500 hover:text-brand-dark transition-colors"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>

                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl animate-fade-in-down">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <Link
                            href="/categories"
                            className="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-brand-accent hover:bg-brand-accent/5 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Категории
                        </Link>
                        <Link
                            href="/about"
                            className="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-brand-accent hover:bg-brand-accent/5 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            За нас
                        </Link>
                        <Link
                            href="/mission"
                            className="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-brand-accent hover:bg-brand-accent/5 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Мисия
                        </Link>
                        <Link
                            href="/psychology"
                            className="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-brand-accent hover:bg-brand-accent/5 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Психология
                        </Link>

                    </div>
                </div>
            )}
        </nav>
    );
}
