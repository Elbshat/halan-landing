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
        dark: "hsl(var(--c-dark))",
        alt: "hsl(var(--c-alt))",
        body: "var(--c-body)",
        nav: "var(--c-nav)",
        "mob-p": "var(--c-nav)",
      },
      boxShadow: {
        header:
          "0 4px 32px 0px rgba(19, 24, 27, 0.03), 0 24px 32px -8px rgba(19, 24, 27, 0.03)",
        article: "0 52.2px 83.5px -31.3px rgba(35,149,73,0.2) ",
        light: "0 2px 16px rgba(64, 103, 176, 0.12)",
        accordion: "0 3px 60px 0 rgba(19, 24, 27, 0.08)",
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
      letterSpacing: {
        xl: "0.16em",
      },
    },
  },
  plugins: [],
};
