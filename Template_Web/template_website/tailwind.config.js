/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/components/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            transform: 'translateY(-10px)'
          },
          '100%': {
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 2s infinite  alternate'
      }
    },
  },
  plugins: [],
}
