import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const TestimonialsSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const testimonials = [
    {
      name: "Novi Bayu",
      company: "Founder Kampung Marketer",
      content: "Saya dengan Tim Manajemen dan Leader sudah belajar di Creativy. Sangat Bermanfaat Bagi Temen-temen CS di Kampung Marketer",
      rating: 5
    },
    {
      name: "Ekalaya",
      company: "Konveksi Outer Wanita",
      content: "Mengikuti Workshop CS Ini Langsung Closing 5. Terima kasih mas Bayu atas materinya.",
      rating: 5,
    },
    {
      name: "Bay",
      company: "Kampung Inggris Pare Kediri",
      content: "Jagoan CS Ini sangat worth it, sangat bagus sekali untuk meningkatkan Closing CS. Calon customer menanyakan kursus, bagaimana CS bisa cepat tanggap.",
      rating: 5
    }
  ];

  const results = [
    {
      metric: "80%",
      label: "CLOSING RATE",
      description: "Pencapaian maksimal peserta workshop",
      color: "success"
    },
    {
      metric: "22%",
      label: "CLOSING RATE",
      description: "Rata-rata peningkatan peserta",
      color: "primary"
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-primary/5">

        {/* Brand Logos Section */}
        <Card className="bg-gradient-to-r from-secondary/50 to-accent/5 p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
            BRAND Yang Pernah Kirim Tim Untuk Ikut Kelas
          </h3>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
              Berbagai perusahaan dan brand ternama telah mempercayakan pelatihan CS mereka kepada kami
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center">
              <div className="bg-white/50 rounded-lg p-3 sm:p-4 h-16 sm:h-20 flex items-center justify-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Pertamina_Logo.svg" 
                  alt="Pertamina" 
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder-logo.png';
                    e.currentTarget.alt = 'Pertamina placeholder';
                  }}
                />
              </div>

              <div className="bg-white/50 rounded-lg p-3 sm:p-4 h-16 sm:h-20 flex items-center justify-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Indosat_Ooredoo.svg/2560px-Indosat_Ooredoo.svg.png" 
                  alt="Indosat" 
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder-logo.png';
                    e.currentTarget.alt = 'Indosat placeholder';
                  }}
                />
              </div>

              <div className="bg-white/50 rounded-lg p-3 sm:p-4 h-16 sm:h-20 flex items-center justify-center">
                <img 
                  src="https://pasmira.co.id/wp-content/uploads/2018/08/logo-pasdihati.png"
                  alt="Pasmira" 
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder-logo.png';
                    e.currentTarget.alt = 'Pasmira placeholder';
                  }}
                />
              </div>

              <div className="bg-white/50 rounded-lg p-3 sm:p-4 h-16 sm:h-20 flex items-center justify-center">
                <img 
                  src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/mlogo/ROI-60042.png" 
                  alt="Rodalink" 
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder-logo.png';
                    e.currentTarget.alt = 'Rodalink placeholder';
                  }}
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Tool Kalkulator Iklan Section */}
        <div className="my-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-green-700 tracking-tight">
            Tool Kalkulator Iklan
          </h3>
          <div className="flex justify-center">
            <hr className="border-t-2 border-teal-300 w-32 mb-6" />
          </div>
          <div className="text-center text-xs text-teal-700 mb-6 italic">
            {/* Ganti dengan gambar asli jika ada */}
            <span className="inline-block bg-white/70 border border-teal-200 rounded-lg px-4 py-2">
              Gambar tool kalkulator iklan
            </span>
          </div>
          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Kalkulator Iklan */}
            <div className="bg-green-50 rounded-2xl shadow p-5 flex flex-col gap-2 items-start hover:shadow-lg transition-all duration-300 border border-teal-100">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-teal-500 text-2xl">⭐</span>
                <span className="font-bold text-lg text-green-700">Kalkulator Iklan</span>
              </div>
              <p className="text-sm text-green-700">
                Hitungan lengkap perumusan <span className="font-semibold text-teal-600">Modal, Target Omzet, HPP, Laba</span>, target penjualan dst. Yang <span className="underline text-teal-600">Goalnya</span> adalah membuat rambu-rambu Target Cost Per Result pada campaign-campaign yang dijalankan.
              </p>
            </div>
            {/* Laporan Laba/Rugi Harian */}
            <div>
              <div className="text-center font-semibold text-sm mb-2 text-teal-600">
                Template Laporan Advertiser dan CS
              </div>
              <div className="text-center text-xs text-teal-700 mb-4 italic">
                {/* Ganti dengan gambar asli jika ada */}
                <span className="inline-block bg-white/70 border border-teal-200 rounded-lg px-4 py-2">
                  Gambar laporan advertiser dan cs
                </span>
              </div>
              <div className="bg-teal-50 rounded-2xl shadow p-5 flex flex-col gap-2 items-start hover:shadow-lg transition-all duration-300 border border-green-100">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-green-500 text-2xl">⭐</span>
                  <span className="font-bold text-lg text-teal-700">Laporan Laba/Rugi Harian</span>
                </div>
                <p className="text-sm text-teal-700">
                  Owner harus paham kondisi <span className="font-semibold text-green-700">cashflow harian</span> bisnisnya. Di laporan ini, semua terpantau jelas kondisi keuangan harian apakah surplus atau minus. Kulminasi dari form yang diisi oleh divisi Advertiser dan Customer Service.
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};