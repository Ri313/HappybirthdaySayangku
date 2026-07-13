/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      xs: '380px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        night: {
          DEFAULT: '#1B1523',
          panel: '#241A2E',
          deep: '#150F1C',
        },
        gold: {
          DEFAULT: '#D4A574',
          soft: '#E7C9A0',
        },
        blush: {
          DEFAULT: '#E8AFA4',
          soft: '#F2C9C0',
        },
        cream: '#F5EDE4',
        mute: '#C9B8C7',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        script: ['"Caveat"', 'cursive'],
        body: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(212, 165, 116, 0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-1deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1deg)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        spinSlow: 'spinSlow 8s linear infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
