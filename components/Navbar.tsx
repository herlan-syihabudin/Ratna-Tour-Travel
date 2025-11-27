"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const menu = [
    { name: "Home", href: "/" },
    { name: "Paket Umroh", href: "/paket" },
    { name: "Jadwal", href: "/jadwal" },
    { name: "Galeri", href: "/galeri" },
    { name: "Testimoni", href: "/testimoni" },
    { name: "Tentang Kami", href: "/tentang" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-sm border-b border-white/40"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-playfair font-bold tracking-wide"
        >
          <span className="text-emerald-700">Ratna</span>{" "}
          <span className="text-[#C29A45]">Travel</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[15px]">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition ${
                pathname === item.href
                  ? "text-emerald-700 font-semibold"
                  : "hover:text-emerald-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <a
          href="https://wa.me/6281297396612?text=Assalamu'alaikum%20saya%20ingin%20konsultasi%20Umroh"
          className="hidden md:block bg-[#C29A45] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#b89238] transition"
        >
          Konsultasi Gratis
        </a>
      </nav>
    </header>
  );
}
