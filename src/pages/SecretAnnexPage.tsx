
import { ChevronRight, Info, MapPin } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SecretAnnexPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader 
        title="The Secret Annex" 
        subtitle="Explore the hidden space where Anne Frank and seven others lived in hiding from 1942-1944"
      />
      
      <div className="bg-white p-6 rounded-lg shadow-md border border-anne-gray-light/30 mb-8">
        <h2 className="font-serif text-xl font-semibold mb-4">About the Secret Annex</h2>
        <div className="md:flex gap-6">
          <div className="md:w-2/3">
            <p className="text-anne-gray-dark mb-4">
              The Secret Annex (Dutch: <em>Het Achterhuis</em>) was a hidden apartment within a larger 
              building at Prinsengracht 263 in Amsterdam. This space, where Anne Frank and seven others 
              hid during World War II, consisted of several small rooms accessed through a doorway 
              hidden behind a bookcase.
            </p>
            <p className="text-anne-gray-dark">
              Otto Frank, Anne's father, had been preparing the hiding place since 1941. The entrance 
              to the Secret Annex was on the second floor of the building, behind a movable bookcase. 
              The hiding place included several rooms spread over the second and third floors of the 
              rear annex of the building.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center items-start mt-4 md:mt-0">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Anne_Frank_House_Amsterdam_20.JPG/440px-Anne_Frank_House_Amsterdam_20.JPG" 
              alt="The Movable Bookcase leading to the Secret Annex"
              className="rounded-lg shadow-md max-h-48"
            />
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="residents">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="residents" className="font-serif">Residents</TabsTrigger>
          <TabsTrigger value="layout" className="font-serif">Layout</TabsTrigger>
          <TabsTrigger value="helpers" className="font-serif">Helpers</TabsTrigger>
        </TabsList>
        
        <TabsContent value="residents" className="animate-fade-in">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-anne-gray-light/20">
              <h3 className="font-serif text-lg font-medium mb-3 flex items-center">
                <ChevronRight className="h-5 w-5 text-anne-sepia mr-1" />
                The Frank Family
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
                    <p className="text-sm text-anne-gray-dark">Father (1889-1980)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-16 h-16 bg-anne-gray-light/30 rounded-full flex items-center justify-center text-anne-gray-medium">
                    Photo<br/>N/A
                  </div>
                  <div>
                    <h4 className="font-medium">Edith Frank-Holländer</h4>
                    <p className="text-sm text-anne-gray-dark">Mother (1900-1945)</p>
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
                    <p className="text-sm text-anne-gray-dark">Daughter (1929-1945)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-16 h-16 bg-anne-gray-light/30 rounded-full flex items-center justify-center text-anne-gray-medium">
                    Photo<br/>N/A
                  </div>
                  <div>
                    <h4 className="font-medium">Margot Frank</h4>
                    <p className="text-sm text-anne-gray-dark">Daughter (1926-1945)</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-anne-gray-light/20">
              <h3 className="font-serif text-lg font-medium mb-3 flex items-center">
                <ChevronRight className="h-5 w-5 text-anne-sepia mr-1" />
                Other Residents
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-16 h-16 bg-anne-gray-light/30 rounded-full flex items-center justify-center text-anne-gray-medium">
                    Photo<br/>N/A
                  </div>
                  <div>
                    <h4 className="font-medium">Hermann van Pels</h4>
                    <p className="text-sm text-anne-gray-dark">(1898-1945)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-16 h-16 bg-anne-gray-light/30 rounded-full flex items-center justify-center text-anne-gray-medium">
                    Photo<br/>N/A
                  </div>
                  <div>
                    <h4 className="font-medium">Auguste van Pels</h4>
                    <p className="text-sm text-anne-gray-dark">(1900-1945)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-16 h-16 bg-anne-gray-light/30 rounded-full flex items-center justify-center text-anne-gray-medium">
                    Photo<br/>N/A
                  </div>
                  <div>
                    <h4 className="font-medium">Peter van Pels</h4>
                    <p className="text-sm text-anne-gray-dark">(1926-1945)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-16 h-16 bg-anne-gray-light/30 rounded-full flex items-center justify-center text-anne-gray-medium">
                    Photo<br/>N/A
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
                The eight people in hiding lived in the Secret Annex for more than two years, from July 6, 1942, 
                until their arrest on August 4, 1944. They had to remain quiet during daytime hours when workers 
                were in the building, could never go outside, and lived in constant fear of discovery.
              </p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="layout" className="animate-fade-in">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-anne-gray-light/30">
              <h3 className="font-serif text-xl font-semibold mb-4">Layout of the Secret Annex</h3>
              <div className="md:flex gap-6">
                <div className="md:w-1/2 mb-4 md:mb-0">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Anne_Frank_House_floor_plan.svg/600px-Anne_Frank_House_floor_plan.svg.png" 
                    alt="Floor plan of the Secret Annex"
                    className="rounded-lg shadow-sm w-full h-auto"
                  />
                </div>
                <div className="md:w-1/2">
                  <h4 className="font-medium mb-2">Rooms in the Secret Annex:</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex gap-2">
                      <MapPin className="h-4 w-4 text-anne-sepia flex-shrink-0 mt-1" />
                      <span>Small office-type room - used by Anne and Fritz Pfeffer</span>
                    </li>
                    <li className="flex gap-2">
                      <MapPin className="h-4 w-4 text-anne-sepia flex-shrink-0 mt-1" />
                      <span>Bedroom shared by Otto, Edith, and Margot Frank</span>
                    </li>
                    <li className="flex gap-2">
                      <MapPin className="h-4 w-4 text-anne-sepia flex-shrink-0 mt-1" />
                      <span>Common living/dining area</span>
                    </li>
                    <li className="flex gap-2">
                      <MapPin className="h-4 w-4 text-anne-sepia flex-shrink-0 mt-1" />
                      <span>Bedroom of Hermann and Auguste van Pels</span>
                    </li>
                    <li className="flex gap-2">
                      <MapPin className="h-4 w-4 text-anne-sepia flex-shrink-0 mt-1" />
                      <span>Small room used by Peter van Pels</span>
                    </li>
                    <li className="flex gap-2">
                      <MapPin className="h-4 w-4 text-anne-sepia flex-shrink-0 mt-1" />
                      <span>Attic - used for storage and occasionally as a retreat</span>
                    </li>
                  </ul>
                  
                  <p className="text-sm text-anne-gray-dark">
                    Access to the hiding place was through a movable bookcase that concealed the entrance. 
                    The total area of the Secret Annex was approximately 500 square feet, making for 
                    extremely cramped quarters for eight people.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-anne-paper p-4 rounded-lg border border-anne-sepia/20">
              <h4 className="font-serif text-lg font-medium mb-2 text-anne-sepia">From Anne's Diary:</h4>
              <p className="italic text-anne-gray-dark font-handwritten text-lg">
                "Now I'll give you a brief description of this 'Secret Annex'... Upstairs there's a small hallway with 
                a little room to the side, and a large and very dark bathroom. Through the hallway there's a room 
                containing a stove, a sink, and a WC. Then there's the large and light kitchen, which our helpers 
                use as an office and living room, and beside it is our living room; Peter's room is right beside us."
              </p>
              <p className="text-right text-anne-gray-medium text-sm mt-2">— July 9, 1942</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Anne_Frank_House_Amsterdam_interior.JPG/440px-Anne_Frank_House_Amsterdam_interior.JPG" 
                  alt="Anne's Room"
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <h4 className="font-medium text-sm">Anne's Room</h4>
                  <p className="text-xs text-anne-gray-dark">Shared with Fritz Pfeffer</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Anne_Frank_House_Amsterdam_4.JPG/440px-Anne_Frank_House_Amsterdam_4.JPG" 
                  alt="Common Area"
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <h4 className="font-medium text-sm">Common Area</h4>
                  <p className="text-xs text-anne-gray-dark">Living and dining space</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Anne_Frank_House_Amsterdam_25.JPG/440px-Anne_Frank_House_Amsterdam_25.JPG" 
                  alt="Attic"
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <h4 className="font-medium text-sm">Attic Space</h4>
                  <p className="text-xs text-anne-gray-dark">Where Anne and Peter spent time</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="helpers" className="animate-fade-in">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-anne-gray-light/30">
              <h3 className="font-serif text-xl font-semibold mb-4">The Helpers</h3>
              <p className="text-anne-gray-dark mb-4">
                The eight people in the Secret Annex could not have survived for over two years without the help 
                of several trusted employees of Otto Frank's business. These helpers risked their lives to supply 
                food, news, and other necessities to the hidden residents.
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
                      Otto Frank's secretary who helped arrange the hiding place. She brought food, books, 
                      and news to the Secret Annex. After the arrest, she found and saved Anne's diary.
                    </p>
                    <p className="text-xs text-anne-sepia italic">
                      "I am not a hero. I just did what any decent person would have done."
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-anne-gray-light/30 rounded-full flex items-center justify-center text-anne-gray-medium">
                    Photo<br/>N/A
                  </div>
                  <div>
                    <h4 className="font-medium">Johannes Kleiman (1896-1959)</h4>
                    <p className="text-sm text-anne-gray-dark">
                      Business associate of Otto Frank who helped arrange the hiding place and provided support. 
                      He was arrested along with the hidden residents but survived the war.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-anne-gray-light/30 rounded-full flex items-center justify-center text-anne-gray-medium">
                    Photo<br/>N/A
                  </div>
                  <div>
                    <h4 className="font-medium">Victor Kugler (1900-1981)</h4>
                    <p className="text-sm text-anne-gray-dark">
                      Business associate who took over management of the company and helped supply the hiding place. 
                      He was arrested with the residents but survived imprisonment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-anne-gray-light/30 rounded-full flex items-center justify-center text-anne-gray-medium">
                    Photo<br/>N/A
                  </div>
                  <div>
                    <h4 className="font-medium">Bep Voskuijl (1919-1983)</h4>
                    <p className="text-sm text-anne-gray-dark">
                      A young secretary in the company who helped supply food and other necessities to the 
                      Secret Annex. She kept their secret throughout the war.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="diary-entry">
              <h4 className="font-medium mb-2">From Anne's Diary:</h4>
              <p className="text-lg mb-4">
                "Never have we heard one word of the burden we must be, never has one of them complained of all the trouble 
                we give. They come upstairs every day, talk about business and politics, food and newspaper articles as if 
                we weren't there. They put on their most cheerful expressions, bring flowers and gifts for birthdays and 
                bank holidays, are always ready to do what they can. That's something we should never forget; although 
                others may show heroism in the war or against the Germans, our helpers display heroism in their cheerfulness 
                and affection."
              </p>
              <p className="text-right text-anne-gray-medium">— January 28, 1944</p>
            </div>
            
            <div className="p-4 bg-anne-gray-light/20 rounded-lg">
              <div className="flex items-start gap-2">
                <Info className="h-5 w-5 text-anne-blue flex-shrink-0 mt-1" />
                <p className="text-sm text-anne-gray-dark">
                  After the war, Otto Frank expressed his deep gratitude to these helpers. Without their courage 
                  and compassion, the residents of the Secret Annex would not have survived as long as they did, 
                  and Anne's diary might never have been preserved for the world.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-12 bg-anne-blue/5 p-6 rounded-lg border border-anne-blue/20 text-center">
        <h3 className="font-serif text-xl font-medium mb-4">Virtual Tour Coming Soon</h3>
        <p className="text-anne-gray-dark mb-6">
          We're developing an interactive 3D tour of the Secret Annex that will allow you to explore the 
          space where Anne Frank and seven others lived in hiding. The tour will feature hotspots revealing 
          diary entries related to specific locations.
        </p>
        <div className="flex justify-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Interior_of_Anne_Frank%27s_House_Amsterdam_31.JPG/440px-Interior_of_Anne_Frank%27s_House_Amsterdam_31.JPG" 
            alt="Interior of the Anne Frank House" 
            className="rounded-lg shadow-lg max-w-full md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default SecretAnnexPage;
