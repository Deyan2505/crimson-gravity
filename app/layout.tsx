import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin", "cyrillic"],
    variable: '--font-inter',
    display: 'swap',
});

const merriweather = Merriweather({
    weight: ['300', '400', '700', '900'],
    subsets: ["latin", "cyrillic"],
    variable: '--font-merriweather',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Подбрано от Дани | Избрани книги, продукти и идеи",
    description: "Уютно онлайн кътче за книги, продукти и идеи, които вдъхновяват.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="bg">
            <body className={`${inter.variable} ${merriweather.variable} font-sans antialiased bg-brand-gray text-brand-black`}>
                {children}
            </body>
        </html>
    );
}
