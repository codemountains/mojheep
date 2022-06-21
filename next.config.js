/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    cleanDistDir: false,
    webpack: (config, {isServer}) => {
        config.experiments = {
            asyncWebAssembly: true
        };
        config.output.webassemblyModuleFilename = (isServer ? './../server/' : '') + 'static/wasm/[modulehash].wasm';
        return config;
    },
    eslint: {
        ignoreDuringBuilds: true
    }
};

module.exports = nextConfig;
