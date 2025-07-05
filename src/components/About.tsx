import React from 'react';
import { Code, Users, Briefcase } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: "Lines of Code", value: "100K+" },
    { icon: Users, label: "Users Served", value: "270+" },
    { icon: Briefcase, label: "Years Experience", value: "3+" }
  ];

  return (
    <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate software engineer and entrepreneur currently pursuing my B.S. in Computer Science 
              at UNC Chapel Hill with a 3.98 GPA. As the founder of GoValuate LLC, I've scaled educational 
              technology from serving hundreds to millions of requests.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My experience spans from building AI-powered autograding systems to developing satellite-rocket 
              visualization tools for space agencies including NASA and Blue Origin. I specialize in 
              cloud-native architectures, microservices, and full-stack development.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me working on side projects, researching cutting-edge technologies, or learning from fellow developers in the community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;