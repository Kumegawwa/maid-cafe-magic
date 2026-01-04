import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, MapPin, ChevronDown, Coffee, Key, Heart, Star } from 'lucide-react';

const HeroSection = () => {
  const scrollToContent = () => {
    const element = document.getElementById('start-journey');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Camadas de Fundo Pop & Kawaii */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Bolhas Decorativas (Substituindo o gradiente escuro) */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-chest-blue/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-chest-pink/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-chest-purple/10 rounded-full blur-[100px]" />
      
      {/* Decorações Flutuantes (Ícones Lucide) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Star className="absolute top-[15%] left-[10%] w-8 h-8 text-chest-blue/40 animate-wiggle" />
        <Heart className="absolute top-[25%] right-[15%] w-6 h-6 text-chest-pink/40 animate-float" style={{ animationDelay: '1s' }} />
        <Coffee className="absolute bottom-[20%] left-[20%] w-10 h-10 text-chest-purple/30 animate-float" style={{ animationDelay: '2s' }} />
        <Key className="absolute bottom-[30%] right-[10%] w-12 h-12 text-chest-dark/20 animate-wiggle" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-12 flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Badge de Boas-vindas (Estilo Pop) */}
          <Badge 
            variant="outline" 
            className="mb-4 animate-fade-in px-6 py-2 border-2 border-chest-purple bg-white text-chest-purple shadow-pop-sm font-display font-bold text-sm tracking-wide"
          >
            <Sparkles size={14} className="mr-2 text-chest-pink animate-pulse" />
            Bem-vindo de volta à Mansão, Mestre!
          </Badge>

          {/* Título Principal (Fredoka Font) */}
          <div className="space-y-2 animate-fade-in-up">
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-chest-dark leading-[0.9]">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-chest-pink via-chest-purple to-chest-blue drop-shadow-sm">Chest</span>
              <span className="block text-chest-dark -mt-2 sm:-mt-4">of</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-chest-blue via-chest-purple to-chest-pink -mt-2 sm:-mt-4 drop-shadow-sm">Wonders</span>
            </h1>
            <p className="font-display text-2xl sm:text-3xl text-chest-purple font-bold italic tracking-wide mt-4">
              Maid Café & Patisserie
            </p>
          </div>

          {/* Descrição - Foco na Experiência (Baloo 2 Font) */}
          <p 
            className="text-lg sm:text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed animate-fade-in-up opacity-0" 
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            Um portal para a magia no coração da Liberdade. 
            Permita-se viver uma experiência imersiva onde a gastronomia encontra o encanto, 
            e cada visita se torna um capítulo inesquecível.
          </p>

          {/* Localização */}
          <div 
            className="flex items-center justify-center gap-2 text-chest-dark/70 font-bold animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <MapPin size={20} className="text-chest-pink" />
            <span>Rua Galvão Bueno, 580 - Liberdade, SP</span>
          </div>

          {/* Call to Actions (Botões Pop) */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <Button size="xl" className="w-full sm:w-auto min-w-[200px] bg-chest-pink hover:bg-chest-pink/90 text-chest-dark font-display font-bold text-xl border-2 border-chest-dark shadow-pop hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-2xl" asChild>
              <Link to="/contato">
                <span className="mr-2">🎀</span>
                Reservar Mesa
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="w-full sm:w-auto min-w-[200px] bg-white text-chest-blue border-2 border-chest-blue hover:bg-chest-blue hover:text-white font-display font-bold text-xl rounded-2xl shadow-sm hover:shadow-md transition-all" asChild>
              <Link to="/cardapio">
                <span className="mr-2">📜</span>
                Ver Menu Mágico
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-chest-purple/60 hover:text-chest-purple transition-colors duration-300 group cursor-pointer"
        aria-label="Rolar para baixo"
      >
        <span className="text-xs font-display font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Entrar</span>
        <ChevronDown size={32} className="animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;