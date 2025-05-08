
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useState, useRef } from "react";

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const projects = [
    {
      title: "Attendance Using Facial Recognition",
      description: "A real-time attendance system that utilizes facial recognition technology to record student attendance automatically. Published in IJARCCE.",
      image: "lovable-uploads/attendance using face recognition.png",
      technologies: ["Flask", "OpenCV", "Python", "Machine Learning"],
      githubLink: "https://github.com/Varadarsul",
    },
    {
      title: "Motion Detection Alarm System",
      description: "A surveillance system that detects motion and sends alerts in real-time, enhancing security monitoring capabilities.",
      image: "lovable-uploads/motion detection alarm.png",
      technologies: ["Python", "Tkinter", "OpenCV", "Notification API"],
      githubLink: "https://github.com/Varadarsul",
    },
    {
      title: "Blockchain-Based Ticket Master",
      description: "A secure ticketing system leveraging blockchain technology to prevent fraud and ensure ticket authenticity.",
      image: "lovable-uploads/ticketmaster.png",
      technologies: ["Ethereum", "MetaMask", "Solidity", "Web3.js"],
      githubLink: "https://github.com/Varadarsul",
    },
    {
      title: "Movie Recommendation System",
      description: "A content-based filtering application that provides personalized movie suggestions based on user preferences.",
      image: "lovable-uploads/movie recommendation system.png",
      technologies: ["Streamlit", "Scikit-learn", "Python", "Data Analysis"],
      githubLink: "https://github.com/Varadarsul",
    },
    {
      title: "Covid 19 Tracker",
      description: "Displays real-time global and country-wise COVID-19 stats with charts and maps for easy data visualization.",
      image: "lovable-uploads/covid 19 tracker.png",
      technologies: ["HTML", "API", "CSS", "JavaScript","Chart.js", "Leaflet.js" ],
      githubLink: "https://github.com/Varadarsul",
    },
    {
      title: "To Do List Web App",
      description: "A simple web app to add, delete, and manage daily tasks with a clean, responsive user interface.",
      image: "lovable-uploads/to do list web app.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/Varadarsul",
    },
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-20 bg-darkcard">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="section-heading text-3xl font-bold mb-8">Projects</h2>
          <div className="w-20 h-1 bg-highlight mb-8"></div>
          <p className="text-gray-400 max-w-2xl">
            Here are some of the projects I've worked on, showcasing my technical skills and problem-solving abilities.
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation Arrows */}
          {showLeftArrow && (
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-darkbg rounded-full p-2 shadow-lg opacity-80 hover:opacity-100 transition-opacity"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}
          
          {showRightArrow && (
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-darkbg rounded-full p-2 shadow-lg opacity-80 hover:opacity-100 transition-opacity"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}
          
          {/* Projects Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="grid grid-flow-col auto-cols-[minmax(280px,350px)] gap-6 overflow-x-auto pb-8 scrollbar-none snap-x scroll-px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="card-hover bg-darkbg border border-gray-800 overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] h-full snap-center"
              >
                <div className="h-48 bg-gray-800 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-60 transition-transform duration-500 hover:opacity-80 hover:scale-110"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="bg-darkcard border-gray-700 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-between">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={16} />
                        Source Code
                      </a>
                    </HoverCardTrigger>
                    <HoverCardContent className="bg-darkbg border-gray-700">
                      <p className="text-sm text-gray-300">View the source code on GitHub</p>
                    </HoverCardContent>
                  </HoverCard>
                  
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
