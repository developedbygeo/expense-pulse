import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './index.html',
        './frontend/components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/frontend/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        fontSize: {
            xs: ['0.75rem', { lineHeight: '1rem' }],
            sm: ['0.875rem', { lineHeight: '1.5rem' }],
            base: ['1rem', { lineHeight: '1.75rem' }],
            lg: ['1.125rem', { lineHeight: '1.75rem' }],
            xl: ['1.25rem', { lineHeight: '2rem' }],
            '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
            '3xl': ['1.75rem', { lineHeight: '2.25rem' }],
            '4xl': ['2rem', { lineHeight: '2.5rem' }],
            '5xl': ['2.5rem', { lineHeight: '3rem' }],
            '6xl': ['3rem', { lineHeight: '3.5rem' }],
            '7xl': ['4rem', { lineHeight: '4.5rem' }],
        },
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
                '3xl': '1600px',
                '4xl': '1920px',
            },
        },
        extend: {
            colors: {
                accent: '#F84F39',
                success: '#15803D',
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                display: [
                    ['Inter', ...defaultTheme.fontFamily.sans],
                    { fontVariationSettings: '"wdth" 125' },
                ],
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
}
