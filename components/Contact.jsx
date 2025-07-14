import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="text-blue-600" size={24} />,
      title: 'Phone',
      value: '8489441010',
      link: 'tel:8489441010'
    },
    {
      icon: <Mail className="text-teal-600" size={24} />,
      title: 'Email',
      value: 'nanthanasaravanan04@gmail.com',
      link: 'mailto:nanthanasaravanan04@gmail.com'
    },
    {
      icon: <MapPin className="text-purple-600" size={24} />,
      title: 'Location',
      value: 'Hosur, Tamil Nadu, India',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's connect!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                I'm currently pursuing my B.Tech in Computer and Communication Engineering 
                and actively seeking internship opportunities, collaborative projects, and 
                networking with fellow tech enthusiasts. Feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    <p className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <h4 className="font-semibold text-gray-900">Available for Opportunities</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Currently open to internships, part-time projects, and collaborative opportunities 
                in software development, IoT, and machine learning.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="text-green-600 mx-auto mb-4" size={48} />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;