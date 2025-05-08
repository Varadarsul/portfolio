
import { Code, Database, Layout } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6 text-highlight" />,
      skills: ["Python", "C", "JavaScript", "Java", "SQL"]
    },
    {
      title: "Frameworks/Technologies",
      icon: <Layout className="w-6 h-6 text-highlight" />,
      skills: ["React", "MongoDB", "Express", "HTML5", "CSS3", "Bootstrap"]
    },
    {
      title: "Developer Tools",
      icon: <Database className="w-6 h-6 text-highlight" />,
      skills: ["VS Code", "PyCharm", "IntelliJ", "Canva", "Git", "GitHub"]
    },
    {
      title: "Soft Skills",
      icon: <Code className="w-6 h-6 text-highlight" />,
      skills: ["Problem-solving", "Communication", "Team collaboration", "Time management"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-darkbg">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="section-heading text-3xl font-bold mb-8">Skills</h2>
          <div className="w-20 h-1 bg-highlight mb-8"></div>
          <p className="text-gray-400 max-w-2xl">
            My technical skills and competencies span various programming languages, 
            frameworks, and tools.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-darkcard p-8 rounded-lg border border-gray-800">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-medium ml-3 text-white">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="skill-card flex items-center px-4 py-3 rounded-md border border-gray-800"
                  >
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-medium mb-8 text-center text-white">Skills Proficiency</h3>
          
          <div className="grid gap-6 max-w-3xl mx-auto">
            {[
              { name: "Frontend Development", level: 85 },
              { name: "Backend Development", level: 70 },
              { name: "Data Structures & Algorithms", level: 80 },
              { name: "Database Management", level: 75 },
              { name: "UI/UX Design", level: 65 }
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-highlight">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-highlight h-full rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
