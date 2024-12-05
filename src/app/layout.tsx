import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Biwas Bhandari - Generative AI Applications",
  description:
    "I create Generative AI applications. Explore insights, innovations, and more.",
  openGraph: {
    type: "website",
    title: "Biwas Bhandari - Generative AI Applications",
    description:
      "I create Generative AI applications. Explore insights, innovations, and more.",
    url: "https://www.biwasbhandari.com",
    images: [
      {
        url: "https://www.biwasbhandari.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Generative AI Application by Biwas Bhandari",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biwas Bhandari - Generative AI Applications",
    description:
      "Explore cutting-edge Generative AI innovations by Biwas Bhandari.",
    site: "@biwasbhandari",
    creator: "@biwasbhandari",
    images: ["https://www.biwasbhandari.com/og-image.png"],
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
