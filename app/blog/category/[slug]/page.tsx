
import Navbar from "@/components/Navbar";
import { getAllPosts } from "@/lib/keystatic";
import BlogCard from "@/components/BlogCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mapping slugs to Display Category Names
const categoryMap: Record<string, string> = {
    "reviews": "Ревюта",
    "tech": "Технологии",
    "books": "Книги",
    "home": "За Дома",
    "photo": "Фотография",
    "audio": "Аудио",

};

export function generateStaticParams() {
    return Object.keys(categoryMap).map((slug) => ({
        slug: slug,
    }));
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
    const categorySlug = params.slug;
    const categoryName = categoryMap[categorySlug];

    if (!categoryName) {
        return notFound();
    }

    const allPosts = await getAllPosts();

    // Filter posts that match the category name
    const categoryPosts = allPosts.filter(post =>
        post.category?.toLowerCase() === categoryName.toLowerCase()
    );

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <section className="pt-32 pb-12 px-4 bg-white shadow-sm">
                <div className="max-w-7xl mx-auto">
                    <Link href="/categories" className="inline-flex items-center text-gray-500 hover:text-brand-accent mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Всички категории
                    </Link>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-black">
                        {categoryName}
                    </h1>
                    <p className="text-gray-500 mt-4 text-lg">
                        Всички статии в категория "{categoryName.toLowerCase()}"
                    </p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    {categoryPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {categoryPosts.map((post) => (
                                <BlogCard
                                    key={post.slug}
                                    title={post.title}
                                    excerpt={post.subtitle || ''}
                                    image={post.image || ''}
                                    category={post.category}
                                    date={post.date}
                                    link={`/blog/${post.slug}`}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
                            <h3 className="text-xl text-gray-400 font-medium mb-2">Все още няма статии тук</h3>
                            <p className="text-gray-400 max-w-md mx-auto">
                                Работим по съдържанието за тази категория. Проверете отново скоро!
                            </p>
                            <Link href="/" className="inline-block mt-6 text-brand-accent font-bold hover:underline">
                                Към началната страница
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
