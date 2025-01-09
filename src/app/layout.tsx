import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Saira } from "next/font/google"
import { Lexend } from "next/font/google"


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
      <body className={saira.className}>{children}</body>
    </html>
  );
}
