const {i18n} = require('./next-i18next.config');
const withPWA = require("next-pwa");

module.exports = withPWA({
    i18n,
    images: {
        domains: ['picsum.photos', 'tailwindui.com']
    },
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
    },
    reactStrictMode: true
})
