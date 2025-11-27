"use client";

import { FaShieldAlt, FaUserFriends, FaHotel, FaPlane, FaCalendarCheck, FaMoneyBillWave, FaWhatsapp } from "react-icons/fa";

export default function SectionWhyUs() {
  const items = [
    { icon: <FaShieldAlt />, title: "Legal & Resmi", desc: "Terdaftar dan berizin di Kementerian Agama RI." },
    { icon: <FaUserFriends />, title: "Pembimbing Berpengalaman", desc: "Talbiyah & bimbingan lengkap dari awal hingga kembali ke tanah air." },
    { icon: <FaHotel />, title: "Hotel Dekat Masjid", desc: "Akomodasi premium jarak dekat ke Masjidil Haram & Masjid Nabawi." },
    { icon: <FaPlane />, title: "Maskapai Terbaik", desc: "Penerbangan nyaman dan aman untuk jamaah." },
    { icon: <FaCalendarCheck />, title: "Jadwal Keberangkatan Rutin", desc: "Keberangkatan setiap bulan, seat terbatas." },
    { icon: <FaMoneyBillWave />, title: "Harga Transparan", desc: "Tanpa biaya tersembunyi & semua jelas dari awal." },
  ];

  return (
    <section className="py-24 bg-[#0D1A18] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gold font-playfair">
          Kenapa Memilih Ratna Travel?
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-14">
          Layanan ibadah Umroh amanah & profesional untuk keluarga Indonesia.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-8 bg-white/5 border border-[#C29A45]/30 rounded-2xl hover:bg-white/10 transition"
            >
              <div className="text-[#C29A45] text-5xl mb-5">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gold mb-2">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/6281297396612?text=Assalamu'alaikum,%20saya%20ingin%20konsultasi%20Umroh"
            target="_blank"
            className="inline-flex items-center gap-2 bg-[#C29A45] hover:bg-[#b89238] transition text-white font-semibold px-10 py-4 rounded-lg text-lg shadow-lg"
          >
            <FaWhatsapp className="text-2xl" /> Konsultasi Sekarang
          </a>
        </div>

      </div>
    </section>
  );
}
