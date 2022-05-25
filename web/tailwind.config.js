const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      inter: 'Inter, sans-serif'
    },
    extend: {
      colors: {
        brand: '#8257e5',
        'brand-hover': '#996dff',
        'on-brand-color': '#ffffff',
      },
      backgroundColor: {
        surface: {
          primary: colors.zinc[900],
          secondary: colors.zinc[800],
          'secondary-hover': colors.zinc[700],
        },
        tooltip: colors.zinc[100],
      },
      boxShadow: {
        '3xl': '0px 8px 32px rgba(0, 0, 0, 0.15)',
      },
      textColor: {
        primary: colors.zinc[100],
        secondary: colors.zinc[400],
        'on-tooltip': colors.zinc[800],
      },
      strokeWidth: {
        '3': '3px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
    require('tailwind-scrollbar'),
  ],
}

