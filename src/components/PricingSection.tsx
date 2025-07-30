import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const PricingSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-green-50 via-teal-50 to-white max-w-full mx-auto"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col justify-center gap-6 sm:flex-row">
          {/* BONUS SPESIAL */}
          <Card className="mb-10 p-8 sm:p-10 bg-gradient-to-br from-green-50 via-teal-50 to-white border-0 rounded-3xl shadow-xl">
            <h3 className="text-center text-lg sm:text-xl font-extrabold text-green-700 mb-2 tracking-wide">
              <span className="italic">*</span> BONUS SPESIAL{" "}
              <span className="italic">*</span>
            </h3>
            <div className="text-center font-bold text-xl sm:text-2xl mb-1 tracking-tight text-teal-700">
              KELAS ONLINE JAGOAN CS ONLINE
            </div>
            <div className="text-center text-base sm:text-lg mb-2 font-semibold text-green-600">
              Senilai Rp 550.000
            </div>
            <div className="flex justify-center mb-3">
              {/* Ganti dengan gambar/link materi workshop cs jika ada */}
              <span className="italic text-muted-foreground text-sm border rounded-lg px-4 py-2 bg-white/70">
                Gambar / Link materi workshop cs
              </span>
            </div>
            <p className="text-center text-sm sm:text-base mb-4 leading-relaxed text-teal-700">
              Setelah Anda mendatangkan banyak lead ke funnel Anda. Saatnya
              membuat lead ini jadi customer. Skill closing dan negosiasi
              prospekan ini vital sebagai komplemen dari Skill Beriklan. Ikuti
              gratis kelas Jagoan CS Online secara zoom.
            </p>
            <div className="text-center font-bold text-green-700 bg-green-100 rounded-lg py-2 mt-2 text-base sm:text-lg tracking-wide shadow">
              SEMUA BONUS GRATIS UNTUK ANDA
            </div>
          </Card>

          {/* HARGA TIDAK TERMASUK */}
          <Card className="mb-10 p-8 sm:p-10 bg-gradient-to-br from-white via-teal-50 to-green-50 border-0 rounded-3xl shadow-xl">
            <h4 className="text-base sm:text-lg font-bold text-teal-700 mb-3">
              Harga ini tidak termasuk :
            </h4>
            <ul className="list-disc pl-6 text-sm sm:text-base text-green-700 space-y-2">
              <li>
                Budget iklan (bisa{" "}
                <span className="underline text-teal-600 cursor-pointer">
                  topup
                </span>{" "}
                sendiri mulai dari 50rb)
              </li>
              <li>Biaya domain + hosting</li>
            </ul>
          </Card>
        </div>

        <div className="flex flex-col justify-center gap-6 sm:flex-row max-w-8xl mx-auto">
          {/* INVESTASI */}
          <Card className="mb-10 p-8 sm:p-10 bg-gradient-to-br from-white via-green-50 to-teal-50 border-0 rounded-3xl shadow-xl text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-green-700">
              Jadi Berapa Investasi Daftar Kelas ini?
            </h3>
            <div className="text-3xl sm:text-4xl font-extrabold text-green-600 line-through mb-2">
              Rp 1.500.000
            </div>
            <div className="font-bold text-base sm:text-lg bg-gradient-to-r from-green-400 to-teal-400 text-white rounded px-3 py-1 inline-block mb-3 tracking-wide shadow-sm border border-green-300">
              🔅 PROMO EARLY BIRD (LAUNCHING) 🔅
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-teal-600 mb-3 drop-shadow">
              Rp 990 rb
            </div>
            <div className="text-sm sm:text-base mb-1 text-green-700">
              2 Tiket ={" "}
              <span className="font-bold">Rp1490 rb</span>
            </div>
            <div className="text-sm sm:text-base mb-4 text-green-700">
              3 Tiket ={" "}
              <span className="font-bold">Rp1999 rb</span>
            </div>
            <div className="font-bold text-xs sm:text-sm bg-teal-600 text-white rounded px-2 py-1 inline-block mb-4 tracking-wide shadow">
              PESERTA DIBATASI 20 SAJA!
            </div>
            <div className="text-teal-700 text-xs mb-2">Link whatsapp</div>
            <div className="text-xs sm:text-sm text-center mb-2 leading-relaxed text-green-700">
              <span className="text-lg align-middle">❗</span>{" "}
              <span className="font-semibold text-teal-700">
                Menunda ikut kelas ini bisa bikin bisnismu makin tertinggal.
              </span>
              <br />
              Jangan heran kalau omzet seret, karena pesaingmu udah duluan
              belajar digital marketing.
              <br />
              Kalau kamu stuck terus tanpa upgrade ilmu, yang rugi ya bisnismu
              sendiri.<br />
              <span className="font-bold text-green-700">
                Yuk, ambil kesempatan ini selagi masih early bird dan kuota
                terbatas!
              </span>
            </div>
          </Card>

          {/* JADWAL */}
          <Card className="mb-10 p-8 sm:p-10 bg-gradient-to-br from-white via-teal-50 to-green-50 border-0 rounded-3xl shadow-xl text-center">
            <h4 className="text-base sm:text-lg font-bold mb-2 text-teal-700">
              Kapan Tanggalnya?
            </h4>
            <hr className="my-3 border-green-200" />
            <div className="text-lg sm:text-xl font-semibold mb-1 tracking-wide text-green-700">
              18-23 AGUSTUS 2025
            </div>
            <div className="text-base sm:text-lg text-teal-700">
              Pukul 09.00-12.00 WIB
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};