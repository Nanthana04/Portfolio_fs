import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ParticleBackground from '../components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;