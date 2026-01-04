import { Instagram, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

// AGORA O SITE VAI CARREGAR AS IMAGENS DA SUA PASTA PUBLIC
const INSTAGRAM_PHOTOS = [
  "/instagram/foto1.jpg",
  "/instagram/foto2.jpg",
  "/instagram/foto3.jpg",
  "/instagram/foto4.jpg",
  "/instagram/foto5.jpg",
  "/instagram/foto6.jpg",
  "/instagram/foto7.jpg",
  "/instagram/foto8.jpg",
  "/instagram/foto9.jpg",
];

export default function InstagramFeed() {
  return (
    <section className="py-20 bg-white overflow-hidden relative">
      <div className="container px-4 mb-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-4 text-chest-pink animate-bounce">
            <Instagram size={24} />
            <span className="font-bold">@chestmaids</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-chest-dark mb-4">
          Registros dos <span className="text-transparent bg-clip-text bg-gradient-to-r from-chest-pink to-chest-purple">Nossos Mestres</span>
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Momentos mágicos compartilhados por quem viveu a experiência Chest of Wonders.
          Marque a gente para aparecer aqui!
        </p>
      </div>

      {/* Carrossel Infinito Wrapper */}
      <div className="relative w-full py-4 bg-chest-pink/5 -rotate-1 scale-105 border-y-4 border-white shadow-inner">
        
        {/* Track do Carrossel (Duplicado para efeito infinito) */}
        {/* O 'group' aqui permite pausar a animação quando passa o mouse em QUALQUER lugar da faixa */}
        <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
          
          {/* Duplicamos a lista 3 vezes para garantir que o loop infinito não tenha buracos em telas grandes */}
          {[...INSTAGRAM_PHOTOS, ...INSTAGRAM_PHOTOS, ...INSTAGRAM_PHOTOS].map((photo, index) => (
            <div 
              key={index} 
              className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg group border-4 border-white bg-gray-100"
            >
              <img 
                src={photo} 
                alt={`Cliente Chest of Wonders ${index}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                // Fallback para caso você esqueça de baixar alguma foto, não ficar um buraco branco
                onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/600x600/ffa9d9/white?text=Chest+Maids";
                }}
              />
              
              {/* Overlay ao passar o mouse */}
              <div className="absolute inset-0 bg-chest-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
                <div className="flex gap-4 text-white">
                  <div className="flex items-center gap-1">
                     <Heart className="fill-white w-6 h-6 animate-pulse" />
                     <span className="font-bold">Ver no Insta</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Button 
            variant="outline"
            className="border-2 border-chest-purple text-chest-purple hover:bg-chest-purple hover:text-white rounded-full px-8 py-6 text-lg shadow-md transition-all hover:-translate-y-1"
            onClick={() => window.open('https://www.instagram.com/chestmaids/', '_blank')}
        >
            Siga nosso Instagram
        </Button>
      </div>
    </section>
  );
}