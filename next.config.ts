import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Two root layouts ((site) and (studio)) mean there is no single layout
    // to build a global 404 from — the case Next documents
    // global-not-found.tsx for. See node_modules/next/dist/docs/01-app/
    // 03-api-reference/03-file-conventions/not-found.md.
    globalNotFound: true,
  },
  reactCompiler: true,
  images: {
    // Blog hero/card images (app/(site)/blog/page.tsx) are served from
    // Sanity's asset CDN and passed straight into next/image. Without an
    // explicit allow-list next/image rejects any remote `src` with a 400,
    // so every blog image breaks. Scoped narrowly to cdn.sanity.io over
    // https only — do not widen this to a wildcard hostname.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
