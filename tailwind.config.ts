import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        accent: {
          50: '#fff8f0',
          100: '#feebd0',
          200: '#fcd9a8',
          300: '#f9c46c',
          400: '#f5a623',
          500: '#e8930c',
          600: '#c27706',
          700: '#9c5f08',
          800: '#7c4b0e',
          900: '#663e0f',
        },
        bhhs: {
          maroon: '#6a1b4d',
          gold: '#c9a84c',
          cream: '#faf5eb',
        },
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', 'serif'],
        body: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
