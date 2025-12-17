import { Link } from 'react-router-dom';
import { Instagram, MapPin, Clock, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-primary via-gold to-primary" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center">
                <span className="text-xl">🗝️</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">Chest of Wonders</h3>
                <p className="text-xs opacity-80">Maid Café</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Bem-vindo de volta à mansão, Mestre. Um refúgio de magia, doçura e 
              hospitalidade no coração da Liberdade.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4 flex items-center gap-2">
              <span className="text-gold">✧</span> Navegação
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/experiencia" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                A Experiência
              </Link>
              <Link to="/cardapio" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                Menu Mágico
              </Link>
              <Link to="/maids" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                Habitantes da Mansão
              </Link>
              <Link to="/eventos" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                Eventos
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4 flex items-center gap-2">
              <span className="text-gold">✧</span> Localização
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <p className="text-sm opacity-80">
                  Rua Galvão Bueno, 580<br />
                  Liberdade, São Paulo - SP
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <div className="text-sm opacity-80">
                  <p>Terça a Domingo</p>
                  <p>11:00 - 18:30</p>
                  <p className="text-xs mt-1 italic">Segunda: Descanso das Maids 💤</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4 flex items-center gap-2">
              <span className="text-gold">✧</span> Redes Sociais
            </h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/chestofwonders"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
            <p className="text-xs opacity-60 mt-4">
              Siga-nos para novidades,<br />eventos e momentos mágicos!
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-60 text-center md:text-left">
            © 2024 Chest of Wonders - Maid Café. Todos os direitos reservados.
          </p>
          <p className="text-xs opacity-60 flex items-center gap-1">
            Feito com <Heart size={12} className="text-primary" /> na Liberdade
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
