import type { Metadata } from "next";
import "./globals.css"

export const metadata: Metadata = {
  title: "Ratna Tour & Travel — Umroh & Haji Resmi",
  description: "Layanan umroh profesional, aman & nyaman. Berangkat insyaAllah, pelayanan sepenuh hati.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-[#fafafa] text-[#0f1a1a] font-inter">
        {children}
      </body>
    </html>
  );
}
