"use client";
import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Children } from "react";
import AppHeader from "./layout-header";
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const interMono = Geist_Mono({
  variable: "--font-inter-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        <div>
          <AppHeader />
        </div>
      </header>
      <body
        className={`${interSans.variable} ${interMono.variable} antialiased`}
      >
        <div>Hai Lam</div>
        {children}
        <footer
          style={
            {
              textAlign: "center",
              padding: "10px",
              backgroundColor: "#f8f8f8",
            } as React.CSSProperties
          }
        ></footer>
      </body>
    </html>
  );
}
