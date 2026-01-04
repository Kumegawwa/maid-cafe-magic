import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Cake, Calendar, Music, Sparkles } from 'lucide-react';

const EventosPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const EVENTS = [
    {
      title: "Aniversários Mágicos",
      desc: "Comemore seu dia especial conosco! Temos pacotes com parabéns especial cantado pela equipe, foto polaroid e sobremesa decorada.",
      icon: Cake,
      color: "bg-chest-pink",
      border: "border-chest-pink"
    },
    {
      title: "Dias Temáticos",
      desc: "Halloween, Natal, Páscoa e Festivais Japoneses (Tanabata). A casa se transforma com decoração e cardápio exclusivo.",
      icon: Calendar,
      color: "bg-chest-purple",
      border: "border-chest-purple"
    },
    {
      title: "Pocket Shows",
      desc: "Apresentações de dança (Wotagei) e canto das nossas Maids em datas selecionadas. Fique de olho no Instagram!",
      icon: Music,
      color: "bg-chest-blue",
      border: "border-chest-blue"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 lg:pt-32 pb-20">
        
        <section className="container mx-auto px-4 text-center mb-16">
          <Badge className="bg-chest-blue text-white border-2 border-chest-dark shadow-pop-sm mb-4 px-4 py-1">
            Agenda
          </Badge>
          <h1 className="font-display text-5xl md:text-6xl font-black text-chest-dark mb-6">
            Eventos & <span className="text-chest-purple">Comemorações</span>
          </h1>
          <p className="text-gray-600 font-body text-xl max-w-2xl mx-auto font-medium">
            O Chest of Wonders é o palco perfeito para momentos inesquecíveis.
          </p>
        </section>

        <section className="container mx-auto px-4 max-w-6xl mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {EVENTS.map((evt, idx) => (
              <div key={idx} className={`bg-white rounded-[2.5rem] p-8 border-4 ${evt.border} shadow-pop hover:translate-y-[-5px] transition-all`}>
                <div className={`w-14 h-14 ${evt.color} rounded-2xl flex items-center justify-center text-white mb-6 border-2 border-chest-dark shadow-sm`}>
                  <evt.icon size={28} />
                </div>
                <h3 className="font-display text-2xl font-bold text-chest-dark mb-3">{evt.title}</h3>
                <p className="font-body text-gray-600 font-medium leading-relaxed">
                  {evt.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA para Contato */}
        <section className="container mx-auto px-4 text-center">
          <div className="bg-gradient-pop p-1 rounded-[3rem] shadow-pop max-w-4xl mx-auto">
            <div className="bg-white rounded-[2.8rem] p-10 md:p-16">
              <Sparkles className="w-12 h-12 text-chest-pink mx-auto mb-4 animate-spin-slow" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-chest-dark mb-4">
                Quer realizar seu evento aqui?
              </h2>
              <p className="font-body text-gray-600 text-lg mb-8 max-w-xl mx-auto">
                Entre em contato para consultar disponibilidade de datas, pacotes para grupos grandes e orçamentos personalizados.
              </p>
              <Button size="xl" className="bg-chest-dark text-white font-display font-bold rounded-2xl shadow-lg hover:scale-105 transition-transform" asChild>
                <Link to="/contato">
                  Fale com a Gerência
                </Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default EventosPage;