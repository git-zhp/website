import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  i18n: {
    locales: ["en", "zh"],
    defaultLocale: "en",
  },
  experimental: {
    optimizePackageImports: ["react", "react-dom"],
  },
  async headers() {
    return [
      {
        source: "/:all*(js|css|svg|png|jpg|jpeg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/api/mock/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=60, stale-while-revalidate=300",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
