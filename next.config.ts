import type { NextConfig } from "next";

const nextConfig: NextConfig  = {
    output: 'export',
    images: {
        unoptimized: true, // Required because GH Pages can't optimize images dynamically
    },
    basePath: '/PLC_Coding_Frontend',
    assetPrefix: '/PLC_Coding_Frontend/',
};

export default nextConfig;
