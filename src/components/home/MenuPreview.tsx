import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const MenuPreview = () => {
  const featuredItems = [
    {
      name: 'Dere Dere Choco',
      description: 'Frapê com leite, cacau, café e chantilly mágico',
      price: 'R$ 23,00',
      category: 'Frapê',
      tags: ['Vegano disponível'],
      emoji: '🍫',
    },
    {
      name: 'Tsun Tsun Matcha',
      description: 'Matcha premium com leite e gelo cremoso',
      price: 'R$ 23,00',
      category: 'Frapê',
      tags: ['Zero Lactose disponível'],
      emoji: '🍵',
    },
    {
      name: 'Frapcórnio',
      description: 'Frapê temático de unicórnio com frutas vermelhas',
      price: 'R$ 22,00',
      category: 'Frapê',
      tags: ['Colorido'],
      emoji: '🦄',
    },
    {
      name: 'Bentô Japonês',
      description: 'Proteína do dia com arroz e acompanhamentos',
      price: 'R$ 29,90',
      category: 'Refeição',
      tags: [],
      emoji: '🍱',
    },
    {
      name: 'Chikin Katsu',
      description: 'Frango empanado crocante com curry japonês',
      price: 'R$ 31,90',
      category: 'Refeição',
      tags: [],
      emoji: '🍛',
    },
    {
      name: 'Torta Banoffee',
      description: 'Banana, doce de leite e chantilly',
      price: 'R$ 19,90',
      category: 'Sobremesa',
      tags: ['Versão Vegana'],
      emoji: '🍰',
    },
  ];

  return (
    <section className="py-20 bg-lace parchment-texture">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-2xl mb-4 block">☕</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Menu <span className="text-gradient-gold">Mágico</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cada item do nosso cardápio é preparado com carinho e um toque de magia. 
            Opções para todos os gostos e dietas!
          </p>
        </div>

        {/* Featured Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredItems.map((item, index) => (
            <div
              key={index}
              className="menu-card group bg-card rounded-2xl p-6 shadow-soft border border-border hover:border-gold/30"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl group-hover:animate-bounce">{item.emoji}</span>
                <Badge variant="pink" className="text-xs">
                  {item.category}
                </Badge>
              </div>
              
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {item.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="font-display text-xl font-bold text-gold">
                  {item.price}
                </span>
                {item.tags.length > 0 && (
                  <div className="flex gap-1">
                    {item.tags.map((tag, i) => (
                      <Badge key={i} variant="vegan" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dietary Info */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500" />
            Opções Veganas
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            Sem Glúten
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500" />
            Sem Lactose
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="gold" size="lg" asChild>
            <Link to="/cardapio">
              <span className="mr-2">📜</span>
              Ver Cardápio Completo
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
