/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'ping-slow': 'ping 3s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
      },
      boxShadow: {
        'cyber': '0 0 20px rgba(147, 51, 234, 0.5)',
        'cyber-pink': '0 0 20px rgba(236, 72, 153, 0.5)',
      }
    },
  },
  plugins: [],
}