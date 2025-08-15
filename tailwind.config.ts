import type { Config } from 'tailwindcss';

export default {
    darkMode: ['class', '[data-theme="dark"]'],
    content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                bg: {
                    DEFAULT: 'hsl(var(--bg))',
                    soft: 'hsl(var(--bg-soft))',
                    strong: 'hsl(var(--bg-strong))',
                },
                fg: {
                    DEFAULT: 'hsl(var(--fg))',
                    soft: 'hsl(var(--fg-soft))',
                    strong: 'hsl(var(--fg-strong))',
                },
                brand: {
                    50: '#f1f6ff',
                    100: '#e3edff',
                    200: '#c2d7ff',
                    300: '#9bbaff',
                    400: '#6a8fff',
                    500: 'hsl(var(--brand-500))',
                    600: 'hsl(var(--brand-600))',
                    700: 'hsl(var(--brand-700))',
                    800: '#1e266a',
                    900: '#141a4a'
                },
                accent: {
                    500: 'hsl(var(--accent-500))',
                    600: 'hsl(var(--accent-600))'
                },
                success: { 500: '#22c55e' },
                warning: { 500: '#f59e0b' },
                danger: { 500: '#ef4444' }
            },
            boxShadow: {
                glass: '0 8px 30px rgba(0,0,0,.12)',
                glow: '0 0 0 3px hsl(var(--brand-500) / .25)',
            },
            borderRadius: {
                '2xl': '1.25rem',
            },
            backdropBlur: {
                xs: '2px',
            },
        }
    },
    plugins: []
} satisfies Config;