import Image from 'next/image';
import Link from 'next/link';
import { 
  FaPinterestP, 
  FaFacebookF, 
  FaInstagram, 
  FaWhatsapp, 
  FaTiktok 
} from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    { name: 'Pinterest', href: '#', icon: FaPinterestP },
    { name: 'Facebook', href: '#', icon: FaFacebookF },
    { name: 'Instagram', href: '#', icon: FaInstagram },
    { name: 'WhatsApp', href: '#', icon: FaWhatsapp },
    { name: 'TikTok', href: '#', icon: FaTiktok },
  ];

  return (
    <footer className="w-full bg-militar-500 text-white py-8 px-4 rounded-t-[3rem] font-dm-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-creme rounded-full flex items-center justify-center p-2 border-2 border-militar-300 shadow-sm">
          <Image
            src="/images/logo120x120.png"
            alt="Midori Café Logo" 
            width={64}
            height={64}
            className="object-contain rounded-full"
          />
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="w-8 h-8 flex items-center justify-center rounded-full text-creme hover:bg-white/10 hover:scale-110 transition-all duration-200"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            );
          })}
        </div>

        <p className="text-[10px] sm:text-xs text-creme text-center font-light tracking-wide">
          Desafio de Tecnologia 2026.2 © Code Empresa Júnior de Computação
        </p>

      </div>
    </footer>
  );
}