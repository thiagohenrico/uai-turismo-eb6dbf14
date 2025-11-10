import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import PoliticaPublicidade from "./pages/PoliticaPublicidade";
import SobreNos from "./pages/SobreNos";
import PerguntasFrequentes from "./pages/PerguntasFrequentes";
import PraiaCarneiros from "./pages/passeios/PraiaCarneiros";
import SaoMiguel from "./pages/passeios/SaoMiguel";
import MaragogiBarraGrande from "./pages/passeios/MaragogiBarraGrande";
import MaragogiPontaMangue from "./pages/passeios/MaragogiPontaMangue";
import CaboSantoAgostinho from "./pages/passeios/CaboSantoAgostinho";
import IlhaSantoAleixo from "./pages/passeios/IlhaSantoAleixo";
import CityTour from "./pages/passeios/CityTour";
import PortoGalinhas from "./pages/passeios/PortoGalinhas";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/perguntas-frequentes" element={<PerguntasFrequentes />} />
          <Route path="/passeios/praia-carneiros" element={<PraiaCarneiros />} />
          <Route path="/passeios/sao-miguel" element={<SaoMiguel />} />
          <Route path="/passeios/maragogi-barra-grande" element={<MaragogiBarraGrande />} />
          <Route path="/passeios/maragogi-ponta-mangue" element={<MaragogiPontaMangue />} />
          <Route path="/passeios/cabo-santo-agostinho" element={<CaboSantoAgostinho />} />
          <Route path="/passeios/ilha-santo-aleixo" element={<IlhaSantoAleixo />} />
          <Route path="/passeios/city-tour" element={<CityTour />} />
          <Route path="/passeios/porto-galinhas" element={<PortoGalinhas />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/politica-publicidade" element={<PoliticaPublicidade />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
