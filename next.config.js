/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    cleanDistDir: false,
    webpack: (config, {isServer}) => {
        config.experiments = {
            asyncWebAssembly: true
        };
        config.output.webassemblyModuleFilename = (isServer ? '../' : '') + 'static/wasm/[modulehash].wasm';
        config.optimization.moduleIds = "named";
        return config;
    },
    eslint: {
        ignoreDuringBuilds: true
    }
};

module.exports = nextConfig;
