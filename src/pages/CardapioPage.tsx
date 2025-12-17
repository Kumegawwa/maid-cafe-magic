import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Leaf, Wheat, Milk, Wine } from 'lucide-react';

type FilterType = 'all' | 'vegan' | 'glutenFree' | 'lactoseFree' | 'alcoholic';
type CategoryType = 'all' | 'frapes' | 'quentes' | 'drinks' | 'refeicoes' | 'sobremesas' | 'lanches';

const CardapioPage = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const menuItems = [
    // Frapês
    { name: 'Dere Dere Choco', price: 'R$ 23,00', description: 'Leite, cacau, café, gelo, chantilly, calda de chocolate', category: 'frapes', tags: ['vegan', 'lactoseFree'], emoji: '🍫' },
    { name: 'OujiMaltine', price: 'R$ 23,00', description: 'Leite, Ovomaltine, café, gelo, chantilly', category: 'frapes', tags: ['vegan', 'lactoseFree'], emoji: '🥛' },
    { name: 'Moe Moe Nutty', price: 'R$ 23,00', description: 'Leite, Nutella, café, gelo, chantilly', category: 'frapes', tags: [], emoji: '🌰' },
    { name: 'Tsun Tsun Matcha', price: 'R$ 23,00', description: 'Matcha premium, açúcar, leite, gelo', category: 'frapes', tags: ['vegan', 'lactoseFree'], emoji: '🍵' },
    { name: 'Pistache', price: 'R$ 23,00', description: 'Xarope de pistache, leite, café, gelo', category: 'frapes', tags: ['vegan', 'lactoseFree'], emoji: '💚' },
    { name: 'Frapcórnio', price: 'R$ 22,00', description: 'Temática unicórnio com xarope de frutas vermelhas', category: 'frapes', tags: [], emoji: '🦄' },
    { name: 'Spooky Witch Frap', price: 'R$ 25,00', description: 'Edição especial de Halloween', category: 'frapes', tags: [], emoji: '🧙‍♀️' },
    
    // Bebidas Quentes
    { name: 'Machigato', price: 'R$ 8,00', description: 'Espresso com espuma de leite', category: 'quentes', tags: [], emoji: '☕' },
    { name: 'Nyaccino', price: 'R$ 14,00', description: 'Café com leite vaporizado e Latte Art', category: 'quentes', tags: [], emoji: '🐱' },
    { name: 'Nyaccino Caramelo', price: 'R$ 17,00', description: 'Café com leite e calda de caramelo', category: 'quentes', tags: [], emoji: '🍮' },
    { name: 'Mocha Rosa', price: 'R$ 17,00', description: 'Ganache de chocolate, leite, espresso', category: 'quentes', tags: [], emoji: '🌸' },
    
    // Drinks +18
    { name: 'Sake de Gato', price: 'R$ 15,00', description: 'Espresso com Sakê e baunilha', category: 'drinks', tags: ['alcoholic'], emoji: '🍶' },
    { name: 'Irish Coffee', price: 'R$ 32,00', description: 'Whisky Jameson e café', category: 'drinks', tags: ['alcoholic'], emoji: '🥃' },
    { name: 'Guardinyan das Galáxias', price: 'R$ 22,00', description: 'Raspadinha de Sakê com glitter comestível', category: 'drinks', tags: ['alcoholic'], emoji: '✨' },
    { name: 'Glass of Wonders', price: 'R$ 32,00', description: 'Raspadinha com Tequila nas cores da casa', category: 'drinks', tags: ['alcoholic'], emoji: '🗝️' },
    
    // Refeições
    { name: 'Bentô Japonês', price: 'R$ 29,90', description: 'Proteína do dia com arroz e acompanhamentos', category: 'refeicoes', tags: [], emoji: '🍱' },
    { name: 'Bibimbap', price: 'R$ 24,90', description: 'Prato coreano com carne, legumes e ovo', category: 'refeicoes', tags: [], emoji: '🥗' },
    { name: 'Chikin Katsu com Curry', price: 'R$ 31,90', description: 'Frango empanado crocante com curry japonês', category: 'refeicoes', tags: [], emoji: '🍛' },
    { name: 'Yakisoba Lucky Liberdade', price: 'R$ 26,90', description: 'Macarrão salteado com legumes e proteína', category: 'refeicoes', tags: [], emoji: '🍜' },
    { name: 'Frango Crispy', price: 'R$ 29,90', description: 'Frango empanado com Yakimeshi', category: 'refeicoes', tags: [], emoji: '🍗' },
    
    // Lanches
    { name: 'Combo Cósmico', price: 'R$ 36,90', description: 'Sanduíche + Batata + Refrigerante', category: 'lanches', tags: [], emoji: '🌟' },
    { name: 'Burajiru Cha', price: 'R$ 28,90', description: 'Sanduíche de Frango Crispy com bebida', category: 'lanches', tags: [], emoji: '🥪' },
    { name: 'Trio de Baozi', price: 'R$ 19,90', description: 'Pãozinho asiático de carne suína ou bovina', category: 'lanches', tags: [], emoji: '🥟' },
    { name: 'Croissant Pepperoni', price: 'R$ 25,90', description: 'Croissant com pepperoni e cream cheese', category: 'lanches', tags: [], emoji: '🥐' },
    { name: 'Empada Caprese', price: 'R$ 15,00', description: 'Tomate, mussarela e manjericão', category: 'lanches', tags: ['vegan'], emoji: '🥧' },
    { name: 'Quiche de Shimeji', price: 'R$ 15,00', description: 'Cogumelos shimeji e queijo', category: 'lanches', tags: [], emoji: '🍄' },
    
    // Sobremesas
    { name: 'Torta Ninho/Nutella', price: 'R$ 19,90', description: 'Fatia de torta cremosa', category: 'sobremesas', tags: [], emoji: '🍰' },
    { name: 'Torta Red Velvet', price: 'R$ 19,90', description: 'Clássica torta vermelha com cream cheese', category: 'sobremesas', tags: [], emoji: '❤️' },
    { name: 'Torta Banoffee Vegana', price: 'R$ 19,90', description: 'Banana e doce de leite vegano', category: 'sobremesas', tags: ['vegan'], emoji: '🍌' },
    { name: 'Torta de Limão Vegana', price: 'R$ 19,90', description: 'Refrescante e sem ingredientes animais', category: 'sobremesas', tags: ['vegan'], emoji: '🍋' },
    { name: 'Torta Chocomix Vegana', price: 'R$ 19,90', description: 'Chocolate intenso sem lactose', category: 'sobremesas', tags: ['vegan', 'lactoseFree'], emoji: '🍫' },
    { name: 'Cupcake Frutas Vermelhas', price: 'R$ 13,90', description: 'Decorado com frutas da estação', category: 'sobremesas', tags: [], emoji: '🧁' },
    { name: 'Cupcake Matcha', price: 'R$ 13,90', description: 'Sabor chá verde delicado', category: 'sobremesas', tags: [], emoji: '🧁' },
    { name: 'Cookie', price: 'R$ 8,90', description: 'Chocolate, Matcha ou Dark', category: 'sobremesas', tags: [], emoji: '🍪' },
    { name: 'Brigadeiro Gourmet', price: 'R$ 4,90', description: 'Pistache, Cheesecake ou Matcha', category: 'sobremesas', tags: [], emoji: '🍬' },
    { name: 'Cookie Milkshake', price: 'R$ 22,90', description: 'Milkshake cremoso com pedaços de cookie', category: 'sobremesas', tags: [], emoji: '🥤' },
    { name: 'Pistachio Milkshake', price: 'R$ 23,90', description: 'Milkshake de pistache cremoso', category: 'sobremesas', tags: [], emoji: '🥤' },
  ];

  const categories = [
    { id: 'all', label: 'Todos', emoji: '✨' },
    { id: 'frapes', label: 'Frapês Mágicos', emoji: '🧊' },
    { id: 'quentes', label: 'Bebidas Quentes', emoji: '☕' },
    { id: 'drinks', label: 'Poções +18', emoji: '🍷' },
    { id: 'refeicoes', label: 'Refeições', emoji: '🍱' },
    { id: 'lanches', label: 'Lanches', emoji: '🥪' },
    { id: 'sobremesas', label: 'Sobremesas', emoji: '🍰' },
  ];

  const filters = [
    { id: 'all', label: 'Todos', icon: null },
    { id: 'vegan', label: 'Vegano', icon: <Leaf size={14} /> },
    { id: 'glutenFree', label: 'Sem Glúten', icon: <Wheat size={14} /> },
    { id: 'lactoseFree', label: 'Sem Lactose', icon: <Milk size={14} /> },
    { id: 'alcoholic', label: '+18', icon: <Wine size={14} /> },
  ];

  const filteredItems = menuItems.filter(item => {
    const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
    const filterMatch = activeFilter === 'all' || item.tags.includes(activeFilter);
    return categoryMatch && filterMatch;
  });

  const getBadgeVariant = (tag: string) => {
    switch (tag) {
      case 'vegan': return 'vegan';
      case 'glutenFree': return 'glutenFree';
      case 'lactoseFree': return 'lactoseFree';
      case 'alcoholic': return 'destructive';
      default: return 'secondary';
    }
  };

  const getTagLabel = (tag: string) => {
    switch (tag) {
      case 'vegan': return 'Vegano';
      case 'glutenFree': return 'Sem Glúten';
      case 'lactoseFree': return 'Zero Lactose';
      case 'alcoholic': return '+18';
      default: return tag;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-12 bg-gradient-to-b from-dusty-rose-light/20 to-background">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="gold" className="mb-4">Cardápio</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Menu <span className="text-gradient-gold">Mágico</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Cada item é preparado com carinho e um toque de magia especial.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 border-b border-border sticky top-20 bg-background/95 backdrop-blur-sm z-30">
          <div className="container mx-auto px-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as CategoryType)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-primary text-primary-foreground shadow-soft'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  <span className="mr-1.5">{cat.emoji}</span>
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Dietary Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id as FilterType)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                    activeFilter === filter.id
                      ? 'bg-gold text-accent-foreground'
                      : 'bg-card border border-border text-muted-foreground hover:border-gold/50'
                  }`}
                >
                  {filter.icon}
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {activeCategory === 'drinks' && (
              <div className="mb-8 p-4 bg-destructive/10 border border-destructive/30 rounded-xl text-center">
                <p className="text-sm text-destructive font-medium">
                  🍷 Esta seção contém bebidas alcoólicas. Venda proibida para menores de 18 anos.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  className="menu-card bg-card rounded-xl p-5 shadow-soft border border-border hover:border-gold/30"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{item.emoji}</span>
                    <span className="font-display text-lg font-bold text-gold">
                      {item.price}
                    </span>
                  </div>
                  
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag, i) => (
                        <Badge key={i} variant={getBadgeVariant(tag)} className="text-xs">
                          {getTagLabel(tag)}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <span className="text-5xl mb-4 block">🔍</span>
                <p className="text-muted-foreground">
                  Nenhum item encontrado com os filtros selecionados.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Dietary Info */}
        <section className="py-12 bg-lace">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-card rounded-2xl p-6 shadow-soft border border-border">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4 text-center">
                Informações Dietéticas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Leaf size={18} className="text-green-600" />
                  <span className="text-muted-foreground">Opções veganas disponíveis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wheat size={18} className="text-amber-600" />
                  <span className="text-muted-foreground">Opções sem glúten</span>
                </div>
                <div className="flex items-center gap-2">
                  <Milk size={18} className="text-blue-600" />
                  <span className="text-muted-foreground">Opções sem lactose</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Informe nossa equipe sobre restrições alimentares ao fazer seu pedido.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CardapioPage;
