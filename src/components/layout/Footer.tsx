
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-anne-paper py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Anne Frank: Unveiled Legacy</h3>
            <p className="text-sm text-anne-gray-dark">
              An educational resource dedicated to preserving and sharing Anne Frank's story, 
              fostering education about the Holocaust, and promoting tolerance.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-anne-sepia transition-colors">Home</Link></li>
              <li><Link to="/biography" className="text-sm hover:text-anne-sepia transition-colors">Biography</Link></li>
              <li><Link to="/timeline" className="text-sm hover:text-anne-sepia transition-colors">Timeline</Link></li>
              <li><Link to="/diary" className="text-sm hover:text-anne-sepia transition-colors">Diary</Link></li>
              <li><Link to="/secret-annex" className="text-sm hover:text-anne-sepia transition-colors">Secret Annex</Link></li>
              <li><Link to="/resources" className="text-sm hover:text-anne-sepia transition-colors">Educational Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://www.annefrank.org/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-anne-sepia transition-colors">Anne Frank House</a></li>
              <li><a href="https://www.ushmm.org/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-anne-sepia transition-colors">United States Holocaust Memorial Museum</a></li>
              <li><a href="https://www.yadvashem.org/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-anne-sepia transition-colors">Yad Vashem</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-anne-sepia/20 text-center text-sm text-anne-gray-dark">
          <p>
            This website is dedicated to the memory of Anne Frank (1929-1945) and all victims of the Holocaust. 
            All historical information presented has been carefully researched and vetted by Holocaust scholars.
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} Anne Frank: Unveiled Legacy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
