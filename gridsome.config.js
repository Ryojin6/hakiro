const tailwind = require('tailwindcss');
const nesting = require('tailwindcss/nesting');

module.exports = {
  siteName: `Hakiro Among the Japanese mountains are the legendary peaks of Mt. Hakiro, within
  these mountains live mythical creatures which have been lost to time 
  `,
  siteUrl: process.env.FRONTEND_URI,
  icon: {
    favicon: './src/1.png',
    touchicon: './src/1.png',
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwind, nesting],
      },
    },
  },
  plugins: [
    'gridsome-plugin-robots',
    '@gridsome/plugin-sitemap',
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-K4P4V7B',
        enabled: true,
        debug: true,
      },
    },
  ],
};
