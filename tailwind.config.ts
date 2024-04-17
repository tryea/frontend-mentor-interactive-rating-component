import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        very_dark_blue: "#131518",
        orange: "#FC7614",
        medium_gray: "#7C8798",
        light_gray: "#969FAD",
        dark_blue: "#262E38",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        black_gradient:
          "radial-gradient(circle at center, #232A34 0%, #181E27 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
