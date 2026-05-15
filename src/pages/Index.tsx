import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import MenuPreview from '@/components/home/MenuPreview';
import MaidsPreview from '@/components/home/MaidsPreview';
import CTASection from '@/components/home/CTASection';
import InstagramFeed from '@/components/home/InstagramFeed'; // Importação recuperada

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Chest of Wonders | Maid Café";
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-chest-pink/30 text-chest-dark font-body">
      <Header />
      
      <main className="relative overflow-x-hidden">
        <HeroSection />
        
        <div id="start-journey" className="relative z-10 bg-white">
          <AboutSection />
          <MenuPreview />
          <MaidsPreview />
          
          {/* Seção do Instagram volta aqui */}
          <InstagramFeed />
          
          <CTASection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;