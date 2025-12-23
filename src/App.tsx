import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Updates from "./pages/Updates";
import UpdateDetail from "./pages/UpdateDetail";
import NotFound from "./pages/NotFound";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminSignup from "./pages/admin/AdminSignup";
import AdminDashboard from "./pages/admin/AdminDashboard";
import PostEditor from "./pages/admin/PostEditor";
import AccessRequestsManager from "./components/admin/AccessRequestsManager";
import ProtectedRoute from "./components/admin/ProtectedRoute";

import SmartDairy from "./pages/SmartDairy";
import SmartPoultry from "./pages/SmartPoultry";
import SolarAgriTech from "./pages/SolarAgritech";
import CreditFinancing from "./pages/CreditFinancing";
import Marketlinkage from "./pages/MarketLinkage";
import YouthInAgri from "./pages/YouthInAgri";
import FarmIntelligence from "./pages/FarmIntelligence";
import HydroponicsFodder from "./pages/HydroponicsFodder";
import AnimalNutrition from "./pages/AnimalNutrition";

const queryClient = new QueryClient();

const App = () => {
  // TEMP placeholder for testing — replace with real auth logic later
  const user = { isAdmin: true };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/updates/:slug" element={<UpdateDetail />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/solutions/smart-dairy" element={<SmartDairy />} />
            <Route path="/solutions/smart-poultry" element={<SmartPoultry />} />
            <Route path="/solutions/solar-agri-tech" element={<SolarAgriTech />} />
            <Route path="/solutions/credit-financing" element={<CreditFinancing />} />
            <Route path="/solutions/market-linkage" element={<Marketlinkage />} />
            <Route path="/solutions/youth-in-agri" element={<YouthInAgri />} />
            <Route path="/solutions/hydroponics-fodder" element={<HydroponicsFodder />} />
            <Route path="/solutions/animal-nutrition" element={<AnimalNutrition />} />
            <Route path="/solutions/farm-intelligence" element={<FarmIntelligence />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/signup" element={<AdminSignup />} />

            <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/posts"
  element={
    <ProtectedRoute>
      <PostEditor />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/access-requests"
  element={
    <ProtectedRoute>
      <AccessRequestsManager />
    </ProtectedRoute>
  }
/>

          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
