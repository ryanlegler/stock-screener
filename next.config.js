/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // This will disable Strict Mode
    serverExternalPackages: ['fs/promises'],
};

module.exports = nextConfig;
