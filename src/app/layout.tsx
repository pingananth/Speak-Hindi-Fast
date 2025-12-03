import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

import FeedbackWidget from "@/components/FeedbackWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Hindi in English: Learn to Speak Hindi in 30 Days",
  description: "Learn Hindi through English online with our 30-day course. Master Hindi conversation through English without learning the script. Perfect for professionals and travelers.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${roboto.variable} antialiased`}
      >
        <GoogleAnalytics />
        {children}
        <FeedbackWidget />
      </body>
    </html>
  );
}
