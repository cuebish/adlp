/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'adlp': {
          'primary': '#2D7A4F',
          'primary-dark': '#1F5F3D',
          'primary-light': '#3D9A6A',
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        'cream': {
          50: '#FDFCFA',
          100: '#FAF8F5',
          200: '#F5F2ED',
          300: '#EDE8E0',
        },
      },
      spacing: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
};
