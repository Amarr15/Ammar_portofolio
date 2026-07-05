import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaSun, FaMoon } from 'react-icons/fa';
import { developerInfo } from '../data/portfolioData';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Theme state defaulting to 'dark'
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    // Default to dark mode
    return 'dark';
  });

  // Apply theme class to document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Monitor scroll for styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Monitor intersection to auto-highlight active section
  useEffect(() => {
    // Only observe in-page hash links (e.g. '#about'), ignore route paths like '/achievements'
    const hashLinks = navLinks.filter(link => link.href && link.href.startsWith('#'));
    const sections = hashLinks.map(link => document.querySelector(link.href)).filter(Boolean);

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          setActiveSection(id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => {
        try { observer.unobserve(section); } catch (e) { /* ignore */ }
      });
    };
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    // If href is a hash for the current page, smooth scroll to section
    if (href.startsWith('#')) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        setIsMobileMenuOpen(false);
        const topOffset = targetElement.offsetTop - 80;
        window.history.replaceState({}, '', '/');
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
        setActiveSection(href.substring(1));
      }
      return;
    }

    // If href is a route path
    if (href.startsWith('/')) {
      setIsMobileMenuOpen(false);
      if (location.pathname !== href) navigate(href);
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection(href.substring(1));
    }
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'py-4 bg-[#030014]/80 dark:bg-[#030014]/85 light:bg-white/80 backdrop-blur-md border-b border-zinc-200/10 dark:border-white/5 light:border-zinc-200 shadow-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Branding */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-2xl font-black tracking-widest text-zinc-900 dark:text-white flex items-center relative group"
          >
            <span className="relative z-10">AMMAR</span>
            <span className="text-accent-purple font-extrabold group-hover:text-accent-cyan transition-colors duration-300">YASSER</span>
            <div className="absolute -inset-2 bg-gradient-to-r from-accent-purple/0 to-accent-cyan/0 group-hover:from-accent-purple/10 group-hover:to-accent-cyan/10 blur rounded-lg transition-all duration-500 pointer-events-none" />
          </a>

          {/* Desktop Nav links */}
          <nav className="hidden md:flex items-center space-x-1 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5 rounded-full p-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const linkId = link.href.substring(1);
              const isActive = activeSection === linkId;
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-5 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-full ${
                    isActive 
                      ? 'text-zinc-900 dark:text-white' 
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-indigo/20 dark:from-accent-purple/30 dark:to-accent-indigo/30 border border-accent-purple/20 dark:border-accent-purple/30 rounded-full z-[-1]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* CTA & Theme switch deck */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark Mode Switcher Button */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 hover:text-accent-purple dark:hover:text-accent-cyan hover:border-accent-purple/30 dark:hover:border-accent-cyan/30 transition-all duration-300 relative overflow-hidden"
              aria-label="Toggle Theme Mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ y: 20, opacity: 0, rotate: 40 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -20, opacity: 0, rotate: -40 }}
                    transition={{ duration: 0.25 }}
                  >
                    <FaSun className="text-amber-400 text-base" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ y: 20, opacity: 0, rotate: 40 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -20, opacity: 0, rotate: -40 }}
                    transition={{ duration: 0.25 }}
                  >
                    <FaMoon className="text-accent-purple text-sm" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide border border-accent-purple/30 dark:border-accent-purple/40 bg-accent-purple/10 text-zinc-900 dark:text-white hover:bg-accent-purple hover:text-white dark:hover:text-white hover:border-accent-purple shadow-sm dark:shadow-glow-purple transition-all duration-300"
            >
              Let's Connect
            </a>
          </div>

          {/* Mobile elements deck */}
          <div className="flex items-center space-x-3 md:hidden">
            {/* Dark Mode switcher for mobile */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-300"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FaSun className="text-amber-400" /> : <FaMoon className="text-accent-purple" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-white/5 text-zinc-700 dark:text-zinc-300 transition-all focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[73px] z-30 p-6 mx-4 rounded-3xl border border-zinc-200 dark:border-white/10 bg-white/95 dark:bg-[#030014]/95 backdrop-blur-xl shadow-lg dark:shadow-glow-purple block md:hidden"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, idx) => {
                const linkId = link.href.substring(1);
                const isActive = activeSection === linkId;

                return (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-3 rounded-xl text-base font-semibold tracking-wide flex items-center transition-all ${
                      isActive 
                        ? 'bg-gradient-to-r from-accent-purple/10 to-accent-indigo/10 dark:from-accent-purple/20 dark:to-accent-indigo/20 border border-accent-purple/20 dark:border-accent-purple/30 text-zinc-900 dark:text-white' 
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-2 w-full py-3.5 rounded-xl text-center font-bold tracking-wide bg-gradient-to-r from-accent-purple to-accent-indigo text-white hover:opacity-90 shadow-md dark:shadow-glow-purple block"
              >
                Let's Connect
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
