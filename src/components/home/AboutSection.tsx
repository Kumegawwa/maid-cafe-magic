import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, Heart, Star } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Imagem / Decoração (Estilo Sticker) */}
          <div className="flex-1 relative w-full max-w-lg mx-auto lg:max-w-none">
            {/* Moldura Pop */}
            <div className="aspect-square relative z-10 bg-chest-blue/10 rounded-[3rem] border-4 border-chest-blue overflow-hidden shadow-pop transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
               {/* Placeholder para imagem real */}
               <div className="absolute inset-0 flex items-center justify-center text-chest-blue/30 bg-white">
                 <Sparkles size={120} />
               </div>
               <img 
                 src="/sobre-nos.jpg" 
                 alt="Interior do Chest of Wonders" 
                 className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
               />
            </div>
            {/* Elemento Decorativo Atrás (Sombra sólida rosa) */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-chest-pink/20 rounded-[3rem] -z-10 border-4 border-chest-pink" />
          </div>

          {/* Conteúdo de Texto */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-chest-purple/10 px-4 py-1 rounded-full text-chest-purple border-2 border-chest-purple/20 font-display font-bold text-sm uppercase tracking-wider">
              <Star size={16} className="fill-chest-purple" />
              <span>Sobre Nós</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-chest-dark leading-[1.1]">
              Mais que um Café,<br/>
              <span className="text-chest-pink">Um Portal Mágico!</span>
            </h2>
            
            <div className="space-y-6 font-body text-lg text-gray-600 font-medium leading-relaxed">
              <p>
                O <strong className="text-chest-dark">Chest of Wonders</strong> não é apenas um lugar para comer, é o primeiro Maid Café do Brasil focado em proporcionar uma imersão completa em um mundo de fantasia.
              </p>
              <p>
                Inspirado na cultura pop japonesa de Akihabara, trazemos o conceito "Moe" para a Liberdade. Aqui, nossas Maids e Butlers não são apenas garçons, são habitantes mágicos prontos para tornar seu dia mais feliz com feitiços de sabor!
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="xl" className="bg-chest-purple hover:bg-chest-purple/90 text-white border-2 border-chest-dark rounded-2xl shadow-pop hover:translate-y-[-2px] hover:shadow-none transition-all font-display font-bold text-lg px-8" asChild>
                <Link to="/experiencia">
                  <Sparkles className="mr-2 w-5 h-5" />
                  Conheça a Experiência
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="border-2 border-chest-dark text-chest-dark hover:bg-gray-50 rounded-2xl font-display font-bold text-lg px-8" asChild>
                <Link to="/maids">
                  <Heart className="mr-2 w-5 h-5 text-chest-pink" />
                  Conheça a Equipe
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;