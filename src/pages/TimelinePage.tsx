
import PageHeader from "@/components/common/PageHeader";
import TimelineEvent from "@/components/timeline/TimelineEvent";

// Timeline events data
const timelineEvents = [
  {
    date: "May 10, 1940",
    title: "Nazi Germany Invades the Netherlands",
    description: "Germany invades the Netherlands, beginning a five-year occupation.",
    isPersonal: false,
  },
  {
    date: "June 12, 1942",
    title: "Anne Receives a Diary for Her 13th Birthday",
    description: "Anne Frank receives a diary as a birthday present, which she names 'Kitty'.",
    isPersonal: true,
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/AnneFrankDiary.jpg/440px-AnneFrankDiary.jpg",
  },
  {
    date: "July 5, 1942",
    title: "Margot Frank Receives a Call-up Notice",
    description: "Anne's sister Margot receives a call-up notice to report for deportation to a labor camp.",
    isPersonal: true,
  },
  {
    date: "July 6, 1942",
    title: "The Frank Family Goes Into Hiding",
    description: "The Frank family moves into the Secret Annex, a hidden apartment behind Otto Frank's business.",
    isPersonal: true,
  },
  {
    date: "July 13, 1942",
    title: "The Van Pels Family Joins the Franks in Hiding",
    description: "Hermann and Auguste van Pels and their son Peter join the Franks in the Secret Annex.",
    isPersonal: true,
  },
  {
    date: "November 16, 1942",
    title: "Fritz Pfeffer Joins the Secret Annex",
    description: "Fritz Pfeffer becomes the eighth and final resident of the Secret Annex.",
    isPersonal: true,
  },
  {
    date: "June 6, 1944",
    title: "D-Day Invasion",
    description: "Allied forces land in Normandy, France, beginning the liberation of Western Europe from Nazi control.",
    isPersonal: false,
  },
  {
    date: "August 4, 1944",
    title: "The Secret Annex is Discovered",
    description: "The residents of the Secret Annex are discovered and arrested by the Gestapo.",
    isPersonal: true,
  },
  {
    date: "September 3, 1944",
    title: "Transport to Auschwitz",
    description: "Anne and the others are transported to Auschwitz-Birkenau concentration camp on the last transport from Westerbork.",
    isPersonal: true,
  },
  {
    date: "October 1944",
    title: "Anne and Margot Transferred to Bergen-Belsen",
    description: "Anne and Margot Frank are transferred from Auschwitz to Bergen-Belsen concentration camp.",
    isPersonal: true,
  },
  {
    date: "March 1945",
    title: "Anne and Margot Frank Die at Bergen-Belsen",
    description: "Anne and Margot Frank die of typhus at Bergen-Belsen, just weeks before the camp is liberated.",
    isPersonal: true,
  },
  {
    date: "May 8, 1945",
    title: "Victory in Europe Day",
    description: "Nazi Germany surrenders, bringing World War II in Europe to an end.",
    isPersonal: false,
  },
  {
    date: "June 3, 1945",
    title: "Otto Frank Returns to Amsterdam",
    description: "Otto Frank, the only survivor from the Secret Annex, returns to Amsterdam and later learns of his daughters' deaths.",
    isPersonal: true,
  },
  {
    date: "June 25, 1947",
    title: "Anne's Diary is Published",
    description: "\"Het Achterhuis\" (The Secret Annex), later known as \"The Diary of a Young Girl,\" is published in Dutch.",
    isPersonal: true,
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Het_Achterhuis_-_eerste_druk.jpeg/440px-Het_Achterhuis_-_eerste_druk.jpeg",
  }
];

const TimelinePage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader 
        title="Interactive Timeline" 
        subtitle="Follow Anne Frank's journey alongside historical events from 1940-1945"
      />
      
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button 
            type="button" 
            className="px-4 py-2 text-sm font-medium bg-anne-hope text-white rounded-l-lg"
          >
            Anne's Story
          </button>
          <button 
            type="button" 
            className="px-4 py-2 text-sm font-medium bg-anne-blue text-white rounded-r-lg opacity-60"
          >
            Historical Context
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
