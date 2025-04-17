
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Calendar, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteBlock from "@/components/common/QuoteBlock";

const HomePage = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="py-10 md:py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-anne-ink font-serif mb-6 animate-fade-in">
            Anne Frank: <span className="text-anne-sepia">Legado Revelado</span>
          </h1>
          <p className="text-lg md:text-xl text-anne-gray-dark mb-8 animate-fade-in">
            Explore a extraordinária vida e o legado duradouro de Anne Frank durante os anos 
            1942-1944, através de seus escritos, contexto histórico e impacto em nosso mundo.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <Button asChild size="lg" className="bg-anne-sepia hover:bg-anne-sepia/80 text-white">
              <Link to="/timeline">
                Explorar Linha do Tempo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/biography">Conhecer Anne</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <QuoteBlock 
        text="Quero continuar vivendo mesmo após a minha morte! E, portanto, sou grata a Deus por me dar este dom, esta possibilidade de me desenvolver e de escrever, de expressar tudo o que está em mim."
        source="Anne Frank, 5 de abril de 1944"
        className="max-w-2xl mx-auto"
      />
      
      {/* Featured Sections */}
      <section className="grid md:grid-cols-3 gap-8 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-anne-gray-light/30 text-center">
          <div className="bg-anne-sepia/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="h-6 w-6 text-anne-sepia" />
          </div>
          <h2 className="font-serif text-xl font-semibold mb-3">Trechos do Diário</h2>
          <p className="text-anne-gray-dark mb-4">
            Conheça os pensamentos e emoções de Anne através de passagens selecionadas de seu diário.
          </p>
          <Button asChild variant="outline" className="w-full">
            <Link to="/diary">Ler Trechos</Link>
          </Button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-anne-gray-light/30 text-center">
          <div className="bg-anne-blue/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="h-6 w-6 text-anne-blue" />
          </div>
          <h2 className="font-serif text-xl font-semibold mb-3">Linha do Tempo Interativa</h2>
          <p className="text-anne-gray-dark mb-4">
            Acompanhe a jornada de Anne junto aos eventos mundiais durante este período crucial da história.
          </p>
          <Button asChild variant="outline" className="w-full">
            <Link to="/timeline">Ver Linha do Tempo</Link>
          </Button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-anne-gray-light/30 text-center">
          <div className="bg-anne-hope/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <School className="h-6 w-6 text-anne-hope" />
          </div>
          <h2 className="font-serif text-xl font-semibold mb-3">Recursos Educacionais</h2>
          <p className="text-anne-gray-dark mb-4">
            Acesse materiais didáticos, atividades e recursos acadêmicos sobre Anne Frank.
          </p>
          <Button asChild variant="outline" className="w-full">
            <Link to="/resources">Explorar Recursos</Link>
          </Button>
        </div>
      </section>
      
      {/* About This Project */}
      <section className="bg-white py-8 px-6 rounded-lg shadow-md border border-anne-gray-light/30 max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl font-semibold mb-4 text-center">Sobre Este Projeto</h2>
        <div className="prose max-w-none text-anne-gray-dark">
          <p>
            "Anne Frank: Legado Revelado" é uma iniciativa educacional dedicada a preservar e compartilhar 
            a poderosa história de Anne Frank durante o Holocausto. Nossa missão é fornecer 
            informações historicamente precisas sobre a vida de Anne Frank, particularmente durante os anos 
            1942-1944, quando ela e sua família estavam escondidas no Anexo Secreto.
          </p>
          <p>
            Através de recursos interativos, materiais de fontes primárias e recursos educacionais, 
            nosso objetivo é ajudar os visitantes a compreender o significado histórico do diário de Anne 
            e o contexto mais amplo do Holocausto. Nosso conteúdo foi cuidadosamente avaliado por 
            estudiosos do Holocausto para garantir precisão e integridade histórica.
          </p>
          <p>
            Convidamos você a explorar a jornada de Anne, refletir sobre suas palavras e considerar como 
            sua história continua a ressoar com pessoas ao redor do mundo hoje.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
