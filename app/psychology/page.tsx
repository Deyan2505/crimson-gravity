import Navbar from "@/components/Navbar";
import { getAllPosts } from "@/lib/keystatic";
import BlogCard from "@/components/BlogCard";
import { Brain, Sparkles } from "lucide-react";
import Link from "next/link";

export default async function Psychology() {
    const allPosts = await getAllPosts();

    // Filter only psychology posts
    const psychologyPosts = allPosts.filter(post =>
        post.category === "Психология" ||
        post.title.toLowerCase().includes("психология")
    );

    return (
        <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
            <Navbar />

            <section className="pt-40 pb-16 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-bold text-sm mb-6 uppercase tracking-wider">
                        <Brain className="w-4 h-4" />
                        Психология & Самоусъвършенстване
                    </div>
                    <h1 className="font-serif text-5xl md:text-6xl font-bold text-brand-black mb-8">
                        Опознай себе си
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                        Тук се учим как работи умът ни и как да живеем по-осъзнато.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 pb-24">
                {/* Featured / Introduction Card */}
                <div className="mb-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100 flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="font-serif text-3xl font-bold text-brand-black">Защо психология?</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Разбирането на собствените ни емоции и мотивация е ключът към всеки друг успех. В тази секция споделям ресурси, книги и лични прозрения, които ми помагат по пътя.
                        </p>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 text-sm text-purple-700 bg-purple-50 px-3 py-1 rounded-lg">
                                <Sparkles className="w-4 h-4" /> Емоционална интелигентност
                            </div>
                            <div className="flex items-center gap-2 text-sm text-purple-700 bg-purple-50 px-3 py-1 rounded-lg">
                                <Brain className="w-4 h-4" /> Ментални модели
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 h-64 relative bg-purple-100 rounded-2xl overflow-hidden flex items-center justify-center">
                        {/* Abstract Art */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-indigo-600 opacity-90"></div>
                        <div className="relative z-10 text-white text-center p-6">
                            <p className="font-serif italic text-2xl">"Красотата не е само външна - тя живее в доброто сърце и будния ум"</p>
                        </div>
                    </div>
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {psychologyPosts.length > 0 ? (
                        psychologyPosts.map((post) => (
                            <BlogCard
                                key={post.slug}
                                title={post.title}
                                excerpt={post.subtitle || ''}
                                image={post.image || ''}
                                category={post.category}
                                date={post.date}
                                link={`/blog/${post.slug}`}
                                color="bg-purple-600"
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-gray-400">
                            Все още няма добавени статии в тази категория. Очаквайте скоро!
                        </div>
                    )}

                    {/* Placeholder for visual balance if needed, or remove */}
                </div>
            </section>
        </main>
    );
}
