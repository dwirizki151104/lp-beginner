import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin, Book, MessageCircleWarningIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
          {[
            {
              icon: <MessageCircle className="text-accent" />,
              title: "WhatsApp",
              text: "+62 813-5302-5302"
            },
            {
              icon: <MapPin className="text-accent" />,
              title: "Lokasi",
              text: "Yogyakarta, Indonesia"
            },
            {
              icon: <Mail className="text-accent" />,
              title: "Workshop",
              text: "Kamis, 31 Juli 2025"
            }
          ].map((item, index) => (
            <div key={index} className="text-center p-2 sm:p-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 mx-auto mb-2 sm:mb-3 lg:mb-4">
                {item.icon}
              </div>
              <h4 className="font-semibold mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">{item.title}</h4>
              <p className="text-primary-foreground/80 text-xs sm:text-sm lg:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div className="text-center border-t border-white/20 pt-4 sm:pt-6 lg:pt-8">
          <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2">POWERED BY:</h4>
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-accent mb-1 sm:mb-2">
            PT SOLUSI KREATIF BERKAH
          </p>
          <p className="text-primary-foreground/80 mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm lg:text-base">
            YOGYAKARTA, INDONESIA
          </p>
          <p className="text-xs text-primary-foreground/60">
            COPYRIGHT © 2025 · ALL RIGHTS RESERVED
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 border-t border-white/20">
          <div className="flex justify-center">
            <img 
              src="/images/logo.png" 
              alt="Company Logo" 
              className="w-16 sm:w-20 md:w-24 lg:w-32 shadow-inner shadow-stone-900 rounded-lg p-1 sm:p-2"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};