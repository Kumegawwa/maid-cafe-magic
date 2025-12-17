import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Menu, X, Clock, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if currently open (Tue-Sun 11:00-18:30)
  const getIsOpen = () => {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours * 60 + minutes;
    const openTime = 11 * 60; // 11:00
    const closeTime = 18 * 60 + 30; // 18:30
    
    // Closed on Mondays (day === 1)
    if (day === 1) return false;
    return currentTime >= openTime && currentTime <= closeTime;
  };

  const isOpen = getIsOpen();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Portal' },
    { path: '/experiencia', label: 'A Experiência' },
    { path: '/cardapio', label: 'Menu Mágico' },
    { path: '/maids', label: 'Habitantes' },
    { path: '/eventos', label: 'Eventos' },
    { path: '/contato', label: 'Visite-nos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-card'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center shadow-gold">
              <span className="text-2xl">🗝️</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Chest of Wonders
              </h1>
              <p className="text-xs text-muted-foreground -mt-0.5">Maid Café</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-body text-sm transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Status & CTA */}
          <div className="flex items-center gap-3">
            <Badge variant={isOpen ? 'status' : 'closed'} className="hidden sm:flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
              {isOpen ? 'Aberto Agora' : 'Fechado'}
            </Badge>
            
            <Button variant="mansion" size="sm" className="hidden md:flex" asChild>
              <Link to="/contato">Reservar Mesa</Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-body text-base transition-all ${
                    location.pathname === link.path
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock size={16} />
                <span>Terça a Domingo, 11:00 - 18:30</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} />
                <span>Rua Galvão Bueno, 580 - Liberdade</span>
              </div>
              <Button variant="mansion" className="w-full mt-2" asChild>
                <Link to="/contato">Reservar Mesa</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
