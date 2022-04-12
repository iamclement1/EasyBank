

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url(../../assets/bg-intro-desktop.svg)"
      },
      fontFamily: {
        Sans: ['Public Sans', 'sans-serif', '']
      }
    },
  },
  plugins: [],
}
