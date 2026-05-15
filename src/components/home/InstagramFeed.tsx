import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InstagramFeed = () => {
  // Lista completa com as 9 fotos que você subiu
  const photos = [
    { src: '/instagram/foto1.jpg', alt: 'Momento Mágico 1' },
    { src: '/instagram/foto2.jpg', alt: 'Momento Mágico 2' },
    { src: '/instagram/foto3.jpg', alt: 'Momento Mágico 3' },
    { src: '/instagram/foto4.jpg', alt: 'Momento Mágico 4' },
    { src: '/instagram/foto5.jpg', alt: 'Momento Mágico 5' },
    { src: '/instagram/foto6.jpg', alt: 'Momento Mágico 6' },
    { src: '/instagram/foto7.jpg', alt: 'Momento Mágico 7' },
    { src: '/instagram/foto8.jpg', alt: 'Momento Mágico 8' },
    { src: '/instagram/foto9.jpg', alt: 'Momento Mágico 9' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      {/* Estilo da animação injetado localmente */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-4 mb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-chest-pink/10 text-chest-pink px-4 py-1.5 rounded-full font-display font-bold text-sm uppercase tracking-wider mb-6 border-2 border-chest-pink/30">
          <Instagram size={18} />
          <span>@chestmaids</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-black text-chest-dark">
          Siga nossa <span className="text-chest-blue">Rotina Mágica</span>
        </h2>
      </div>

      {/* Container do Carrossel Infinito */}
      <div className="relative w-full">
        {/* Gradientes laterais para suavizar as bordas */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-fit animate-marquee">
          {/* Renderiza as fotos DUAS vezes para criar o loop perfeito */}
          {[...photos, ...photos].map((photo, idx) => (
            <div 
              key={idx}
              className="flex-shrink-0 w-64 md:w-80 px-4 group cursor-pointer"
            >
              <div className="aspect-square bg-white rounded-[2rem] p-3 border-4 border-chest-dark shadow-pop hover:shadow-none hover:translate-y-2 transition-all duration-300 relative overflow-hidden">
                <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                  <img 
                    src={photo.src} 
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-100 flex items-center justify-center text-4xl">📸</div>';
                    }}
                  />
                  {/* Overlay rosa ao passar o mouse */}
                  <div className="absolute inset-0 bg-chest-pink/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Instagram className="text-white w-12 h-12 drop-shadow-md transform scale-50 group-hover:scale-100 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
        <Button 
          size="xl" 
          className="bg-chest-dark hover:bg-chest-blue text-white font-display font-bold text-xl rounded-2xl shadow-pop hover:shadow-none hover:translate-y-1 transition-all px-10 h-16 border-2 border-chest-dark"
          asChild
        >
          <a href="https://instagram.com/chestmaids" target="_blank" rel="noopener noreferrer">
            Ver mais no Instagram
          </a>
        </Button>
      </div>
    </section>
  );
};

export default InstagramFeed;