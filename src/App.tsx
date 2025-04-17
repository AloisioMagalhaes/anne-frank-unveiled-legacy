
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BiographyPage from "./pages/BiographyPage";
import TimelinePage from "./pages/TimelinePage";
import DiaryPage from "./pages/DiaryPage";
import SecretAnnexPage from "./pages/SecretAnnexPage";
import EducationalResourcesPage from "./pages/EducationalResourcesPage";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/biography" element={<BiographyPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/diary" element={<DiaryPage />} />
            <Route path="/secret-annex" element={<SecretAnnexPage />} />
            <Route path="/resources" element={<EducationalResourcesPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
