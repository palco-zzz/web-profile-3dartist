import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Box } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled || !isHome ? 'bg-background/90 backdrop-blur-md border-b border-surfaceHighlight py-3' : 'bg-transparent py-5'
  }`;

  const linkClasses = "text-textMain hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider";

  const scrollToSection = (id: string) => {
    if (!isHome) {
      // If not home, we can't scroll to ID easily without complex routing logic or context.
      // For this simple portfolio, we'll just link to home.
      return; 
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white z-50">
          <Box className="text-primary" />
          <span>ALEX<span className="text-primary">.3D</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {isHome ? (
            <>
              <button onClick={() => scrollToSection('work')} className={linkClasses}>Work</button>
              <button onClick={() => scrollToSection('skills')} className={linkClasses}>Skills</button>
              <button onClick={() => scrollToSection('about')} className={linkClasses}>About</button>
            </>
          ) : (
            <Link to="/" className={linkClasses}>Back to Portfolio</Link>
          )}
          <a 
            href="mailto:alex@example.com" 
            className="px-5 py-2 bg-primary text-white font-semibold rounded hover:bg-blue-600 transition-colors text-sm"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-textMain z-50 focus:outline-none"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-background flex flex-col items-center justify-center gap-8 text-xl transition-transform duration-300 transform md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {isHome ? (
             <>
              <button onClick={() => scrollToSection('work')}>Work</button>
              <button onClick={() => scrollToSection('skills')}>Skills</button>
              <button onClick={() => scrollToSection('about')}>About</button>
             </>
          ) : (
             <Link to="/">Back to Portfolio</Link>
          )}
           <a href="mailto:alex@example.com" className="text-primary">Get in Touch</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;