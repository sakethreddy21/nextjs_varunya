import type { Metadata } from "next";

import { Inter, Montserrat } from 'next/font/google'

import "./globals.css";
import Header from "@/components/ui/Header";
import ErrorBoundary  from "@/components/ErrorBoundary";
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })




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
      <body  className={`${inter.variable} ${montserrat.variable}`}>
        <ErrorBoundary>
        <Header/>
        </ErrorBoundary>
        {children}
      </body>
    </html>
  );
}
