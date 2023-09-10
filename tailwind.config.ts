import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bradBlue: "#04151f",
        bradProjectBlue: "#173753",
        secondaryColor: "#D56E4D",
      },
      width: {
        "0.25": "0.0625rem",
      },
      margin: {
        "26": "6.5rem",
        sectionGap: "32rem",
        contactGap: "26rem",
      },
    },
  },
  plugins: [],
};
export default config;
