import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "0.7rem",
      sm: "0.8rem",
    },
    extend: {
      colors: {
        greenBackgroundTransparent: 'rgba(0,194,120,.12)',
        redBackgroundTransparent: 'rgba(234,56,59,.12)',
        baseBackgroundL2: "rgb(32,33,39)",
        baseBackgroundL3: "rgb(56 58 69)",
        greenPrimaryButtonBackground: "rgb(0,194,120)",
        greenText: 'rgb(0 194 120)',
        redText: 'rgb(253 75 78)',
        baseTextHighEmphasis: 'rgb(244, 244, 246)',
        baseTextMedEmphasis: 'rgb(150, 159, 175)',
        redBorder: 'rgba(234,56,59,.5)',
        greenBorder: 'rgba(0,194,120,.4)',
        baseBorderMed: '#cccccc', 
        accentBlue: "rgb(76,148,255)",
        baseBorderLight: "rgb(32,33,39)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        greenPrimaryButtonText: "rgb(20,21,27)"
      }
    },
  },
  plugins: [],
};
export default config;