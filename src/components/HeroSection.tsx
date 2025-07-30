import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-white overflow-hidden mt-11 sm:mt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Customer Service Training Workshop"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-teal-100 to-white opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-green-700 mb-4 leading-tight drop-shadow">
              Belajar Meta Ads{" "}
              <span className="text-teal-600 block sm:inline">
                untuk Pemula Biar Jualan Makin Ngalir!
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-green-700/90 mb-5 font-medium max-w-2xl mx-auto lg:mx-0">
              Pelatihan intensif{" "}
              <span className="text-teal-600 font-bold">
                khusus buat kamu yang belum pernah beriklan
              </span>{" "}
              atau{" "}
              <span className="text-teal-600 font-bold">
                masih bingung cara optimalkan iklan di Meta
              </span>
              .
            </p>

            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 sm:p-7 mb-7 border border-teal-200 shadow-lg max-w-2xl mx-auto lg:mx-0">
              <h3 className="text-base sm:text-base font-semibold text-green-700 mb-2">
                Pernah bingung mulai pasang iklan di Facebook atau Instagram?
              </h3>
              <p className="text-xs sm:text-sm text-green-700/90 mb-3">
                Atau sudah coba, tapi hasilnya malah boncos terus?{" "}
                <span className="text-teal-600 font-bold">
                  Tenang, kamu nggak sendirian dan kamu nggak salah tempat.
                </span>{" "}
                Di pelatihan ini, kamu bakal belajar langsung praktik, bukan cuma teori. Materi disampaikan dengan gaya santai tapi to the point, dijamin nggak bikin pusing.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-green-700/90 text-xs sm:text-sm">
                <div className="flex items-center gap-2 sm:gap-2">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-teal-500 rounded-full flex-shrink-0"></div>
                  <span>Mulai dari bikin iklan yang tepat sasaran</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-teal-500 rounded-full flex-shrink-0"></div>
                  <span>
                    Hingga strategi ampuh biar iklan kamu menghasilkan, bukan menghabiskan
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
              <Button
                variant="cta"
                size="lg"
                className="text-base sm:text-lg px-8 py-4 h-auto font-bold shadow-lg bg-gradient-to-r from-green-500 to-teal-500 text-white hover:from-teal-600 hover:to-green-600"
                asChild
              >
                <a
                  href="https://wa.me/6281353025302?text=hai%20kak%20Asfi%20saya%20tertarik%20workshop%20Jagoan%20CS%20Yogyakarta%20bisa%20dibantu%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DAFTAR SEKARANG
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Event Details Card */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="hero-visual w-full max-w-sm sm:max-w-md border-b-4 border-teal-400 rounded-full shadow-xl overflow-hidden">
              <img
                src="/images/hero-image.png"
                alt="Hero Visual"
                className="w-full h-auto rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};