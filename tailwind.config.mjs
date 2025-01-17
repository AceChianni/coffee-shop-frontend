// tailwing.config.mjs 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', 
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        sunset: { 
          // Light theme colors
          "primary": "#af7b3a",
          "secondary": "#fef7d5",
          "accent": "#6a4406",
          "neutral": "#485613",
          "base-100": "#fef7d5",
          "base-200": "#fff8e1",
          "base-300": "#fffbeb",
          "base-content": "#111827",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
        dim: { 
          // Dark theme colors
          "primary": "#be5615",
          "secondary": "#ffdaa7",
          "accent": "#632c02",
          "neutral": "#4c3f07",
          "base-100": "#ffdaa7",
          "base-200": "#ffcc8a",
          "base-300": "#ffb566",
          "base-content": "#1f2937",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        copper: "#af7b3a",
        cornsilk: "#fef7d5",
        sepia: "#6a4406",
        "sepia-2": "#6b4406",
        "dark-moss-green": "#485613",
        "burnt-orange": "#be5615",
        sunset: "#ffdaa7",
        "seal-brown": "#632c02",
        "seal-brown-2": "#632c02",
        "drab-dark-brown": "#4c3f07",
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
      },
      spacing: {
        '4.5': '1.125rem',
        '9': '2.25rem',
        '18': '4.5rem',
        '36': '9rem',
      },
    },
  },
};
