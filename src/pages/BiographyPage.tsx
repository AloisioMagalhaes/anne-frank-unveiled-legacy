
import PageHeader from "@/components/common/PageHeader";
import QuoteBlock from "@/components/common/QuoteBlock";

const BiographyPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader 
        title="Anne Frank's Biography" 
        subtitle="The story of an extraordinary young woman whose voice continues to resonate"
      />
      
      <div className="prose max-w-none">
        <div className="md:flex gap-6 items-start mb-8">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Anne_Frank_passport_photo%2C_May_1942.jpg/800px-Anne_Frank_passport_photo%2C_May_1942.jpg" 
            alt="Anne Frank passport photo, 1942"
            className="rounded-md shadow-md mb-4 md:mb-0 md:w-1/3 md:max-w-[240px]"
          />
          
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-4">Early Life (1929-1942)</h2>
            <p>
              Annelies Marie Frank was born on June 12, 1929, in Frankfurt, Germany, to Otto and 
              Edith Frank. She had an older sister, Margot, born in 1926. The Franks were liberal 
              Jews who lived in an assimilated community of Jewish and non-Jewish citizens.
            </p>
            <p>
              After the Nazi party gained power in Germany in 1933, Otto Frank moved his family to 
              Amsterdam, Netherlands, where he established a business. Anne adjusted well to life 
              in the Netherlands, making friends and attending a Montessori school, where she 
              showed an early interest in reading and writing.
            </p>
          </div>
        </div>
        
        <h2 className="text-2xl font-serif font-semibold mb-4">Life Under Nazi Occupation (1940-1942)</h2>
        <p>
          The relative peace of Anne's life was shattered in May 1940 when Nazi Germany invaded 
          the Netherlands. The Nazi occupation brought increasing restrictions for Jewish people, 
          including being required to wear yellow stars, attend segregated schools, and adhere to 
          curfews. As conditions worsened, and after Margot received a call-up notice for a Nazi 
          work camp in 1942, the Frank family went into hiding.
        </p>
        
        <QuoteBlock 
          text="I hope I will be able to confide everything to you, as I have never been able to confide in anyone, and I hope you will be a great source of comfort and support."
          source="Anne Frank to 'Kitty' (her diary), June 12, 1942"
        />
        
        <h2 className="text-2xl font-serif font-semibold mb-4">Life in Hiding (1942-1944)</h2>
        <p>
          On July 6, 1942, the Frank family moved into a secret annex of rooms above Otto Frank's 
          office at 263 Prinsengracht in Amsterdam. They were joined by four other Jewish people: 
          Hermann and Auguste van Pels with their son Peter, and Fritz Pfeffer. The annex entrance 
          was concealed behind a bookcase. Four of Otto's employees – Miep Gies, Johannes Kleiman, 
          Victor Kugler, and Bep Voskuijl – helped hide them and supplied them with food, supplies, 
          and news from the outside world at great personal risk.
        </p>
        <p>
          During their time in hiding, Anne kept a diary that she had received as a gift on her 13th 
          birthday, just weeks before going into hiding. In it, she documented daily life in the 
          Secret Annex, recorded the tensions and fears of living in confinement, and explored her 
          own thoughts and feelings as she matured.
        </p>
        
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Anne_Frank_Diary_at_Anne_Frank_Museum_in_Berlin-pages-92-93.jpg" 
            alt="Pages from Anne Frank's diary"
            className="rounded-md shadow-md h-auto mx-auto"
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Anne_Frank_House_Amsterdam_Nederland.jpg" 
            alt="The Anne Frank House in Amsterdam"
            className="rounded-md shadow-md h-auto mx-auto"
          />
        </div>
        
        <h2 className="text-2xl font-serif font-semibold mb-4">Discovery and Deportation (1944-1945)</h2>
        <p>
          On August 4, 1944, the Secret Annex was discovered. The eight people in hiding, along with 
          two of their helpers (Johannes Kleiman and Victor Kugler), were arrested. They were taken 
          to the Gestapo headquarters in Amsterdam for interrogation and then transferred to the 
          Westerbork transit camp.
        </p>
        <p>
          From Westerbork, Anne and the other residents of the annex were deported to the 
          Auschwitz-Birkenau concentration camp. Later, Anne and Margot were transferred to the 
          Bergen-Belsen concentration camp in Germany, where they both died of typhus in March 1945, 
          just weeks before the camp was liberated by British troops on April 15, 1945.
        </p>
        
        <h2 className="text-2xl font-serif font-semibold mb-4">Legacy</h2>
        <p>
          Of the eight people who hid in the Secret Annex, only Otto Frank survived the Holocaust. 
          After the war, Miep Gies gave Otto the diary that Anne had kept during their time in hiding.
        </p>
        <p>
          Recognizing the significance of his daughter's words, Otto Frank worked to get the diary 
          published. "Het Achterhuis" (The Secret Annex) was first published in Dutch in 1947. It 
          has since been translated into more than 70 languages and has become one of the most widely 
          read books in the world.
        </p>
        <p>
          Anne Frank's diary provides a deeply personal account of the Holocaust and puts a human 
          face on one of history's greatest tragedies. Her words continue to inspire readers with 
          their honesty, insight, and unshakeable hope in humanity despite witnessing its worst aspects.
        </p>
        
        <QuoteBlock 
          text="I keep my ideals, because in spite of everything I still believe that people are really good at heart."
          source="Anne Frank, July 15, 1944"
        />
      </div>
    </div>
  );
};

export default BiographyPage;
