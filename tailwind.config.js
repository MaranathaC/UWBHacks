/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'pink': '#eb37c5',
      'purple': '#6f07d6',
      'blue': '#2503fb',
      'cyan': '#18e4ec',
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'mono': ['monospace'],
      'stacker': ['stacker'],
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { 'background-position': '0% center' },
          '100%': { 'background-position': '-200% center' },
        },
        glitch: {
          '0%': { 'text-shadow': '0.05em 0 0 purple, -0.03em -0.04em 0 pink, 0.025em 0.04em 0 cyan' },
          '15%': { 'text-shadow': '0.05em 0 0 purple, -0.03em -0.04em 0 pink, 0.025em 0.04em 0 cyan' },
          '16%': { 'text-shadow': '-0.05em -0.025em 0 purple, 0.025em 0.035em 0 pink, -0.05em -0.05em 0 cyan' },
          '49%': { 'text-shadow': '-0.05em -0.025em 0 purple, 0.025em 0.035em 0 pink, -0.05em -0.05em 0 cyan' },
          '50%': { 'text-shadow': '0.05em 0.035em 0 purple, 0.03em 0 0 pink, 0 -0.04em 0 cyan' },
          '99%': { 'text-shadow': '0.05em 0.035em 0 purple, 0.03em 0 0 pink, 0 -0.04em 0 cyan' },
          '100%': { 'text-shadow': '-0.05em 0 0 purple, -0.025em -0.04em 0 pink, -0.04em -0.025em 0 cyan' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 5s linear infinite',
        glitch: 'glitch 1000ms infinite',
      }
    }
  },
  plugins: [],
}
