import Image from "next/image";
import Link from "next/link";
import {
  FaPinterestP,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { name: "Pinterest", href: "#", icon: FaPinterestP, isFilled: true },
    { name: "Facebook", href: "#", icon: FaFacebookF, isFilled: true },
    { name: "Instagram", href: "#", icon: FaInstagram, isFilled: true },
    { name: "WhatsApp", href: "#", icon: FaWhatsapp, isFilled: true },
    { name: "TikTok", href: "#", icon: FaTiktok, isFilled: true },
  ];

  return (
    <div className="bg-offwhite">
      <footer className="w-full bg-militar-500 text-creme py-10 px-4 rounded-t-[2.5rem] md:rounded-t-[4rem] font-dm-sans">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 md:gap-8">
          {/* Imagem */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 bg-creme rounded-full flex items-center justify-center p-3 shadow-sm">
            <Image
              src="/images/logo120x120.png"
              alt="Midori Café Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>

          {/* Links de redes sociais */}
          <div className="flex items-center gap-3 sm:gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110 ${
                    social.isFilled
                      ? "bg-creme text-militar-500 hover:bg-white"
                      : "text-creme hover:text-white"
                  }`}
                >
                  <Icon
                    className={
                      social.isFilled
                        ? "w-4 h-4 sm:w-5 sm:h-5"
                        : "w-6 h-6 sm:w-7 sm:h-7"
                    }
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm sm:text-base">
            <a href="#" className="text-creme hover:text-white">
              Termos de uso
            </a>
            <a href="#" className="text-creme hover:text-white">
              Política de privacidade
            </a>
          </div>

          <p className="text-[11px] sm:text-xs text-creme/70 text-center font-light tracking-wide">
            Desafio de Tecnologia 2026.2 © Code Empresa Júnior de Computação
          </p>
        </div>
      </footer>
    </div>
  );
}
