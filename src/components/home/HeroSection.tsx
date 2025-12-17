import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, MapPin, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight - 100, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-dusty-rose-light/30 via-background to-background" />
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 lace-pattern opacity-50" />
      
      {/* Floating Decorations */}
      <div className="absolute top-20 left-10 text-4xl animate-float opacity-40">✧</div>
      <div className="absolute top-40 right-20 text-3xl animate-float opacity-30" style={{ animationDelay: '1s' }}>🎀</div>
      <div className="absolute bottom-40 left-20 text-2xl animate-float opacity-35" style={{ animationDelay: '2s' }}>☕</div>
      <div className="absolute bottom-60 right-10 text-3xl animate-float opacity-25" style={{ animationDelay: '1.5s' }}>🗝️</div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Welcome Badge */}
          <Badge variant="gold" className="mb-6 animate-fade-in px-4 py-1.5">
            <Sparkles size={14} className="mr-1.5" />
            Bem-vindo de volta à Mansão, Mestre
          </Badge>

          {/* Main Title */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
            <span className="text-gradient-gold">Chest</span>
            <span className="text-foreground"> of </span>
            <span className="text-gradient-pink">Wonders</span>
          </h1>

          {/* Subtitle */}
          <p className="font-display text-xl sm:text-2xl text-chocolate-light italic mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Maid Café
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Um refúgio encantado no coração da Liberdade. Descubra a magia de ser 
            recebido em uma mansão onde cada detalhe foi pensado para encantar, 
            cada bebida carrega um feitiço e cada momento se torna uma lembrança preciosa.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <MapPin size={18} className="text-primary" />
            <span>Rua Galvão Bueno, 580 - Liberdade, São Paulo</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="mansion" size="xl" asChild>
              <Link to="/contato">
                <span className="mr-2">🎀</span>
                Reservar Mesa
              </Link>
            </Button>
            <Button variant="elegant" size="xl" asChild>
              <Link to="/cardapio">
                <span className="mr-2">📜</span>
                Ver Menu Mágico
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-sm font-body">Explorar</span>
        <ChevronDown size={20} />
      </button>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
