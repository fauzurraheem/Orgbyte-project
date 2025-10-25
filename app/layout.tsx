
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainRootLayout from "@/components/layout";
import StoreProviders from "@/components/providers/stateProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orgbyte-Taskdog",
  description: "Get your tasks done with Taskdog - the ultimate source for products and trusted services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProviders>
          <MainRootLayout>
            {children}
          </MainRootLayout>
        </StoreProviders>
      </body>
    </html>
  );
}
