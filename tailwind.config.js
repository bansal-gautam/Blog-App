/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        100: "60vh",
      },
      gridTemplateColumns: {
        blogs: "repeat(auto-fill, minmax(300px, 1fr))",
        blog: "repeat(auto-fill, minmax(340px, 1fr))",
      },
      minWidth: {
        100: "300px",
      },
      maxWidth: {
        50: "50%",
      },
      minHeight: {
        50: "150px",
      },
    },
  },
  plugins: [],
};
