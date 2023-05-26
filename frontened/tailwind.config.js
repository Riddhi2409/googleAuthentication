/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'todo-pattern': "url('https://www.thespruce.com/thmb/eOuwYkllVBE97rMo1SB04bHDMbk=/4500x0/filters:no_upscale():max_bytes(150000):strip_icc()/organizing-a-to-do-list-2648011-hero-16c4949473354d57aab32e06a7cd619e.jpg')",
        
      }
    },
  },
  plugins: [],
}