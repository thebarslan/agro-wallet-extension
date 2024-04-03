/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            green: {
               50: "#eaffe5",
               100: "#d0ffc6",
               200: "#a4ff94",
               300: "#6aff56",
               400: "#38f823",
               500: "#16de04",
               600: "#0bb200",
               700: "#0a8404",
               800: "#0e6a0a",
               900: "#10590e",
               950: "#013202",
            },
         },
      },
   },
   plugins: [],
};
