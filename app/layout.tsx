import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export const metadata = {
  title: "Manuri Hewage| Creative Designer & Developer",

  description:
    "Explore my portfolio of creative design, branding, UI/UX, and development projects.",

  openGraph: {
    title: "Where Ideas Find Their Form",
    description:
      "Creative Designer & Developer crafting meaningful digital experiences.",
    url: "https://new-portfollio00010.vercel.app/",
    siteName: "Manuri Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manuri Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Where Ideas Find Their Form",
    description:
      "Creative Designer & Developer.",
    images: ["/og-image.png"],
  },
};




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
