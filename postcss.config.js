module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-modules': {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
  },
}