import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: { formats: ['image/avif', 'image/webp'] },
    // Static export for GitHub Pages
    output: 'export',
    // Must match the repository name
    basePath: '/cardescu-wow-demo',
    trailingSlash: true
};

export default nextConfig;