module.exports = {
  async redirects() {
    return [
      {
        source: '/redirect',
        destination: '/ssr',
      },
    ]
  },
  async rewrite() {
    return [
      {
        source: '/rewrite',
        destination: '/ssr',
      },
    ]
  },
  env: {
    SSR_TITLE: process.env.TITLE || 'Next.js',
  },
  reactStrictMode: true,
}
