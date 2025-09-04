/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nomade: {
          'dark-brown': '#1a150d',
          'green': '#5d681d',
          'light-green': '#99ab33',
          'off-white': '#ebe9d8',
          'dark-gray': '#222021',
          'gray': '#666666',
          'background-gray': '#ededed',
          'terracotta': '#ee735a',
          'tan': '#b39d8c',
          'teal': '#78b1bf',
          'orange-brown': '#cc7d42',
          'dusty-rose': '#b3837b',
          'sage-green': '#82b074',
          'blue': '#6176cb',
          'light-yellow': '#ffe196',
          'lavender': '#d094f2',
        }
      },
      fontFamily: {
        'display': ['Lora', 'serif'],
        'serif': ['Crimson Text', 'serif'], 
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};