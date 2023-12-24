/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                figtree: ["Figtree", "sans-serif"],
            },
            colors: {
                "custom-yellow": "hsl(47, 88%, 63%)",
            },
        },
    },
    plugins: [],
};
