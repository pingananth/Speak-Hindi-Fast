import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
  description: "The only structured system that eliminates the Hindi script barrier, allowing professionals, students, and travelers to master practical conversational fluency",
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
      </body>
    </html>
  );
}
