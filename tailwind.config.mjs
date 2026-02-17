/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'primary-red': '#561C24',
                'secondary-red': '#6D2932',
                'violent-red': '#E10600', // Kept for reference
            },
            fontFamily: {
                body: ['Switzer', 'sans-serif'],
                display: ['Khand', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
