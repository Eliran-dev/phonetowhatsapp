import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Html, Head } from "next/document";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phone to Whatsapp Web App",
  description: "Made by Eliran Yihye",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Whatsapp.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
