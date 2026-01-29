import Link from "next/link";
import Navbar from "@/components/Navbar";
import { BookOpen, Camera, Cpu, Home as HomeIcon, Star, Baby, Palette, Music, LucideIcon } from "lucide-react";

interface Category {
    name: string;
    slug: string;
    icon: LucideIcon;
    description: string;
    color: string;
    gradient: string;
    link?: string;
}

const categories: Category[] = [
    {
        name: "Ревюта",
        slug: "reviews",
        icon: Star,
        description: "Подробни и честни ревюта на продуктите, които използвам всеки ден.",
        color: "bg-amber-500",
        gradient: "from-amber-400 to-orange-500"
    },
    {
        name: "Технологии",
        slug: "tech",
        icon: Cpu,
        description: "Джаджите, които правят живота по-лесен и по-интересен.",
        color: "bg-blue-500",
        gradient: "from-blue-400 to-indigo-500"
    },
    {
        name: "Книги",
        slug: "books",
        icon: BookOpen,
        description: "Литературата, която променя мисленето и вдъхновява душата.",
        color: "bg-emerald-500",
        gradient: "from-emerald-400 to-teal-500"
    },
    {
        name: "За Дома",
        slug: "home",
        icon: HomeIcon,
        description: "Идеи за уют, организация и красив интериор.",
        color: "bg-rose-500",
        gradient: "from-rose-400 to-pink-500"
    },

    {
        name: "Фотография",
        slug: "photo",
        icon: Camera,
        description: "Моменти, уловени във времето. Съвети и техника.",
        color: "bg-purple-500",
        gradient: "from-purple-400 to-violet-500"
    },
    {
        name: "Аудио Ревюта",
        slug: "audio",
        icon: Music,
        description: "Слушай статиите в движение. Полезно съдържание в аудио формат.",
        color: "bg-pink-500",
        gradient: "from-pink-400 to-rose-500"
    }
];

export default function Categories() {
    return (
        <main className="min-h-screen bg-brand-gray">
            <Navbar />

            <section className="pt-40 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <h1 className="font-serif text-5xl md:text-6xl font-bold text-brand-black mb-6">
                            Избери своята тема
                        </h1>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
                            Разгледай колекцията от статии, подредени за твое удобство.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((category, index) => (
                            <Link
                                key={index}
                                href={category.link || `/blog/category/${category.slug}`}
                                className="group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${category.gradient} opacity-5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:opacity-10 transition-all duration-500`}>
                                </div>

                                <div className="p-10 flex flex-col items-center text-center h-full relative z-10">
                                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${category.gradient} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                        <category.icon className="w-10 h-10" />
                                    </div>

                                    <h3 className="font-serif text-2xl font-bold text-brand-black mb-4 group-hover:text-brand-accent transition-colors">
                                        {category.name}
                                    </h3>

                                    <p className="text-gray-500 leading-relaxed mb-6">
                                        {category.description}
                                    </p>

                                    <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-brand-accent font-bold text-sm uppercase tracking-widest">
                                        Разгледай
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
