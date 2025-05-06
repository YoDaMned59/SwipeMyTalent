/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        secondary: '#F3F4F6',
        accent: '#FB923C',
        background: '#F9FAFB',
        text: '#333333',
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Roboto', 'sans-serif'],
        'accent': ['Playfair Display', 'serif'],
      },
      spacing: {
        'section': '2rem',
      },
    },
  },
  plugins: [],
}
