import type { Metadata } from "next";
import "./global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ratna Tour & Travel — Umroh & Haji Resmi",
  description: "Layanan umroh profesional, aman & nyaman. Berangkat insyaAllah, pelayanan sepenuh hati.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-[#fafafa] text-[#0f1a1a] font-inter">
        <Navbar />
        <main className="pt-[88px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
