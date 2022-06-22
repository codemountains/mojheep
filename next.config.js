/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, {isServer}) => {
        config.experiments = {
            asyncWebAssembly: true
        };
        config.output.webassemblyModuleFilename = (isServer ? './../' : '') + 'static/wasm/[modulehash].wasm';
        return config;
    },
    eslint: {
        ignoreDuringBuilds: true
    }
};

module.exports = nextConfig;
