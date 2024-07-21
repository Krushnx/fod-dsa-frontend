// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customGray: '#f4f4f5',grayText : '#6e6e77'  , customGray2:'#e6e6f6'  , mainColor:'#fa6400'
      },fontFamily: {
        'raleway': ['"Raleway"', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'ubuntu': ["ubuntu"]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
