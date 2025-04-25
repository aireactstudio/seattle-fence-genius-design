import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import CedarFencePage from "./pages/CedarFencePage";
import CustomFenceDesignPage from "./pages/CustomFenceDesignPage";
import FenceSoftwarePage from "./pages/FenceSoftwarePage";
import ResidentialFencingPage from "./pages/ResidentialFencingPage";
import WoodFencePage from "./pages/WoodFencePage";
import WoodGatePage from "./pages/WoodGatePage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import FinancingPage from "./pages/FinancingPage";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cedar-fence-installation" element={<CedarFencePage />} />
          <Route path="/custom-fence-design" element={<CustomFenceDesignPage />} />
          <Route path="/custom-fence-software" element={<FenceSoftwarePage />} />
          <Route path="/residential-fencing" element={<ResidentialFencingPage />} />
          <Route path="/wood-fence-installation" element={<WoodFencePage />} />
          <Route path="/wood-gate-installation" element={<WoodGatePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/financing" element={<FinancingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
