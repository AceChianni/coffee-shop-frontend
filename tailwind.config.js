module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Earth tones (greens, browns, muted oranges, greys)
        primary: '#4C6A33',        // Muted green (earthy)
        secondary: '#6E4B3A',      // Muted brown
        accent: '#D27848',         // Muted orange
        neutral: '#A0A59A',        // Soft grey

        // Sunset-like colors for a pop (bright but not too harsh)
        sunset: '#F89C42',         // Sunset orange (for CTA buttons)
        sunsetDark: '#F56C00',     // Darker sunset color (for hover effects)
        
        'base-100': '#F1F7ED',     // Light background color
        'base-dark': '#1B512D',    // Dark background color

        // Text colors (darker for light mode, lighter for dark mode)
        'text-primary': '#4C6A33', // Dark green for text (light mode)
        'text-secondary': '#6E4B3A', // Darker brown text (for links or secondary text)

        // Accessible text colors
        'text-light': '#FFFFFF',   // White text for dark mode
        'text-dark': '#333333',    // Dark text for light mode
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: '#4C6A33',       // Muted green (earthy)
          secondary: '#6E4B3A',     // Muted brown
          accent: '#D27848',        // Muted orange
          neutral: '#A0A59A',       // Soft grey
          'base-100': '#F1F7ED',    // Light background color
          'text-primary': '#4C6A33', // Dark green text (light mode)
          'text-secondary': '#6E4B3A', // Brown secondary text
        },
        dark: {
          primary: '#D27848',       // Muted orange (for dark mode)
          secondary: '#A0A59A',     // Soft grey
          accent: '#F56C00',        // Sunset orange (for hover effects)
          neutral: '#1B512D',       // Dark green for dark mode background
          'base-100': '#1B512D',    // Dark background
          'text-primary': '#F1F7ED', // Light text for dark mode
          'text-secondary': '#F89C42', // Sunset orange (for links or accent)
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
