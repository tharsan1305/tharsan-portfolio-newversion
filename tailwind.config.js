/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // support stealth/recon mode
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0A0F1C',
        'bg-secondary': '#111827',
        'accent-cyan': '#06B6D4',
        'accent-red': '#EF4444',
        'accent-purple': '#6366F1',
        'text-primary': '#FFFFFF',
        'text-muted': '#94A3B8',
        'border-color': '#1E293B',
      },
      fontFamily: {
        display: ['"Inter"', 'sans-serif'], // Use Inter for titles for senior researcher look
        sans: ['"Inter"', 'sans-serif'],
        code: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'cyan-glow': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'purple-glow': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'red-glow': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}

