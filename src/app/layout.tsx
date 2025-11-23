import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Axper Transport Solutions | Reliable Freight & Logistics",
  description: "Professional transport and logistics solutions. Fast, safe, and reliable delivery services with full visibility tracking.",
  keywords: "transport, logistics, freight, delivery, cargo",
  authors: [{ name: "Axper Transport" }],
  creator: "Axper Transport",
  publisher: "Axper Transport",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://axper-transport.com",
    title: "Axper Transport Solutions | Reliable Freight & Logistics",
    description: "Professional transport and logistics solutions with full visibility tracking",
    siteName: "Axper Transport",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axper Transport Solutions",
    description: "Professional transport and logistics solutions",
  },
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
  applicationName: "Axper Transport",
  category: "logistics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
