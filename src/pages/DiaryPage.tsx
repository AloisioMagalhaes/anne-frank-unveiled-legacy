
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageHeader from "@/components/common/PageHeader";
import AudioPlayer from "@/components/common/AudioPlayer";

interface DiaryEntry {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  audioSrc?: string;
  theme: "daily-life" | "thoughts" | "hopes-dreams";
}

const diaryEntries: DiaryEntry[] = [
  {
    id: "entry-1",
    date: "Sunday, July 12, 1942",
    title: "First Days in the Secret Annex",
    excerpt: "The Annex is an ideal place to hide in. It may be damp and lopsided, but there's probably not a more comfortable hiding place in all of Amsterdam. No, in all of Holland. Our little room looked very bare at first, with nothing on the walls; but thanks to Daddy who had brought my film-star collection and picture postcards on beforehand, and with the aid of paste-pot and brush, I have transformed the walls into one gigantic picture. This makes it look much more cheerful.",
    theme: "daily-life"
  },
  {
    id: "entry-2",
    date: "Friday, September 25, 1942",
    title: "Conflicts with Mrs. Van Pels",
    excerpt: "Mrs. Van Pels is unbearable. I'm continually being scolded for my incessant chatter when I'm upstairs. I simply let the words bounce right off me! Madame now has a new trick: trying to get out of washing the pots and pans. If there's a bit of food left at the bottom of the pan, she leaves it to spoil instead of transferring it to a glass dish. Then in the afternoon when Margot is stuck with cleaning all the pots and pans, Madame exclaims, 'Oh, poor Margot, you have so much work to do!'",
    theme: "daily-life"
  },
  {
    id: "entry-3",
    date: "Saturday, November 7, 1942",
    title: "Thoughts on Mother",
    excerpt: "I'm seething with rage, yet I mustn't show it. I'd like to stamp my feet, scream, give Mother a good shaking, cry and I don't know what else because of the horrible words, mocking looks and accusations that she hurls at me repeatedly, day after day. Words that cut me to the quick and that I know reach the opposite of what they're supposed to. I know I'm far from being what I should be but there is one thing I have acquired and that is my own stubborn opinions.",
    theme: "thoughts"
  },
  {
    id: "entry-4",
    date: "Wednesday, January 13, 1943",
    title: "Fear of Discovery",
    excerpt: "Terrible things are happening outside. At any time of night and day, poor helpless people are being dragged out of their homes. They're allowed to take only a knapsack and a little cash with them, and even then, they're robbed of these possessions on the way. Families are torn apart; men, women, and children are separated. Children come home from school to find that their parents have disappeared. Everyone is scared.",
    theme: "thoughts"
  },
  {
    id: "entry-5",
    date: "Friday, April 14, 1944",
    title: "Dreams of Nature",
    excerpt: "I long to ride a bike, dance, whistle, look at the world, feel young and know that I'm free, and yet I can't let it show. Just imagine what would happen if all eight of us were to feel sorry for ourselves or walk around with the discontent clearly visible on our faces. Where would that get us? I sometimes wonder if anyone will ever understand what I mean, if anyone will ever overlook my ingratitude and not worry about whether or not I'm Jewish and merely see me as a teenager badly in need of some good plain fun.",
    theme: "hopes-dreams"
  },
  {
    id: "entry-6",
    date: "Tuesday, April 11, 1944",
    title: "Aspirations as a Writer",
    excerpt: "You've known for a long time that my greatest wish is to become a journalist someday and later on a famous writer. Whether these leanings towards greatness (or insanity) will ever materialize remains to be seen, but I certainly have the subjects in my mind. In any case, I want to publish a book titled Het Achterhuis after the war. Whether I shall succeed or not, I cannot say, but my diary will be a great help.",
    theme: "hopes-dreams"
  }
];

const DiaryPage = () => {
  const [selectedTab, setSelectedTab] = useState<string>("daily-life");
  
  const filteredEntries = diaryEntries.filter(entry => entry.theme === selectedTab);

  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader 
        title="Anne's Diary" 
        subtitle="Selected excerpts from Anne Frank's diary, revealing her thoughts, experiences, and dreams"
      />
      
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-anne-gray-light/30">
        <h2 className="font-serif text-xl font-semibold mb-4">About Anne's Diary</h2>
        <p className="text-anne-gray-dark mb-4">
          Anne Frank received her diary as a gift for her thirteenth birthday on June 12, 1942. 
          She named it 'Kitty' and wrote entries until August 1, 1944, just days before the 
          Secret Annex was discovered. Her diary provides an intimate account of her time in 
          hiding, her developing adolescence, and her observations about human nature.
        </p>
        <p className="text-anne-gray-dark">
          After the war, Otto Frank, Anne's father and the sole survivor from the Secret Annex, 
          published the diary. Anne had actually rewritten many of her entries after hearing on 
          the radio that the Dutch government wanted to collect eyewitness accounts of the Nazi 
          occupation, intending for her diary to be published after the war.
        </p>
      </div>
      
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="daily-life" className="font-serif">Daily Life</TabsTrigger>
          <TabsTrigger value="thoughts" className="font-serif">Thoughts & Reflections</TabsTrigger>
          <TabsTrigger value="hopes-dreams" className="font-serif">Hopes & Dreams</TabsTrigger>
        </TabsList>
        
        <TabsContent value="daily-life" className="animate-fade-in">
          <div className="space-y-8">
            {filteredEntries.map(entry => (
              <div key={entry.id} className="diary-entry">
                <div className="mb-4 text-anne-sepia font-medium">{entry.date}</div>
                <h3 className="text-xl mb-3">{entry.title}</h3>
                <p className="text-lg mb-4">{entry.excerpt}</p>
                {entry.audioSrc && (
                  <AudioPlayer 
                    src={entry.audioSrc} 
                    title={`Audio: ${entry.title}`}
                    className="mt-4"
                  />
                )}
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="thoughts" className="animate-fade-in">
          <div className="space-y-8">
            {filteredEntries.map(entry => (
              <div key={entry.id} className="diary-entry">
                <div className="mb-4 text-anne-sepia font-medium">{entry.date}</div>
                <h3 className="text-xl mb-3">{entry.title}</h3>
                <p className="text-lg mb-4">{entry.excerpt}</p>
                {entry.audioSrc && (
                  <AudioPlayer 
                    src={entry.audioSrc} 
                    title={`Audio: ${entry.title}`}
                    className="mt-4"
                  />
                )}
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="hopes-dreams" className="animate-fade-in">
          <div className="space-y-8">
            {filteredEntries.map(entry => (
              <div key={entry.id} className="diary-entry">
                <div className="mb-4 text-anne-sepia font-medium">{entry.date}</div>
                <h3 className="text-xl mb-3">{entry.title}</h3>
                <p className="text-lg mb-4">{entry.excerpt}</p>
                {entry.audioSrc && (
                  <AudioPlayer 
                    src={entry.audioSrc} 
                    title={`Audio: ${entry.title}`}
                    className="mt-4"
                  />
                )}
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DiaryPage;
