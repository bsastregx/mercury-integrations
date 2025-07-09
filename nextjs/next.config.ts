import type { NextConfig } from "next";
import CopyWebpackPlugin from "copy-webpack-plugin";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Only apply the plugin for client-side builds
    if (!isServer) {
      config.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              // IMPORTANT!: This route depends on your project structure
              from: "./node_modules/@genexus/mercury/dist/assets/icons",
              to: "static/icons",
            },
            {
              // IMPORTANT!: This route depends on your project structure
              from: "./node_modules/@genexus/mercury/dist/assets/fonts",
              to: "static/fonts",
            },
            {
              from: "src/assets/mercury-css",
              to: "static/css",
            },
          ],
        })
      );
    }

    return config;
  },
};

export default nextConfig;
