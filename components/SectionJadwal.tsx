"use client";

const dataJadwal = [
  {
    tanggal: "20 Februari 2025",
    maskapai: "Saudi Airlines",
    hotelMekkah: "Swissotel Makkah ★★★★★",
    hotelMadinah: "Anwar Al Madinah ★★★★★",
    seat: 8,
  },
  {
    tanggal: "12 Maret 2025",
    maskapai: "Garuda Indonesia",
    hotelMekkah: "Pullman ZamZam ★★★★★",
    hotelMadinah: "Al Haram Hotel ★★★★★",
    seat: 12,
  },
  {
    tanggal: "26 April 2025",
    maskapai: "Emirates",
    hotelMekkah: "Hilton Convention ★★★★★",
    hotelMadinah: "Mövenpick Anwar ★★★★★",
    seat: 15,
  },
];

export default function SectionJadwal() {
  return (
    <section id="jadwal" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">Jadwal Keberangkatan</h2>
        <p className="section-sub">
          Pilih tanggal keberangkatan sesuai rencana ibadah Anda. Seat terbatas untuk kenyamanan jamaah.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {dataJadwal.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-premium border border-gray-100 hover:scale-[1.02] transition cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-emerald-700 mb-2">
                {item.tanggal}
              </h3>

              <p className="text-gray-700 mb-2">✈ <strong>Maskapai:</strong> {item.maskapai}</p>
              <p className="text-gray-700 mb-1">🏨 <strong>Mekkah:</strong> {item.hotelMekkah}</p>
              <p className="text-gray-700 mb-4">🏨 <strong>Madinah:</strong> {item.hotelMadinah}</p>

              {/* SEAT BADGE */}
              <div className="bg-[#C29A45]/10 text-[#C29A45] font-semibold px-4 py-2 rounded-full inline-block mb-6">
                Sisa Seat: {item.seat}
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/6281297396612?text=Assalamu'alaikum,%20saya%20ingin%20booking%20seat%20keberangkatan%20tanggal%20${encodeURIComponent(
                  item.tanggal
                )}`}
                target="_blank"
                className="btn-gold px-8 py-4 block text-center text-lg"
              >
                Booking Sekarang
              </a>
            </div>
          ))}
        </div>

        {/* CTA BAWAH */}
        <div className="text-center mt-14">
          <a
            href="https://wa.me/6281297396612?text=Assalamu'alaikum,%20saya%20ingin%20melihat%20jadwal%20keberangkatan%20lengkap"
            target="_blank"
            className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white text-lg font-semibold px-12 py-4 rounded-xl shadow-lg transition"
          >
            Lihat Jadwal Keberangkatan Lainnya
          </a>
        </div>
      </div>
    </section>
  );
}
