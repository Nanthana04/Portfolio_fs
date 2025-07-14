import React from 'react';
import { Code, Database, Cpu, Globe } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "Programming",
      description: "Proficient in Python, C/C++, and web technologies"
    },
    {
      icon: <Database className="text-teal-600" size={24} />,
      title: "Database Management",
      description: "Experience with SQL, DBMS, and data structures"
    },
    {
      icon: <Cpu className="text-orange-600" size={24} />,
      title: "Embedded Systems",
      description: "Arduino programming and IoT development"
    },
    {
      icon: <Globe className="text-purple-600" size={24} />,
      title: "Web Development",
      description: "Full-stack development with modern frameworks"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about technology and innovation, I'm dedicated to creating impactful solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Aspiring tech enthusiast pursuing B.Tech in Computer and Communication Engineering 
                with hands-on experience in Python, C, SQL, DBMS, Embedded Systems, and Data Structures. 
                Passionate about building smart solutions through Web Development and IoT, with a strong 
                foundation in both software and hardware domains.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Eager to contribute, learn, and grow in dynamic tech environments while creating 
                innovative solutions that make a difference.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">8.05</div>
                <div className="text-gray-600">Current CGPA</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">3+</div>
                <div className="text-gray-600">Major Projects</div>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What I Bring</h3>
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600">
                      {highlight.description}
                    </p>
                  </div>
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