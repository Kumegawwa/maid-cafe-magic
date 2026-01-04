import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Wand2, Coffee } from 'lucide-react';

const ExperienciaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const STEPS = [
    {
      title: "Oishikunare",
      desc: "Todo pedido vem acompanhado de um feitiço especial para torná-lo delicioso.",
      icon: Wand2,
      color: "bg-chest-pink",
      text: "text-white"
    },
    {
      title: "Moe Moe Kyun",
      desc: "Nossas Maids interagem e trazem a cultura pop japonesa para sua mesa.",
      icon: Heart,
      color: "bg-chest-blue",
      text: "text-white"
    },
    {
      title: "Arte no Prato",
      desc: "Alguns pratos e bebidas ganham desenhos feitos na hora com caldas coloridas.",
      icon: Sparkles,
      color: "bg-chest-purple",
      text: "text-white"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 lg:pt-32 pb-20">
        
        {/* Hero */}
        <section className="container mx-auto px-4 text-center mb-20">
          <Badge className="bg-chest-purple text-white border-2 border-chest-dark shadow-pop-sm mb-4 px-4 py-1">
            Conceito
          </Badge>
          <h1 className="font-display text-5xl md:text-7xl font-black text-chest-dark mb-6">
            O que é um <span className="text-chest-pink">Maid Café?</span>
          </h1>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nascido em Akihabara, no Japão, é um tipo de restaurante temático onde os atendentes vestem-se como Maids (empregadas vitorianas) ou Butlers, tratando os clientes como mestres e princesas de uma mansão.
          </p>
        </section>

        {/* Os Pilares da Magia */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((step, idx) => (
              <div key={idx} className="group relative bg-white p-8 rounded-[3rem] border-4 border-chest-dark shadow-pop hover:translate-y-[-5px] hover:shadow-pop-hover transition-all">
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 border-2 border-chest-dark shadow-sm`}>
                  <step.icon className={`${step.text} w-8 h-8`} />
                </div>
                <h3 className="font-display text-2xl font-bold text-chest-dark mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-gray-600 font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Banner Imersivo */}
        <section className="container mx-auto px-4">
          <div className="bg-chest-dark text-white rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-6 text-center md:text-left">
                <h2 className="font-display text-4xl md:text-5xl font-black text-chest-pink">
                  Uma pausa na realidade
                </h2>
                <p className="font-body text-lg text-gray-300 leading-relaxed">
                  No Chest of Wonders, você esquece os problemas lá fora. Aqui dentro, 
                  tudo é fofo, colorido e mágico. É o lugar perfeito para reunir amigos, 
                  comemorar aniversários ou apenas se presentear com um momento especial.
                </p>
                <div className="pt-4">
                  <Button size="xl" className="bg-white text-chest-dark hover:bg-chest-blue hover:text-white border-2 border-white font-display font-bold rounded-2xl shadow-lg transition-all" asChild>
                    <Link to="/cardapio">
                      Ver Nossas Delícias
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="flex-1 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 bg-chest-purple rounded-full flex items-center justify-center animate-float">
                  <Coffee size={120} className="text-white/20" />
                  <div className="absolute inset-0 border-4 border-dashed border-white/30 rounded-full animate-spin-slow" />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default ExperienciaPage;