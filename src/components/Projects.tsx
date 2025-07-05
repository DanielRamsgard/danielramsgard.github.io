import React from 'react';
import { Code, Github, Projector } from 'lucide-react';
import handleClickNav from '../functions.tsx/handleClickNav';

const Projects = () => {
  const projects = [
    {
      title: "Microservices E-Commerce Store",
      description: "Full-stack e-commerce platform with microservices architecture, featuring AWS cloud integration and containerized deployment.",
      link: "https://dac235ohvwvlv.cloudfront.net/",
      technologies: ["FastAPI", "React.js", "MySQL", "Nginx", "Uvicorn", "Docker", "Railway", "AWS"],
      highlights: [
        "Leveraged AWS S3 and CloudFront for rapid content delivery",
        "Utilized AWS ECS for container orchestration",
        "Integrated SendGrid Email API for payment notifications",
        "MySQL database for order management"
      ]
    },
    {
      title: "Microservices Travel Booking Site",
      description: "Comprehensive travel booking platform with extensive location database and real-time flight/hotel search capabilities.",
      link: "https://d38aezgot1todg.cloudfront.net/",
      technologies: ["Flask", "React.js", "MongoDB", "Railway", "AWS Lambda", "API Gateway", "S3", "CloudFront"],
      highlights: [
        "Query over 148,000 locations and 6,700 airports",
        "Real-time flight and hotel booking across multiple sites",
        "MongoDB for scalable user booking data storage",
        "Serverless architecture with AWS Lambda functions"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div onClick={(e) => handleClickNav(e, project.link)} key={index} className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105" style={{ cursor: "pointer" }}>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <Projector className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-gray-300 text-sm">
                      <div className="w-1 h-1 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                    {tech}
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

export default Projects;