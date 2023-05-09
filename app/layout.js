import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rameez Iqbal rodtfolio",
  description: "Rameez Iqbal portfolio description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main-container mx-auto">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
