module.exports = {
  async redirects() {
    return [
      {
        source: '/redirect',
        destination: '/ssr',
        permanent: false,
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
