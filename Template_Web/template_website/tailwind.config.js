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
        'fade-in-down': '6s ease-in-out infinite alternate moving'
      },
      keyframes: {
        'typing': {
          '0%': {
            width: 0
          },
          '50%': {
            borderRight: "2px solid purple"
          },
          '90%': {
            borderRight: "2px solid purple"
          },
          '100%': {
            width: ("100%"),
            borderRight: ("0px")
          }
        }
      },
      animation: {
        'typing': 'typing 5s forwards'
      },
    },
  },
  plugins: [],
}
