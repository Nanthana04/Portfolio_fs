import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    'Computer & Communication Engineering Student',
    'Full Stack Developer',
    'Python Developer',
    'IoT Enthusiast'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-40 h-40 mx-auto mb-6 relative group">
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300 p-2">
              <img 
                src="/Nanthana_photo.jpg" 
                alt="Nanthana S V" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 animate-fade-in">
            Nanthana S V
          </h1>
          
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Aspiring tech enthusiast with hands-on experience in Python, C, SQL, DBMS, 
            Embedded Systems, and Data Structures. Passionate about building smart solutions 
            through Web Development and IoT.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300">
              <Phone size={18} />
              <span>8489441010</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300">
              <Mail size={18} />
              <span>nanthanasaravanan04@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300">
              <MapPin size={18} />
              <span>Hosur, Tamil Nadu</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Learn More About Me
              <ChevronDown size={20} />
            </button>
            
            <a
              href="/resume.pdf"
              download
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
          <div className="flex justify-center gap-4 pt-8">
            <a
              href="https://github.com/Nanthana04"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/nanthana-s-v-667b30294/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:nanthanasaravanan04@gmail.com"
              className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;