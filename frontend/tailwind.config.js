/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "custom-shadow": "0px 2px 4px rgba(0, 0, 0, 0.1)",
      },
      colors :{
        'custom-blue' : "#5762E1", 
        'custom-purple' : "#9C6CE8", 
        'custom-gray' : "#F6F8FA", 
      }
    },
  },
  plugins: [],
};
