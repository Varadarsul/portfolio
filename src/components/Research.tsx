
import { FileText, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Research = () => {
  const certifications = [
    {
      name: "Foundation Of Cybersecurity",
      provider: "Coursera",
      date: "April 2024",
      link: "https://drive.google.com/file/d/1A2AQaHUUBIuamwLilBghDoztGTxQBl34/view?usp=drive_link"
    },
    {
      name: "Python",
      provider: "Udemy",
      date: "January 2024",
      link: "#"
    },
    {
      name: "Research Publication Certificate",
      provider: "IJARCCE",
      date: "April 2025",
      link: "https://drive.google.com/file/d/1cxomCNi2YugYQL7GEcYYIT5Ngx2nAtUq/view?usp=drive_link"
    }
  ];

  return (
    <section id="research" className="py-20 bg-darkcard">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="section-heading text-3xl font-bold mb-8">Research & Certifications</h2>
          <div className="w-20 h-1 bg-highlight mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="flex items-center text-xl font-medium mb-6 text-white">
              <FileText className="mr-2 text-highlight" />
              Published Research
            </h3>
            
            <Card className="bg-darkbg border border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Attendance Using Facial Recognition</CardTitle>
                <CardDescription className="text-gray-400">IJARCCE, April 2025</CardDescription>
              </CardHeader>
              
              <CardContent className="text-gray-300">
                <p>
                  A comprehensive study on implementing facial recognition technology for automated
                  attendance systems in educational institutions.
                </p>
                <p className="mt-4 text-gray-400 text-sm">
                  DOI: 10.17148/IJARCCE.2025.14435
                </p>
              </CardContent>
              
              <CardFooter>
                <a 
                  href="https://ijarcce.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-highlight hover:text-highlight/80 transition-colors text-sm flex items-center"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  View Publication
                </a>
              </CardFooter>

              <CardFooter>
                <a 
                  href="https://drive.google.com/file/d/15QvBmnrZDJtAwfJzGaT80Jnx16KnJ5I_/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-highlight hover:text-highlight/80 transition-colors text-sm flex items-center"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  View Paper
                </a>
              </CardFooter>
            </Card>
            
            <div className="mt-8">
              <p className="text-gray-400">
                My research focuses on practical applications of technology to solve real-world problems, 
                with a particular interest in computer vision and machine learning applications.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="flex items-center text-xl font-medium mb-6 text-white">
              <Award className="mr-2 text-highlight" />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-darkbg p-6 rounded-lg border border-gray-800">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="text-white font-medium">{cert.name}</h4>
                      <p className="text-highlight">{cert.provider}</p>
                    </div>
                    <span className="text-gray-400 text-sm">{cert.date}</span>
                  </div>
                  
                  <div className="mt-4">
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      View Certificate
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-highlight/10 rounded-lg border border-highlight/20">
              <h4 className="text-white font-medium mb-2">Continuous Learning</h4>
              <p className="text-gray-300">
                I'm committed to continuous learning and regularly take online courses to expand my knowledge and stay 
                updated with the latest technologies and industry best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
