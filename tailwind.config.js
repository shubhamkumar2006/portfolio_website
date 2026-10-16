/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#050816',
        panel: '#0f172a',
        accent: '#7c3aed',
        cyanAccent: '#22d3ee',
        mint: '#34d399',
      },
      boxShadow: {
        glow: '0 0 30px rgba(124, 58, 237, 0.35)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.18) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}
