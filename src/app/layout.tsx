import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

import FeedbackWidget from "@/components/FeedbackWidget";
import ConvexClientProvider from "@/components/ConvexClientProvider";
import AmplitudeInit from "@/components/AmplitudeInit";

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
  metadataBase: new URL("https://speakhindifast.in"),
  title: "Hindi in English: Learn to Speak Hindi in 30 Days",
  description: "Learn Hindi through English online in 30 days. Master Hindi conversation through English without the script. For professionals & travelers.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Hindi in English: Learn to Speak Hindi in 30 Days",
    description: "Master practical Hindi conversation in 15 mins a day. Structured course for non-native speakers.",
    url: "https://speakhindifast.in",
    siteName: "SpeakHindiFast",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hindi in English: Learn to Speak Hindi in 30 Days",
    description: "Learn Hindi through English online in 30 days. No script required.",
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
        <ConvexClientProvider>
          <AmplitudeInit />
          <GoogleAnalytics />
          {children}
          <FeedbackWidget />
        </ConvexClientProvider>

      </body>
    </html>
  );
}
