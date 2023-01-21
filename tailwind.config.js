/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {},
            maxWidth: {
                cutoff: '1440px',
            },
            fontFamily: {
                lato: ['Lato', 'sans-serif'],
                nunito: ['Nunito', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
            transitionProperty: {
                smooth: 'all 0.45s ease-in cubic-bezier(0.23, 1, 0.32, 1)',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
