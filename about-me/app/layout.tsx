import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Your Name | Full-Stack Developer & Web Designer",
  description:
    "Full-Stack Developer specializing in React, Next.js, TypeScript. Building beautiful, performant web applications with modern technologies.",
  keywords: ["Full-Stack Developer", "React Developer", "Next.js", "TypeScript", "Web Developer", "Portfolio"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name | Full-Stack Developer",
    description: "Full-Stack Developer specializing in React, Next.js, TypeScript.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name | Full-Stack Developer",
    description: "Full-Stack Developer crafting digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
