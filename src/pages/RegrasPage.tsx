import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { ScrollText, Camera, HeartHandshake, Clock, ShieldAlert, Ban, CheckCircle2 } from 'lucide-react';

const RegrasPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 lg:pt-32 pb-20">
        {/* Header */}
        <section className="container mx-auto px-4 text-center mb-16">
          <Badge className="bg-chest-pink text-chest-dark border-2 border-chest-dark shadow-pop-sm mb-4 text-sm font-display font-bold px-4 py-1">
            Manual de Conduta
          </Badge>
          <h1 className="font-display text-5xl md:text-6xl font-black text-chest-dark mb-6">
            Regras da <span className="text-chest-blue">Casa</span>
          </h1>
          <p className="text-chest-dark/70 font-body text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Para manter a magia do Chest of Wonders viva e segura para todos (Mestres e Maids), precisamos seguir algumas diretrizes mágicas!
          </p>
        </section>

        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          
          {/* Seção 1: Interação com a Equipe */}
          <section className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-chest-pink/10 rounded-[2.5rem] p-8 border-4 border-chest-pink shadow-pop">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-chest-pink rounded-2xl flex items-center justify-center text-white border-2 border-chest-dark shadow-sm">
                  <HeartHandshake size={24} />
                </div>
                <h2 className="font-display text-2xl font-bold text-chest-dark">Maids & Butlers</h2>
              </div>
              <ul className="space-y-4 font-body font-medium text-chest-dark/80">
                <li className="flex gap-3">
                  <Ban className="text-red-500 shrink-0 mt-1" />
                  <span><strong>Contato Físico:</strong> Não é permitido tocar na equipe, nem puxar pelo avental ou uniforme.</span>
                </li>
                <li className="flex gap-3">
                  <Ban className="text-red-500 shrink-0 mt-1" />
                  <span><strong>Dados Pessoais:</strong> Não pergunte sobre vida pessoal, redes sociais privadas ou horários de saída.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-1" />
                  <span><strong>Respeito:</strong> Gentileza gera gentileza! Tratamentos rudes não serão tolerados.</span>
                </li>
              </ul>
            </div>

            {/* Seção 2: Fotos e Vídeos */}
            <div className="bg-chest-blue/10 rounded-[2.5rem] p-8 border-4 border-chest-blue shadow-pop">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-chest-blue rounded-2xl flex items-center justify-center text-white border-2 border-chest-dark shadow-sm">
                  <Camera size={24} />
                </div>
                <h2 className="font-display text-2xl font-bold text-chest-dark">Fotos & Vídeos</h2>
              </div>
              <ul className="space-y-4 font-body font-medium text-chest-dark/80">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-1" />
                  <span><strong>Ambiente:</strong> Fotos da decoração e dos pratos são super bem-vindas! Marque a gente!</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-1" />
                  <span><strong>Selfies:</strong> Pode tirar fotos suas e com seus amigos à vontade.</span>
                </li>
                <li className="flex gap-3">
                  <Ban className="text-red-500 shrink-0 mt-1" />
                  <span><strong>Equipe & Clientes:</strong> Proibido filmar ou fotografar maids, butlers e outros clientes sem autorização explícita.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Seção 3: Dinâmica do Atendimento */}
          <section className="bg-white rounded-[2.5rem] p-8 md:p-10 border-4 border-chest-purple shadow-pop relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-chest-purple/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 bg-chest-purple rounded-2xl flex items-center justify-center text-white border-2 border-chest-dark shadow-sm">
                <ScrollText size={24} />
              </div>
              <h2 className="font-display text-2xl font-bold text-chest-dark">Sobre o Atendimento (Roleplay)</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-4 font-body font-medium text-gray-600">
                <p>
                  O atendimento no Chest of Wonders é uma <strong>interpretação interativa</strong>. Você pode escolher a personalidade (Dere Type) de quem vai te servir durante a entrega do pedido.
                </p>
                <div className="bg-yellow-50 p-4 rounded-xl border-2 border-yellow-200 text-yellow-800 text-sm">
                  <strong>✨ Palavra de Segurança:</strong> Se em algum momento você não estiver confortável com a atuação, basta dizer <strong>"TOKYO"</strong> e o atendimento voltará ao normal imediatamente.
                </div>
              </div>
              <ul className="space-y-3 font-body font-medium text-chest-dark/80">
                <li className="flex gap-2">
                  <Ban className="text-red-400 w-5 h-5 shrink-0" /> Não é permitido escolher um funcionário específico (apenas o tipo).
                </li>
                <li className="flex gap-2">
                  <Ban className="text-red-400 w-5 h-5 shrink-0" /> Não force interações desconfortáveis.
                </li>
                <li className="flex gap-2">
                  <Ban className="text-red-400 w-5 h-5 shrink-0" /> Não escolha o atendimento para outra pessoa da mesa sem o consentimento dela.
                </li>
              </ul>
            </div>
          </section>

          {/* Seção 4: Valores e Permanência */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-gray-50 rounded-[2.5rem] p-8 border-4 border-gray-200">
              <div className="flex items-center gap-3 mb-4 text-chest-dark">
                <ShieldAlert className="text-red-500" />
                <h3 className="font-display text-xl font-bold">Tolerrância Zero</h3>
              </div>
              <p className="font-body text-gray-600 mb-4">
                Não toleramos qualquer tipo de preconceito, assédio ou discriminação (Racismo, LGBTfobia, Xenofobia, Capacitismo, etc).
              </p>
              <p className="font-body text-sm font-bold text-red-500">
                Violações resultarão na remoção imediata do estabelecimento.
              </p>
            </div>

            <div className="bg-chest-blue/5 rounded-[2.5rem] p-8 border-4 border-chest-blue/30">
              <div className="flex items-center gap-3 mb-4 text-chest-dark">
                <Clock className="text-chest-blue" />
                <h3 className="font-display text-xl font-bold">Permanência</h3>
              </div>
              <ul className="space-y-2 font-body text-sm font-medium text-gray-600">
                <li>• Com Reserva: <strong>1h30</strong></li>
                <li>• Sem Reserva: <strong>45min a 1h</strong></li>
              </ul>
              <p className="text-xs text-gray-400 mt-4">
                *É possível estender se não houver fila de espera.
              </p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegrasPage;