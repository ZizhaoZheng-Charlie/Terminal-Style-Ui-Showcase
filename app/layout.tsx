import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "UI Showcase - Unit 410 Style",
  description: "UI components and designs inspired by Unit 410",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistMono.variable} bg-gray-900 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
