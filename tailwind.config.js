// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './styles/**/*.{css}',
    './public/**/*.{html}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4C6A33',        // Earthy green (light mode)
        secondary: '#6E4B3A',      // Muted brown
        accent: '#D27848',         // Soft orange
        neutral: '#A0A59A',        // Neutral grey
        'base-100': '#F1F7ED',     // Light background
        'base-dark': '#1B512D',    // Dark background
        'text-primary': '#333333', // Accessible dark text for light mode
        'text-light': '#FFFFFF',   // Accessible white text for dark mode
        'sunset-light': '#F89C42', // Brighter sunset for light mode
        'sunset-dark': '#F56C00',  // Subtler sunset for dark mode
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: '#4C6A33',
          secondary: '#6E4B3A',
          accent: '#F89C42',
          neutral: '#A0A59A',
          'base-100': '#F1F7ED',
          'base-content': '#333333',
        },
        dark: {
          primary: '#D27848',
          secondary: '#A0A59A',
          accent: '#F56C00',
          neutral: '#1B512D',
          'base-100': '#1B512D',
          'base-content': '#FFFFFF',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
