import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

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
  title: {
    template: "%s | Multi-Payment Gateway Integration",
    default: "Multi-Payment Gateway Integration - eSewa, Khalti",
  },
  description:
    "Secure payment processing with multiple gateway support including eSewa and Khalti. Built with Next.js and TypeScript.",
  keywords: [
    "payment gateway",
    "esewa payment",
    "khalti payment",
    "nepal payment gateway",
    "nextjs payment",
    "typescript payment integration",
  ],
  authors: [{ name: "Ronish Paudel" }],
  creator: "Ronish Paudel",
  publisher: "iamronish",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  openGraph: {
    type: "website",
    siteName: "Multi-Payment Gateway Integration",
    title: "Multi-Payment Gateway Integration - eSewa, Khalti",
    description:
      "Secure payment processing with multiple gateway support including eSewa and Khalti.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Multi-Payment Gateway Integration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Payment Gateway Integration",
    description: "Secure payment processing with eSewa and Khalti integration.",
    images: ["/twitter-image.png"],
    creator: "@ronishpaudel",
    site: "@ronishpaudel",
  },
  verification: {
    google: "your-google-verification-code",
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
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_BASE_URL} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
