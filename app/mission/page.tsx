import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Quote, Target, Heart, Sparkles } from "lucide-react";

export default function Mission() {
    return (
        <main className="min-h-screen bg-white selection:bg-brand-accent/20">
            <Navbar />

            {/* Typography Hero */}
            <section className="pt-40 pb-20 px-4 max-w-4xl mx-auto text-center">
                <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-brand-accent/5">
                        <Target className="w-10 h-10 text-brand-accent" />
                    </div>
                </div>
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-brand-black mb-8 leading-tight">
                    Не просто за продуктите. <br />
                    <span className="text-brand-accent italic">За преживяването.</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
                    Ние вярваме, че всяка вещ, която допускаме в живота си, трябва да носи стойност, радост или вдъхновение.
                </p>
            </section>

            {/* Manifesto Grid */}
            <section className="bg-brand-gray py-24 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-12">
                        <div className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-accent">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-serif text-2xl font-bold text-brand-black mb-3">Осъзнат Избор</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    В свят на безкрайно потребление, ние избираме бавното, качественото и устойчивото. Не препоръчваме нищо, което не бихме използвали сами.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-accent">
                                    <Heart className="w-6 h-6" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-serif text-2xl font-bold text-brand-black mb-3">Искреност</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Доверието е най-ценната валута. Нашите ревюта са базирани на реален опит, без скрити условия и без компромиси.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-accent">
                                    <Quote className="w-6 h-6" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-serif text-2xl font-bold text-brand-black mb-3">Истории</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Зад всеки продукт или книга стои история. Ние сме тук, за да я разкажем така, че да ви докосне.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Visual Element */}
                    <div className="relative aspect-[3/4] md:aspect-square bg-brand-black rounded-3xl overflow-hidden shadow-2xl p-12 flex items-center justify-center text-center">
                        <div className="relative z-10 text-white space-y-6">
                            <h2 className="font-serif text-4xl font-bold">
                                "Качеството не е акт, а навик."
                            </h2>
                            <p className="font-sans text-brand-accent font-bold tracking-widest uppercase">
                                — Аристотел
                            </p>
                        </div>
                        {/* Abstract BG */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent rounded-full filter blur-[100px] opacity-30"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full filter blur-[100px] opacity-30"></div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center">
                <h2 className="font-serif text-4xl font-bold text-brand-black mb-8">Готови ли сте да откривате заедно с нас?</h2>
                <Link href="/categories" className="inline-flex items-center justify-center px-10 py-5 bg-brand-accent text-white font-bold rounded-full hover:bg-brand-dark transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-brand-accent/30">
                    Разгледайте Категориите
                </Link>
            </section>
        </main>
    );
}
