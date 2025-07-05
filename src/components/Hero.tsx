import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-teal-600/20 animate-pulse"></div>
      
      <div className="text-center z-10 max-w-4xl">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
            Daniel Ramsgard
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Full-Stack Software Engineer & Founder
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Scaling systems from 1.7K to 10M+ requests. Building the future of education technology 
            and space systems with cutting-edge cloud architecture and AI integration.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
          <a 
            href="https://github.com/DanielRamsgard" 
            className="flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <Github className="w-5 h-5 text-white" />
            <span className="text-white font-medium">GitHub</span>
          </a>
          <a 
            href="https://linkedin.com/in/DanielRamsgard" 
            className="flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <Linkedin className="w-5 h-5 text-white" />
            <span className="text-white font-medium">LinkedIn</span>
          </a>
          <a 
            href="mailto:dramsgard@gmail.com" 
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Contact</span>
          </a>
        </div>
        
        <div className="animate-fade-in">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-500/30">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 text-sm font-medium">Available for new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;