import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { headData } from '@/lib/data';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: headData.title,
  description: headData.description,
  keywords: ["portfolio", "developer", "full-stack", "react", "next.js", "typescript"],
  authors: [{ name: "Mohamed" }],
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
