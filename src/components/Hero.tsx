import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Subtle light overlay to brighten the section */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/5 to-transparent" />

      <div className="text-center z-10 max-w-4xl w-full">
        <div className="mb-8 animate-fade-in px-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">
            Daniel Ramsgard
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6">
            Full-Stack Software Engineer & Founder
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Scaling systems from 1.7K to 10M+ requests. Building the future of education technology 
            and space systems with cutting-edge cloud architecture and AI integration.
          </p>
        </div>

        {/* Social buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in px-2">
          <a 
            href="https://github.com/DanielRamsgard" 
            className="flex items-center space-x-2 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <Github className="w-5 h-5 text-white" />
            <span className="text-white font-medium">GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/daniel-ramsgard-28b196284/" 
            className="flex items-center space-x-2 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <Linkedin className="w-5 h-5 text-white" />
            <span className="text-white font-medium">LinkedIn</span>
          </a>
          <a 
            href="mailto:dramsgard@gmail.com" 
            className="flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Contact</span>
          </a>
        </div>

        {/* Availability */}
        <div className="animate-fade-in px-2">
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
