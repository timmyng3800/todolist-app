/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        "128" : "27rem",
        "129" : "30rem",
        "90": "22rem",
        "130":"35rem",
        "131": "40rem"
      },
      height:{
        "129":"28rem"
      }
    },
  },
  plugins: [],
}

