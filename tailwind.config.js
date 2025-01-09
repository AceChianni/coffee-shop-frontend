// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C97A3B', // Warm brownish-orange
        secondary: '#B58953', // Golden ochre
        accent: '#D18F6B', // Light terracotta
        neutral: '#F4E1C1', // Pale beige
        'base-100': '#FFF9E6', // Creamy off-white for light mode background
        'text-primary': '#4A4A4A', // Dark gray text
        'text-secondary': '#C97A3B', // Warm brown for secondary text
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: '#C97A3B',
          secondary: '#B58953',
          accent: '#D18F6B',
          neutral: '#F4E1C1',
          'base-100': '#FFF9E6',
          'text-primary': '#4A4A4A',
          'text-secondary': '#C97A3B',
        },
        dark: {
          primary: '#D5854A',
          secondary: '#F0A77B',
          accent: '#BC6B3A',
          neutral: '#3E3E3E',
          'base-100': '#1A1A1A',
          'text-primary': '#E4D8B0',
          'text-secondary': '#F0A77B',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
