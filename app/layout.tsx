
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://mona-portfolio-omega.vercel.app"
  ),

  title: "Mona Safari | Frontend Developer",

  description:
    "Mona Safari is a Frontend Developer specializing in React, Next.js, TypeScript, and building modern, responsive web applications.",

  applicationName: "Mona Safari Portfolio",

  keywords: [
    "Mona Safari",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Frontend Portfolio",
  ],

  authors: [
    {
      name: "Mona Safari",
    },
  ],

  creator: "Mona Safari",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://mona-portfolio-omega.vercel.app",
    title: "Mona Safari | Frontend Developer",
    description:
      "Explore Mona Safari's portfolio, frontend projects, and experience with React, Next.js, and TypeScript.",
    siteName: "Mona Safari Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        alt: "Mona Safari | Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mona Safari | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and TypeScript.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}