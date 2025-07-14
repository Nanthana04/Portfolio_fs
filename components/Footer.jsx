import React from 'react';
import { Heart, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: '#',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      href: '#',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:nanthanasaravanan04@gmail.com',
      label: 'Email'
    },
    {
      icon: <Phone size={20} />,
      href: 'tel:8489441010',
      label: 'Phone'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Nanthana S V</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Computer & Communication Engineering Student passionate about technology, 
              innovation, and creating impactful solutions. Currently pursuing B.Tech 
              and actively seeking opportunities in software development and IoT.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="font-medium">Email</p>
                <a 
                  href="mailto:nanthanasaravanan04@gmail.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  nanthanasaravanan04@gmail.com
                </a>
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <a 
                  href="tel:8489441010"
                  className="hover:text-white transition-colors duration-300"
                >
                  8489441010
                </a>
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p>Hosur, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Nanthana S V. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="text-red-500 mx-1" size={16} /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;