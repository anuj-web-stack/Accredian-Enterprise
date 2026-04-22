import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Accredian Enterprise — Upskill Your Workforce at Scale",
  description:
    "India's most trusted enterprise learning platform. Partner with IITs, IIMs, and global universities to upskill your teams at scale — with measurable outcomes.",
  keywords: ["enterprise learning", "upskilling", "IIT", "IIM", "corporate training", "L&D"],
  openGraph: {
    title: "Accredian Enterprise",
    description: "Build the skills your enterprise needs to win.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${syne.variable} font-sans antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
