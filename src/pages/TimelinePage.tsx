
import PageHeader from "@/components/common/PageHeader";
import TimelineEvent from "@/components/timeline/TimelineEvent";

// Timeline events data
const timelineEvents = [
  {
    date: "10 de maio de 1940",
    title: "Alemanha Nazista Invade os Países Baixos",
    description: "A Alemanha invade os Países Baixos, iniciando uma ocupação de cinco anos.",
    isPersonal: false,
  },
  {
    date: "12 de junho de 1942",
    title: "Anne Recebe um Diário em seu 13º Aniversário",
    description: "Anne Frank recebe um diário como presente de aniversário, ao qual ela dá o nome de 'Kitty'.",
    isPersonal: true,
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/AnneFrankDiary.jpg/440px-AnneFrankDiary.jpg",
  },
  {
    date: "5 de julho de 1942",
    title: "Margot Frank Recebe uma Convocação",
    description: "A irmã de Anne, Margot, recebe uma convocação para se apresentar para deportação a um campo de trabalho.",
    isPersonal: true,
  },
  {
    date: "6 de julho de 1942",
    title: "A Família Frank Entra em Esconderijo",
    description: "A família Frank se muda para o Anexo Secreto, um apartamento escondido atrás do negócio de Otto Frank.",
    isPersonal: true,
  },
  {
    date: "13 de julho de 1942",
    title: "A Família Van Pels se Junta aos Franks no Esconderijo",
    description: "Hermann e Auguste van Pels e seu filho Peter se juntam aos Franks no Anexo Secreto.",
    isPersonal: true,
  },
  {
    date: "16 de novembro de 1942",
    title: "Fritz Pfeffer se Junta ao Anexo Secreto",
    description: "Fritz Pfeffer torna-se o oitavo e último residente do Anexo Secreto.",
    isPersonal: true,
  },
  {
    date: "6 de junho de 1944",
    title: "Invasão do Dia D",
    description: "Forças aliadas desembarcam na Normandia, França, iniciando a liberação da Europa Ocidental do controle nazista.",
    isPersonal: false,
  },
  {
    date: "4 de agosto de 1944",
    title: "O Anexo Secreto é Descoberto",
    description: "Os residentes do Anexo Secreto são descobertos e presos pela Gestapo.",
    isPersonal: true,
  },
  {
    date: "3 de setembro de 1944",
    title: "Transporte para Auschwitz",
    description: "Anne e os outros são transportados para o campo de concentração de Auschwitz-Birkenau no último transporte de Westerbork.",
    isPersonal: true,
  },
  {
    date: "Outubro de 1944",
    title: "Anne e Margot Transferidas para Bergen-Belsen",
    description: "Anne e Margot Frank são transferidas de Auschwitz para o campo de concentração de Bergen-Belsen.",
    isPersonal: true,
  },
  {
    date: "Março de 1945",
    title: "Anne e Margot Frank Morrem em Bergen-Belsen",
    description: "Anne e Margot Frank morrem de tifo em Bergen-Belsen, apenas semanas antes da liberação do campo.",
    isPersonal: true,
  },
  {
    date: "8 de maio de 1945",
    title: "Dia da Vitória na Europa",
    description: "A Alemanha nazista se rende, encerrando a Segunda Guerra Mundial na Europa.",
    isPersonal: false,
  },
  {
    date: "3 de junho de 1945",
    title: "Otto Frank Retorna a Amsterdã",
    description: "Otto Frank, o único sobrevivente do Anexo Secreto, retorna a Amsterdã e mais tarde descobre a morte de suas filhas.",
    isPersonal: true,
  },
  {
    date: "25 de junho de 1947",
    title: "O Diário de Anne é Publicado",
    description: "\"Het Achterhuis\" (O Anexo Secreto), mais tarde conhecido como \"O Diário de uma Jovem\", é publicado em holandês.",
    isPersonal: true,
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Het_Achterhuis_-_eerste_druk.jpeg/440px-Het_Achterhuis_-_eerste_druk.jpeg",
  }
];

const TimelinePage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader 
        title="Linha do Tempo Interativa" 
        subtitle="Acompanhe a jornada de Anne Frank junto aos eventos históricos de 1940-1945"
      />
      
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button 
            type="button" 
            className="px-4 py-2 text-sm font-medium bg-anne-hope text-white rounded-l-lg"
          >
            História de Anne
          </button>
          <button 
            type="button" 
            className="px-4 py-2 text-sm font-medium bg-anne-blue text-white rounded-r-lg opacity-60"
          >
            Contexto Histórico
          </button>
        </div>
      </div>
      
      <div className="relative pl-28 pr-4">
        {timelineEvents.map((event, index) => (
          <TimelineEvent
            key={index}
            date={event.date}
            title={event.title}
            description={event.description}
            isPersonal={event.isPersonal}
            imageSrc={event.imageSrc}
            isFirst={index === 0}
            isLast={index === timelineEvents.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;
