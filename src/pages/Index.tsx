
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Research from '@/components/Research';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-darkbg text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Research />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
