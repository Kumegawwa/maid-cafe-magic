import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, Heart, Coffee, Users } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Magia em Cada Detalhe',
      description: 'Cada bebida é preparada com um feitiço especial, cada prato ganha vida com arte e carinho.',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Hospitalidade Única',
      description: 'Nossas Maids e Mordomos te recebem como um verdadeiro Mestre que retorna ao lar.',
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Gastronomia Temática',
      description: 'De frapês mágicos a pratos asiáticos, opções veganas e sobremesas encantadoras.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Experiência Imersiva',
      description: 'Role-play, Chekkis (fotos polaroid), rituais de Omajinai e muita diversão.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-lace">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-2xl mb-4 block">✧ ✧ ✧</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            O Que é um <span className="text-gradient-pink">Maid Café</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Originário de Akihabara, Tóquio, o Maid Café é muito mais que um restaurante. 
            É uma experiência teatral onde você é o protagonista de uma história encantadora.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                {feature.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Box */}
        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-gold/5 border border-gold/20">
            {/* Decorative Corner */}
            <span className="absolute -top-3 -left-3 text-3xl text-gold opacity-60">❧</span>
            <span className="absolute -bottom-3 -right-3 text-3xl text-gold opacity-60 rotate-180">❧</span>
            
            <blockquote className="text-center">
              <p className="font-display text-xl md:text-2xl text-foreground italic leading-relaxed mb-6">
                "Lugar mágico onde se ri muito, a comida é deliciosa e o serviço é impecável. 
                As maids são incríveis!"
              </p>
              <footer className="text-muted-foreground text-sm">
                — Avaliação de visitante
              </footer>
            </blockquote>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="elegant" size="lg" asChild>
            <Link to="/experiencia">
              Saiba mais sobre a experiência
              <span className="ml-2">→</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
