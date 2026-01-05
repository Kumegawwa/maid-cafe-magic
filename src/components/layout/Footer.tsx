import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-chest-purple/10 pt-16 pb-8 overflow-hidden border-t-4 border-chest-purple">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Marca */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-16 h-16 rounded-full border-4 border-white bg-chest-pink shadow-pop overflow-hidden">
                  <img 
                    src="/logo.png" 
                    alt="Chest of Wonders" 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-chest-dark">Chest of Wonders</h2>
                <p className="text-xs font-bold uppercase tracking-widest text-chest-purple">Maid Café & Patisserie</p>
              </div>
            </Link>
            
            <p className="text-sm text-chest-dark/80 font-medium leading-relaxed max-w-xs font-body">
              Um universo de magia e fofura no coração da Liberdade! 💖
            </p>

            {/* Ícones Sociais Coloridos */}
            <div className="flex flex-wrap gap-3">
              <SocialLink href="https://www.instagram.com/chestmaids/" color="bg-chest-pink" label="Instagram">
                <Instagram size={20} />
              </SocialLink>
              <SocialLink href="https://www.facebook.com/chestmaids/" color="bg-chest-blue" label="Facebook">
                <Facebook size={20} />
              </SocialLink>
              <SocialLink href="https://x.com/chestmaids" color="bg-chest-dark" label="X">
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </SocialLink>
              <SocialLink href="https://www.tiktok.com/@chestmaids" color="bg-black" label="TikTok">
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://discord.com/invite/e7saq4Gt8N" color="bg-[#5865F2]" label="Discord">
                 {/* SVG CORRIGIDO DO DISCORD */}
                 <svg viewBox="0 0 127.14 96.36" fill="currentColor" className="w-[20px] h-[16px] mt-[2px]">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22c.63-15.79-4.16-32.29-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                </svg>
              </SocialLink>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-chest-blue">Explorar</h3>
            <ul className="space-y-2 text-sm font-semibold text-chest-dark/70">
              <li><Link to="/experiencia" className="hover:text-chest-pink transition-colors">A Experiência</Link></li>
              <li><Link to="/cardapio" className="hover:text-chest-pink transition-colors">Menu Mágico</Link></li>
              <li><Link to="/maids" className="hover:text-chest-pink transition-colors">Maids</Link></li>
              <li><Link to="/regras" className="hover:text-chest-pink transition-colors">Regras</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="font-display text-xl font-bold text-chest-blue">Visite-nos</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-3 text-sm text-chest-dark">
                <MapPin className="text-chest-pink shrink-0" />
                <div>
                  <strong className="block font-bold">Localização</strong>
                  <p>Rua Galvão Bueno, 580</p>
                  <p>Liberdade, São Paulo</p>
                </div>
              </div>
              <div className="flex gap-3 text-sm text-chest-dark">
                <Clock className="text-chest-pink shrink-0" />
                <div>
                  <strong className="block font-bold">Horário</strong>
                  <p>Terça a Domingo</p>
                  <p>11:00 às 18:30</p>
                  <p className="text-red-500 font-bold text-xs mt-1">Fechado às Segundas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-chest-purple/20 mb-8" />

        <div className="flex items-center justify-center text-xs text-chest-dark/60 font-semibold">
          <p>© {currentYear} Chest of Wonders. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, label, children, color }: { href: string; label: string; children: React.ReactNode, color: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label={label}
    className={cn(
      "p-2.5 rounded-full text-white transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-pop flex items-center justify-center", // Adicionado flex center
      color
    )}
  >
    {children}
  </a>
);

export default Footer;