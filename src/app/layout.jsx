
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SmilingWitch",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <main className={inter.className}>{children}</main>
    </html>
  );
}