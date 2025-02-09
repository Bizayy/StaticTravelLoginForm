import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#566396",
                },
                secondary: {
                    100: "#697087",
                }
            },
            screens: {
                'xs': '360px',
                'custom-lg': '850px',
                'custom-2xl': '1250px',
            },
        },
    },
    plugins: [],
} satisfies Config;
