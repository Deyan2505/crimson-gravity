import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
                <h1 className="font-serif text-5xl font-bold text-brand-black mb-12 text-center">За Мен</h1>

                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="w-full md:w-1/3 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
                        {/* Placeholder for Author Image */}
                        <Image
                            src="/dani-profile.jpg"
                            alt="Dani"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="w-full md:w-2/3 space-y-6 text-lg text-gray-600 font-serif leading-relaxed">
                        <p>
                            Здравейте! Аз съм <span className="text-brand-accent font-bold">Дани</span>.
                        </p>
                        <p>
                            Добре дошли в моето онлайн кътче. Създадох този сайт с една проста цел – да споделям нещата, които ме вдъхновяват и правят живота ми по-красив и смислен.
                        </p>
                        <p>
                            Тук няма да намерите просто "ревюта на продукти". Всяко нещо, за което пиша, е преминало през моя личен филтър и е оставило отпечатък в ежедневието ми. От книгите, които променят мисленето, през технологиите, които улесняват живота, до идеите, които ни помагат да растем.
                        </p>
                        <div className="pt-6 border-t border-gray-100">
                            <p className="font-sans font-bold text-brand-dark mb-4">Моята философия:</p>
                            <ul className="space-y-2 list-disc pl-5">
                                <li>Качество пред количество.</li>
                                <li>Искреност във всяка препоръка.</li>
                                <li>Стремеж към постоянно развитие.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
