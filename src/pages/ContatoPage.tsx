import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Instagram, Calendar, Navigation, AlertCircle, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContatoPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Solicitação enviada!",
      description: "Entraremos em contato em breve para confirmar sua reserva.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      message: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-dusty-rose-light/20 to-background">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="gold" className="mb-4">Visite-nos</Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Sua <span className="text-gradient-pink">Mesa</span> te Espera
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reserve sua visita e venha viver uma experiência única na Mansão.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left: Info */}
              <div>
                {/* Alert */}
                <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 mb-8 flex gap-3">
                  <AlertCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      Reserva obrigatória nos fins de semana e feriados!
                    </p>
                    <p className="text-muted-foreground text-sm">
                      De terça a sexta, aceitamos visitas sem reserva (sujeito à disponibilidade).
                    </p>
                  </div>
                </div>

                {/* Location Card */}
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border mb-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <MapPin className="text-gold" size={22} />
                    Localização
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    <strong className="text-foreground">Rua Galvão Bueno, 580</strong><br />
                    Liberdade, São Paulo - SP<br />
                    CEP: 01506-000
                  </p>
                  <Button variant="elegant" className="w-full" asChild>
                    <a 
                      href="https://maps.google.com/?q=Rua+Galvao+Bueno+580+Liberdade+Sao+Paulo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Navigation size={16} className="mr-2" />
                      Abrir no Google Maps
                    </a>
                  </Button>
                </div>

                {/* Hours Card */}
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border mb-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Clock className="text-gold" size={22} />
                    Horário de Funcionamento
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Segunda-feira</span>
                      <span className="text-destructive font-medium">Fechado</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Terça a Domingo</span>
                      <span className="text-foreground font-medium">11:00 - 18:30</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 italic">
                    * Horários especiais em feriados e eventos. Consulte nossas redes sociais.
                  </p>
                </div>

                {/* Contact Card */}
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Phone className="text-gold" size={22} />
                    Contato Direto
                  </h3>
                  <div className="space-y-3">
                    <a 
                      href="https://instagram.com/chestofwonders"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Instagram size={20} />
                      <span>@chestofwonders</span>
                    </a>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Para reservas urgentes ou grupos grandes, entre em contato pelo Instagram.
                  </p>
                </div>
              </div>

              {/* Right: Form */}
              <div>
                <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border">
                  <div className="flex items-center gap-2 mb-6">
                    <Calendar className="text-gold" size={22} />
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Solicitar Reserva
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          placeholder="seu@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Telefone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Data *
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Horário *
                        </label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        >
                          <option value="">Selecione</option>
                          <option value="11:00">11:00</option>
                          <option value="12:00">12:00</option>
                          <option value="13:00">13:00</option>
                          <option value="14:00">14:00</option>
                          <option value="15:00">15:00</option>
                          <option value="16:00">16:00</option>
                          <option value="17:00">17:00</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Pessoas *
                        </label>
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        >
                          {[1,2,3,4,5,6,7,8].map(n => (
                            <option key={n} value={n}>{n} {n === 1 ? 'pessoa' : 'pessoas'}</option>
                          ))}
                          <option value="9+">9+ pessoas</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Observações
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                        placeholder="Restrições alimentares, ocasião especial, etc."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="mansion" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Enviando...</>
                      ) : (
                        <>
                          <CheckCircle size={18} className="mr-2" />
                          Solicitar Reserva
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Entraremos em contato para confirmar sua reserva em até 24 horas.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-lace">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border">
              <div className="aspect-video w-full bg-muted flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2394879888847!2d-46.63667!3d-23.5594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b0f0f0f0f0%3A0x0!2sRua%20Galv%C3%A3o%20Bueno%2C%20580%20-%20Liberdade%2C%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Chest of Wonders"
                  className="w-full h-full min-h-[400px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
                Dicas para sua Visita
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-4 border border-border">
                  <span className="text-2xl mb-2 block">🚇</span>
                  <h4 className="font-medium text-foreground text-sm mb-1">Como Chegar</h4>
                  <p className="text-xs text-muted-foreground">
                    Estação Japão-Liberdade (Linha Azul). 5 minutos a pé pela Rua Galvão Bueno.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <span className="text-2xl mb-2 block">⏰</span>
                  <h4 className="font-medium text-foreground text-sm mb-1">Melhor Horário</h4>
                  <p className="text-xs text-muted-foreground">
                    Dias de semana são mais tranquilos. Fins de semana lotam rápido!
                  </p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <span className="text-2xl mb-2 block">💳</span>
                  <h4 className="font-medium text-foreground text-sm mb-1">Pagamento</h4>
                  <p className="text-xs text-muted-foreground">
                    Aceitamos cartões de crédito/débito e PIX.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <span className="text-2xl mb-2 block">📸</span>
                  <h4 className="font-medium text-foreground text-sm mb-1">Fotos</h4>
                  <p className="text-xs text-muted-foreground">
                    Fotos do ambiente são permitidas. Maids requerem autorização.
                  </p>
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

export default ContatoPage;
