/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './UploadNFT/**/*.{js,ts,jsx,tsx,mdx}',
    './NFTDetailsPage/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 4s linear infinite',
      }

    },
  },

  plugins: [],
}
