import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Coffee, Camera, Gift, Star, Shield } from 'lucide-react';

const ExperienciaPage = () => {
  const rituals = [
    {
      icon: <Sparkles size={24} />,
      title: 'Omajinai (Feitiço)',
      description: 'Antes de cada bebida ou prato, a Maid realiza um pequeno ritual mágico para deixar tudo mais delicioso. Você pode participar repetindo as palavras mágicas!',
    },
    {
      icon: <Camera size={24} />,
      title: 'Chekki (Polaroid)',
      description: 'Tire uma foto instantânea com sua Maid favorita! Ela pode decorar com desenhos e uma dedicatória especial para você levar de lembrança.',
    },
    {
      icon: <Gift size={24} />,
      title: 'Latte Art Especial',
      description: 'Peça uma arte personalizada no seu café ou bebida! Corações, gatinhos, ou até um desenho especial feito pela Maid.',
    },
    {
      icon: <Heart size={24} />,
      title: 'Interação Teatral',
      description: 'As Maids tratam você como um Mestre que retorna ao lar. Cada interação é única baseada na personalidade da Maid.',
    },
  ];

  const rules = [
    {
      icon: <Camera size={20} />,
      rule: 'Fotos das Maids',
      description: 'Não utilize magia de captura de imagem (fotos/vídeos) em nossas Maids sem permissão prévia.',
    },
    {
      icon: <Heart size={20} />,
      rule: 'Contato Físico',
      description: 'Mantenha uma distância respeitosa. Nossas Maids são encantadoras, mas não estão disponíveis para abraços ou toques.',
    },
    {
      icon: <Star size={20} />,
      rule: 'Privacidade',
      description: 'Não faça perguntas pessoais às Maids. Elas são habitantes da Mansão, não personagens da vida real.',
    },
    {
      icon: <Shield size={20} />,
      rule: 'Respeito',
      description: 'Trate todos com gentileza e educação. A magia só funciona em um ambiente de respeito mútuo.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-dusty-rose-light/20 to-background">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="gold" className="mb-4">A Experiência</Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Bem-vindo à <span className="text-gradient-pink">Mansão Encantada</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mais que um café, uma jornada para um mundo de fantasia, doçura e hospitalidade única.
            </p>
          </div>
        </section>

        {/* O que é um Maid Café */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    O que é um Maid Café?
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Originários do distrito de Akihabara em Tóquio, os Maid Cafés surgiram no 
                    início dos anos 2000 como parte da cultura anime e jogos. A premissa central 
                    é o <strong>role-play</strong>: as garçonetes vestem-se como empregadas 
                    domésticas com estética vitoriana e tratam os clientes como "Mestres" que 
                    retornam ao lar.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Diferente de restaurantes convencionais, no Maid Café a <strong>interação é 
                    o produto principal</strong>. O Chest of Wonders adapta este modelo ao Brasil, 
                    criando um ambiente lúdico, familiar e acessível.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-gold/10 rounded-3xl p-8 border border-gold/20">
                  <div className="text-center">
                    <span className="text-6xl mb-4 block">🏰</span>
                    <h3 className="font-display text-xl font-semibold mb-2">Desde 2014</h3>
                    <p className="text-muted-foreground text-sm">
                      Pioneiros na experiência Maid Café no Brasil, trazendo a magia de Akihabara 
                      para o coração da Liberdade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rituais */}
        <section className="py-16 bg-lace parchment-texture">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-gold text-2xl mb-4 block">✨</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Rituais da Mansão
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Cada visita é repleta de momentos especiais e interações únicas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {rituals.map((ritual, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:border-gold/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {ritual.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {ritual.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {ritual.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regras da Casa */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-gold text-2xl mb-4 block">📜</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Etiqueta da Mansão
                </h2>
                <p className="text-muted-foreground">
                  Para manter a magia da mansão, pedimos que os Mestres sigam estas orientações.
                </p>
              </div>

              <div className="space-y-4">
                {rules.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-5 shadow-soft border border-border flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-1">
                        {item.rule}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-gold/5 rounded-2xl border border-gold/20 text-center">
                <p className="text-muted-foreground italic">
                  "Seguindo estas orientações, você ajuda a manter a atmosfera encantada 
                  que torna o Chest of Wonders um lugar especial para todos."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Pronto para a aventura?
            </h2>
            <p className="opacity-80 mb-8 max-w-lg mx-auto">
              Reserve sua mesa e venha viver uma experiência única no coração da Liberdade.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contato">Reservar Mesa</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExperienciaPage;
