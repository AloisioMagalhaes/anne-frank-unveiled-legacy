
import PageHeader from "@/components/common/PageHeader";
import ResourceCard from "@/components/resources/ResourceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const EducationalResourcesPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader 
        title="Educational Resources" 
        subtitle="Teaching materials, activities, and scholarly resources about Anne Frank and the Holocaust"
      />
      
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-anne-gray-medium h-5 w-5" />
        <Input 
          type="text"
          placeholder="Search resources..." 
          className="pl-10 focus-visible:ring-anne-sepia"
        />
      </div>
      
      <Tabs defaultValue="teaching-materials">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-4 mb-8">
          <TabsTrigger value="teaching-materials" className="font-serif">Teaching Materials</TabsTrigger>
          <TabsTrigger value="activities" className="font-serif">Activities</TabsTrigger>
          <TabsTrigger value="young-writers" className="font-serif">Young Writers' Corner</TabsTrigger>
          <TabsTrigger value="research" className="font-serif">Research</TabsTrigger>
        </TabsList>
        
        <TabsContent value="teaching-materials" className="animate-fade-in">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-semibold">Teaching Materials</h2>
            <p className="text-anne-gray-dark mb-6">
              Curated resources for educators to teach students about Anne Frank, the Holocaust, 
              and broader themes of human rights, tolerance, and resilience.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <ResourceCard 
                title="Anne Frank: Life in Hiding"
                description="Complete lesson plans for middle school students (ages 11-14) exploring Anne Frank's life in the Secret Annex."
                type="Lesson Plan"
                downloadUrl="#"
              />
              
              <ResourceCard 
                title="Historical Context: The Holocaust"
                description="Background materials explaining the rise of Nazi Germany and the Holocaust, contextualized for classroom use."
                type="Teacher Background"
                downloadUrl="#"
              />
              
              <ResourceCard 
                title="Anne Frank: The Diary of a Young Girl"
                description="Discussion guide to accompany readings from Anne's diary, including age-appropriate content selections."
                type="Reading Guide"
                downloadUrl="#"
                externalUrl="#"
              />
              
              <ResourceCard 
                title="Comparative Timeline Activity"
                description="Printable timeline cards connecting Anne Frank's personal story to broader historical events."
                type="Activity"
                downloadUrl="#"
              />
              
              <ResourceCard 
                title="Anne Frank Virtual Museum Visit"
                description="Guide for conducting a virtual classroom visit to the Anne Frank House museum in Amsterdam."
                type="Virtual Field Trip"
                externalUrl="#"
              />
              
              <ResourceCard 
                title="From Memory to History"
                description="High school curriculum examining how personal accounts like Anne's diary become historical documents."
                type="Curriculum"
                downloadUrl="#"
              />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="activities" className="animate-fade-in">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-semibold">Interactive Activities</h2>
            <p className="text-anne-gray-dark mb-6">
              Engaging activities to help students connect with Anne Frank's story on a personal level
              and explore themes of identity, prejudice, and hope.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <ResourceCard 
                title="Identity & Prejudice Workshop"
                description="Interactive workshop exploring how prejudice affected identity during the Holocaust, with discussion prompts and activities."
                type="Workshop"
                downloadUrl="#"
              />
              
              <ResourceCard 
                title="Dear Kitty: Letter Writing Activity"
                description="Guided reflection activity where students write their own diary entries in response to excerpts from Anne's diary."
                type="Classroom Activity"
                downloadUrl="#"
              />
              
              <ResourceCard 
                title="Secret Annex Floor Plan Activity"
                description="Students create scale models of the Secret Annex to understand the physical constraints of living in hiding."
                type="Hands-on Activity"
                downloadUrl="#"
              />
              
              <ResourceCard 
                title="Holocaust Witness Testimony Project"
                description="Guide for students to research and present testimony from Holocaust survivors in their community."
                type="Research Project"
                downloadUrl="#"
              />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="young-writers" className="animate-fade-in">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-semibold">Young Writers' Corner</h2>
            <p className="text-anne-gray-dark mb-6">
              Resources inspired by Anne Frank's literary aspirations, designed to encourage young people
              to express themselves through writing.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <ResourceCard 
                title="Writing Through Difficult Times"
                description="A guided journal activity helping students use writing as a coping mechanism during challenging periods."
                type="Journal Prompts"
                downloadUrl="#"
              />
              
              <ResourceCard 
                title="Finding Your Voice"
                description="Creative writing exercises inspired by Anne's distinct voice and observational style."
                type="Writing Workshop"
                downloadUrl="#"
              />
              
              <ResourceCard 
                title="Documentary Writing"
                description="Guide for students to document their lives and surroundings in the style of Anne Frank."
                type="Writing Guide"
                downloadUrl="#"
              />
              
              <ResourceCard 
                title="Anne Frank Young Writers' Award"
                description="Information about our annual writing competition for students ages 13-18."
                type="Competition"
                externalUrl="#"
              />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="research" className="animate-fade-in">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-semibold">Scholarly Research</h2>
            <p className="text-anne-gray-dark mb-6">
              Academic resources and primary sources for deeper research into Anne Frank's life,
              writings, and historical context.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <ResourceCard 
                title="The Critical Editions of Anne Frank's Diary"
                description="Scholarly analysis of the different versions of Anne's diary, including her original entries and her revised version."
                type="Academic Paper"
                externalUrl="#"
              />
              
              <ResourceCard 
                title="Holocaust Archives Research Guide"
                description="Guide to accessing primary source materials related to the Holocaust from various archives worldwide."
                type="Research Guide"
                downloadUrl="#"
              />
              
              <ResourceCard 
                title="Oral History Collection"
                description="Transcripts of interviews with people who knew Anne Frank and the other residents of the Secret Annex."
                type="Primary Sources"
                externalUrl="#"
              />
              
              <ResourceCard 
                title="Historical Context Bibliography"
                description="Curated list of scholarly sources on the Holocaust, Jewish life in Amsterdam, and Nazi occupation policies."
                type="Bibliography"
                downloadUrl="#"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-12 p-6 bg-white rounded-lg shadow-md border border-anne-gray-light/30">
        <h2 className="font-serif text-xl font-semibold mb-4">Request Educational Materials</h2>
        <p className="text-anne-gray-dark mb-4">
          We can provide customized educational materials for specific age groups or learning objectives. 
          Please contact us with your requirements.
        </p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-anne-gray-dark mb-1">Name</label>
              <Input id="name" placeholder="Your name" className="focus-visible:ring-anne-sepia" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-anne-gray-dark mb-1">Email</label>
              <Input id="email" type="email" placeholder="Your email" className="focus-visible:ring-anne-sepia" />
            </div>
          </div>
          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-anne-gray-dark mb-1">School/Organization</label>
            <Input id="organization" placeholder="Your school or organization" className="focus-visible:ring-anne-sepia" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-anne-gray-dark mb-1">Request Details</label>
            <textarea 
              id="message" 
              rows={4} 
              className="w-full rounded-md border border-anne-gray-light/40 p-2 focus:outline-none focus:ring-2 focus:ring-anne-sepia"
              placeholder="Please describe the materials you need, including age group and learning objectives"
            ></textarea>
          </div>
          <div className="text-right">
            <button 
              type="submit"
              className="bg-anne-sepia hover:bg-anne-sepia/80 text-white px-4 py-2 rounded-md transition-colors"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EducationalResourcesPage;
