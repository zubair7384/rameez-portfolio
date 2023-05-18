import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CustomCursor from "@/components/cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rameez Iqbal portfolio",
  description: "Rameez Iqbal portfolio description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
