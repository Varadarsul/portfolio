
import { FileText } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-darkbg">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="section-heading text-3xl font-bold mb-8">About Me</h2>
          <div className="w-20 h-1 bg-highlight mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 mb-4">
              I'm Varad Manohar Arsul, a passionate Computer Engineering student with a strong interest in software development 
              and emerging technologies. I thrive on building impactful projects and solving complex problems through code.
            </p>
            
            <p className="text-gray-400 mb-8">
              Currently pursuing my Bachelor's in Computer Engineering, I focus on expanding my knowledge in software development, 
              data structures, and web technologies. I'm constantly learning and experimenting with new technologies to enhance my skill set.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 text-white">Professional Objective</h3>
              <p className="text-gray-400">
                Seeking opportunities in Software Development where I can leverage my technical skills, problem-solving abilities, 
                and passion for innovation to contribute to meaningful projects while continuing to grow as a developer.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4 text-white">Interests</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Software Development</li>
                <li>Learning new technologies</li>
                <li>Project-based problem-solving</li>
                <li>Web Development</li>
                <li>Data Structures & Algorithms</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-6 text-white">Education</h3>
            
            <div className="space-y-8">
              <div className="bg-darkcard p-6 rounded-lg border border-gray-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-white font-medium">B.E. in Computer Engineering</h4>
                    <p className="text-highlight">A.C. Patil College Of Engineering, Navi Mumbai</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-highlight/10 text-highlight text-sm rounded">2021-2025</span>
                  </div>
                </div>
                <p className="mt-2 text-gray-400">CGPA: 7.5</p>
              </div>
              
              <div className="bg-darkcard p-6 rounded-lg border border-gray-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-white font-medium">HSC</h4>
                    <p className="text-highlight">Adarsh Jr College, Buldhana</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-highlight/10 text-highlight text-sm rounded">2020</span>
                  </div>
                </div>
                <p className="mt-2 text-gray-400">83.08%</p>
              </div>
              
              <div className="bg-darkcard p-6 rounded-lg border border-gray-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-white font-medium">ICSE</h4>
                    <p className="text-highlight">St. Ann's School, Beed</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-highlight/10 text-highlight text-sm rounded">2018</span>
                  </div>
                </div>
                <p className="mt-2 text-gray-400">79.83%</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
