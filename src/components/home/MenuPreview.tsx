import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Star, Heart, Cloud, Droplets } from 'lucide-react';

const MenuPreview = () => {
  // Dados baseados no Menu.pdf
  const DELICACIES = [
    {
      id: 1,
      name: "Frapcórnio",
      desc: "A magia dos unicórnios em forma de frapê. Base de frutas vermelhas, chantilly e confeitos coloridos.",
      price: "R$ 25,00",
      image: "/produtos/frapcornio.jpg",
      icon: Cloud,
      // Cores do Tema Pop
      bg: "bg-pink-50",
      border: "border-pink-200",
      accent: "text-chest-pink"
    },
    {
      id: 2,
      name: "Mer-Maid Frap",
      desc: "Refrescância dos mares. Base de maçã verde, decorado com o encanto das sereias.",
      price: "R$ 25,00",
      image: "/produtos/mermaid.jpg",
      icon: Droplets,
      bg: "bg-teal-50",
      border: "border-teal-200",
      accent: "text-teal-500"
    },
    {
      id: 3,
      name: "Frapstelar",
      desc: "Uma viagem cósmica com sabor de Blueberry e poeira estelar comestível.",
      price: "R$ 25,00",
      image: "/produtos/estelar.jpg",
      icon: Star,
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      accent: "text-indigo-500"
    },
    {
      id: 4,
      name: "Akai Ito",
      desc: "O fio vermelho do destino. Combinação apaixonante de morango com um toque de canela.",
      price: "R$ 25,00",
      image: "/produtos/akaiito.jpg",
      icon: Heart,
      bg: "bg-red-50",
      border: "border-red-200",
      accent: "text-red-500"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decoração de Fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-chest-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-chest-pink/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="bg-chest-purple/10 text-chest-purple border border-chest-purple/20 font-display font-bold tracking-wider uppercase text-sm mb-4 px-4 py-1 rounded-full inline-block">
            Patisserie & Bar
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-chest-dark mb-6">
            Nossas Delícias <span className="text-chest-pink">Mágicas</span>
          </h2>
          <p className="text-gray-500 text-xl font-body font-medium leading-relaxed">
            Conheça os favoritos da casa. Cada item é preparado com um feitiço especial de sabor e fofura.
          </p>
        </div>

        {/* Grid de Produtos Pop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {DELICACIES.map((item, index) => (
            <div 
              key={item.id}
              className={`group bg-white rounded-[2rem] p-4 border-2 ${item.border} hover:border-chest-dark hover:shadow-pop transition-all duration-300 hover:-translate-y-2 flex flex-col h-full`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Container da Imagem */}
              <div className={`relative aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-6 ${item.bg} flex items-center justify-center`}>
                {/* Fallback Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <item.icon size={64} className={item.accent} />
                </div>
                
                {/* Imagem Real */}
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                
                {/* Badge de Preço Flutuante */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-display font-bold text-chest-dark shadow-sm border border-gray-100">
                  {item.price}
                </div>
              </div>

              {/* Informações */}
              <div className="px-2 pb-2 flex-1 flex flex-col text-center">
                <h3 className={`font-display text-2xl font-bold text-chest-dark mb-3 group-hover:${item.accent} transition-colors`}>
                  {item.name}
                </h3>
                <p className="text-gray-500 font-body font-medium text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                  {item.desc}
                </p>
                <div className="flex items-center justify-center gap-1 text-xs font-bold uppercase tracking-wider text-chest-purple/80 bg-chest-purple/5 py-2 rounded-lg">
                  <Sparkles size={14} />
                  Recomendado
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão Ver Menu Completo */}
        <div className="text-center">
          <Button size="xl" className="bg-chest-blue hover:bg-chest-blue/90 text-white font-display font-bold text-xl px-10 h-16 rounded-2xl shadow-pop hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all border-2 border-chest-dark" asChild>
            <Link to="/cardapio">
              Ver Cardápio Completo
              <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;