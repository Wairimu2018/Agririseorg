import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Updates from "./pages/Updates";
import UpdateDetail from "./pages/UpdateDetail";
import NotFound from "./pages/NotFound";
import SolarSmartIrrigation from "./pages/solutions/SolarSmartIrrigation";
import PrecisionFarming from "./pages/solutions/PrecisionFarming";
import FarmManagement from "./pages/solutions/FarmManagement";
import SoilWeatherMonitoring from "./pages/solutions/SoilandWeatherMonitoring";
import AIDataAnalytics from "./pages/solutions/AIandDataAnalytics";
import SustainableAgTech from "./pages/solutions/SustainableAgTech";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminSignup from "./pages/admin/AdminSignup";
import AdminDashboard from "./pages/admin/AdminDashboard";
import PostEditor from "./pages/admin/PostEditor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/updates/:slug" element={<UpdateDetail />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/signup" element={<AdminSignup />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/posts/:id" element={<PostEditor />} />
          <Route path="/solutions/solar-smart-irrigation" element={<SolarSmartIrrigation />} />
          <Route path="/solutions/precision-farming" element={<PrecisionFarming />} />
          <Route path="/solutions/farm-management" element={<FarmManagement />} />
          <Route path="/solutions/soil-weather-monitoring" element={<SoilWeatherMonitoring />} />
          <Route path="/solutions/ai-data-analytics" element={<AIDataAnalytics />} />
          <Route path="/solutions/sustainable-agtech" element={<SustainableAgTech />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
