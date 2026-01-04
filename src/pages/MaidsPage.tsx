import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Zap, Cloud, Eye, Sparkles, Sun, Smile, Coffee, Crown, Flame, Star, HelpCircle, MousePointerClick } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const MaidsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const PERSONALITIES = [
    {
      id: "deredere",
      name: "Deredere",
      description: "Sempre gentil e super kawaii, trazendo a experiência de fofura mais clássica do nosso maid café!",
      dialogue: "Kyaa! Amor, felicidade e bondade acima de tudo! Pode contar comigo Mestre!",
      color: "bg-pink-100",
      border: "border-pink-300",
      text: "text-pink-600",
      icon: Heart
    },
    {
      id: "tsundere",
      name: "Tsundere",
      description: "Se irrita fácil e pode ser durona mas no fundo, no fundo é porque gosta de você. Então seja gentil!",
      dialogue: "N-não vou dizer o que estou sentindo! B-baka!",
      color: "bg-orange-100",
      border: "border-orange-300",
      text: "text-orange-600",
      icon: Zap
    },
    {
      id: "dandere",
      name: "Dandere",
      description: "Mesmo tendo muita timidez, sempre vai te receber com dedicação e carinho!",
      dialogue: "Sei que sou tímida demais pra falar... mas você vê meus sentimentos... não é, Mestre?",
      color: "bg-indigo-100",
      border: "border-indigo-300",
      text: "text-indigo-600",
      icon: Cloud
    },
    {
      id: "yandere",
      name: "Yandere",
      description: "Te adora tanto, que seu ciúme doentio pode ser perigoso para quem estiver por perto!",
      dialogue: "Você não precisa de amigos, Mestre. Eu já me livrei deles pra você ♡",
      color: "bg-red-100",
      border: "border-red-400",
      text: "text-red-700",
      icon: Eye
    },
    {
      id: "mahou",
      name: "Mahou",
      description: "Vai te ajudar a proteger o mundo das forças do mal como uma verdadeira garota mágica!",
      dialogue: "Pelo poder do Frap Estelar~! Sou sua Maid e vou servir você em nome da Lua!",
      color: "bg-purple-100",
      border: "border-purple-300",
      text: "text-purple-600",
      icon: Sparkles
    },
    {
      id: "genki",
      name: "Genki",
      description: "Muita energia e positividade! Levanta dessa cadeira e vem fazer a magia mais animada de todas!",
      dialogue: "Vamos lá Mestre! De pé!!! É hora de se movimentar!",
      color: "bg-yellow-100",
      border: "border-yellow-300",
      text: "text-yellow-600",
      icon: Sun
    },
    {
      id: "imouto",
      name: "Imouto",
      description: "Uma irmãzinha caçula fofa e animada, que te admira e está sempre querendo te alegrar!",
      dialogue: "Onii-chan! Tô tão feliz que você veio me visitar hoje!!",
      color: "bg-rose-100",
      border: "border-rose-300",
      text: "text-rose-600",
      icon: Smile
    },
    {
      id: "oneesan",
      name: "Oneesan",
      description: "Super atenciosa e preocupada, vai cuidar de você como uma irmã mais velha!",
      dialogue: "Ara ara~ Precisa de ajuda, pequenino? Vou cuidar de você~",
      color: "bg-violet-100",
      border: "border-violet-300",
      text: "text-violet-700",
      icon: Coffee
    },
    {
      id: "oujidere",
      name: "Oujidere",
      description: "Refinado e com aparência impecável de um príncipe. Talvez aja como um lord gentil ou talvez te despreze.",
      dialogue: "Apenas um príncipe saberá como tratar outros membros da realeza.",
      color: "bg-amber-100",
      border: "border-amber-300",
      text: "text-amber-700",
      icon: Crown
    },
    {
      id: "sadistic",
      name: "Sadistic",
      description: "Esqueça a fofura... Se prepare para obedecer os caprichos de uma maid que só quer se divertir ao te humilhar!",
      dialogue: "Como ousa me dar ordens? Quem dá as ordens aqui SOU EU!",
      color: "bg-gray-900",
      border: "border-gray-950",
      text: "text-red-500", 
      icon: Flame
    },
    {
      id: "kamidere",
      name: "Kamidere",
      description: "Para ter a honra do atendimento de uma divindade nessa terra, coloque-se no seu lugar como um reles mortal!",
      dialogue: "Como ousa exigir o atendimento de uma deusa??! Mas é claro, eu sou incrível mesmo!",
      color: "bg-yellow-50",
      border: "border-yellow-400",
      text: "text-yellow-600",
      icon: Star
    },
    {
      id: "bakadere",
      name: "Bakadere",
      description: "Pequenas confusões e piadas ruins podem acontecer, mas é tudo parte da diversão!",
      dialogue: "Aa-Waa!! Desculpe Mestre! Sou muito desajeitada mesmo ><'",
      color: "bg-blue-100",
      border: "border-blue-300",
      text: "text-blue-600",
      icon: HelpCircle
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 lg:pt-32 pb-20">
        <section className="container mx-auto px-4 text-center mb-12">
          <Badge className="bg-chest-pink text-chest-dark border-2 border-chest-dark shadow-pop-sm mb-4 text-sm font-display font-bold px-4 py-1">
            Nossa Equipe
          </Badge>
          <h1 className="font-display text-5xl md:text-6xl font-black text-chest-dark mb-6">
            Escolha sua <span className="text-chest-blue">Personalidade</span>
          </h1>
          <p className="text-chest-dark/70 font-body text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            No Chest of Wonders, o atendimento é uma atração à parte! 
            Você pode escolher qual "Dere Type" irá te servir.
          </p>
        </section>

        {/* Aviso de Interação */}
        <div className="container mx-auto px-4 mb-8 flex justify-center animate-bounce">
          <div className="inline-flex items-center gap-2 bg-chest-purple text-white px-6 py-2 rounded-full font-display font-bold shadow-pop-sm border-2 border-chest-dark">
            <MousePointerClick className="w-5 h-5" />
            <span>Clique na carta para ver a reação!</span>
          </div>
        </div>

        {/* Grid de Cartas */}
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PERSONALITIES.map((persona) => (
              <PersonalityCard key={persona.id} data={persona} />
            ))}
          </div>
        </section>

        {/* CTA Footer */}
        <section className="container mx-auto px-4 mt-20 text-center">
          <div className="bg-chest-purple/10 rounded-[3rem] p-12 border-4 border-chest-purple dashed">
            <h2 className="font-display text-3xl font-bold text-chest-dark mb-4">
              Já sabe quem vai chamar?
            </h2>
            <p className="font-body text-lg text-chest-dark/70 mb-8">
              Avise sua preferência na hora do pedido ou deixe a sorte decidir!
            </p>
            <Button size="xl" className="bg-chest-blue hover:bg-chest-blue/90 text-white font-display font-bold text-xl rounded-2xl shadow-pop hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all border-2 border-chest-dark px-10 h-16" asChild>
              <Link to="/contato">
                Reservar Mesa
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// --- Componente de Carta 3D (Flip Card) ---
const PersonalityCard = ({ data }: { data: any }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    // Container Principal (Define o espaço da carta)
    <div 
      className="group h-[380px] w-full cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Container Rotativo (Gira dentro do espaço) */}
      <div 
        className={cn(
          "relative w-full h-full transition-transform duration-700 transform-style-3d shadow-pop rounded-[2.5rem]",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        {/* --- FRENTE (Visível inicialmente) --- */}
        <div className={cn(
          "absolute inset-0 w-full h-full backface-hidden rounded-[2.5rem] border-4 p-8 flex flex-col items-center justify-between overflow-hidden bg-white z-10",
          data.border
        )}>
          {/* Header Frente */}
          <div className="text-center z-10 w-full">
            <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border-2 shadow-sm bg-white", data.border)}>
              <data.icon className={cn("w-8 h-8", data.text)} />
            </div>
            <h3 className={cn("font-display text-3xl font-black mb-4", data.id === 'sadistic' ? 'text-gray-900' : 'text-chest-dark')}>
              {data.name}
            </h3>
          </div>

          {/* Texto Frente */}
          <p className="text-center font-body font-medium text-lg text-gray-600 leading-relaxed z-10">
            {data.description}
          </p>

          {/* Dica visual para virar */}
          <div className="absolute bottom-4 right-4 animate-pulse">
             <MousePointerClick className="w-6 h-6 text-chest-dark/20" />
          </div>

          {/* Background Decorativo Frente */}
          <div className={cn("absolute inset-0 opacity-20 -z-0", data.color)} />
        </div>

        {/* --- VERSO (Escondido inicialmente, aparece ao girar) --- */}
        <div className={cn(
          "absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-[2.5rem] border-4 p-8 flex flex-col items-center justify-center text-center overflow-hidden bg-white",
          data.border
        )}>
          {/* Icone decorativo fundo */}
          <data.icon className={cn("absolute w-64 h-64 opacity-10 rotate-12 -bottom-10 -right-10", data.text)} />
          
          <div className="relative z-10">
            <span className={cn("absolute -top-8 -left-4 text-8xl font-display opacity-20 select-none", data.text)}>"</span>
            <p className={cn("font-display text-2xl font-bold italic leading-relaxed px-2", 
              data.id === 'sadistic' ? 'text-red-600' : 'text-chest-dark'
            )}>
              {data.dialogue}
            </p>
            <span className={cn("absolute -bottom-12 -right-4 text-8xl font-display opacity-20 select-none", data.text)}>"</span>
          </div>

          <div className={cn("absolute top-0 left-0 w-full h-2", data.color.replace('bg-', 'bg-').replace('100', '400'))} />
          <p className="absolute bottom-6 text-xs uppercase font-bold tracking-widest opacity-50">
            Exemplo de Atendimento
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaidsPage;