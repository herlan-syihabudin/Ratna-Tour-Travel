import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionPaket from "@/components/SectionPaket";
import SectionTestimoni from "@/components/SectionTestimoni";
import SectionJadwal from "@/components/SectionJadwal";   // ⬅️ tambah ini
import Footer from "@/components/Footer";
import SectionPembimbing from "@/components/SectionPembimbing";
import SectionLegalitas from "@/components/SectionLegalitas";

export default function Home() {
  return (
    <>
      {/* TOP NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <Hero />

      {/* MAIN CONTENT */}
      <main className="w-full">
        {/* SECTION PAKET */}
        <SectionPaket />

        {/* SECTION TESTIMONI */}
        <SectionTestimoni />
        
        <SectionPembimbing />
        <SectionLegalitas />

        {/* SECTION JADWAL */}
        <SectionJadwal />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
