import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Favicon from './favicon';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "De Kroon",
  description: "Een plek voor educatie",
  ...Favicon(),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
