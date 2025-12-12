module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        lightBg: '#F4FDFF',
        accent: '#C6E9F7',
        accent2: '#E5F8FF'
      },
      boxShadow: {
        'figma-card': '0 10px 40px rgba(31,61,75,0.15)',
      },
      keyframes: {
        floatBubble: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        floatBubble: 'floatBubble 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
