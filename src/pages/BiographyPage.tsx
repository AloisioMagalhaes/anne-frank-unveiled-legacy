
import PageHeader from "@/components/common/PageHeader";
import QuoteBlock from "@/components/common/QuoteBlock";

const BiographyPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader 
        title="Biografia de Anne Frank" 
        subtitle="A história de uma jovem extraordinária cuja voz continua a ressoar"
      />
      
      <div className="prose max-w-none">
        <div className="md:flex gap-6 items-start mb-8">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Anne_Frank_passport_photo%2C_May_1942.jpg/800px-Anne_Frank_passport_photo%2C_May_1942.jpg" 
            alt="Foto de passaporte de Anne Frank, 1942"
            className="rounded-md shadow-md mb-4 md:mb-0 md:w-1/3 md:max-w-[240px]"
          />
          
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-4">Primeiros Anos (1929-1942)</h2>
            <p>
              Annelies Marie Frank nasceu em 12 de junho de 1929, em Frankfurt, Alemanha, filha de Otto e 
              Edith Frank. Ela tinha uma irmã mais velha, Margot, nascida em 1926. Os Franks eram judeus 
              liberais que viviam em uma comunidade assimilada de cidadãos judeus e não-judeus.
            </p>
            <p>
              Após o partido nazista ganhar poder na Alemanha em 1933, Otto Frank mudou sua família para 
              Amsterdã, Holanda, onde estabeleceu um negócio. Anne adaptou-se bem à vida nos Países Baixos, 
              fazendo amigos e frequentando uma escola Montessori, onde demonstrou um interesse precoce 
              pela leitura e pela escrita.
            </p>
          </div>
        </div>
        
        <h2 className="text-2xl font-serif font-semibold mb-4">Vida Sob Ocupação Nazista (1940-1942)</h2>
        <p>
          A relativa paz da vida de Anne foi destruída em maio de 1940 quando a Alemanha nazista invadiu 
          os Países Baixos. A ocupação nazista trouxe restrições crescentes para os judeus, 
          incluindo a obrigação de usar estrelas amarelas, frequentar escolas segregadas e aderir a 
          toques de recolher. À medida que as condições pioravam, e após Margot receber uma notificação 
          para um campo de trabalho nazista em 1942, a família Frank entrou em esconderijo.
        </p>
        
        <QuoteBlock 
          text="Espero poder confiar tudo a você, como nunca pude confiar em ninguém, e espero que você seja uma grande fonte de conforto e apoio."
          source="Anne Frank para 'Kitty' (seu diário), 12 de junho de 1942"
        />
        
        <h2 className="text-2xl font-serif font-semibold mb-4">Vida no Esconderijo (1942-1944)</h2>
        <p>
          Em 6 de julho de 1942, a família Frank mudou-se para um anexo secreto de quartos acima do 
          escritório de Otto Frank na Prinsengracht 263, em Amsterdã. Eles foram acompanhados por 
          outras quatro pessoas judias: Hermann e Auguste van Pels com seu filho Peter, e Fritz Pfeffer. 
          A entrada para o anexo era escondida atrás de uma estante. O local do esconderijo incluía 
          vários quartos espalhados pelo segundo e terceiro andares do anexo dos fundos do prédio. 
          Quatro dos funcionários de Otto – Miep Gies, Johannes Kleiman, Victor Kugler e Bep Voskuijl – 
          ajudaram a escondê-los e os abasteceram com comida, suprimentos e notícias do mundo exterior, 
          com grande risco pessoal.
        </p>
        <p>
          Durante seu tempo no esconderijo, Anne manteve um diário que havia recebido de presente em seu 
          13º aniversário, apenas semanas antes de entrar em esconderijo. Nele, ela documentou a vida cotidiana 
          no Anexo Secreto, registrou as tensões e medos de viver em confinamento e explorou seus próprios 
          pensamentos e sentimentos à medida que amadurecia.
        </p>
        
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Anne_Frank_Diary_at_Anne_Frank_Museum_in_Berlin-pages-92-93.jpg" 
            alt="Páginas do diário de Anne Frank"
            className="rounded-md shadow-md h-auto mx-auto"
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Anne_Frank_House_Amsterdam_Nederland.jpg" 
            alt="A Casa de Anne Frank em Amsterdã"
            className="rounded-md shadow-md h-auto mx-auto"
          />
        </div>
        
        <h2 className="text-2xl font-serif font-semibold mb-4">Descoberta e Deportação (1944-1945)</h2>
        <p>
          Em 4 de agosto de 1944, o Anexo Secreto foi descoberto. As oito pessoas escondidas, junto com 
          dois de seus ajudantes (Johannes Kleiman e Victor Kugler), foram presas. Eles foram levados para 
          a sede da Gestapo em Amsterdã para interrogatório e depois transferidos para o campo de 
          trânsito de Westerbork.
        </p>
        <p>
          De Westerbork, Anne e os outros residentes do anexo foram deportados para o campo de concentração 
          de Auschwitz-Birkenau. Mais tarde, Anne e Margot foram transferidas para o campo de concentração 
          de Bergen-Belsen, na Alemanha, onde ambas morreram de tifo em março de 1945, apenas semanas antes 
          do campo ser libertado pelas tropas britânicas em 15 de abril de 1945.
        </p>
        
        <h2 className="text-2xl font-serif font-semibold mb-4">Legado</h2>
        <p>
          Das oito pessoas que se esconderam no Anexo Secreto, apenas Otto Frank sobreviveu ao Holocausto. 
          Após a guerra, Miep Gies entregou a Otto o diário que Anne havia mantido durante o tempo em que 
          estiveram escondidos.
        </p>
        <p>
          Reconhecendo a importância das palavras de sua filha, Otto Frank trabalhou para que o diário 
          fosse publicado. "Het Achterhuis" (O Anexo Secreto) foi publicado pela primeira vez em holandês 
          em 1947. Desde então, foi traduzido para mais de 70 idiomas e tornou-se um dos livros mais 
          lidos no mundo.
        </p>
        <p>
          O diário de Anne Frank fornece um relato profundamente pessoal do Holocausto e dá um rosto 
          humano a uma das maiores tragédias da história. Suas palavras continuam a inspirar os leitores 
          com sua honestidade, perspicácia e esperança inabalável na humanidade, apesar de testemunhar 
          seus piores aspectos.
        </p>
        
        <QuoteBlock 
          text="Mantenho meus ideais, porque apesar de tudo ainda acredito que as pessoas são realmente boas de coração."
          source="Anne Frank, 15 de julho de 1944"
        />
      </div>
    </div>
  );
};

export default BiographyPage;
