"use client";
import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CustomCursor from "@/components/cursor";
import { motion, AnimatePresence } from "framer-motion";
import { Events, animateScroll as scroll } from "react-scroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rameez Iqbal rodtfolio",
  description: "Rameez Iqbal portfolio description",
};

export default function RootLayout({ children }) {
  React.useEffect(() => {
    Events.scrollEvent.register("begin", function () {});
    Events.scrollEvent.register("end", function () {});
    window.addEventListener("scroll", handleScroll);

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    scroll.scrollTo(window.scrollY, {
      duration: 2000,
      delay: 40,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        <Header />
        <AnimatePresence>
          <motion.div
            initial={{ opasity: 0, y: 15 }}
            animate={{ opasity: 1, y: 0 }}
            exit={{ opasity: 0, y: 15 }}
            transition={{ delay: 0.25 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
