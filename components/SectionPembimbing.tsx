"use client";
import Image from "next/image";

export default function SectionPembimbing() {
  return (
    <section id="pembimbing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 font-playfair">
          Pembimbing & Tim Kami
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Dipandu oleh pembimbing ibadah berpengalaman, yang ramah, sabar,
          dan siap mendampingi jamaah dari keberangkatan hingga kembali ke tanah air.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {/* CARD 1 */}
          <div className="text-center">
            <Image
              src="https://i.pravatar.cc/260?img=11"
              width={260}
              height={260}
              alt="Ustadz Pembimbing"
              className="rounded-2xl shadow-md object-cover mx-auto mb-5"
            />
            <h3 className="font-semibold text-xl text-gray-800">
              Ust. Abdul Malik
            </h3>
            <p className="text-gray-600 text-sm mb-3">Pembimbing Utama</p>
            <p className="text-gray-600 text-sm italic">
              12+ tahun mendampingi jamaah Umroh & Haji
            </p>
          </div>

          {/* CARD 2 */}
          <div className="text-center">
            <Image
              src="https://i.pravatar.cc/260?img=7"
              width={260}
              height={260}
              alt="Owner"
              className="rounded-2xl shadow-md object-cover mx-auto mb-5"
            />
            <h3 className="font-semibold text-xl text-gray-800">
              Bpk. Herlan Syihabudin
            </h3>
            <p className="text-gray-600 text-sm mb-3">Owner — Ratna Travel</p>
            <p className="text-gray-600 text-sm italic">
              Mengutamakan kenyamanan & pelayanan keluarga
            </p>
          </div>

          {/* CARD 3 */}
          <div className="text-center">
            <Image
              src="https://i.pravatar.cc/260?img=21"
              width={260}
              height={260}
              alt="Tim Operasional"
              className="rounded-2xl shadow-md object-cover mx-auto mb-5"
            />
            <h3 className="font-semibold text-xl text-gray-800">
              Tim Operasional Travel
            </h3>
            <p className="text-gray-600 text-sm mb-3">Admin & Customer Care</p>
            <p className="text-gray-600 text-sm italic">
              Fast response — membimbing jamaah 24/7
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://wa.me/6281297396612?text=Assalamu'alaikum,%20saya%20ingin%20bertanya%20tentang%20pembimbing%20umroh"
            target="_blank"
            className="inline-block bg-emerald-700 hover:bg-emerald-800 transition text-white font-semibold px-10 py-4 rounded-lg text-lg shadow-lg"
          >
            Tanya Pembimbing Lebih Detail
          </a>
        </div>
      </div>
    </section>
  );
}
