import type { Metadata } from "next";
import { inter } from "./ui/fonts";
import "@/app/ui/styles/globals.css";

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
