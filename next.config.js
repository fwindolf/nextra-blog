const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
})

module.exports = {
  ...withNextra(),
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: './',
};