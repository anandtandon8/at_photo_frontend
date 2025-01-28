import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Saira } from "next/font/google"

const saira = Saira({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-saira'
});

const inter = Inter({
  subsets: ["latin"],
  weight: ['900'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "Anand Tandon Photography",
  description: "A photography portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${saira.variable} ${inter.variable}`}>
      <meta property="og:title" content="Anand Tandon Photography"/>
      <meta property="og:image" content="https://atphoto.net/ATPhotoThumbnail.png"/>
      <meta property="og:description" content="An interactive photography portfolio"/>
      <meta property="og:url" content="https://atphoto.net"/>
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627"/>
      <meta property="og:type" content="website"/> 
      <body className={saira.className}>{children}</body>
    </html>
  );
}
