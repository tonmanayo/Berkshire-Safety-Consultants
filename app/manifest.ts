import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Berkshire Safety Consultants — Health & Safety Consultancy",
    short_name: "Berkshire Safety",
    description:
      "Expert health & safety consultancy for housing associations and small businesses. ISO 45001 & ISO 9001 accredited.",
    start_url: "/",
    display: "standalone",
    background_color: "#0e033c",
    theme_color: "#0e033c",
    icons: [
      { src: "/icon/192", sizes: "192x192", type: "image/png" },
      { src: "/icon/512", sizes: "512x512", type: "image/png" },
    ],
  };
}
