
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Separator } from "@/components/ui/separator";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <Outlet />
      </main>
      <Separator className="bg-anne-sepia/20" />
      <Footer />
    </div>
  );
};

export default Layout;
