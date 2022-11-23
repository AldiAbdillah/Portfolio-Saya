// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["index.html"],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#3b82f6",
//         dark: "#1e293b",
//       },
//     },
//   },
//   plugins: [],
// };

// absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg-shadow-none lg:dark:bg-transparent lg:dark:shadow-none

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#b32b40",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
