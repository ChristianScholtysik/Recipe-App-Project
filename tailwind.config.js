/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tBase: "var(--color-text-base)",
        hover: "var(--color-primary-hover)",
        bgHeader: "var(--color-bg-header)",
        bgMain: "var(--color-bg-primary)",
        bgCard: "var(--color-bg-card)",
        bgSocial: "var(--color-social-icon)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      fontSize: {
        base: "1rem",
        lg: "1.5rem",
        xl: "1.8rem",
        xxl: "2.2rem",
        medium: "1.2rem",
      },
      borderRadius: {
        large: "1rem",
      },
      backgroundImage: {
        card: "url('/src/assets/img/b6f0274ad086e513dfb256c9e159edc5.jpeg')",
        header: "url('/src/assets/img/Hero image.png')",
      },
    },
  },
};
