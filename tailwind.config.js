/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
    gridTemplateRows: {
        'summary': 'repeat(2, minmax(250px, 1fr))',
      }
    },
    container: {
      center: true,
      screens: {
                'sm': '100%',
                'md': '100%',
                'lg': '1024px',
                'xl': '1024px',
                '2xl': '1024px',
            }
    },
  },
  plugins: [],
}

