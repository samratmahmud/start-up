import type {Config} from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: "rgb(74 108 247 / 8)",
            gray: {
               "400": "rgb(149 156 177 / 1)",
               "500": "hsla(0,0%,100%,.2)",
               "950": "rgb(18 23 35 / 1)",
            },
            blue: {
               "200": "rgb(74 108 247)",
               "900": "rgb(9 14 52 / 1)",
               "950": "rgb(30 35 46/ 1)",
            },
         },
      },
      fontSize: {
         xs: "12px",
         sm: "14px",
         md: "16px",
         base: "18px",
         lg: "20px",
         xl: "24px",
         "2xl": "30px",
         "3xl": "45px",
         "4xl": "48px",
      },
      boxShadow: {
         sm: "0 1px 1px rgba(253, 253, 253, 0.15)",
      },
      fontFamily: {
         inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {},
      container: {
         center: true,
         padding: {
            DEFAULT: "1rem",
         },
      },
      screens: {
         sm: "575px",
         md: "768px",
         lg: "992px",
         xl: "1200px",
         "2xl": "1400px",
      },
   },
   plugins: [],
};
export default config;
