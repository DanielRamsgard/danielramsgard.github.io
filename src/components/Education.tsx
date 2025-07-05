import React from 'react';
import { School, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <School className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  University of North Carolina at Chapel Hill
                </h3>
                <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0">
                  <div className="flex items-center space-x-2 text-blue-400">
                    <span className="font-semibold">B.S. in Computer Science</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>Expected Graduation: Dec 2026</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>Chapel Hill, NC</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-400">3.98</div>
                <div className="text-gray-400 text-sm">GPA</div>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-6">
              <h4 className="text-lg font-semibold text-white mb-4">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Structures and Algorithms",
                  "Distributed Systems", 
                  "Software Engineering",
                  "Web Development",
                  "Databases",
                  "Cryptography",
                  "Design Patterns",
                  "System Fundamentals",
                  "Deep Learning",
                  "Linear Algebra"
                ].map((course, index) => (
                  <span 
                    key={index}
                    className="px-3 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300 text-sm rounded-lg border border-blue-500/30"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;