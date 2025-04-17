
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Biography", path: "/biography" },
    { label: "Timeline", path: "/timeline" },
    { label: "Diary", path: "/diary" },
    { label: "Secret Annex", path: "/secret-annex" },
    { label: "Educational Resources", path: "/resources" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-anne-sepia/20 bg-anne-paper bg-opacity-95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-serif text-xl md:text-2xl font-semibold text-anne-ink">
              Anne Frank: <span className="text-anne-sepia">Unveiled Legacy</span>
            </span>
          </Link>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle menu</span>
          </Button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn("nav-link transition-colors hover:text-anne-sepia", {
                    "text-anne-sepia": isActive,
                    "text-anne-ink": !isActive,
                  })
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-anne-sepia/20 bg-anne-paper px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  cn("nav-link text-lg px-2 py-1 rounded-md", {
                    "bg-anne-sepia/10 text-anne-sepia": isActive,
                    "text-anne-ink": !isActive,
                  })
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
