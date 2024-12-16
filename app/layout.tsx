import PageBanner from "@/components/PageBanner";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="bg-[#1a1a1a] min-w-screen min-h-screen flex flex-col">
          <PageBanner />
          <div className="max-w-xs md:max-w-xl flex flex-col space-y-12 justify-center mx-auto -mt-4 w-full pt-20">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
