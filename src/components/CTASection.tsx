import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, AlertCircle, TrendingUp } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-4 sm:mb-6 drop-shadow">
            Tidak Perlu <span className="text-accent">Menunda-Nunda</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 font-semibold max-w-2xl mx-auto">
            Setiap hari menunda, peluang closing dan omzet bisa hilang. Ambil langkah sekarang, jangan tunggu pesaingmu lebih dulu!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          <Card className="flex flex-col items-center p-6 bg-gradient-to-br from-green-50 via-teal-50 to-white rounded-2xl shadow hover:shadow-lg transition-all duration-300">
            <Clock className="w-10 h-10 text-green-600 mb-3" />
            <h3 className="font-bold text-lg mb-1 text-green-700">Waktu Terbatas</h3>
            <p className="text-sm text-teal-700 text-center">
              Promo & kuota peserta terbatas. Jangan sampai kehabisan!
            </p>
          </Card>
          <Card className="flex flex-col items-center p-6 bg-gradient-to-br from-teal-50 via-green-50 to-white rounded-2xl shadow hover:shadow-lg transition-all duration-300">
            <AlertCircle className="w-10 h-10 text-teal-600 mb-3" />
            <h3 className="font-bold text-lg mb-1 text-teal-700">Jangan Menyesal</h3>
            <p className="text-sm text-green-700 text-center">
              Menunda = kehilangan peluang. Bisnismu bisa tertinggal.
            </p>
          </Card>
          <Card className="flex flex-col items-center p-6 bg-gradient-to-br from-green-50 via-teal-50 to-white rounded-2xl shadow hover:shadow-lg transition-all duration-300">
            <TrendingUp className="w-10 h-10 text-teal-600 mb-3" />
            <h3 className="font-bold text-lg mb-1 text-teal-700">Aksi = Hasil</h3>
            <p className="text-sm text-green-700 text-center">
              Yang berani ambil aksi, lebih cepat dapat hasil nyata.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};