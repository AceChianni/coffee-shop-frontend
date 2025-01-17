// // tailwind.config.js
// module.exports = {
//   content: [
//     './src/**/*.{js,jsx,ts,tsx}',
//     './pages/**/*.{js,jsx,ts,tsx}', 
//     './styles/**/*.css', 
//     './public/**/*.{html}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#4C6A33',
//         secondary: '#6E4B3A',
//         accent: '#D27848',
//         neutral: '#A0A59A',
//         'base-100': '#F1F7ED',
//         'base-dark': '#1B512D',
//         'text-primary': '#333333',
//         'text-light': '#FFFFFF',
//       },
//     },
//   },
//   plugins: [require('daisyui')],
//   daisyui: {
//     themes: [
//       {
//         light: {
//           primary: '#4C6A33',
//           secondary: '#6E4B3A',
//           accent: '#D27848',
//           neutral: '#A0A59A',
//           'base-100': '#F1F7ED',
//           'base-content': '#333333',
//         },
//         dark: {
//           primary: '#D27848',
//           secondary: '#A0A59A',
//           accent: '#F56C00',
//           neutral: '#1B512D',
//           'base-100': '#1B512D',
//           'base-content': '#FFFFFF',
//         },
//       },
//     ],
//   },
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['coffee']
  },
  darkMode: ['selector', '[data-theme="dim"]']
};