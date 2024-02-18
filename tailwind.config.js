/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        primary:"#434A50",
      },
      keyframes:{
        shake:
        {'0%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
        '100%': { transform: 'translateY(10px)' },
        },
      },
      animation:{
        shake: 'shake 0.3s linear 1'
      }
     }
    
  },
  plugins: [],
}