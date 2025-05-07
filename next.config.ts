import type { NextConfig } from "next";

const repoName = "PLC_Coding_Frontend";

const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
};

export default nextConfig;
