import { Card } from "@/components/ui/card";
import { TrendingUp, Target, Users, BookOpen, MessageSquare, ChartBar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calendar, Layout, ShieldCheck, Layers, Settings, ShoppingCart, Instagram, Link, BarChart } from "lucide-react";

export const BenefitsSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const benefits = [
    {
      icon: Calendar, // Tetap, sudah sesuai untuk "Pembuatan akun bisnis, akun iklan dan fanspage"
      title: "Pembuatan akun bisnis, akun iklan dan fanspage",
      description: "Langkah awal untuk memulai iklan di Meta, termasuk cara mengatur akun bisnis dan iklan"
    },
    {
      icon: BookOpen, // Ganti ke BookOpen, lebih cocok untuk "Persiapan payment iklan" (edukasi/persiapan)
      title: "Persiapan payment iklan",
      description: "Cara mengatur metode pembayaran untuk iklan Meta agar iklan bisa berjalan lancar"
    },
    {
      icon: Layout, // Ganti ke Layout (perlu import), lebih cocok untuk "Teknis pembuatan landing page"
      title: "Teknis pembuatan landing page",
      description: "Membuat halaman yang efektif untuk mengonversi pengunjung menjadi pelanggan"
    },
    {
      icon: Target, // Ganti ke Target, lebih cocok untuk "Pemasangan pixel dan event"
      title: "Pemasangan pixel dan event",
      description: "Cara memasang pixel Meta untuk melacak konversi dan mengoptimalkan iklan"
    },
    {
      icon: ShieldCheck, // Ganti ke ShieldCheck (perlu import), cocok untuk "Verifikasi domain di BM"
      title: "Verifikasi domain di BM",
      description: "Langkah penting untuk memastikan iklan Anda berjalan dengan baik dan sesuai kebijakan Meta"
    },
    {
      icon: Layers, // Ganti ke Layers (perlu import), cocok untuk "Anatomi Meta Ads"
      title: "Anatomi Meta Ads ",
      description: "Memahami struktur iklan Meta, termasuk kampanye, set iklan, dan iklan itu sendiri"
    },
    {
      icon: Settings, // Ganti ke Settings (perlu import), cocok untuk "Penjelasan iklan advantage dan manual"
      title: "Penjelasan iklan advantage dan manual",
      description: "Perbedaan antara iklan advantage yang otomatis dan iklan manual yang lebih terkontrol"
    },
    {
      icon: ShoppingCart, // Ganti ke ShoppingCart (perlu import), cocok untuk "Setting iklan Sales - CTWA"
      title: "Setting iklan Sales - CTWA",
      description: "Cara mengatur iklan untuk penjualan dengan Call To Action yang tepat"
    },
    {
      icon: Instagram, // Ganti ke Instagram (perlu import), cocok untuk "Setting iklan Traffic - IG Ads"
      title: "Setting iklan Traffic - IG Ads",
      description: "Mengatur iklan untuk meningkatkan lalu lintas ke akun Instagram Anda"
    },
    {
      icon: Link, // Ganti ke Link (perlu import), cocok untuk "Setting iklan Sales - Landing page"
      title: "Setting iklan Sales - Landing page",
      description: "Cara mengatur iklan yang mengarahkan pengunjung ke halaman penjualan"
    },
    {
      icon: BarChart, // Ganti ke BarChart (perlu import), cocok untuk "Cara evaluasi iklan CTWA, IG Ads dan Landing page"
      title: "⁠Cara evaluasi iklan CTWA, IG Ads dan Landing page",
      description: "Metode untuk mengevaluasi efektivitas iklan Anda dan melakukan penyesuaian yang diperlukan"
    },
    {
      icon: TrendingUp, // Tetap, sudah cocok untuk "Cara scale budget iklan"
      title: "Cara scale budget iklan",
      description: "Strategi untuk meningkatkan anggaran iklan secara efektif tanpa mengorbankan hasil"
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-secondary/30">
      {/* Detailed Materials */}
      <Card className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 sm:p-12 border-2 border-primary/10 mb-14 rounded-2xl shadow-md">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-primary">
          Di level beginner ini kita akan mempelajari:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-4 bg-white/80 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-full mb-2 shadow">
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <h4 className="font-semibold text-lg mb-1 text-primary">Click-to-WhatsApp Ads</h4>
            <p className="text-sm text-muted-foreground">
              Iklan yang langsung bawa calon pembeli ke chat WhatsApp kamu.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 bg-white/80 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="bg-gradient-to-br from-pink-400 to-pink-600 p-4 rounded-full mb-2 shadow">
              <Instagram className="w-10 h-10 text-white" />
            </div>
            <h4 className="font-semibold text-lg mb-1 text-pink-500">Instagram Ads</h4>
            <p className="text-sm text-muted-foreground">
              Pasang iklan di feed, story, atau reels biar produkmu makin dilirik.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 bg-white/80 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-full mb-2 shadow">
              <Link className="w-10 h-10 text-white" />
            </div>
            <h4 className="font-semibold text-lg mb-1 text-blue-500">Sales Landing Page</h4>
            <p className="text-sm text-muted-foreground">
              Halaman khusus untuk mengonversi pengunjung jadi pembeli.
            </p>
          </div>
        </div>
      </Card>
      <div className="container mx-auto px-4">

        {/* Jadwal Section */}
        <Card className="bg-gradient-to-r from-blue-50/60 to-pink-50/60 p-8 sm:p-10 border-2 border-primary/10 mb-16 shadow-lg rounded-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Bagaimana Jadwalnya?</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <div className="flex items-center gap-3 text-lg sm:text-xl font-medium">
              <span role="img" aria-label="calendar" className="text-blue-500 text-3xl sm:text-4xl">🗓️</span>
              <span>Total <span className="font-bold text-primary">6 Pertemuan</span></span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-primary/20"></div>
            <div className="flex items-center gap-3 text-lg sm:text-xl font-medium">
              <span role="img" aria-label="alarm" className="text-pink-500 text-3xl sm:text-4xl">⏰</span>
              <span>Setiap sesi <span className="font-bold text-primary">3 jam</span> <span className="hidden sm:inline">(full ilmu + praktik)</span></span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-primary/20"></div>
            <div className="flex items-center gap-3 text-lg sm:text-xl font-medium">
              <span role="img" aria-label="laptop" className="text-blue-400 text-3xl sm:text-4xl">💻</span>
              <span><span className="font-bold text-primary">Via Zoom Meeting</span></span>
            </div>
          </div>
          <div className="max-w-2xl mx-auto text-center text-base sm:text-lg text-muted-foreground mb-2">
            Nggak bakal rugi ikut kelas ini — malah bisa jadi <span className="italic">titik balik</span> buat bisnis kamu.<br />
            Kelas ini <span className="font-semibold underline">sudah diikutin ratusan orang</span> dari berbagai latar belakang, dan banyak yang ngerasa ini <span className="font-semibold">salah satu keputusan terbaik</span> mereka.
          </div>
          <div className="max-w-2xl mx-auto text-center text-base sm:text-lg text-muted-foreground mb-2">
            Belajarnya juga <span className="italic">nggak ngebosenin</span>, karena tiap sesi langsung praktek bareng mentor yang sudah terbukti <span className="font-semibold italic">jago</span>.
          </div>
          <div className="max-w-2xl mx-auto text-center text-base sm:text-lg text-muted-foreground">
            Nah, biar kamu makin yakin, materinya juga lengkap banget. Di antaranya:
          </div>
        </Card>

        {/* Section Title */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${sectionVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Materi yang di <span className="text-primary">Pelajari!</span>
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-2"></div>
        </div>

        {/* Materi Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary/80 bg-white/90 ${sectionVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-xl flex-shrink-0 shadow-md">
                  <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-primary">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
};