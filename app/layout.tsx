import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Favicon from './favicon';

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "De Kroon",
  description: "Een plek voor educatie",
  ...Favicon(),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className={`${poppins.className}`}>
        <Navbar />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
