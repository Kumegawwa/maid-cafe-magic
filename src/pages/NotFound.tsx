import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-chest-pink/30">
      <Header />
      
      <main className="pt-32 pb-20 container mx-auto px-4 text-center min-h-[60vh] flex flex-col items-center justify-center">
        
        <div className="relative mb-8">
          <div className="w-40 h-40 bg-chest-pink/20 rounded-full blur-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <HelpCircle size={120} className="text-chest-dark relative z-10 animate-bounce" />
        </div>

        <h1 className="font-display text-8xl font-black text-chest-dark mb-4">404</h1>
        <h2 className="font-display text-3xl font-bold text-chest-purple mb-6">
          Ara ara? Página não encontrada!
        </h2>
        
        <p className="font-body text-xl text-gray-600 max-w-md mx-auto mb-10">
          Parece que esse portal mágico não existe ou mudou de lugar. Vamos voltar para a segurança da mansão?
        </p>

        <Button size="xl" className="bg-chest-blue hover:bg-chest-blue/90 text-white font-display font-bold text-xl rounded-2xl shadow-pop hover:translate-y-1 hover:shadow-none transition-all border-2 border-chest-dark px-10" asChild>
          <Link to="/">
            Voltar para o Início
          </Link>
        </Button>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;