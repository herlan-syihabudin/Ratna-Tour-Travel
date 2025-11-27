"use client";
import { FaWhatsapp } from "react-icons/fa";

const paket = [
  {
    title: "Paket Umroh Reguler 9 Hari",
    price: "27.900.000",
    hotel: "Hotel ★★★★ Makkah & Madinah",
    maskapai: "Maskapai Saudia / Qatar Airways",
    image:
      "https://images.unsplash.com/photo-1576085898323-218337e3e43a?q=80&auto=format&fit=crop",
  },
  {
    title: "Paket Umroh Plus Turki 12 Hari",
    price: "38.900.000",
    hotel: "Hotel ★★★★ + City Tour Turki",
    maskapai: "Turkish Airlines",
    image:
      "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&auto=format&fit=crop",
  },
  {
    title: "Paket VIP 5 Bintang – Bimbingan Intensif",
    price: "55.900.000",
    hotel: "Hotel ★★★★★ Dekat Masjid",
    maskapai: "Emirates / Saudia",
    image:
      "https://images.unsplash.com/photo-1581089781785-603411fa81d6?q=80&auto=format&fit=crop",
  },
];

export default function SectionPaket() {
  return (
    <section id="paket" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-4 font-playfair">
          Pilihan Paket Umroh Terbaik
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Harga transparan, fasilitas lengkap, pembimbing berpengalaman, dan keberangkatan rutin setiap bulan.
        </p>

        {/* GRID CARD */}
        <div className="grid md:grid-cols-3 gap-10">
          {paket.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>

                <p className="text-[#C29A45] text-2xl font-extrabold mb-3">
                  Rp {item.price}
                </p>

                <p className="text-sm text-gray-600 mb-2">{item.hotel}</p>
                <p className="text-sm text-gray-600 mb-4">{item.maskapai}</p>

                <a
                  href={`https://wa.me/6281297396612?text=Assalamu'alaikum%20saya%20mau%20tanya%20tentang%20${encodeURIComponent(
                    item.title
                  )}`}
                  target="_blank"
                  className="w-full block bg-[#C29A45] hover:bg-[#b89238] text-white text-center font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
                >
                  <FaWhatsapp /> Tanya Paket Ini
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA BAWAH */}
        <div className="text-center mt-14">
          <a
            href="https://wa.me/6281297396612?text=Assalamu'alaikum%20saya%20ingin%20konsultasi%20Umroh"
            className="inline-block bg-emerald-700 hover:bg-emerald-800 transition text-white font-semibold px-10 py-4 rounded-lg text-lg shadow-lg"
            target="_blank"
          >
            Konsultasi Gratis Dengan Admin
          </a>
        </div>
      </div>
    </section>
  );
}
