
import { Github, Linkedin, ExternalLink, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-darkbg relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,59,48,0.1)_0%,rgba(0,0,0,0)_80%)]"></div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="animate-fade-in z-10">
          <h2 className="text-gray-400 mb-2 uppercase tracking-wider font-mono">Hello, I'm</h2>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Varad<br/>
            <span className="text-highlight">Arsul</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            Aspiring Software Developer | Computer Engineer | Tech Enthusiast
          </p>
          
          <p className="text-gray-400 max-w-md mb-8">
            A passionate and self-motivated Computer Engineering student with a strong foundation 
            in programming, data structures, and web development.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="https://linkedin.com/in/varad-arsul-a731a6291" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="flex items-center gap-2 border-gray-700 hover:border-highlight hover:bg-darkcard">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </Button>
            </a>
            <a href="https://github.com/Varadarsul" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="flex items-center gap-2 border-gray-700 hover:border-highlight hover:bg-darkcard">
                <Github size={18} />
                <span>GitHub</span>
              </Button>
            </a>
            <a href="https://leetcode.com/u/varadarsul11" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="flex items-center gap-2 border-gray-700 hover:border-highlight hover:bg-darkcard">
                <ExternalLink size={18} />
                <span>LeetCode</span>
              </Button>
            </a>
            <a href="https://drive.google.com/file/d/1urVsupG958-5J4gfvlDtdJwGxDrk7QOW/view?usp=drive_link" download>
              <Button className="flex items-center gap-2 bg-highlight hover:bg-highlight/90">
                <Download size={18} />
                <span>Download CV</span>
              </Button>
            </a>
          </div>
          
          <div>
            <a href="#about" className="text-gray-400 flex items-center gap-2 hover:text-highlight transition-colors duration-300">
              Scroll to learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-pulse">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="relative hidden md:block">
          {/* Placeholder for profile image */}
          <div className="w-[400px] h-[500px] bg-darkcard rounded-full overflow-hidden">
            <img
               src="/lovable-uploads/i3.jpg" // <-- Replace with your image path
               alt="Profile"
               className="w-full h-full object-cover"
                />
            <div className="w-full h-full flex items-center justify-center text-gray-500">
            </div>
            
            {/* Design elements */}
            <div className="absolute -top-8 -right-4 w-32 h-32 bg-highlight/10 rounded-full backdrop-blur-md"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-highlight/5 rounded-full backdrop-blur-md"></div>
          </div>
          
          {/* Tech grid pattern */}
          <div className="absolute -z-10 inset-0 grid grid-cols-4 grid-rows-4 opacity-20">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="border border-gray-800"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
