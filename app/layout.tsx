import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google"; // PLACEHOLDER: Replace with your brand fonts
import "./globals.css";

const fontDisplay = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const fontBody = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Burch Studio — Web Design for Local Trades | Peterborough",
  description:
    "Modern, mobile-first websites for plumbers, electricians & trade businesses in Peterborough. Built to rank on Google and win you more work.",
  openGraph: {
    title: "Burch Studio — Web Design for Local Trades | Peterborough",
    description:
      "Modern, mobile-first websites for plumbers, electricians & trade businesses in Peterborough. Built to rank on Google and win you more work.",
    url: "https://burchstudio.co.uk",
    siteName: "Burch Studio",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body className="antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {/* TODO: Add Navbar component */}
        <main id="main">{children}</main>
        {/* TODO: Add Footer component */}
      </body>
    </html>
  );
}
