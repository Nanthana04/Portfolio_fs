import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: 'AMRITA VISHWA VIDYAPEETHAM',
      location: 'Amritanagar, Ettimadai, Coimbatore, Tamil Nadu',
      degree: 'B.Tech in Computer and Communication Engineering',
      grade: 'CGPA - 8.05',
      year: '2023 - Present',
      status: 'current',
      description: 'Pursuing comprehensive education in computer science and communication engineering with focus on modern technologies and practical applications.'
    },
    {
      institution: 'MAHARISHI VIDYA MANDIR SENIOR SECONDARY SCHOOL',
      location: 'Swami Brahmananda Saraswathi Nagar, SIPCOT, Hosur, Krishnagiri, Tamil Nadu',
      degree: 'Grade 12 (Higher Secondary)',
      grade: '79.2%',
      year: '2023',
      status: 'completed',
      description: 'Completed higher secondary education with strong foundation in science and mathematics.'
    },
    {
      institution: 'THE TITAN SCHOOL',
      location: 'Titan Township, Mathigiri, Hosur, Krishnagiri, Tamil Nadu',
      degree: 'Grade 10 (Secondary)',
      grade: '89.4%',
      year: '2021',
      status: 'completed',
      description: 'Achieved excellent academic performance with strong fundamentals in core subjects.'
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and educational achievements
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-teal-600"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'current' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {edu.status === 'current' ? 'Currently Pursuing' : 'Completed'}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {edu.year}
                      </div>
                    </div>

                    {/* Institution */}
                    <div className="flex items-start mb-3">
                      <GraduationCap className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={24} />
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        {edu.institution}
                      </h3>
                    </div>

                    {/* Location */}
                    <div className="flex items-start mb-4 text-gray-600">
                      <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                      <p className="text-sm">{edu.location}</p>
                    </div>

                    {/* Degree */}
                    <p className="text-lg font-semibold text-gray-800 mb-2">{edu.degree}</p>

                    {/* Grade */}
                    <div className="flex items-center mb-4">
                      <Award className="text-teal-600 mr-2" size={18} />
                      <span className="text-lg font-medium text-teal-600">{edu.grade}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">{edu.description}</p>
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

export default Education;