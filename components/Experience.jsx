import React from 'react';
import { Briefcase, Calendar, MapPin, DollarSign, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Tata Electronics Private Limited',
      position: 'Engineering Intern',
      duration: '1 Month',
      stipend: '₹10,000',
      location: 'India',
      type: 'Internship',
      description: 'Gained valuable industry experience working with one of India\'s leading electronics companies, contributing to real-world projects and enhancing technical skills in a professional environment.',
      achievements: [
        'Worked on real-world electronics projects',
        'Gained hands-on experience in industrial processes',
        'Collaborated with experienced engineers',
        'Enhanced technical and professional skills'
      ],
      technologies: ['Electronics', 'Industrial Processes', 'Team Collaboration', 'Project Management'],
      status: 'completed'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional experience and industry exposure
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column - Company Info */}
                <div className="lg:col-span-1">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Briefcase className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.company}</h3>
                      <p className="text-lg font-semibold text-blue-600 mb-2">{exp.position}</p>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {exp.status === 'completed' ? 'Completed' : 'Current'}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-blue-600" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-blue-600" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign size={16} className="mr-2 text-blue-600" />
                      <span>Stipend: {exp.stipend}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Description & Achievements */}
                <div className="lg:col-span-2">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">About the Role</h4>
                    <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start">
                          <CheckCircle className="text-green-600 mr-3 mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;