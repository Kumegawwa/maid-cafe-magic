import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-chocolate to-secondary" />
      <div className="absolute inset-0 lace-pattern opacity-10" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-secondary-foreground">
          {/* Decorative */}
          <span className="text-gold text-3xl mb-6 block">🗝️</span>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Pronto para entrar na{' '}
            <span className="text-dusty-rose">Mansão</span>?
          </h2>
          
          <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Nos fins de semana e feriados, trabalhamos apenas com reservas. 
            Garanta seu lugar e venha viver uma experiência única!
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-secondary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-secondary-foreground/20">
              <Clock className="w-6 h-6 mx-auto mb-2 text-gold" />
              <p className="text-sm font-medium">Terça a Domingo</p>
              <p className="text-xs opacity-80">11:00 - 18:30</p>
            </div>
            <div className="bg-secondary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-secondary-foreground/20">
              <MapPin className="w-6 h-6 mx-auto mb-2 text-gold" />
              <p className="text-sm font-medium">Liberdade, SP</p>
              <p className="text-xs opacity-80">Rua Galvão Bueno, 580</p>
            </div>
            <div className="bg-secondary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-secondary-foreground/20">
              <Calendar className="w-6 h-6 mx-auto mb-2 text-gold" />
              <p className="text-sm font-medium">Reservas Abertas</p>
              <p className="text-xs opacity-80">Fins de semana obrigatório</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="gold" 
              size="xl" 
              asChild
              className="min-w-[200px]"
            >
              <Link to="/contato">
                <span className="mr-2">🎀</span>
                Reservar Agora
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              asChild
              className="min-w-[200px] border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
            >
              <Link to="/contato">
                <MapPin size={18} className="mr-2" />
                Como Chegar
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-background">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C74.22,101.6,148.24,86.79,213.4,62.05,236.71,53.66,259.79,44.6,283,36.36" />
        </svg>
      </div>
    </section>
  );
};

export default CTASection;
