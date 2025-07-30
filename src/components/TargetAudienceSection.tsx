import { Card } from "@/components/ui/card";
import { Users, TrendingUp, MessageCircle, Target, Briefcase, HeartHandshake, BookOpen, FileText, Calculator, Video, PlaySquare, GraduationCap, CalendarClock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const TargetAudienceSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const audiences = [
    {
      icon: BookOpen,
      title: "Soft file Materi",
      description: "Yang ingin belajar Meta Ads dari awal hingga mahir, dengan materi lengkap dan mudah dipahami"
    },
    {
      icon: FileText,
      title: "Template laporan harian",
      description: "Yang ingin meningkatkan performa iklan Meta mereka dengan cara yang praktis dan efektif"
    },
    {
      icon: Calculator,
      title: "File kalkulator bisnis",
      description: "Yang ingin mengoptimalkan iklan Meta mereka dengan cara yang sistematis dan terukur"
    },
    {
      icon: Video,
      title: "Video tutorial",
      description: "Yang ingin belajar cara membuat iklan Meta yang efektif dan sesuai dengan tujuan bisnis mereka"
    },
    {
      icon: PlaySquare,
      title: "Rekaman kelas",
      description: "Yang ingin belajar dari pengalaman dan strategi pengajar berpengalaman di bidang Meta Ads"
    },
    {
      icon: HeartHandshake,
      title: "Free reseat",
      description: "Yang ingin mendapatkan dukungan dan tips dari komunitas yang sama-sama belajar Meta Ads"
    },
    {
      icon: GraduationCap,
      title: "Pengajar berpengalaman",
      description: "Yang ingin belajar langsung dari pengajar berpengalaman di bidang Meta Ads"
    },
    {
      icon: Users,
      title: "Group support",
      description: "Yang ingin mendapatkan dukungan dan tips dari komunitas yang sama-sama belajar Meta Ads"
    },
    {
      icon: CalendarClock,
      title: "Webinar berkala",
      description: "Yang ingin terus belajar dan mengupdate pengetahuan mereka tentang Meta Ads"
    },
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-secondary/30 to-background mb-8">
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-red-600 leading-snug">
          Pelatihan Online 6x Pertemuan via Zoom — <br className="hidden sm:block" />
          Khusus Buat Kamu yang Punya Bisnis dan Pengen Naik Level!
        </h2>
      </div>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${sectionVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-primary">Fasilitas</span>
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-2"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {audiences.map((audience, index) => (
            <Card
              key={index}
              className={`p-6 sm:p-8 rounded-2xl bg-white/90 shadow-md hover:shadow-xl border-l-4 border-primary/70 transition-all duration-300 hover:-translate-y-1 group ${sectionVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-xl shadow group-hover:scale-110 transition-transform duration-300 mb-2">
                  <audience.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 text-primary">{audience.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{audience.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Key Problems Section */}
        
      </div>
    </section>
  );
};