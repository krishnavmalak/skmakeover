/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#f8f3ea',
        ivorySoft: '#fffdf8',
        charcoal: '#1f1b17',
        champagne: '#c7a56a',
        champagneSoft: '#e7d7b7',
        line: 'rgba(31, 27, 23, 0.1)',
      },
      fontFamily: {
        body: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(31, 27, 23, 0.08)',
        gilded: '0 24px 80px rgba(199, 165, 106, 0.18)',
      },
      backgroundImage: {
        'hero-luxury':
          'radial-gradient(circle at top, rgba(199,165,106,0.18), transparent 30%), radial-gradient(circle at right, rgba(31,27,23,0.05), transparent 28%), linear-gradient(180deg, rgba(255,253,249,0.92), rgba(248,243,234,1))',
      },
      letterSpacing: {
        luxury: '0.22em',
      },
    },
  },
  plugins: [],
};

module.exports = config;
