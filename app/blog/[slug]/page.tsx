
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Clock, Calendar, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPost, getAllPosts } from "@/lib/keystatic";
import { DocumentRenderer } from '@keystatic/core/renderer';

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug);

    if (!post) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Progress Bar (Visual decoration) */}
            <div className="fixed top-20 left-0 w-full h-1 bg-gray-100 z-40">
                <div className="h-full bg-brand-accent w-1/3"></div>
            </div>

            <article className="pt-32 pb-20">
                {/* Header Section */}
                <header className="max-w-4xl mx-auto px-4 mb-12 text-center">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Link href="/categories" className="text-gray-400 hover:text-brand-dark transition-colors flex items-center gap-1 text-sm font-medium">
                            <ArrowLeft className="w-4 h-4" /> Всички
                        </Link>
                        <span className="text-gray-300">/</span>
                        <span className="text-brand-accent font-bold text-sm tracking-widest uppercase">{post.category}</span>
                    </div>

                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 font-light italic mb-8 max-w-2xl mx-auto">
                        {post.subtitle}
                    </p>

                    <div className="flex items-center justify-center gap-6 text-sm text-gray-500 border-y border-gray-100 py-4 max-w-lg mx-auto">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent font-serif font-bold">
                                {post.author ? post.author[0] : 'Д'}
                            </div>
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                {post.image && (
                    <div className="w-full max-w-6xl mx-auto px-4 mb-16">
                        <div className="relative aspect-[3/2] md:aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                )}

                {/* Audio Player Section */}
                {post.audio && (
                    <div className="max-w-3xl mx-auto px-4 mb-12">
                        <div className="bg-brand-black text-white p-6 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-6">
                            <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" /></svg>
                            </div>
                            <div className="flex-1 w-full">
                                <h3 className="text-white font-bold mb-1 uppercase tracking-wider text-xs">Слушай статията</h3>
                                <audio controls className="w-full h-8 accent-brand-accent">
                                    <source src={post.audio} type="audio/mp4" />
                                    <source src={post.audio} type="audio/mpeg" />
                                    Вашият браузър не поддържа аудио елемента.
                                </audio>
                            </div>
                        </div>
                    </div>
                )}

                {/* Amazon Affiliate Disclosure */}
                <div className="max-w-3xl mx-auto px-4 mb-8">
                    <div className="bg-gray-50 border-l-4 border-gray-300 p-4 rounded-r text-sm text-gray-500 italic">
                        <p>
                            <span className="font-bold">Оповестяване за партньорство:</span> Тази публикация съдържа партньорски връзки (affiliate links). Като Амазон сътрудник (Amazon Associate), аз печеля от квалифицирани покупки, направени чрез тях. Това не променя цената за вас, но помага за поддръжката на този блог.
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-3xl mx-auto px-4 font-serif leading-loose text-lg text-gray-800 prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-brand-black prose-a:text-brand-accent hover:prose-a:text-brand-dark prose-img:rounded-xl">
                    <DocumentRenderer document={post.content} />
                </div>

                {/* Social Share & Tags */}
                <div className="max-w-3xl mx-auto px-4 mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
                    <div className="flex gap-2">
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer">#блог</span>
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer">#{post.category?.toLowerCase()}</span>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-gray-400 text-sm font-medium mr-2">Сподели:</span>
                        <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
                        <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
                        <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-700 cursor-pointer transition-colors" />
                        <Share2 className="w-5 h-5 text-gray-400 hover:text-gray-800 cursor-pointer transition-colors" />
                    </div>
                </div>

            </article>

            {/* Footer (Simplified for internal usage, ideally componentized) */}
            <footer className="bg-brand-gray py-12 text-center border-t border-gray-200">
                <Link href="/" className="text-brand-accent font-bold hover:underline">Обратно към началото</Link>
            </footer>
        </main>
    );
}
