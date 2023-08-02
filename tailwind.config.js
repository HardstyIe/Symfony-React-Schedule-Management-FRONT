const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ['./index.html', './src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        sm: "url('./assets/img/bg-sm.png')",
        md: "url('./assets/img/bg-md.png')",
      },
    },
  },
  plugins: [require('daisyui')],
});
