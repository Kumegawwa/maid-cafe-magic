import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import MenuPreview from '@/components/home/MenuPreview';
import MaidsPreview from '@/components/home/MaidsPreview';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  // Controle de Efeitos Colaterais da Página
  useEffect(() => {
    // 1. Scroll para o topo ao carregar
    window.scrollTo(0, 0);
    // 2. Definir título da aba
    document.title = "Chest of Wonders | Maid Café em São Paulo";
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-chest-pink/30 text-chest-dark font-body">
      <Header />
      
      <main className="relative">
        <HeroSection />
        
        {/* Âncora para o botão de scroll do Hero */}
        <div id="start-journey" className="relative z-20 bg-white">
          <AboutSection />
          
          {/* Seções de Conteúdo */}
          <MenuPreview />
          <MaidsPreview />
          <CTASection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;