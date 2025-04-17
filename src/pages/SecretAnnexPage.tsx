
import { ChevronRight, Info, MapPin } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SecretAnnexPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader 
        title="O Anexo Secreto" 
        subtitle="Explore o espaço oculto onde Anne Frank e outras sete pessoas viveram escondidas de 1942-1944"
      />
      
      <div className="bg-white p-6 rounded-lg shadow-md border border-anne-gray-light/30 mb-8">
        <h2 className="font-serif text-xl font-semibold mb-4">Sobre o Anexo Secreto</h2>
        <div className="md:flex gap-6">
          <div className="md:w-2/3">
            <p className="text-anne-gray-dark mb-4">
              O Anexo Secreto (em holandês: <em>Het Achterhuis</em>) era um apartamento escondido dentro de um 
              edifício maior na Prinsengracht 263 em Amsterdã. Este espaço, onde Anne Frank e outras sete pessoas 
              se esconderam durante a Segunda Guerra Mundial, consistia em vários pequenos quartos acessados 
              através de uma entrada escondida atrás de uma estante.
            </p>
            <p className="text-anne-gray-dark">
              Otto Frank, pai de Anne, vinha preparando o esconderijo desde 1941. A entrada 
              para o Anexo Secreto ficava no segundo andar do prédio, atrás de uma estante móvel. 
              O esconderijo incluía vários quartos espalhados pelo segundo e terceiro andares do 
              anexo dos fundos do prédio.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center items-start mt-4 md:mt-0">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Anne_Frank_House_Amsterdam_20.JPG/440px-Anne_Frank_House_Amsterdam_20.JPG" 
              alt="A Estante Móvel que levava ao Anexo Secreto"
              className="rounded-lg shadow-md max-h-48"
            />
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="residents">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="residents" className="font-serif">Residentes</TabsTrigger>
          <TabsTrigger value="layout" className="font-serif">Estrutura</TabsTrigger>
          <TabsTrigger value="helpers" className="font-serif">Ajudantes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="residents" className="animate-fade-in">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-anne-gray-light/20">
              <h3 className="font-serif text-lg font-medium mb-3 flex items-center">
                <ChevronRight className="h-5 w-5 text-anne-sepia mr-1" />
                A Família Frank
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Otto_Frank_1961.jpg/440px-Otto_Frank_1961.jpg" 
                    alt="Otto Frank" 
                    className="w-16 h-16 object-cover rounded-full"
                  />
                  <div>
                    <h4 className="font-medium">Otto Frank</h4>
                    <p className="text-sm text-anne-gray-dark">Pai (1889-1980)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-16 h-16 bg-anne-gray-light/30 rounded-full flex items-center justify-center text-anne-gray-medium">
                    Foto<br/>N/D
                  </div>
                  <div>
                    <h4 className="font-medium">Edith Frank-Holländer</h4>
                    <p className="text-sm text-anne-gray-dark">Mãe (1900-1945)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Anne_Frank_passport_photo%2C_May_1942.jpg/440px-Anne_Frank_passport_photo%2C_May_1942.jpg" 
                    alt="Anne Frank" 
                    className="w-16 h-16 object-cover rounded-full"
                  />
                  <div>
                    <h4 className="font-medium">Anne Frank</h4>
                    <p className="text-sm text-anne-gray-dark">Filha (1929-1945)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-16 h-16 bg-anne-gray-light/30 rounded-full flex items-center justify-center text-anne-gray-medium">
                    Foto<br/>N/D
                  </div>
                  <div>
                    <h4 className="font-medium">Margot Frank</h4>
                    <p className="text-sm text-anne-gray-dark">Filha (1926-1945)</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-anne-gray-light/20">
              <h3 className="font-serif text-lg font-medium mb-3 flex items-center">
                <ChevronRight className="h-5 w-5 text-anne-sepia mr-1" />
                Outros Residentes
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-16 h-16 bg-anne-gray-light/30 rounded-full flex items-center justify-center text-anne-gray-medium">
                    Foto<br/>N/D
                  </div>
                  <div>
                    <h4 className="font-medium">Hermann van Pels</h4>
                    <p className="text-sm text-anne-gray-dark">(1898-1945)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-16 h-16 bg-anne-gray-light/30 rounded-full flex items-center justify-center text-anne-gray-medium">
                    Foto<br/>N/D
                  </div>
                  <div>
                    <h4 className="font-medium">Auguste van Pels</h4>
                    <p className="text-sm text-anne-gray-dark">(1900-1945)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-16 h-16 bg-anne-gray-light/30 rounded-full flex items-center justify-center text-anne-gray-medium">
                    Foto<br/>N/D
                  </div>
                  <div>
                    <h4 className="font-medium">Peter van Pels</h4>
                    <p className="text-sm text-anne-gray-dark">(1926-1945)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-16 h-16 bg-anne-gray-light/30 rounded-full flex items-center justify-center text-anne-gray-medium">
                    Foto<br/>N/D
                  </div>
                  <div>
                    <h4 className="font-medium">Fritz Pfeffer</h4>
                    <p className="text-sm text-anne-gray-dark">(1889-1944)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-anne-gray-light/20 rounded-lg">
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-anne-blue flex-shrink-0 mt-1" />
              <p className="text-sm text-anne-gray-dark">
                As oito pessoas escondidas viveram no Anexo Secreto por mais de dois anos, de 6 de julho de 1942 
                até sua prisão em 4 de agosto de 1944. Eles tinham que permanecer quietos durante as horas do dia 
                quando os trabalhadores estavam no prédio, nunca podiam sair e viviam em constante medo de serem descobertos.
              </p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="layout" className="animate-fade-in">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-anne-gray-light/30">
              <h3 className="font-serif text-xl font-semibold mb-4">Estrutura do Anexo Secreto</h3>
              <div className="md:flex gap-6">
                <div className="md:w-1/2 mb-4 md:mb-0">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Anne_Frank_House_floor_plan.svg/600px-Anne_Frank_House_floor_plan.svg.png" 
                    alt="Planta do Anexo Secreto"
                    className="rounded-lg shadow-sm w-full h-auto"
                  />
                </div>
                <div className="md:w-1/2">
                  <h4 className="font-medium mb-2">Cômodos no Anexo Secreto:</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex gap-2">
                      <MapPin className="h-4 w-4 text-anne-sepia flex-shrink-0 mt-1" />
                      <span>Pequena sala tipo escritório - usada por Anne e Fritz Pfeffer</span>
                    </li>
                    <li className="flex gap-2">
                      <MapPin className="h-4 w-4 text-anne-sepia flex-shrink-0 mt-1" />
                      <span>Quarto compartilhado por Otto, Edith e Margot Frank</span>
                    </li>
                    <li className="flex gap-2">
                      <MapPin className="h-4 w-4 text-anne-sepia flex-shrink-0 mt-1" />
                      <span>Área comum de estar/jantar</span>
                    </li>
                    <li className="flex gap-2">
                      <MapPin className="h-4 w-4 text-anne-sepia flex-shrink-0 mt-1" />
                      <span>Quarto de Hermann e Auguste van Pels</span>
                    </li>
                    <li className="flex gap-2">
                      <MapPin className="h-4 w-4 text-anne-sepia flex-shrink-0 mt-1" />
                      <span>Pequeno quarto usado por Peter van Pels</span>
                    </li>
                    <li className="flex gap-2">
                      <MapPin className="h-4 w-4 text-anne-sepia flex-shrink-0 mt-1" />
                      <span>Sótão - usado para armazenamento e ocasionalmente como refúgio</span>
                    </li>
                  </ul>
                  
                  <p className="text-sm text-anne-gray-dark">
                    O acesso ao esconderijo era através de uma estante móvel que ocultava a entrada. 
                    A área total do Anexo Secreto era de aproximadamente 46 metros quadrados, tornando-o 
                    extremamente apertado para oito pessoas.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-anne-paper p-4 rounded-lg border border-anne-sepia/20">
              <h4 className="font-serif text-lg font-medium mb-2 text-anne-sepia">Do Diário de Anne:</h4>
              <p className="italic text-anne-gray-dark font-handwritten text-lg">
                "Agora vou dar uma breve descrição deste 'Anexo Secreto'... No andar de cima há um pequeno corredor com um 
                quartinho ao lado, e um banheiro muito grande e escuro. Pelo corredor há um cômodo 
                contendo um fogão, uma pia e um banheiro. Então há a grande e iluminada cozinha, que nossos ajudantes 
                usam como escritório e sala de estar, e ao lado dela está nossa sala de estar; o quarto de Peter fica bem ao nosso lado."
              </p>
              <p className="text-right text-anne-gray-medium text-sm mt-2">— 9 de julho de 1942</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Anne_Frank_House_Amsterdam_interior.JPG/440px-Anne_Frank_House_Amsterdam_interior.JPG" 
                  alt="Quarto de Anne"
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <h4 className="font-medium text-sm">Quarto de Anne</h4>
                  <p className="text-xs text-anne-gray-dark">Compartilhado com Fritz Pfeffer</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Anne_Frank_House_Amsterdam_4.JPG/440px-Anne_Frank_House_Amsterdam_4.JPG" 
                  alt="Área Comum"
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <h4 className="font-medium text-sm">Área Comum</h4>
                  <p className="text-xs text-anne-gray-dark">Espaço de estar e refeições</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Anne_Frank_House_Amsterdam_25.JPG/440px-Anne_Frank_House_Amsterdam_25.JPG" 
                  alt="Sótão"
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <h4 className="font-medium text-sm">Espaço do Sótão</h4>
                  <p className="text-xs text-anne-gray-dark">Onde Anne e Peter passavam tempo</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="helpers" className="animate-fade-in">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-anne-gray-light/30">
              <h3 className="font-serif text-xl font-semibold mb-4">Os Ajudantes</h3>
              <p className="text-anne-gray-dark mb-4">
                As oito pessoas no Anexo Secreto não poderiam ter sobrevivido por mais de dois anos sem a ajuda 
                de vários funcionários de confiança do negócio de Otto Frank. Esses ajudantes arriscaram suas vidas para 
                fornecer comida, notícias e outras necessidades aos residentes escondidos.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="flex items-start gap-4">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Miep_Gies_%281987%29.jpg/440px-Miep_Gies_%281987%29.jpg" 
                    alt="Miep Gies" 
                    className="w-20 h-20 object-cover rounded-full"
                  />
                  <div>
                    <h4 className="font-medium">Miep Gies (1909-2010)</h4>
                    <p className="text-sm text-anne-gray-dark mb-2">
                      Secretária de Otto Frank que ajudou a organizar o esconderijo. Ela trazia comida, livros 
                      e notícias para o Anexo Secreto. Após a prisão, ela encontrou e salvou o diário de Anne.
                    </p>
                    <p className="text-xs text-anne-sepia italic">
                      "Eu não sou uma heroína. Apenas fiz o que qualquer pessoa decente teria feito."
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-anne-gray-light/30 rounded-full flex items-center justify-center text-anne-gray-medium">
                    Foto<br/>N/D
                  </div>
                  <div>
                    <h4 className="font-medium">Johannes Kleiman (1896-1959)</h4>
                    <p className="text-sm text-anne-gray-dark">
                      Sócio comercial de Otto Frank que ajudou a organizar o esconderijo e forneceu apoio. 
                      Ele foi preso junto com os residentes escondidos, mas sobreviveu à guerra.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-anne-gray-light/30 rounded-full flex items-center justify-center text-anne-gray-medium">
                    Foto<br/>N/D
                  </div>
                  <div>
                    <h4 className="font-medium">Victor Kugler (1900-1981)</h4>
                    <p className="text-sm text-anne-gray-dark">
                      Sócio comercial que assumiu a gestão da empresa e ajudou a abastecer o esconderijo. 
                      Ele foi preso com os residentes, mas sobreviveu ao aprisionamento.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-anne-gray-light/30 rounded-full flex items-center justify-center text-anne-gray-medium">
                    Foto<br/>N/D
                  </div>
                  <div>
                    <h4 className="font-medium">Bep Voskuijl (1919-1983)</h4>
                    <p className="text-sm text-anne-gray-dark">
                      Uma jovem secretária da empresa que ajudou a fornecer comida e outras necessidades para o 
                      Anexo Secreto. Ela manteve o segredo deles durante toda a guerra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="diary-entry">
              <h4 className="font-medium mb-2">Do Diário de Anne:</h4>
              <p className="text-lg mb-4">
                "Nunca ouvimos uma palavra sequer sobre o fardo que devemos ser, nunca nenhum deles reclamou de todos os problemas 
                que causamos. Eles sobem as escadas todos os dias, falam sobre negócios e política, comida e artigos de jornal como se 
                não estivéssemos lá. Eles mostram suas expressões mais alegres, trazem flores e presentes para aniversários e 
                feriados bancários, estão sempre prontos para fazer o que podem. Isso é algo que nunca devemos esquecer; embora 
                outros possam mostrar heroísmo na guerra ou contra os alemães, nossos ajudantes mostram heroísmo em sua alegria 
                e afeição."
              </p>
              <p className="text-right text-anne-gray-medium">— 28 de janeiro de 1944</p>
            </div>
            
            <div className="p-4 bg-anne-gray-light/20 rounded-lg">
              <div className="flex items-start gap-2">
                <Info className="h-5 w-5 text-anne-blue flex-shrink-0 mt-1" />
                <p className="text-sm text-anne-gray-dark">
                  Após a guerra, Otto Frank expressou sua profunda gratidão a esses ajudantes. Sem sua coragem 
                  e compaixão, os residentes do Anexo Secreto não teriam sobrevivido tanto tempo, 
                  e o diário de Anne talvez nunca tivesse sido preservado para o mundo.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-12 bg-anne-blue/5 p-6 rounded-lg border border-anne-blue/20 text-center">
        <h3 className="font-serif text-xl font-medium mb-4">Tour Virtual Em Breve</h3>
        <p className="text-anne-gray-dark mb-6">
          Estamos desenvolvendo um tour interativo em 3D do Anexo Secreto que permitirá que você explore o 
          espaço onde Anne Frank e outras sete pessoas viveram escondidas. O tour apresentará pontos de interesse 
          revelando trechos do diário relacionados a locais específicos.
        </p>
        <div className="flex justify-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Interior_of_Anne_Frank%27s_House_Amsterdam_31.JPG/440px-Interior_of_Anne_Frank%27s_House_Amsterdam_31.JPG" 
            alt="Interior da Casa de Anne Frank" 
            className="rounded-lg shadow-lg max-w-full md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default SecretAnnexPage;
