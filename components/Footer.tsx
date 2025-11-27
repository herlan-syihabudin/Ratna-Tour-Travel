export default function Footer() {
  return (
    <footer className="bg-[#0E1C1A] text-white mt-24 pt-16 pb-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 px-6">
        <div>
          <h3 className="text-2xl font-playfair font-bold mb-3 text-[#C29A45]">
            Ratna Tour & Travel
          </h3>
          <p className="opacity-80 leading-relaxed">
            Pelayanan sepenuh hati dalam perjalanan ibadah Umroh & Haji. Aman, nyaman, dan resmi.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Menu</h4>
          <ul className="space-y-2 opacity-80">
            <li><a href="/paket">Paket Umroh</a></li>
            <li><a href="/jadwal">Jadwal Keberangkatan</a></li>
            <li><a href="/galeri">Galeri</a></li>
            <li><a href="/testimoni">Testimoni Jamaah</a></li>
            <li><a href="/tentang">Tentang Kami</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Hubungi Kami</h4>
          <p className="opacity-80 leading-relaxed">
            📍 Kota Bekasi  
            📞 0812-9739-6612 (Admin)  
          </p>
        </div>
      </div>

      <div className="text-center mt-12 opacity-50 text-sm">
        © {new Date().getFullYear()} Ratna Tour & Travel. All Rights Reserved.
      </div>
    </footer>
  );
}
