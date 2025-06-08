/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // This will disable Strict Mode
    experimental: {
        serverComponentsExternalPackages: ['fs/promises']
    }
};

module.exports = nextConfig;
