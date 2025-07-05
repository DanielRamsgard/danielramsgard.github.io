import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import handleClickNav from '../functions/handleClickNav';

const Experience = () => {
  const experiences = [
    {
      company: "GoValuate LLC",
      position: "Head Software Engineer, Founder",
      location: "Chapel Hill, NC",
      period: "Jul 2024 – Present",
      type: "On-site",
      link: "https://www.govaluate.com/",
      highlights: [
        "Scaled from 1.7k to 10M+ requests (270+ users, 10k+ answers graded, 18k+ code runs)",
        "Managed 3,000+ Cloud Deployments and 6,000+ GitHub Contributions",
        "Built Edtech SaaS via FastAPI, React.js, and comprehensive AWS architecture",
        "Improved autograder performance by 97% with optimized Docker pipeline",
        "Implemented real-time WebSocket communication and AI-powered grading"
      ]
    },
    {
      company: "LSAS Tec",
      position: "Software Engineer Intern",
      location: "Skaneateles, NY",
      period: "May 2025 – Present",
      type: "Remote",
      link: "https://www.lsas-tec.com/",
      highlights: [
        "Served clients including NASA, Blue Origin, and global space agencies",
        "Built Go (Echo) systems with Auth0/GCP/OAuth 2.0 authentication",
        "Architected scalable PAT authentication and Redis rate limiting",
        "Developed React.js/WebSocket/Cesium.js satellite visualization tools",
        "Created thread-safe WebSocket system with concurrent broadcasting"
      ]
    },
    {
      company: "UNC Bai Lab",
      position: "Software Engineer Intern",
      location: "Chapel Hill, NC",
      period: "Oct 2023 – Jan 2025",
      type: "On-site",
      link: "https://doi.org/10.1126/sciadv.adq9358",
      highlights: [
        "Published paper in Science Advances with 4,000+ downloads",
        "Co-authored research on near-infrared spectroscopy biomechanics mapping",
        "Advanced skin diagnostic device PCB and C++ firmware development",
        "Achieved 58% success rate in cancer/abnormal skin detection"
      ]
    },
    {
      company: "Scale AI",
      position: "Software Engineer Intern",
      location: "Skaneateles, NY",
      period: "May 2024 – Jul 2024",
      type: "Remote",
      link: "https://scale.com/",
      highlights: [
        "Designed training data for OpenAI's ChatGPT model",
        "Created REST-API-focused datasets for Large Language Models",
        "Worked with Python, C, and Java for data curation and processing"
      ]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div onClick={(e) => handleClickNav(e, exp.link)} key={index} className="group relative" style={{ cursor: "pointer" }}>
              <div className="absolute left-4 top-8 w-px h-full bg-gradient-to-b from-blue-400 to-purple-400 group-last:hidden"></div>
              <div className="absolute left-2 top-8 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-slate-900"></div>
              
              <div className="ml-12 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                    <h4 className="text-lg text-blue-400 font-semibold">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col md:items-end space-y-1 mt-2 md:mt-0">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location} • {exp.type}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;