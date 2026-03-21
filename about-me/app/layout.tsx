import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Background } from "@/components/background";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fifarandria.dev"),
  title: "Fifaliana Randria | Développeuse Full-Stack",
  description:
    "Développeuse Full-Stack spécialisée en React, Next.js, TypeScript. Je crée des applications web accessibles, performantes et élégantes.",
  keywords: [
    "Développeuse Full-Stack",
    "Développeuse React",
    "Next.js",
    "TypeScript",
    "Développeuse Web",
    "Portfolio",
  ],
  authors: [{ name: "Fifaliana Randria", url: "https://fifarandria.dev" }],
  creator: "Fifaliana Randria",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://fifarandria.dev",
    siteName: "Fifaliana Randria Portfolio",
    title: "Fifaliana Randria | Développeuse Full-Stack",
    description:
      "Développeuse Full-Stack spécialisée en React, Next.js, TypeScript.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fifaliana Randria - Développeuse Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fifaliana Randria | Développeuse Full-Stack",
    description:
      "Développeuse Full-Stack spécialisée en React, Next.js, TypeScript.",
    images: ["/og-image.png"],
    creator: "@FifaRandria",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://fifarandria.dev",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Fifaliana Randria",
              url: "https://fifarandria.dev",
              jobTitle: "Développeuse Full-Stack",
              description:
                "Développeuse Full-Stack spécialisée en React, Next.js, TypeScript",
              sameAs: [
                "https://github.com/FifaRandria",
                "https://linkedin.com/in/fifarandria",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Tailwind CSS",
                "Django",
              ],
              nationality: {
                "@type": "Country",
                name: "Madagascar",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Background />
        {children}
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
