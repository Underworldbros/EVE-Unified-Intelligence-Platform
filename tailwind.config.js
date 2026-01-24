/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-space': '#0a0a0a',
        'control-pane': '#0c0c0c',
        'primary-sidebar': '#050505',
        'panel-surface': '#111111',
        'eve-emerald': '#34d399',
        'critical-red': '#A90B0B',
        'tactical-red': '#f87171',
        'scc-amber': '#fbbf24',
        'naval-blue': '#60a5fa',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'tactical': '0.4em',
      }
    },
  },
  plugins: [],
}