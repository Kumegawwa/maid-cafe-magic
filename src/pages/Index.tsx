import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import MenuPreview from '@/components/home/MenuPreview';
import MaidsPreview from '@/components/home/MaidsPreview';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuPreview />
        <MaidsPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
