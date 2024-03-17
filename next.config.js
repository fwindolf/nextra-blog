const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx',
});

module.exports = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
