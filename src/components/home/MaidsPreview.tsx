import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Sparkles, Star } from 'lucide-react';

const MaidsPreview = () => {
  const maids = [
    {
      name: 'Maid Lillian',
      personality: 'Deredere',
      specialty: 'Latte Art',
      quote: '"Seu sorriso é minha maior recompensa, Mestre!"',
      color: 'from-pink-300 to-pink-500',
    },
    {
      name: 'Maid Miko',
      personality: 'Kuudere',
      specialty: 'Chás Especiais',
      quote: '"...ficou delicioso. Para você."',
      color: 'from-purple-300 to-purple-500',
    },
    {
      name: 'Maid Ellie',
      personality: 'Genki',
      specialty: 'Sobremesas',
      quote: '"Vamos fazer magia juntos hoje!"',
      color: 'from-amber-300 to-amber-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-lace to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-2xl mb-4 block">🎀</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Habitantes da <span className="text-gradient-pink">Mansão</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Nossas Maids e Mordomos estão prontos para tornar sua visita inesquecível. 
            Cada um com sua personalidade única e talentos especiais.
          </p>
        </div>

        {/* Maids Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {maids.map((maid, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
            >
              {/* Avatar Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${maid.color} flex items-center justify-center`}>
                <span className="text-7xl">👩‍🍳</span>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {maid.name}
                  </h3>
                  <Badge variant="pink" className="text-xs">
                    {maid.personality}
                  </Badge>
                </div>
                
                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Sparkles size={14} className="text-gold" />
                    <span>{maid.specialty}</span>
                  </div>
                </div>
                
                {/* Quote */}
                <p className="text-muted-foreground text-sm italic border-l-2 border-primary/30 pl-3">
                  {maid.quote}
                </p>

                {/* Status */}
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-green-600">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Na Mansão
                  </div>
                  <Heart size={16} className="text-primary opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Personality Guide */}
        <div className="bg-card rounded-2xl p-6 md:p-8 border border-border max-w-3xl mx-auto mb-12">
          <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Star size={18} className="text-gold" />
            Guia de Personalidades
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-primary">Deredere:</strong>
              <span className="text-muted-foreground ml-1">Doce e carinhosa, sempre sorridente</span>
            </div>
            <div>
              <strong className="text-primary">Tsundere:</strong>
              <span className="text-muted-foreground ml-1">Fria por fora, gentil por dentro</span>
            </div>
            <div>
              <strong className="text-primary">Kuudere:</strong>
              <span className="text-muted-foreground ml-1">Calma e misteriosa, de poucas palavras</span>
            </div>
            <div>
              <strong className="text-primary">Genki:</strong>
              <span className="text-muted-foreground ml-1">Energética e animada, sempre positiva</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="elegant" size="lg" asChild>
            <Link to="/maids">
              Conhecer Todas as Maids
              <span className="ml-2">→</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MaidsPreview;
