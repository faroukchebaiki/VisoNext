import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"

import Header from "@/components/header";
import Footer from "@/components/footer";
import FaroukCard from "@/components/faroukCard";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | VisoNext Corporation",
    default: "VisoNext Corporation | Innovative Solutions for Modern Businesses",
  },
  description:
    "VisoNext Corporation provides innovative solutions for modern businesses. Explore our services and learn how we can help your business grow.",
  keywords: ["business solutions", "innovation", "technology", "services", "consulting"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
          <FaroukCard />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}



import './globals.css'