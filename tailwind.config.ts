import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { purple1:'#10002b', 
                purple2:'#240046',
                purple3:'#3c096c',
                purple4:'#5a189a',
                purple5:'#7b2cbf',
                purple6:'#9d4edd',
                purple7:'#c77dff',
                purple8:'#e0aaff',
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  
};
export default config;
