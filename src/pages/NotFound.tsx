
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 font-serif text-anne-gray-dark">404</h1>
        <p className="text-xl text-anne-gray-medium mb-6">Página não encontrada</p>
        <p className="max-w-md mx-auto mb-8 text-anne-gray-dark">
          A página que você está procurando pode ter sido removida, teve seu nome alterado,
          ou está temporariamente indisponível.
        </p>
        <Button asChild>
          <Link to="/" className="inline-flex items-center">
            <Home className="mr-2 h-4 w-4" />
            Voltar para o Início
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
