import React from 'react';
import { Code, Database, Cpu, Globe, Terminal, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-white" size={24} />,
      skills: ["Python", "C", "C++", "JavaScript", "HTML", "CSS"],
      gradient: "from-blue-500 to-blue-700",
      bgGradient: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200"
    },
    {
      title: "Database & Systems",
      icon: <Database className="text-white" size={24} />,
      skills: ["DBMS", "SQL", "Data Structures", "Operating Systems"],
      gradient: "from-teal-500 to-teal-700",
      bgGradient: "from-teal-50 to-teal-100",
      borderColor: "border-teal-200"
    },
    {
      title: "Hardware & IoT",
      icon: <Cpu className="text-white" size={24} />,
      skills: ["Arduino", "ARM Assembly", "Embedded Systems", "IoT"],
      gradient: "from-indigo-500 to-indigo-700",
      bgGradient: "from-indigo-50 to-indigo-100",
      borderColor: "border-indigo-200"
    },
    {
      title: "Web Technologies",
      icon: <Globe className="text-white" size={24} />,
      skills: ["React", "Node.js", "PHP", "MySQL", "XAMPP"],
      gradient: "from-cyan-500 to-cyan-700",
      bgGradient: "from-cyan-50 to-cyan-100",
      borderColor: "border-cyan-200"
    },
    {
      title: "Tools & Platforms",
      icon: <Terminal className="text-white" size={24} />,
      skills: ["Git", "VS Code", "Jupyter", "Tkinter"],
      gradient: "from-blue-600 to-blue-800",
      bgGradient: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200"
    },
    {
      title: "Machine Learning",
      icon: <Layers className="text-white" size={24} />,
      skills: ["SVM", "Random Forest", "K-Means", "Feature Extraction"],
      gradient: "from-teal-600 to-teal-800",
      bgGradient: "from-teal-50 to-teal-100",
      borderColor: "border-teal-200"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & 
            <span className="text-gradient"> Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of technologies and frameworks I work with to build innovative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-xl border-2 ${category.borderColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group relative overflow-hidden`}
            >
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`bg-gradient-to-r ${category.gradient} text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-default relative overflow-hidden group/skill`}
                      style={{
                        animationDelay: `${skillIndex * 100}ms`
                      }}
                    >
                      <div className="absolute inset-0 bg-white opacity-0 group-hover/skill:opacity-20 transition-opacity duration-300"></div>
                      <span className="relative z-10">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Additional 
            <span className="text-gradient"> Technologies</span>
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8 rounded-full"></div>
          <div className="flex flex-wrap justify-center gap-4">
            {["JSON", "API Development", "Version Control", "Problem Solving", "Team Collaboration", "Project Management"].map((skill, index) => (
              <span
                key={index}
                className="bg-white px-6 py-3 rounded-full text-gray-700 border-2 border-gray-200 hover:border-blue-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-blue-800 transition-all duration-300 cursor-default shadow-md hover:shadow-lg transform hover:-translate-y-1 font-medium"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-full opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
};

export default Skills;