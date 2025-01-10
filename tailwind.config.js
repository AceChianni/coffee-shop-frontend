// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#70523F', // Warm brown
        secondary: '#1B512D', // Deep green
        accent: '#F96F5D', // Terracotta
        neutral: '#9D9F80', // Olive
        'base-100': '#F1F7ED', // Creamy white for light mode
        'base-dark': '#1B512D', // Forest green for dark mode
        'text-primary': '#70523F', // Warm brown text
        'text-secondary': '#9D9F80', // Olive text
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: '#70523F',
          secondary: '#1B512D',
          accent: '#F96F5D',
          neutral: '#9D9F80',
          'base-100': '#F1F7ED',
          'text-primary': '#70523F',
          'text-secondary': '#9D9F80',
        },
        dark: {
          primary: '#F96F5D',
          secondary: '#9D9F80',
          accent: '#70523F',
          neutral: '#1B512D',
          'base-100': '#1B512D',
          'text-primary': '#F1F7ED',
          'text-secondary': '#F96F5D',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
