import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // Importante!

import Index from "./pages/Index";
import MaidsPage from "./pages/MaidsPage";
import ContatoPage from "./pages/ContatoPage";
import CardapioPage from "./pages/CardapioPage";
import RegrasPage from "./pages/RegrasPage";
import EventosPage from "./pages/EventosPage";
import ExperienciaPage from "./pages/ExperienciaPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Componente que reseta o scroll ao mudar de página */}
        <ScrollToTop />
        
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/maids" element={<MaidsPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="/cardapio" element={<CardapioPage />} />
          <Route path="/regras" element={<RegrasPage />} />
          <Route path="/eventos" element={<EventosPage />} />
          <Route path="/experiencia" element={<ExperienciaPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;