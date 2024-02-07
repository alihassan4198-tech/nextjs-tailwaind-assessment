const withTm = require('next-transpile-modules')([]);
module.exports = withTm({
  reactStrictMode: true,
  images: {
    domains: ['cdn.dummyjson.com'],
  },
})
