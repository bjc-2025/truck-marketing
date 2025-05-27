import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Truck Marketing',
    default: 'Truck Marketing - Marketing for Trucking & Logistics',
  },
  description: 'Expert marketing services to drive growth for trucking and logistics companies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SpeedInsights />
        <Analytics />
        {/* Main content of the application */}
        {children}
      </body>
    </html>
  );
}
