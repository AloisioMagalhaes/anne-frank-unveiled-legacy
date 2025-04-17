
import PageHeader from "@/components/common/PageHeader";
import ResourceCard from "@/components/resources/ResourceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const EducationalResourcesPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader 
        title="Recursos Educacionais" 
        subtitle="Materiais didáticos, atividades e recursos acadêmicos sobre Anne Frank e o Holocausto"
      />
      
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-anne-gray-medium h-5 w-5" />
        <Input 
          type="text"
          placeholder="Pesquisar recursos..." 
          className="pl-10 focus-visible:ring-anne-sepia"
        />
      </div>
      
      <Tabs defaultValue="teaching-materials">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-4 mb-8">
          <TabsTrigger value="teaching-materials" className="font-serif">Materiais Didáticos</TabsTrigger>
          <TabsTrigger value="activities" className="font-serif">Atividades</TabsTrigger>
          <TabsTrigger value="young-writers" className="font-serif">Cantinho dos Jovens Escritores</TabsTrigger>
          <TabsTrigger value="research" className="font-serif">Pesquisa</TabsTrigger>
        </TabsList>
        
        <TabsContent value="teaching-materials" className="animate-fade-in">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-semibold">Materiais Didáticos</h2>
            <p className="text-anne-gray-dark mb-6">
              Recursos selecionados para educadores ensinarem os estudantes sobre Anne Frank, o Holocausto, 
              e temas mais amplos de direitos humanos, tolerância e resiliência.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <ResourceCard 
                title="Anne Frank: Vida em Esconderijo"
                description="Planos de aula completos para estudantes do ensino fundamental (11-14 anos) explorando a vida de Anne Frank no Anexo Secreto."
                type="Plano de Aula"
                downloadUrl="#"
              />
              
              <ResourceCard 
                title="Contexto Histórico: O Holocausto"
                description="Materiais de apoio explicando a ascensão da Alemanha Nazista e o Holocausto, contextualizados para uso em sala de aula."
                type="Material de Apoio"
                downloadUrl="#"
              />
              
              <ResourceCard 
                title="Anne Frank: O Diário de uma Jovem"
                description="Guia de discussão para acompanhar leituras do diário de Anne, incluindo seleções de conteúdo apropriadas para cada idade."
                type="Guia de Leitura"
                downloadUrl="#"
                externalUrl="#"
              />
              
              <ResourceCard 
                title="Atividade de Linha do Tempo Comparativa"
                description="Cartões de linha do tempo imprimíveis conectando a história pessoal de Anne Frank a eventos históricos mais amplos."
                type="Atividade"
                downloadUrl="#"
              />
              
              <ResourceCard 
                title="Visita Virtual ao Museu Anne Frank"
                description="Guia para conduzir uma visita virtual em sala de aula ao museu Casa de Anne Frank em Amsterdã."
                type="Passeio Virtual"
                externalUrl="#"
              />
              
              <ResourceCard 
                title="Da Memória à História"
                description="Currículo para o ensino médio examinando como relatos pessoais como o diário de Anne se tornam documentos históricos."
                type="Currículo"
                downloadUrl="#"
              />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="activities" className="animate-fade-in">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-semibold">Atividades Interativas</h2>
            <p className="text-anne-gray-dark mb-6">
              Atividades envolventes para ajudar os estudantes a se conectarem com a história de Anne Frank 
              em um nível pessoal e explorar temas de identidade, preconceito e esperança.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <ResourceCard 
                title="Workshop sobre Identidade e Preconceito"
                description="Workshop interativo explorando como o preconceito afetou a identidade durante o Holocausto, com sugestões de discussão e atividades."
                type="Workshop"
                downloadUrl="#"
              />
              
              <ResourceCard 
                title="Querida Kitty: Atividade de Escrita de Cartas"
                description="Atividade de reflexão guiada onde os estudantes escrevem suas próprias entradas de diário em resposta a trechos do diário de Anne."
                type="Atividade em Sala"
                downloadUrl="#"
              />
              
              <ResourceCard 
                title="Atividade da Planta do Anexo Secreto"
                description="Os estudantes criam modelos em escala do Anexo Secreto para entender as limitações físicas de viver escondido."
                type="Atividade Prática"
                downloadUrl="#"
              />
              
              <ResourceCard 
                title="Projeto de Testemunho do Holocausto"
                description="Guia para estudantes pesquisarem e apresentarem testemunhos de sobreviventes do Holocausto em sua comunidade."
                type="Projeto de Pesquisa"
                downloadUrl="#"
              />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="young-writers" className="animate-fade-in">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-semibold">Cantinho dos Jovens Escritores</h2>
            <p className="text-anne-gray-dark mb-6">
              Recursos inspirados nas aspirações literárias de Anne Frank, projetados para encorajar os jovens
              a se expressarem através da escrita.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <ResourceCard 
                title="Escrevendo em Tempos Difíceis"
                description="Uma atividade de diário guiada ajudando os estudantes a usar a escrita como mecanismo de enfrentamento durante períodos desafiadores."
                type="Sugestões de Diário"
                downloadUrl="#"
              />
              
              <ResourceCard 
                title="Encontrando Sua Voz"
                description="Exercícios de escrita criativa inspirados na voz distinta de Anne e no seu estilo observacional."
                type="Oficina de Escrita"
                downloadUrl="#"
              />
              
              <ResourceCard 
                title="Escrita Documental"
                description="Guia para estudantes documentarem suas vidas e arredores no estilo de Anne Frank."
                type="Guia de Escrita"
                downloadUrl="#"
              />
              
              <ResourceCard 
                title="Prêmio Anne Frank para Jovens Escritores"
                description="Informações sobre nossa competição anual de escrita para estudantes de 13-18 anos."
                type="Competição"
                externalUrl="#"
              />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="research" className="animate-fade-in">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-semibold">Pesquisa Acadêmica</h2>
            <p className="text-anne-gray-dark mb-6">
              Recursos acadêmicos e fontes primárias para pesquisa mais aprofundada sobre a vida de Anne Frank,
              seus escritos e contexto histórico.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <ResourceCard 
                title="As Edições Críticas do Diário de Anne Frank"
                description="Análise acadêmica das diferentes versões do diário de Anne, incluindo suas entradas originais e sua versão revisada."
                type="Artigo Acadêmico"
                externalUrl="#"
              />
              
              <ResourceCard 
                title="Guia de Pesquisa em Arquivos do Holocausto"
                description="Guia para acessar materiais de fonte primária relacionados ao Holocausto em vários arquivos mundiais."
                type="Guia de Pesquisa"
                downloadUrl="#"
              />
              
              <ResourceCard 
                title="Coleção de História Oral"
                description="Transcrições de entrevistas com pessoas que conheceram Anne Frank e os outros residentes do Anexo Secreto."
                type="Fontes Primárias"
                externalUrl="#"
              />
              
              <ResourceCard 
                title="Bibliografia de Contexto Histórico"
                description="Lista curada de fontes acadêmicas sobre o Holocausto, vida judaica em Amsterdã e políticas de ocupação nazista."
                type="Bibliografia"
                downloadUrl="#"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-12 p-6 bg-white rounded-lg shadow-md border border-anne-gray-light/30">
        <h2 className="font-serif text-xl font-semibold mb-4">Solicitar Materiais Educacionais</h2>
        <p className="text-anne-gray-dark mb-4">
          Podemos fornecer materiais educacionais personalizados para faixas etárias específicas ou objetivos de aprendizagem. 
          Por favor, entre em contato conosco com suas necessidades.
        </p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-anne-gray-dark mb-1">Nome</label>
              <Input id="name" placeholder="Seu nome" className="focus-visible:ring-anne-sepia" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-anne-gray-dark mb-1">Email</label>
              <Input id="email" type="email" placeholder="Seu email" className="focus-visible:ring-anne-sepia" />
            </div>
          </div>
          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-anne-gray-dark mb-1">Escola/Organização</label>
            <Input id="organization" placeholder="Sua escola ou organização" className="focus-visible:ring-anne-sepia" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-anne-gray-dark mb-1">Detalhes da Solicitação</label>
            <textarea 
              id="message" 
              rows={4} 
              className="w-full rounded-md border border-anne-gray-light/40 p-2 focus:outline-none focus:ring-2 focus:ring-anne-sepia"
              placeholder="Por favor, descreva os materiais que você precisa, incluindo faixa etária e objetivos de aprendizagem"
            ></textarea>
          </div>
          <div className="text-right">
            <button 
              type="submit"
              className="bg-anne-sepia hover:bg-anne-sepia/80 text-white px-4 py-2 rounded-md transition-colors"
            >
              Enviar Solicitação
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EducationalResourcesPage;
