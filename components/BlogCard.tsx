import Image from "next/image";
import Link from "next/link"; // Assumed future need, or just visual
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
    link?: string;
    color?: string;
}

export default function BlogCard({ title, excerpt, image, category, date, link = "#", color = "bg-brand-accent" }: BlogCardProps) {
    return (
        <Link href={link} className="block h-full">
            <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                <div className="relative h-64 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute top-4 left-4 ${color}/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm`}>
                        {category}
                    </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-serif text-xl font-bold mb-3 text-brand-dark group-hover:text-brand-accent transition-colors line-clamp-2">
                        {title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 fraction-1">
                        {excerpt}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-xs text-gray-500 font-medium tracking-wider">{date}</span>
                        <span className="text-brand-accent font-semibold text-sm group-hover:translate-x-1 transition-transform flex items-center gap-1">
                            Прочети <ArrowRight className="w-3 h-3" />
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}
