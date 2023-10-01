import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#006494",
        secondary: "#13293d",
        accent: "#247ba0",
        neutral: "#e8f1f2",
        dark: "#212529",
        success: "#198754",
        danger: "#dc3545",
        warning: "#ffc107",
        info: "#0dcaf0",
      },
    },
  },
  plugins: [],
};
export default config;
