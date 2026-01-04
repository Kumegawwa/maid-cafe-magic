import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Clock, MapPin, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const checkIsOpen = () => {
  const now = new Date();
  const day = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();
  const OPEN = 11 * 60;
  const CLOSE = 18 * 60 + 30;
  if (day === 1) return false;
  return minutes >= OPEN && minutes <= CLOSE;
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(checkIsOpen());
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/experiencia', label: 'Experiência' },
    { path: '/cardapio', label: 'Cardápio' },
    { path: '/maids', label: 'Maids' },
    { path: '/eventos', label: 'Eventos' },
    { path: '/regras', label: 'Regras' },
    { path: '/contato', label: 'Contato' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-pop-sm py-2 border-b-4 border-chest-pink"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Pop Style */}
          <Link to="/" className="flex items-center gap-3 group relative z-50">
            <div className="relative w-12 h-12 rounded-full border-4 border-chest-blue bg-white overflow-hidden shadow-pop group-hover:scale-110 transition-transform">
               <img 
                  src="/logo.png" 
                  alt="Chest of Wonders" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl flex items-center justify-center h-full">🧁</span>';
                  }}
                />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-2xl font-bold text-chest-dark tracking-wide group-hover:text-chest-pink transition-colors">
                Chest of Wonders
              </h1>
            </div>
          </Link>

          {/* Desktop Nav - Pill Style */}
          <nav className="hidden lg:flex items-center gap-2 bg-white px-2 py-2 rounded-full border-2 border-chest-purple shadow-pop-sm">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-1.5 rounded-full font-display text-sm font-bold transition-all duration-200",
                  location.pathname === link.path
                    ? "bg-chest-pink text-chest-dark shadow-sm transform -translate-y-0.5"
                    : "text-chest-dark/70 hover:text-chest-dark hover:bg-chest-purple/20"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 relative z-50">
            {/* Status Pill */}
            <div className={cn(
              "hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full border-2 text-xs font-bold shadow-pop-sm",
              isOpen 
                ? "bg-green-100 border-green-400 text-green-700" 
                : "bg-red-100 border-red-400 text-red-700"
            )}>
              <span className={cn(
                "w-2 h-2 rounded-full",
                isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"
              )} />
              {isOpen ? 'Aberto!' : 'Fechado'}
            </div>
            
            <Button className="hidden md:flex bg-chest-blue text-chest-dark font-display font-bold border-2 border-chest-dark shadow-pop hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all rounded-full" asChild>
              <Link to="/contato">
                Reservar
              </Link>
            </Button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-chest-purple/20 text-chest-dark hover:bg-chest-purple/40 transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Pop Overlay */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white transition-all duration-500 lg:hidden flex flex-col pt-24 px-6",
        isMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"
      )}>
        {/* Background blobs decorativos */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-chest-pink/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-chest-blue/20 rounded-full blur-3xl -z-10" />

        <nav className="flex flex-col gap-3">
          {navLinks.map((link, idx) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "flex items-center justify-between p-4 rounded-2xl border-2 border-chest-purple/30 text-chest-dark font-display text-xl font-bold transition-all",
                location.pathname === link.path ? "bg-chest-pink/20 border-chest-pink" : "hover:bg-chest-purple/10"
              )}
            >
              {link.label}
              {location.pathname === link.path && <Sparkles className="text-chest-pink" />}
            </Link>
          ))}
        </nav>
        
        <div className="mt-auto mb-8 space-y-4">
          <div className="p-4 rounded-2xl bg-chest-blue/10 border-2 border-chest-blue space-y-3">
            <div className="flex items-center gap-3">
              <Clock className="text-chest-blue" />
              <div className="text-sm font-body font-semibold">
                <p>Terça a Domingo</p>
                <p>11:00 - 18:30</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-chest-blue" />
              <p className="text-sm font-body font-semibold">Rua Galvão Bueno, 580</p>
            </div>
          </div>
          <Button className="w-full py-6 text-lg rounded-xl bg-chest-pink text-chest-dark border-2 border-chest-dark shadow-pop font-display font-bold" asChild>
            <Link to="/contato">Fazer Reserva</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;