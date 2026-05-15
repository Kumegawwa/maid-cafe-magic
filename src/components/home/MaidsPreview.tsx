import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Heart, Sparkles } from 'lucide-react';

const MaidsPreview = () => {
  // Destaque de 3 tipos para a Home (Isca para a página completa)
  const previewTypes = [
    { 
      name: "Tsundere", 
      desc: "N-não é como se eu gostasse de você ou algo assim! Baka!",
      color: "bg-orange-50", 
      border: "border-orange-200", 
      text: "text-orange-500",
      icon: Zap 
    },
    { 
      name: "Mahou", 
      desc: "Vou lançar um feitiço para deixar sua comida deliciosa! Moe moe kyun!",
      color: "bg-purple-50", 
      border: "border-purple-200", 
      text: "text-purple-500",
      icon: Sparkles
    },
    { 
      name: "Deredere", 
      desc: "Cheia de energia e amor para dar! Bem-vindo de volta, Mestre!",
      color: "bg-pink-50", 
      border: "border-pink-200", 
      text: "text-pink-500",
      icon: Heart
    },
  ];

  return (
    <section className="py-24 bg-chest-blue/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <span className="text-chest-blue font-display font-bold tracking-wider uppercase text-sm mb-3 block">
              Nossa Equipe
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-chest-dark leading-tight">
              Conheça as <span className="text-chest-blue">Maids & Butlers</span>
            </h2>
            <p className="mt-6 text-gray-600 font-body text-xl font-medium leading-relaxed">
              Cada habitante da mansão tem uma personalidade única. 
              Quem irá atender você hoje? Escolha seu "Dere Type"!
            </p>
          </div>
          
          <Button variant="link" className="text-chest-dark font-display font-bold text-xl hover:text-chest-blue transition-colors group p-0 h-auto" asChild>
            <Link to="/maids" className="flex items-center gap-2">
              Ver todas as Personalidades <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewTypes.map((type, idx) => (
            <div 
              key={idx} 
              className={`group relative bg-white rounded-[2.5rem] p-8 border-4 ${type.border} shadow-pop hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 flex flex-col items-center text-center`}
            >
              <div className={`w-24 h-24 rounded-3xl ${type.color} flex items-center justify-center mb-6 border-2 ${type.border} shadow-sm group-hover:scale-110 transition-transform`}>
                <type.icon className={`w-12 h-12 ${type.text}`} />
              </div>
              
              <h3 className="font-display text-3xl font-black text-chest-dark mb-4">{type.name}</h3>
              
              <div className="relative">
                <span className="absolute -top-4 -left-2 text-6xl font-display text-chest-dark/5">"</span>
                <p className="font-body text-gray-600 font-medium italic text-lg px-2 leading-relaxed relative z-10">
                  {type.desc}
                </p>
                <span className="absolute -bottom-8 -right-2 text-6xl font-display text-chest-dark/5">"</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaidsPreview;