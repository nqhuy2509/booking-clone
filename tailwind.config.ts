import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

const config:Config = {
  darkMode: ["class"],
  content: [
    "./pages//*.{ts,tsx}",
    "./components//.{ts,tsx}",
    "./app/**/.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extends: {},
  },
  plugins: [nextui({
    defaultTheme: "light",
    defaultExtendTheme: "light",
    themes: {
      light: {
        layout: {}, // light theme layout tokens
        colors: {
          primary: {
            DEFAULT : "#003b95" ,
          },
          text_color:{
            DEFAULT: "#006ce4",
          },
        
        }, // light theme colors
      },
  }
})],

};

export default config;
