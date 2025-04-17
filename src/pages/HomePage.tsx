
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
            Anne Frank: <span className="text-anne-sepia">Unveiled Legacy</span>
          </h1>
          <p className="text-lg md:text-xl text-anne-gray-dark mb-8 animate-fade-in">
            Explore the extraordinary life and enduring legacy of Anne Frank during the years 
            1942-1944, through her writings, historical context, and impact on our world.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <Button asChild size="lg" className="bg-anne-sepia hover:bg-anne-sepia/80 text-white">
              <Link to="/timeline">
                Explore Timeline
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/biography">Learn About Anne</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <QuoteBlock 
        text="I want to go on living even after my death! And therefore I am grateful to God for giving me this gift, this possibility of developing myself and of writing, of expressing all that is in me."
        source="Anne Frank, April 5, 1944"
        className="max-w-2xl mx-auto"
      />
      
      {/* Featured Sections */}
      <section className="grid md:grid-cols-3 gap-8 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-anne-gray-light/30 text-center">
          <div className="bg-anne-sepia/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="h-6 w-6 text-anne-sepia" />
          </div>
          <h2 className="font-serif text-xl font-semibold mb-3">Diary Excerpts</h2>
          <p className="text-anne-gray-dark mb-4">
            Experience Anne's thoughts and emotions through selected passages from her diary.
          </p>
          <Button asChild variant="outline" className="w-full">
            <Link to="/diary">Read Excerpts</Link>
          </Button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-anne-gray-light/30 text-center">
          <div className="bg-anne-blue/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="h-6 w-6 text-anne-blue" />
          </div>
          <h2 className="font-serif text-xl font-semibold mb-3">Interactive Timeline</h2>
          <p className="text-anne-gray-dark mb-4">
            Follow Anne's journey alongside world events during this pivotal period in history.
          </p>
          <Button asChild variant="outline" className="w-full">
            <Link to="/timeline">View Timeline</Link>
          </Button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-anne-gray-light/30 text-center">
          <div className="bg-anne-hope/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <School className="h-6 w-6 text-anne-hope" />
          </div>
          <h2 className="font-serif text-xl font-semibold mb-3">Educational Resources</h2>
          <p className="text-anne-gray-dark mb-4">
            Access teaching materials, activities, and scholarly resources about Anne Frank.
          </p>
          <Button asChild variant="outline" className="w-full">
            <Link to="/resources">Browse Resources</Link>
          </Button>
        </div>
      </section>
      
      {/* About This Project */}
      <section className="bg-white py-8 px-6 rounded-lg shadow-md border border-anne-gray-light/30 max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl font-semibold mb-4 text-center">About This Project</h2>
        <div className="prose max-w-none text-anne-gray-dark">
          <p>
            "Anne Frank: Unveiled Legacy" is an educational initiative dedicated to preserving and sharing 
            Anne Frank's powerful story during the Holocaust. Our mission is to provide historically 
            accurate information about Anne Frank's life, particularly during the years 1942-1944 
            when she and her family were in hiding in the Secret Annex.
          </p>
          <p>
            Through interactive features, primary source materials, and educational resources, 
            we aim to help visitors understand the historical significance of Anne's diary and 
            the broader context of the Holocaust. Our content has been carefully vetted by Holocaust 
            scholars to ensure accuracy and historical integrity.
          </p>
          <p>
            We invite you to explore Anne's journey, reflect on her words, and consider how her 
            story continues to resonate with people around the world today.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
