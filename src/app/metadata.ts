import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biwas Bhandari - AI Application Developer",
  description:
    "I create AI applications. Explore insights, innovations, and more.",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    title: "Biwas Bhandari - AI Application Developer",
    description:
      "I create AI applications. Explore insights, innovations, and more.",
    url: "https://www.biwasbhandari.com.np",
    images: [
      {
        url: "https://www.biwasbhandari.com.np/og-image.png",
        width: 1200,
        height: 630,
        alt: "Generative AI Application by Biwas Bhandari",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biwas Bhandari - AI Application Developer",
    description:
      "Explore cutting-edge Generative AI applications innovations by Biwas Bhandari.",
    site: "@bwias_",
    creator: "@biwas_",
    images: ["https://www.biwasbhandari.com.np/og-image.png"],
  },
  robots: "index, follow",
};
