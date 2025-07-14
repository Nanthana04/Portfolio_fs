import React from 'react';
import { FolderOpen, ExternalLink, Github, Code, Database, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'CAMPAIGN MANAGEMENT SYSTEM',
      description: 'Developed a user-admin Campaign Management System using Python, Tkinter, and JSON to streamline campaign tracking and donations. Designed an intuitive GUI with dynamic data handling through lists and dictionaries, ensuring efficient user interaction and persistent storage.',
      technologies: ['Python', 'Tkinter', 'JSON', 'GUI Development'],
      category: 'Desktop Application',
      icon: <Code className="text-blue-600" size={24} />,
      features: [
        'User-Admin role management',
        'Campaign tracking system',
        'Donation management',
        'Intuitive GUI design',
        'Data persistence with JSON'
      ]
    },
    {
      title: 'BOUTIQUE MANAGEMENT SYSTEM',
      description: 'Built a dynamic web platform for boutique management with user login functionality using HTML, CSS, and PHP. Integrated MySQL for backend operations and hosted the system on XAMPP. As a DBMS-focused project, it featured well-structured database tables for efficient product, user, and order management.',
      technologies: ['HTML', 'CSS', 'PHP', 'MySQL', 'XAMPP'],
      category: 'Web Application',
      icon: <Database className="text-teal-600" size={24} />,
      features: [
        'User authentication system',
        'Product catalog management',
        'Order processing',
        'MySQL database integration',
        'Responsive web design'
      ]
    },
    {
      title: 'MACHINE FAULT ANALYSIS - NASA BEARING DATASET',
      description: 'Developed a machine fault detection system using the NASA Bearing Dataset, applying machine learning models like SVM, Random Forest, and K-Means to classify bearing health conditions. Performed advanced feature extraction from time and frequency domains, and achieved high fault prediction accuracy through optimized model training and evaluation.',
      technologies: ['Python', 'Machine Learning', 'SVM', 'Random Forest', 'K-Means', 'Data Analysis'],
      category: 'Machine Learning',
      icon: <Brain className="text-purple-600" size={24} />,
      features: [
        'NASA Bearing Dataset analysis',
        'Multiple ML algorithms implementation',
        'Feature extraction techniques',
        'High prediction accuracy',
        'Model optimization'
      ]
    }
  ];

  const getCategoryColor = (category) => {
    const colorMap = {
      'Desktop Application': 'bg-blue-100 text-blue-800',
      'Web Application': 'bg-teal-100 text-teal-800',
      'Machine Learning': 'bg-purple-100 text-purple-800'
    };
    return colorMap[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my technical projects and development experience
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                    <Github size={16} />
                  </button>
                  <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-gray-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-medium hover:bg-blue-200 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Projects;