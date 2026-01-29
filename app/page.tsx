import Image from "next/image";
import Link from "next/link";
import { MoveRight, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";

import { getAllPosts } from "@/lib/keystatic";

export default async function Home() {
    const allPosts = await getAllPosts();

    return (
        <main className="flex min-h-screen flex-col bg-brand-gray">
            <Navbar />

            {/* Hero Section */}
            <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop"
                        alt="Nature Background"
                        fill
                        className="object-cover brightness-[0.4]"
                        priority
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center text-white max-w-4xl px-4 animate-fade-in-up mt-16">
                    <div className="mb-8 flex justify-center">
                        <div className="glass p-6 rounded-full shadow-2xl animate-pulse-slow">
                            {/* Placeholder for Logo Image if available, else Icon */}
                            <span className="text-4xl">🌿</span>
                        </div>
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight drop-shadow-2xl">
                        &quot;Подбрано от Дани&quot;
                    </h1>
                    <p className="text-lg md:text-2xl font-light opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md text-balance">
                        Моето уютно онлайн кътче, където споделям книги, продукти и идеи, които ме вдъхновяват.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <Link href="/categories" className="bg-brand-accent hover:bg-teal-600 text-white text-lg px-10 py-4 rounded-full font-bold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1">
                            Разгледай Категориите
                            <MoveRight className="w-5 h-5" />
                        </Link>
                        <Link href="/about" className="glass hover:bg-white/20 text-white text-lg px-10 py-4 rounded-full font-bold transition-all duration-300 backdrop-blur-md border border-white/30">
                            За мен
                        </Link>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
                        <div className="w-1 h-3 bg-white rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* Featured Posts Section */}
            <section className="w-full max-w-7xl mx-auto px-4 py-24">
                <div className="text-center mb-20">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-black mb-6">Най-новите находки</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">Всичко, което препоръчвам, е избрано с внимание и сърце.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {allPosts.length > 0 ? (
                        allPosts.slice(0, 3).map((post) => (
                            <BlogCard
                                key={post.slug}
                                title={post.title}
                                excerpt={post.subtitle || ''}
                                image={post.image || ''}
                                category={post.category}
                                date={post.date}
                                link={`/blog/${post.slug}`}
                            />
                        ))
                    ) : (
                        <div className="col-span-3 text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
                            <h3 className="text-xl text-gray-400 font-medium mb-2">Все още няма нови статии</h3>
                            <p className="text-gray-400">Отидете в /keystatic, за да добавите първата!</p>
                        </div>
                    )}
                </div>

                <div className="text-center mt-16">
                    <Link href="/categories" className="text-brand-accent font-bold text-lg hover:text-brand-dark transition-colors border-b-2 border-brand-accent hover:border-brand-dark pb-1">
                        Виж всички публикации
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full bg-brand-black text-white py-16 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h4 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2">
                            <BookOpen className="w-6 h-6 text-brand-accent" /> Подбрано от Дани
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Споделям неща, които носят стойност. Отзиви за продукти, препоръки за книги и идеи за по-добър живот.
                        </p>
                    </div>
                    <div>
                        <h5 className="font-bold mb-6 text-lg tracking-wide">Бързи връзки</h5>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-brand-accent transition-colors">За мен</Link></li>
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Контакти</a></li>
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Политика за поверителност</a></li>
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Affiliate Disclosure</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-6 text-lg tracking-wide">Абонирай се</h5>
                        <p className="text-gray-400 text-sm mb-4">Получавай най-новите ревюта директно в пощата си.</p>
                        <div className="flex">
                            <input type="email" placeholder="Твоят email" className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-accent w-full" />
                            <button className="bg-brand-accent hover:bg-teal-700 px-4 py-2 rounded-r-lg font-bold text-sm transition-colors">OK</button>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
                    © 2025 Подбрано от Дани. Всички права запазени.
                </div>
            </footer>
        </main>
    );
}
