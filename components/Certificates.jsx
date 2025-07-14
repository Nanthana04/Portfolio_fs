import React from 'react';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'Machine Learning with Python',
      issuer: 'IBM',
      platform: 'Coursera',
      year: '2025',
      status: 'completed',
      description: 'Comprehensive course covering machine learning algorithms, data preprocessing, model evaluation, and practical implementation using Python libraries.',
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'Scikit-learn', 'Pandas', 'NumPy'],
      credentialId: 'IBM-ML-2025-001',
      verificationUrl: '#'
    },
    {
      title: 'The Complete Full Stack Web Development',
      issuer: 'Udemy',
      platform: 'Udemy',
      year: 'In Progress',
      status: 'in-progress',
      description: 'Comprehensive full-stack development course covering frontend and backend technologies, databases, and deployment strategies.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Express.js'],
      credentialId: 'UDEMY-FSWD-2024-002',
      verificationUrl: '#',
      progress: 75
    }
  ];

  const getStatusBadge = (status) => {
    if (status === 'completed') {
      return (
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
          <CheckCircle size={16} className="mr-1" />
          Completed
        </span>
      );
    } else {
      return (
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          In Progress
        </span>
      );
    }
  };

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Certificates</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{cert.title}</h3>
                    <p className="text-gray-600">by <span className="font-semibold">{cert.issuer}</span></p>
                  </div>
                </div>
                <a
                  href={cert.verificationUrl}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Status and Date */}
              <div className="flex items-center justify-between mb-4">
                {getStatusBadge(cert.status)}
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar size={16} className="mr-1" />
                  {cert.year}
                </div>
              </div>

              {/* Progress Bar (for in-progress certificates) */}
              {cert.status === 'in-progress' && cert.progress && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{cert.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${cert.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Platform */}
              <div className="mb-4">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {cert.platform}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Skills Acquired:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Credential ID */}
              <div className="text-xs text-gray-500">
                Credential ID: {cert.credentialId}
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Certificates;