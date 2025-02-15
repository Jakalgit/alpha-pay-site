import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    container: false, // Отключает Tailwind-контейнер
  },
  theme: {
    extend: {
      colors: {

      },
    },
  },
  plugins: [],
} satisfies Config;
