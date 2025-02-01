/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "hsl(var(--c-primary))",
        alt: "hsl(var(--c-alt))",
        body: "var(--c-body)",
      },
      fontFamily: {
        openSans: ["var(--font-open-sans)", "Arial", "sans-serif"],
        dmSans: ["var(--font-dm-sans)", "ui-serif", "Georgia"],
        poppins: ["var(--font-poppins)", "Arial", "sans-serif"],
        nunito: ["var(--font-nunito)", "Arial", "sans-serif"],
        jakarta: ['"Plus Jakarta Sans"', "serif", "ui-serif", "Georgia"],
      },
      backgroundImage: {
        map: "url(/map.png)",
      },
    },
  },
  plugins: [],
};
