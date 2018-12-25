module.exports = {
  plugins: {
    'postcss-import': {},
    'cssnano': {},
    'postcss-preset-env': { stage: 2, autoprefixer: { grid: true }},
    'postcss-plugin-px2rem': {remUnit: 75}
  }
}