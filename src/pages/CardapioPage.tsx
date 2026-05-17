import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Leaf, Wheat, Milk, Wine, Sparkles, AlertCircle, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

type FilterType = 'all' | 'vegan' | 'glutenFree' | 'lactoseFree' | 'alcoholic' | 'draw';
type CategoryType = 'all' | 'frapes' | 'quentes' | 'iced' | 'refrescantes' | 'drinks' | 'salgados' | 'doces';

const CardapioPage = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const menuItems = [
    // --- FRAPÊS MÁGICOS ---
    { name: 'Frapcórnio', price: 'R$ 25,00', description: 'Frutas vermelhas. Decorado com chantilly, calda colorida e confeitos.', category: 'frapes', tags: [], emoji: '🦄' },
    { name: 'Mer-Maid', price: 'R$ 25,00', description: 'Maçã verde. Decorado com chantilly, calda colorida e confeitos.', category: 'frapes', tags: [], emoji: '🧜‍♀️' },
    { name: 'Estelar', price: 'R$ 25,00', description: 'Blueberry. Decorado com chantilly, calda colorida e confeitos.', category: 'frapes', tags: [], emoji: '✨' },
    { name: 'Akai Ito', price: 'R$ 25,00', description: 'Morango e canela. Decorado com chantilly, calda colorida e confeitos.', category: 'frapes', tags: [], emoji: '🧶' },
    { name: 'Dog Caramelo', price: 'R$ 25,00', description: 'Caramelo e café. Decorado com chantilly, calda colorida e confeitos.', category: 'frapes', tags: [], emoji: '🐶' },

    // --- FRAPÊS CLÁSSICOS ---
    { name: 'Dere Dere Choco', price: 'R$ 23,00', description: 'Cacau em pó e café. Decorado com chantilly e calda.', category: 'frapes', tags: [], emoji: '🍫' },
    { name: 'OujiMaltine', price: 'R$ 23,00', description: 'Ovomaltine e café. Decorado com chantilly e calda.', category: 'frapes', tags: [], emoji: '🥛' },
    { name: 'Pistache', price: 'R$ 23,00', description: 'Pistache e café. Novidade!', category: 'frapes', tags: [], emoji: '💚' },
    { name: 'Moe Moe Nutty', price: 'R$ 23,00', description: 'Nutella e café. Decorado com chantilly e calda.', category: 'frapes', tags: [], emoji: '🌰' },
    { name: 'Tsun Tsun Matcha', price: 'R$ 23,00', description: 'Matcha (chá verde) e açúcar, sem calda.', category: 'frapes', tags: [], emoji: '🍵' },

    // --- ICED LATTES ---
    { name: 'Iced Latte Clássico', price: 'R$ 13,00', description: 'Leite, gelo e café (sem açúcar). Chantilly opcional (+R$2).', category: 'iced', tags: ['lactoseFree'], emoji: '🧊' },
    { name: 'Iced Latte Caramelo', price: 'R$ 18,00', description: 'Com xarope de caramelo e chantilly incluso.', category: 'iced', tags: [], emoji: '🍮' },
    { name: 'Iced Latte Baunilha', price: 'R$ 16,00', description: 'Com xarope de baunilha (sem chantilly).', category: 'iced', tags: [], emoji: '🍦' },
    { name: 'Iced Latte Pistache', price: 'R$ 16,00', description: 'Com xarope de pistache (sem chantilly).', category: 'iced', tags: [], emoji: '💚' },
    { name: 'Iced Latte Red Velvet', price: 'R$ 16,00', description: 'Com xarope de red velvet (sem chantilly).', category: 'iced', tags: [], emoji: '🍰' },
    { name: 'Iced Latte Matcha', price: 'R$ 16,00', description: 'Com matcha (sem chantilly).', category: 'iced', tags: [], emoji: '🍵' },
    { name: 'Iced Cappuccino', price: 'R$ 25,00', description: '300ml. Espresso, leite, cacau, canela e açúcar mascavo batidos com gelo.', category: 'iced', tags: [], emoji: '🥤' },

    // --- BEBIDAS QUENTES ---
    { name: 'Espresso Simples', price: 'R$ 8,00', description: 'Café espresso tradicional.', category: 'quentes', tags: ['vegan'], emoji: '☕' },
    { name: 'Espresso Carioca', price: 'R$ 8,00', description: 'Café espresso mais suave (adicionado água quente).', category: 'quentes', tags: ['vegan'], emoji: '☕' },
    { name: 'Espresso Duplo', price: 'R$ 12,00', description: 'Dose dupla de café espresso.', category: 'quentes', tags: ['vegan'], emoji: '☕' },
    { name: 'Coadinho Baobá', price: 'R$ 12,00', description: '150ml. Café especial Baobá moído na hora.', category: 'quentes', tags: ['vegan'], emoji: '🫗' },
    { name: 'Machigato', price: 'R$ 9,00', description: '70ml. Espresso com espuma de leite vaporizado (Macchiato).', category: 'quentes', tags: [], emoji: '☁️' },
    { name: 'Nyaccino Tradicional', price: 'R$ 12,00', description: '150ml. Cappuccino com desenho! Espresso e leite vaporizado.', category: 'quentes', tags: ['draw'], emoji: '🐱' },
    { name: 'Nyaccino Caramelo', price: 'R$ 15,00', description: '150ml. Variação com caramelo.', category: 'quentes', tags: ['draw'], emoji: '🍮' },
    { name: 'Nyaccino Nutella', price: 'R$ 16,00', description: '150ml. Variação com Nutella.', category: 'quentes', tags: ['draw'], emoji: '🌰' },
    { name: 'Nyaccino Pistache', price: 'R$ 16,00', description: '150ml. Variação com pistache.', category: 'quentes', tags: ['draw'], emoji: '💚' },
    { name: 'Chocolate Quente', price: 'R$ 13,00', description: '150ml. Tradicional.', category: 'quentes', tags: [], emoji: '🍫' },
    { name: 'Choco Europeu', price: 'R$ 16,00', description: '150ml. Chocolate quente cremoso e denso.', category: 'quentes', tags: [], emoji: '🍫' },
    { name: 'Matcha Latte', price: 'R$ 14,00', description: '150ml. Chá verde japonês vaporizado com leite e açúcar.', category: 'quentes', tags: [], emoji: '🍵' },
    { name: 'Mocha Rosa', price: 'R$ 19,00', description: '280ml. Espresso, leite vaporizado, ganache e xarope.', category: 'quentes', tags: [], emoji: '🌸' },
    { name: 'Mocha Pistache', price: 'R$ 19,00', description: '280ml. Espresso, leite, ganache e xarope de pistache.', category: 'quentes', tags: [], emoji: '💚' },
    { name: 'Chás Quentes', price: 'R$ 9,00', description: '150ml. Earl Grey, Chá Verde, Jasmin, Camomila, Frutas Silvestres ou Mugicha.', category: 'quentes', tags: ['vegan'], emoji: '🫖' },

    // --- BEBIDAS REFRESCANTES ---
    { name: 'Água (500ml)', price: 'R$ 5,00', description: 'Com ou sem gás.', category: 'refrescantes', tags: ['vegan'], emoji: '💧' },
    { name: 'Sucos Naturais', price: 'R$ 16,00', description: '300ml. Abacaxi, Morango, Goiaba ou Limonada Rosa.', category: 'refrescantes', tags: ['vegan'], emoji: '🥤' },
    { name: 'Soda Italiana', price: 'R$ 14,00', description: 'Monte sua bebida: Escolha até 3 sabores (Maçã Verde, Cereja, Blueberry, etc).', category: 'refrescantes', tags: ['vegan'], emoji: '🍹' },
    { name: 'Chá Mate / Matcha Gelado', price: 'R$ 12,00', description: 'Monte sua bebida com sabores de frutas.', category: 'refrescantes', tags: ['vegan'], emoji: '🍃' },
    { name: 'Mugicha Gelado', price: 'R$ 12,00', description: 'Chá de cevada japonês gelado.', category: 'refrescantes', tags: ['vegan'], emoji: '🌾' },
    { name: 'Chá de Jasmin Gelado', price: 'R$ 12,00', description: 'Chá floral refrescante.', category: 'refrescantes', tags: ['vegan'], emoji: '🌼' },

    // --- DRINKS ---
    { name: 'Sake de Gato', price: 'R$ 10,00', description: '50ml. Café espresso com dose de sakê e essência de baunilha.', category: 'drinks', tags: ['alcoholic'], emoji: '🍶' },
    { name: 'Irish Coffee', price: 'R$ 32,00', description: '85ml. Café, Whisky Jameson e xarope de caramelo vaporizados.', category: 'drinks', tags: ['alcoholic'], emoji: '🥃' },
    { name: 'Bloody Moon', price: 'R$ 32,00', description: 'Chocolate quente, Whisky Jameson e xarope de frutas vermelhas.', category: 'drinks', tags: ['alcoholic'], emoji: '🌙' },
    { name: 'Guardinyan das Galáxias', price: 'R$ 22,00', description: '150ml. Raspadinha de sakê, xaropes e glitter comestível.', category: 'drinks', tags: ['alcoholic'], emoji: '✨' },
    { name: 'Rawrr Red Lemonade', price: 'R$ 26,00', description: '320ml. Limonada, sakê 75ml, framboesa e morango. Gelo de patinha!', category: 'drinks', tags: ['alcoholic'], emoji: '🦖' },
    { name: 'Megumin C4', price: 'R$ 26,00', description: 'Licor de Cacau, café, chocolate, caramelo e cristais de sal.', category: 'drinks', tags: ['alcoholic'], emoji: '💥' },
    { name: 'Glass of Wonders', price: 'R$ 32,00', description: 'Frozen marguerita, blueberry, framboesa e tequila José Cuervo.', category: 'drinks', tags: ['alcoholic'], emoji: '🍸' },
    { name: 'All Blue', price: 'R$ 32,00', description: 'Limonada, Licor Curaçau Blue, blueberry, hortelã e maçã verde.', category: 'drinks', tags: ['alcoholic'], emoji: '🌊' },

    // --- SALGADOS ---
    { name: 'Harusamaid', price: 'R$ 25,00', description: 'Salada de macarrão de arroz (Harusame) que muda de cor com magia!', category: 'salgados', tags: ['vegan', 'glutenFree', 'draw'], emoji: '🥗' },
    { name: 'Quiche Shimeji', price: 'R$ 20,00', description: 'Cogumelo shimeji, creme de leite, queijo prato e parmesão.', category: 'salgados', tags: [], emoji: '🍄' },
    { name: 'Quiche Caprese', price: 'R$ 20,00', description: 'Mussarela de búfala, tomate cereja e manjericão.', category: 'salgados', tags: [], emoji: '🍅' },
    { name: 'Torta de Frango', price: 'R$ 22,00', description: 'Frango desfiado com Catupiry original.', category: 'salgados', tags: [], emoji: '🥧' },
    { name: 'Torta de Pernil', price: 'R$ 22,00', description: 'Pernil desfiado com champignon, alho, cebola e vinho tinto.', category: 'salgados', tags: [], emoji: '🍖' },
    { name: 'Torta de Palmito', price: 'R$ 20,00', description: 'Pedaços de palmito picado, cebola e alho.', category: 'salgados', tags: ['vegan'], emoji: '🌴' },
    { name: 'Tamago Sando', price: 'R$ 26,00', description: 'Sanduíche japonês de ovo no pão Shokupan.', category: 'salgados', tags: [], emoji: '🥪' },
    { name: 'Pernil Sando', price: 'R$ 28,00', description: 'Sanduíche de pernil desfiado, shissô e tomate no pão Shokupan.', category: 'salgados', tags: [], emoji: '🥪' },
    { name: 'Onigiri', price: 'R$ 12,00', description: 'Bolinho de arroz (Bacon, Atum ou Shissô). Combo: 3 por R$ 30,00.', category: 'salgados', tags: [], emoji: '🍙' },

    // --- DOCES ---
    { name: 'Bolo Red Velvet', price: 'R$ 22,00', description: 'Com recheio e cobertura de buttercream.', category: 'doces', tags: [], emoji: '🍰' },
    { name: 'Bolo de Chocolate', price: 'R$ 18,00', description: 'Coberto com ganache.', category: 'doces', tags: [], emoji: '🍫' },
    { name: 'Bolo Iogurte', price: 'R$ 12,00', description: 'Bolo fofinho tipo cheesecake japonês. Servido com chantilly.', category: 'doces', tags: [], emoji: '🍰' },
    { name: 'Bolo de Cenoura', price: 'R$ 12,00', description: 'Com cobertura de chocolate. Sugestão do Haru!', category: 'doces', tags: [], emoji: '🥕' },
    { name: 'Panna Cotta Gatinho', price: 'R$ 26,00', description: 'Formato de gatinho com calda de morango.', category: 'doces', tags: ['glutenFree', 'draw'], emoji: '🐱' },
    { name: 'Torta Banoffee', price: 'R$ 18,00', description: 'Banana, doce de leite, chantilly e canela. Massa sem glúten.', category: 'doces', tags: ['glutenFree'], emoji: '🍌' },
    { name: 'Torta Pistache', price: 'R$ 18,00', description: 'Torta de chocolate com mix de castanhas e pistache.', category: 'doces', tags: ['vegan', 'glutenFree'], emoji: '💚' },
    { name: 'Torta Avelã', price: 'R$ 17,00', description: 'Massa de biscoito e mousse de chocolate meio amargo com avelãs.', category: 'doces', tags: [], emoji: '🌰' },
    { name: 'Torta Cheesecake', price: 'R$ 17,00', description: 'Mousse de queijo minas frescal com geleia de frutas vermelhas.', category: 'doces', tags: [], emoji: '🍓' },
    { name: 'Sakura Mochi', price: 'R$ 12,00', description: 'Massa de arroz e doce de feijão branco.', category: 'doces', tags: ['vegan', 'glutenFree'], emoji: '🍡' },
    { name: 'Brownie', price: 'R$ 20,00', description: 'Chocolate meio amargo com toque de café.', category: 'doces', tags: [], emoji: '🏾' },
    { name: 'Cookie', price: 'R$ 13,00', description: 'Baunilha com pedaços de chocolate.', category: 'doces', tags: [], emoji: '🍪' },
  ];

  const categories = [
    { id: 'all', label: 'Tudo', emoji: '📜' },
    { id: 'frapes', label: 'Frapês', emoji: '🦄' },
    { id: 'iced', label: 'Gelados', emoji: '🧊' },
    { id: 'quentes', label: 'Cafés', emoji: '☕' },
    { id: 'refrescantes', label: 'Refrescante', emoji: '🍹' },
    { id: 'drinks', label: '+18', emoji: '🍷' },
    { id: 'salgados', label: 'Salgados', emoji: '🥪' },
    { id: 'doces', label: 'Doces', emoji: '🍰' },
  ];

  const filters = [
    { id: 'all', label: 'Todos', icon: null },
    { id: 'vegan', label: 'Vegano', icon: <Leaf size={14} /> },
    { id: 'glutenFree', label: 'Sem Glúten', icon: <Wheat size={14} /> },
    { id: 'lactoseFree', label: 'Sem Lactose', icon: <Milk size={14} /> },
    { id: 'alcoholic', label: '+18', icon: <Wine size={14} /> },
    { id: 'draw', label: 'Com Desenho', icon: <Sparkles size={14} /> },
  ];

  const filteredItems = menuItems.filter(item => {
    const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
    const filterMatch = activeFilter === 'all' || item.tags.includes(activeFilter);
    return categoryMatch && filterMatch;
  });

  const getBadgeVariant = (tag: string) => {
    switch (tag) {
      case 'vegan': return 'bg-green-100 text-green-700 border-green-200'; 
      case 'glutenFree': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'lactoseFree': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'alcoholic': return 'bg-red-100 text-red-700 border-red-200';
      case 'draw': return 'bg-chest-purple/20 text-chest-purple border-chest-purple/30';
      default: return 'bg-gray-100';
    }
  };

  const getTagLabel = (tag: string) => {
    switch (tag) {
      case 'vegan': return 'Vegano';
      case 'glutenFree': return 'Sem Glúten';
      case 'lactoseFree': return 'Zero Lactose';
      case 'alcoholic': return '+18';
      case 'draw': return 'Desenho na Mesa';
      default: return tag;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 lg:pt-32 pb-20">
        {/* Header da Página */}
        <section className="container mx-auto px-4 text-center mb-12">
          <Badge className="bg-chest-blue text-white border-2 border-chest-dark shadow-pop-sm mb-4 text-sm font-display font-bold">
            Cardápio Oficial
          </Badge>
          <h1 className="font-display text-5xl font-black text-chest-dark mb-4">
            Menu <span className="text-chest-pink">Mágico</span>
          </h1>
          <p className="text-chest-dark/70 font-body text-lg max-w-xl mx-auto mb-8 font-medium">
            Nossas maids e butlers preparam tudo com feitiços de sabor! 
            <br/><span className="text-sm opacity-60">*Taxa de serviço de 13% opcional não inclusa.</span>
          </p>

          <div className="flex justify-center">
            <Button 
              size="lg"
              className="bg-chest-dark text-white font-display font-bold text-lg border-2 border-chest-dark rounded-2xl hover:bg-chest-dark/90 animate-soft-glow"
              asChild
            >
              <a href="/Menu.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8">
                <BookOpen className="h-6 w-6" />
                <span>Ver Cardápio Ilustrado (PDF)</span>
              </a>
            </Button>
          </div>
        </section>

        {/* Filtros Sticky Pop */}
        <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-y-2 border-chest-purple/20 py-4 mb-12">
          <div className="container mx-auto px-4 space-y-4">
            {/* Categorias */}
            <div className="flex overflow-x-auto py-2 gap-3 md:justify-center no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as CategoryType)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2 rounded-2xl font-display font-bold whitespace-nowrap transition-all duration-200 border-2",
                    activeCategory === cat.id
                      ? "bg-chest-pink text-chest-dark border-chest-dark shadow-pop-sm -translate-y-1"
                      : "bg-white text-chest-dark/60 border-chest-purple/30 hover:border-chest-pink hover:text-chest-pink"
                  )}
                >
                  <span className="text-lg">{cat.emoji}</span>
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id as FilterType)}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold font-display transition-all border-2",
                    activeFilter === filter.id
                      ? "bg-chest-blue text-white border-chest-dark shadow-pop-sm"
                      : "bg-gray-50 text-gray-500 border-gray-200 hover:border-chest-blue hover:text-chest-blue"
                  )}
                >
                  {filter.icon}
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid de Itens */}
        <section className="container mx-auto px-4 min-h-[50vh]">
          {activeCategory === 'drinks' && (
            <div className="mb-8 p-4 bg-red-50 border-2 border-red-200 rounded-2xl flex items-center justify-center gap-3 text-red-600 font-display font-bold shadow-pop-sm">
              <AlertCircle size={24} />
              <p>Bebidas alcoólicas proibidas para menores de 18 anos.</p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-6 border-2 border-chest-purple/20 hover:border-chest-pink hover:shadow-pop transition-all duration-300 relative overflow-hidden"
              >
                {/* Header do Card */}
                <div className="flex justify-between items-start mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-pop flex items-center justify-center text-3xl shadow-inner">
                    {item.emoji}
                  </div>
                  <span className="font-display font-bold text-lg text-chest-dark bg-chest-blue/20 px-3 py-1 rounded-xl border border-chest-blue/30">
                    {item.price}
                  </span>
                </div>
                
                {/* Info */}
                <h3 className="font-display font-bold text-xl text-chest-dark mb-2 group-hover:text-chest-pink transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-500 font-body font-medium text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map((tag, i) => (
                    <span key={i} className={cn("text-[10px] px-2 py-1 rounded-lg border font-bold uppercase", getBadgeVariant(tag))}>
                      {getTagLabel(tag)}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4 grayscale opacity-30">🧁</div>
              <h3 className="font-display text-2xl font-bold text-chest-dark">Ops! Nada por aqui.</h3>
              <p className="font-body text-gray-500">Tente mudar os filtros!</p>
              <Button variant="link" onClick={() => {setActiveCategory('all'); setActiveFilter('all');}} className="text-chest-pink font-bold mt-4">
                Limpar Filtros
              </Button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CardapioPage;