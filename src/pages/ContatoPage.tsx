import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Instagram, Send, Mail, CalendarCheck, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

// ... (Mantenha os ícones SVG do Discord/TikTok/X que você já tinha)
// Vou omiti-los aqui para brevidade, mas devem ser mantidos no arquivo final.
const DiscordIcon = ({ className }: { className?: string }) => (<svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 13.48 13.48 0 0 0-.59 1.227 18.3 18.3 0 0 0-7.163 0 13.48 13.48 0 0 0-.59-1.227.074.074 0 0 0-.079-.037A19.736 19.736 0 0 0 2.063 4.37c-.01 0-.019.01-.027.02C.1 7.35.35 10.286 1.135 13.138a.08.08 0 0 0 .034.053 19.898 19.898 0 0 0 5.996 3.027.077.077 0 0 0 .084-.027 14.16 14.16 0 0 0 1.225-1.993.076.076 0 0 0-.041-.106 9.13 9.13 0 0 1-2.906-1.393.076.076 0 0 1 .015-.127c.23-.173.456-.356.67-.547a.077.077 0 0 1 .082-.012 13.018 13.018 0 0 0 10.748 0 .077.077 0 0 1 .082.012c.214.191.44.374.67.547a.076.076 0 0 1 .015.127 9.08 9.08 0 0 1-2.906 1.393.076.076 0 0 0-.041.106 14.16 14.16 0 0 0 1.225 1.993.076.076 0 0 0 .084.027 19.91 19.91 0 0 0 6.002-3.027.077.077 0 0 0 .033-.052c.767-2.825 1.01-5.733-.896-8.723a.075.075 0 0 0-.026-.02z"/></svg>);
const TikTokIcon = ({ className }: { className?: string }) => (<svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>);
const XIcon = ({ className }: { className?: string }) => (<svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>);

const ContatoPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleReserva = () => {
    window.open("https://dguests.com/reserva_mesa/chestmaids", "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Nossas Maids responderão assim que possível.",
      className: "bg-chest-pink text-chest-dark border-2 border-chest-dark shadow-pop",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16 container mx-auto px-4">
        
        {/* Banner de Contato */}
        <div className="text-center mb-12">
          <Badge className="bg-chest-purple text-white mb-2 font-display text-sm px-4 py-1 rounded-full">Fale Conosco</Badge>
          <h1 className="font-display text-5xl font-black text-chest-dark">
            Entre em <span className="text-chest-pink">Contato</span>
          </h1>
        </div>

        {/* Card Reserva */}
        <div className="bg-gradient-pop rounded-3xl p-8 mb-12 shadow-pop flex flex-col md:flex-row items-center justify-between text-chest-dark border-4 border-white">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <div className="bg-white p-4 rounded-full shadow-sm text-chest-purple">
              <CalendarCheck size={32} />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold">Quer reservar sua mesa?</h3>
              <p className="font-body font-medium opacity-80">Garanta seu lugar na mansão pelo sistema oficial.</p>
            </div>
          </div>
          <Button onClick={handleReserva} size="xl" className="bg-white text-chest-purple border-2 border-chest-purple hover:bg-chest-purple hover:text-white rounded-2xl shadow-pop-sm font-display font-bold">
            Ir para Reservas
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info + Social */}
          <div className="space-y-6">
            {/* Card Local */}
            <div className="bg-white border-2 border-chest-blue/30 p-6 rounded-3xl shadow-sm">
              <h3 className="font-display text-xl font-bold text-chest-dark mb-4 flex items-center gap-2">
                <MapPin className="text-chest-blue" /> Onde estamos
              </h3>
              <p className="font-body text-gray-600 font-medium">Rua Galvão Bueno, 580 <br/> Liberdade, São Paulo - SP</p>
            </div>

            {/* Card Horário */}
            <div className="bg-white border-2 border-chest-pink/30 p-6 rounded-3xl shadow-sm">
              <h3 className="font-display text-xl font-bold text-chest-dark mb-4 flex items-center gap-2">
                <Clock className="text-chest-pink" /> Horário
              </h3>
              <div className="font-body text-gray-600 font-medium space-y-2">
                <p className="flex justify-between"><span>Terça a Domingo</span> <span className="font-bold text-chest-dark">11:00 - 18:30</span></p>
                <p className="flex justify-between text-red-500 font-bold"><span>Segunda-feira</span> <span>FECHADO</span></p>
              </div>
            </div>

            {/* Redes */}
            <div className="bg-white border-2 border-chest-purple/30 p-6 rounded-3xl shadow-sm">
              <h3 className="font-display text-xl font-bold text-chest-dark mb-4">Redes Sociais</h3>
              <div className="grid grid-cols-2 gap-3">
                <SocialButton href="https://instagram.com/chestmaids" icon={<Instagram />} label="Instagram" color="bg-chest-pink" />
                <SocialButton href="https://tiktok.com/@chestmaids" icon={<TikTokIcon />} label="TikTok" color="bg-black" />
                <SocialButton href="https://x.com/chestmaids" icon={<XIcon />} label="Twitter" color="bg-chest-dark" />
                <SocialButton href="https://discord.com" icon={<DiscordIcon />} label="Discord" color="bg-[#5865F2]" />
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border-2 border-chest-dark rounded-3xl p-8 shadow-pop relative">
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-chest-purple rounded-full blur-2xl -z-10" />
            
            <h3 className="font-display text-2xl font-bold text-chest-dark mb-6 flex items-center gap-2">
              <Mail className="text-chest-purple" /> Envie uma Mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="font-display font-bold text-chest-dark ml-1">Nome</label>
                <input 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full p-3 rounded-xl border-2 border-chest-purple/20 focus:border-chest-purple focus:ring-4 focus:ring-chest-purple/10 outline-none transition-all font-body font-medium bg-gray-50" 
                  placeholder="Seu nome..." 
                  required 
                />
              </div>
              <div className="space-y-2">
                <label className="font-display font-bold text-chest-dark ml-1">E-mail</label>
                <input 
                  name="email" 
                  type="email"
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full p-3 rounded-xl border-2 border-chest-purple/20 focus:border-chest-purple focus:ring-4 focus:ring-chest-purple/10 outline-none transition-all font-body font-medium bg-gray-50" 
                  placeholder="seu@email.com" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <label className="font-display font-bold text-chest-dark ml-1">Assunto</label>
                <input 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  className="w-full p-3 rounded-xl border-2 border-chest-purple/20 focus:border-chest-purple focus:ring-4 focus:ring-chest-purple/10 outline-none transition-all font-body font-medium bg-gray-50" 
                  placeholder="Sobre o que quer falar?" 
                />
              </div>
              <div className="space-y-2">
                <label className="font-display font-bold text-chest-dark ml-1">Mensagem</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows={4}
                  className="w-full p-3 rounded-xl border-2 border-chest-purple/20 focus:border-chest-purple focus:ring-4 focus:ring-chest-purple/10 outline-none transition-all font-body font-medium bg-gray-50 resize-none" 
                  placeholder="Escreva sua mensagem com carinho..." 
                  required 
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-chest-pink hover:bg-chest-pink/90 text-chest-dark font-display font-bold text-lg rounded-xl shadow-pop-sm hover:translate-y-[-2px] hover:shadow-pop transition-all border-2 border-chest-dark" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Mensagem 💖"}
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const SocialButton = ({ href, icon, label, color }: any) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={cn("flex items-center gap-2 p-3 rounded-xl text-white font-bold text-sm shadow-sm hover:scale-105 transition-transform", color)}>
    <div className="w-5 h-5">{icon}</div> {label}
  </a>
)

export default ContatoPage;