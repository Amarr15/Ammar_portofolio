import React from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { developerInfo } from '../data/portfolioData';

const Footer = () => {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative py-12 bg-white dark:bg-[#030014] border-t border-zinc-200 dark:border-white/5 transition-colors duration-500 overflow-hidden text-zinc-600 dark:text-zinc-400">
      {/* Decorative neon blur in background */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Logo and tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <a
            href="#home"
            onClick={handleScrollToTop}
            className="text-lg font-black tracking-widest text-zinc-900 dark:text-white"
          >
            AMMAR<span className="text-accent-purple">Yasser</span>
          </a>
          <p className="text-xs text-zinc-400 dark:text-zinc-600">
            Architecting robust, secure enterprise backend systems.
          </p>
        </div>

        {/* Technical Attribution */}
        <div className="text-xs text-zinc-500 dark:text-zinc-500 font-mono">
          Ammar Yasser All Rights Reserved © {new Date().getFullYear()} // C# Core Engine + React & Tailwind
        </div>

        {/* Back to Top */}
        <button
          onClick={handleScrollToTop}
          className="group w-10 h-10 rounded-xl border border-zinc-200 dark:border-white/5 hover:border-accent-purple/40 bg-zinc-50 dark:bg-white/2 hover:bg-accent-purple/15 text-zinc-400 dark:text-zinc-500 hover:text-accent-purple dark:hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
          aria-label="Back to Top"
        >
          <FaChevronUp className="group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
