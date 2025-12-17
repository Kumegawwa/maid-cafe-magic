import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ExperienciaPage from "./pages/ExperienciaPage";
import CardapioPage from "./pages/CardapioPage";
import MaidsPage from "./pages/MaidsPage";
import EventosPage from "./pages/EventosPage";
import ContatoPage from "./pages/ContatoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/experiencia" element={<ExperienciaPage />} />
          <Route path="/cardapio" element={<CardapioPage />} />
          <Route path="/maids" element={<MaidsPage />} />
          <Route path="/eventos" element={<EventosPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
