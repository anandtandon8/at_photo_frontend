import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Saira } from "next/font/google"

const saira = Saira({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-saira'
});

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={saira.className}>{children}</body>
    </html>
  );
}
