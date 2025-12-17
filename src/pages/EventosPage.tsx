import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Ticket, ChevronRight } from 'lucide-react';

const EventosPage = () => {
  const upcomingEvents = [
    {
      title: 'Maid Café Day - Edição Especial',
      date: '2024-02-14',
      time: '11:00 - 20:00',
      description: 'Celebre o Dia dos Namorados na Mansão com menu especial, decoração temática e apresentações das Maids.',
      type: 'Evento Especial',
      location: 'Chest of Wonders',
      price: 'Consumação mínima',
      emoji: '💕',
    },
    {
      title: 'Festival do Japão 2024',
      date: '2024-07-12',
      time: '10:00 - 22:00',
      description: 'Venha nos visitar no maior festival de cultura japonesa do Brasil! Estande exclusivo com experiência Maid Café.',
      type: 'Participação Externa',
      location: 'São Paulo Expo',
      price: 'Entrada do evento',
      emoji: '🎌',
    },
    {
      title: 'Halloween na Mansão',
      date: '2024-10-31',
      time: '11:00 - 21:00',
      description: 'Uma noite assustadoramente fofa! Maids fantasiadas, drinks especiais e decoração de arrepiar.',
      type: 'Evento Especial',
      location: 'Chest of Wonders',
      price: 'Consumação mínima',
      emoji: '🎃',
    },
  ];

  const pastEvents = [
    {
      title: 'Anime Friends 2023',
      date: '2023-07',
      description: 'Participação especial no maior evento de anime do Brasil.',
      emoji: '🎮',
    },
    {
      title: 'Natal na Mansão 2023',
      date: '2023-12',
      description: 'Celebração natalina com menu especial e decoração encantadora.',
      emoji: '🎄',
    },
    {
      title: 'Maid Café Day - 9ª Edição',
      date: '2023-09',
      description: 'Nosso evento anual celebrando a cultura Maid Café.',
      emoji: '🎂',
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-dusty-rose-light/20 to-background">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="gold" className="mb-4">Agenda</Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="text-gradient-gold">Eventos</span> e Celebrações
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fique por dentro das datas especiais e participe de momentos únicos na Mansão.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="text-gold" size={28} />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Próximos Eventos
              </h2>
            </div>

            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border hover:border-gold/30 transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Date Box */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-gold flex flex-col items-center justify-center text-primary-foreground">
                        <span className="text-4xl mb-1">{event.emoji}</span>
                        <Badge variant="outline" className="bg-card/20 text-xs border-none">
                          {event.type}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {event.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <Calendar size={16} className="text-primary" />
                          {formatDate(event.date)}
                        </div>
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <Clock size={16} className="text-primary" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <MapPin size={16} className="text-primary" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <Ticket size={16} className="text-gold" />
                          {event.price}
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex-shrink-0">
                      <Button variant="elegant" className="w-full lg:w-auto">
                        Mais Informações
                        <ChevronRight size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendar Notice */}
        <section className="py-12 bg-lace">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-card rounded-2xl p-6 shadow-soft border border-gold/20 text-center">
              <span className="text-3xl mb-3 block">📅</span>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Atenção: Fechamentos Especiais
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Durante alguns eventos externos, o café pode estar fechado para atendimento regular. 
                Sempre confirme nossa disponibilidade antes de visitar.
              </p>
              <Button variant="mansion" size="sm" asChild>
                <a href="/contato">Verificar Disponibilidade</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-gold text-2xl mb-4 block">✨</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Eventos Anteriores
              </h2>
              <p className="text-muted-foreground">
                Relembre os momentos mágicos que já criamos juntos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-5 shadow-soft border border-border text-center"
                >
                  <span className="text-4xl mb-3 block">{event.emoji}</span>
                  <h4 className="font-display font-semibold text-foreground mb-1">
                    {event.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">{event.date}</p>
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <span className="text-3xl mb-4 block">💌</span>
            <h2 className="font-display text-3xl font-bold mb-4">
              Não perca nenhum evento!
            </h2>
            <p className="opacity-80 mb-6 max-w-lg mx-auto">
              Siga-nos no Instagram para ficar por dentro de todas as novidades, 
              eventos especiais e promoções exclusivas.
            </p>
            <Button variant="gold" size="lg" asChild>
              <a 
                href="https://instagram.com/chestofwonders" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Seguir no Instagram
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventosPage;
