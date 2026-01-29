import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                brand: {
                    black: '#1a1a1a',
                    dark: '#2d2d2d',
                    gray: '#f4f4f4',
                    accent: '#0f766e', // Deep Teal/Emerald
                    gold: '#d4af37'
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                serif: ['var(--font-merriweather)'],
            }
        },
    },
    plugins: [],
};
export default config;
