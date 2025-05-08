
import { Github, Linkedin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-darkcard border-t border-gray-800">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold mb-2">
              <span className="text-white">Varad</span>
              <span className="text-highlight">Arsul</span>
            </div>
            <p className="text-gray-400 text-sm">Aspiring Software Developer | Computer Engineer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com/in/varad-arsul-a731a6291" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bg-darkbg p-2 rounded-full hover:bg-highlight/10 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-highlight" />
            </a>
            <a 
              href="https://github.com/Varadarsul" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="bg-darkbg p-2 rounded-full hover:bg-highlight/10 transition-colors"
            >
              <Github className="w-5 h-5 text-gray-400 hover:text-highlight" />
            </a>
            <a 
              href="https://leetcode.com/u/varadarsul11" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="bg-darkbg p-2 rounded-full hover:bg-highlight/10 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-gray-400 hover:text-highlight" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Varad Arsul. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <a href="#home" className="text-gray-400 hover:text-white text-sm transition-colors">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
