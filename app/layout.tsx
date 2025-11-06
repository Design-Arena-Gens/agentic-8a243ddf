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
  title: "Myntra Winter Jacket Booker",
  description:
    "Discover the best winter jackets on Myntra under ₹2000. Compare warmth, ratings, and savings—then jump straight to the official product pages to book the right fit.",
  openGraph: {
    title: "Best Myntra Winter Jackets Under ₹2000",
    description:
      "Interactive shortlist of top-rated Myntra jackets with filters for warmth, price, and reviews.",
    url: "https://agentic-8a243ddf.vercel.app",
    siteName: "Myntra Winter Jacket Booker",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Myntra Winter Jackets Under ₹2000",
    description:
      "Curated Myntra jackets with warmth, ratings, and instant booking links.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
