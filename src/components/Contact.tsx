import React from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import getCurrentYear from '../functions/currentYear';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dramsgard@gmail.com",
      href: "mailto:dramsgard@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Skaneateles, New York",
      href: null
    },
    {
      icon: Github,
      label: "GitHub",
      value: "DanielRamsgard",
      href: "https://github.com/DanielRamsgard"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "DanielRamsgard",
      href: "https://linkedin.com/in/DanielRamsgard"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, innovative projects, 
            and collaborations. Feel free to reach out!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <div key={index} className="group">
              {contact.href ? (
                <a 
                  href={contact.href}
                  className="block p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-black rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">{contact.label}</div>
                      <div className="text-white font-medium">{contact.value}</div>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-black rounded-lg">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">{contact.label}</div>
                      <div className="text-white font-medium">{contact.value}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white font-medium">Open to new opportunities</span>
          </div>
        </div>
        
        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-400">
            © {getCurrentYear()} Daniel Ramsgard. Built with React.ts and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;