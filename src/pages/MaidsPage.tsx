import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Heart, Sparkles, Star, Coffee } from 'lucide-react';

const MaidsPage = () => {
  const maids = [
    {
      name: 'Maid Lillian',
      personality: 'Deredere',
      description: 'Sempre sorridente e calorosa, Lillian faz todos se sentirem em casa. Sua especialidade é criar arte no café que aquece o coração.',
      specialty: 'Latte Art',
      favoriteFood: 'Torta de Morango',
      quote: '"Seu sorriso é minha maior recompensa, Mestre!"',
      color: 'from-pink-400 to-rose-500',
      traits: ['Carinhosa', 'Atenciosa', 'Alegre'],
    },
    {
      name: 'Maid Miko',
      personality: 'Kuudere',
      description: 'De poucas palavras mas gestos significativos, Miko expressa seu carinho através de chás perfeitamente preparados.',
      specialty: 'Chás Especiais',
      favoriteFood: 'Mochi',
      quote: '"...ficou delicioso. Para você."',
      color: 'from-purple-400 to-indigo-500',
      traits: ['Misteriosa', 'Elegante', 'Dedicada'],
    },
    {
      name: 'Maid Ellie',
      personality: 'Genki',
      description: 'Uma explosão de energia e alegria! Ellie transforma cada momento em uma festa e suas sobremesas são pura magia.',
      specialty: 'Sobremesas Mágicas',
      favoriteFood: 'Cupcakes',
      quote: '"Vamos fazer magia juntos hoje, Mestre!"',
      color: 'from-amber-400 to-orange-500',
      traits: ['Energética', 'Divertida', 'Criativa'],
    },
    {
      name: 'Maid Sakura',
      personality: 'Tsundere',
      description: 'Pode parecer fria no início, mas por baixo dessa fachada existe um coração que se importa profundamente.',
      specialty: 'Frapês Especiais',
      favoriteFood: 'Taiyaki',
      quote: '"N-não é como se eu tivesse feito isso especialmente pra você!"',
      color: 'from-red-400 to-pink-500',
      traits: ['Determinada', 'Honesta', 'Leal'],
    },
    {
      name: 'Maid Luna',
      personality: 'Dandere',
      description: 'Tímida e gentil, Luna se abre aos poucos revelando uma doçura incomparável em cada interação.',
      specialty: 'Drinks sem Álcool',
      favoriteFood: 'Pudim',
      quote: '"E-espero que goste... fiz com muito carinho..."',
      color: 'from-blue-400 to-cyan-500',
      traits: ['Tímida', 'Gentil', 'Observadora'],
    },
    {
      name: 'Mordomo Kai',
      personality: 'Cavalheiro',
      description: 'Elegante e cortês, Kai trata cada visitante com o respeito e a atenção dignos da nobreza.',
      specialty: 'Café Clássico',
      favoriteFood: 'Croissant',
      quote: '"É uma honra servi-lo, Mestre."',
      color: 'from-slate-500 to-slate-700',
      traits: ['Elegante', 'Protetor', 'Refinado'],
    },
  ];

  const personalities = [
    { name: 'Deredere', emoji: '💕', description: 'Amorosa e carinhosa desde o primeiro momento. Expressa afeto abertamente.' },
    { name: 'Tsundere', emoji: '💢', description: 'Fria por fora, mas gentil por dentro. O afeto vem aos poucos.' },
    { name: 'Kuudere', emoji: '❄️', description: 'Calma e de poucas palavras, mas demonstra carinho de formas sutis.' },
    { name: 'Genki', emoji: '⚡', description: 'Energia pura! Sempre animada e positiva, contagia a todos.' },
    { name: 'Dandere', emoji: '🌸', description: 'Tímida no início, mas se abre revelando grande doçura.' },
    { name: 'Cavalheiro', emoji: '🎩', description: 'Elegante e cortês, com modos refinados e atenção impecável.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-dusty-rose-light/20 to-background">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="gold" className="mb-4">O Elenco</Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Habitantes da <span className="text-gradient-pink">Mansão</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça as Maids e Mordomos que tornam cada visita ao Chest of Wonders uma experiência inesquecível.
            </p>
          </div>
        </section>

        {/* Maids Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {maids.map((maid, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
                >
                  {/* Avatar */}
                  <div className={`h-48 bg-gradient-to-br ${maid.color} flex items-center justify-center relative`}>
                    <span className="text-8xl opacity-90">👩‍🍳</span>
                    <div className="absolute bottom-3 right-3">
                      <Badge variant="outline" className="bg-card/90 backdrop-blur-sm text-xs">
                        {maid.personality}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {maid.name}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {maid.description}
                    </p>

                    {/* Stats */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Sparkles size={14} className="text-gold" />
                        <span className="text-muted-foreground">Especialidade:</span>
                        <span className="font-medium text-foreground">{maid.specialty}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Coffee size={14} className="text-primary" />
                        <span className="text-muted-foreground">Favorito:</span>
                        <span className="font-medium text-foreground">{maid.favoriteFood}</span>
                      </div>
                    </div>

                    {/* Traits */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {maid.traits.map((trait, i) => (
                        <Badge key={i} variant="pink" className="text-xs">
                          {trait}
                        </Badge>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-sm italic text-muted-foreground border-l-2 border-primary/30 pl-3">
                      {maid.quote}
                    </p>

                    {/* Status */}
                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-green-600">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Na Mansão
                      </div>
                      <Heart 
                        size={18} 
                        className="text-primary/40 group-hover:text-primary group-hover:scale-110 transition-all cursor-pointer" 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Personality Guide */}
        <section className="py-16 bg-lace parchment-texture">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-gold text-2xl mb-4 block">📖</span>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Guia de Personalidades
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Cada Maid tem uma personalidade única inspirada em arquétipos da cultura japonesa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {personalities.map((p, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-5 shadow-soft border border-border hover:border-gold/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{p.emoji}</span>
                    <h3 className="font-display font-semibold text-foreground">{p.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <span className="text-3xl mb-4 block">🎀</span>
            <h2 className="font-display text-3xl font-bold mb-4">
              Quer fazer parte da Mansão?
            </h2>
            <p className="opacity-80 mb-6 max-w-lg mx-auto">
              Estamos sempre em busca de novos talentos para se juntarem à nossa família encantada.
            </p>
            <p className="text-sm opacity-60">
              Entre em contato pelo Instagram para saber sobre vagas abertas.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MaidsPage;
