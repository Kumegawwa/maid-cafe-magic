import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CalendarCheck, Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="relative bg-chest-purple rounded-[3rem] p-10 md:p-20 text-center overflow-hidden border-4 border-chest-dark shadow-pop">
          
          {/* Decorações de Fundo */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-chest-pink/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-10">
            <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-3xl mb-2 border border-white/30 shadow-lg rotate-3 hover:rotate-0 transition-transform duration-500">
              <Sparkles className="w-10 h-10 text-white animate-pulse" />
            </div>
            
            <h2 className="font-display text-5xl md:text-7xl font-black text-white leading-tight drop-shadow-md">
              Pronto para viver <br/> essa magia?
            </h2>
            
            <p className="font-body text-xl md:text-2xl text-white/90 font-medium leading-relaxed max-w-2xl mx-auto">
              As mesas são limitadas e a procura é mágica! Garanta seu lugar no Chest of Wonders agora mesmo e evite filas.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
              <Button size="xl" className="bg-white text-chest-purple border-2 border-chest-dark hover:bg-gray-100 rounded-2xl shadow-[0_4px_0_0_rgba(39,39,39,1)] hover:shadow-none hover:translate-y-[4px] transition-all font-display font-bold text-xl h-20 px-12" asChild>
                <Link to="/contato">
                  <CalendarCheck className="mr-3 w-7 h-7" /> 
                  Fazer Reserva Agora
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;