import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "blog-app",
  description: "Folling along with LinkedIn Learning for NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
