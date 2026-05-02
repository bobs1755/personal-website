import type { NextConfig } from 'next'

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGitHubActions ? '/personal-website' : '',
  assetPrefix: isGitHubActions ? '/personal-website/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
