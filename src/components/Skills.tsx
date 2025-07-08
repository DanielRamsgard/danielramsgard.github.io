import React from 'react';
import { Code, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "JavaScript", "TypeScript", "Java", "Go (Golang)", "C", "C++", "SQL", "Kotlin", "C#", "HTML/CSS"]
    },
    {
      title: "Web/Native",
      icon: Code,
      skills: ["FastAPI", "Flask", "Django", "Echo", "Node.js", "Express.js", "React.js", "React Native", "Electron", "Tailwind", "Bootstrap"]
    },
    {
      title: "Database & Operations",
      icon: Settings,
      skills: ["DynamoDB", "MongoDB", "PostgreSQL", "MySQL", "Redis", "Nginx", "Uvicorn", "Git", "GitHub", "Docker", "Auth0", "AWS", "GCP"]
    },
    {
      title: "ML & Hardware",
      icon: Settings,
      skills: ["TensorFlow", "Keras", "YOLO", "Matplotlib", "NumPy", "Julia", "ARM", "Raspberry Pi", "Arduino", "Altium", "KiCad"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-black mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-black rounded-lg">
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-2 bg-gradient-to-r from-slate-700 to-slate-600 text-gray-200 text-sm rounded-lg border border-slate-500/30 hover:from-blue-600/20 hover:to-black/20 hover:border-blue-500/30 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;