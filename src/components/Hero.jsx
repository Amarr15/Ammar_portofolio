import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { developerInfo } from '../data/portfolioData';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = developerInfo.roles;

  // Modern Typing and Erasing effect
  useEffect(() => {
    let timer;
    const currentFullText = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(prev => prev.substring(0, prev.length - 1));
        setTypingSpeed(45);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(prev => currentFullText.substring(0, prev.length + 1));
        setTypingSpeed(110);
      }, typingSpeed);
    }

    if (!isDeleting && displayText === currentFullText) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex(prev => (prev + 1) % roles.length);
      setTypingSpeed(150);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles, typingSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const topOffset = targetElement.offsetTop - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32 grid-bg bg-[#030014] dark:bg-[#030014] light:bg-[#f8fafc] transition-colors duration-500"
    >
      {/* Background spotlights */}
      <div className="ambient-glow ambient-purple top-10 left-[-10%] md:left-[5%] animate-pulse-slow z-0" />
      <div className="ambient-glow ambient-cyan bottom-10 right-[-10%] md:right-[5%] animate-pulse-slow z-0" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text intro */}
          <div className="lg:col-span-7 text-left flex flex-col items-start order-2 lg:order-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start w-full"
            >
              {/* Welcome Tag */}
              <motion.div 
                variants={itemVariants}
                className="px-4 py-1.5 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/5 backdrop-blur-md text-[10px] md:text-xs font-bold tracking-[0.2em] text-zinc-600 dark:text-zinc-300 uppercase mb-6 shadow-sm"
              >
                00 // DATABASE SYSTEMS & BACKEND APIS
              </motion.div>

              {/* Heading Name */}
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-7xl font-black tracking-tight text-zinc-950 dark:text-white mb-5 leading-[1.1]"
              >
                Hi, This is <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-accent-indigo to-accent-cyan">{developerInfo.name}</span>
              </motion.h1>

              {/* Roles typing animation */}
              <motion.div 
                variants={itemVariants}
                className="h-10 md:h-12 flex items-center justify-start mb-6"
              >
                <span className="text-lg md:text-2xl font-semibold tracking-wide text-zinc-500 dark:text-zinc-400">
                  A{' '}
                  <span className="text-zinc-900 dark:text-white font-extrabold font-mono border-r-2 border-accent-purple dark:border-accent-cyan pr-1.5 text-glow-purple dark:text-glow-cyan">
                    {displayText}
                  </span>
                </span>
              </motion.div>

              {/* Bio description */}
              <motion.p 
                variants={itemVariants}
                className="text-zinc-600 dark:text-zinc-400 text-sm md:text-lg leading-relaxed max-w-xl mb-10"
              >
                {developerInfo.bio}
              </motion.p>

              {/* Code-style small visual details */}
              <motion.div
                variants={itemVariants}
                className="hidden md:block font-mono text-[11px] text-zinc-400 dark:text-zinc-500 mb-8 border-l-2 border-accent-purple/30 pl-4 py-1"
              >
                <div><span className="text-accent-purple">GET</span> /api/developer/profile <span className="text-emerald-500">200 OK</span></div>
                <div><span className="text-accent-cyan">Host:</span> amar-api-gateway.net | <span className="text-zinc-500">// C# Core Engine</span></div>
              </motion.div>

              {/* CTAs */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
              >
                <a
                  href="#projects"
                  onClick={(e) => handleScrollTo(e, '#projects')}
                  className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-bold bg-gradient-to-r from-accent-purple to-accent-indigo text-white hover:shadow-glow-purple transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  View Systems Work
                  <HiArrowRight className="text-lg group-hover:translate-x-1.5 transition-transform duration-300" />
                </a>

                <a
                  href="public/ammar.pdf" download

                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-bold border border-zinc-200 dark:border-white/10 hover:border-accent-cyan/40 bg-white/5 dark:bg-white/5 light:bg-zinc-100 hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-800 dark:text-white transition-all duration-300 dark:hover:shadow-glow-cyan transform hover:-translate-y-0.5"
                >
                  Download CV
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Premium Floating Avatar */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]"
            >
              {/* Dynamic slow floating container */}
              <motion.div
                animate={{ y: [-12, 12, -12] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="w-full h-full relative"
              >
                {/* Neon rotating halo overlay in background */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-accent-purple via-accent-indigo to-accent-cyan rounded-3xl opacity-30 blur-2xl animate-spin-slow pointer-events-none" />

                {/* Cyber glassmorphic image frame */}
                <div className="w-full h-full rounded-3xl border border-zinc-200/20 dark:border-white/15 bg-white/5 dark:bg-white/2 backdrop-blur-md p-3 sm:p-4 shadow-2xl flex items-center justify-center">
                  <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                    <img 
                      src={developerInfo.avatarUrl} 
                      alt={developerInfo.name} 
                      className="w-full h-full object-cover rounded-2xl transform group-hover:scale-103 transition-transform duration-500"
                    />
                    
                    {/* Glowing scanning line visual overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-accent-purple/20 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Corner decorative bracket lines */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-accent-cyan opacity-80" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-accent-cyan opacity-80" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-accent-purple opacity-80" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-accent-purple opacity-80" />
                  </div>
                </div>

                {/* Floating micro server labels */}
                <div className="absolute -top-3 -right-4 px-3 py-1 bg-zinc-900/90 text-accent-cyan border border-accent-cyan/20 rounded-md font-mono text-[9px] tracking-widest shadow-lg">
                  IP_ACTIVE
                </div>
                <div className="absolute -bottom-2 -left-4 px-3 py-1 bg-zinc-900/90 text-accent-purple border border-accent-purple/20 rounded-md font-mono text-[9px] tracking-widest shadow-lg">
                  PORT_443 // SECURE
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <a 
          href="#about"
          onClick={(e) => handleScrollTo(e, '#about')}
          className="flex flex-col items-center group cursor-pointer"
          aria-label="Scroll Down"
        >
          <span className="text-[9px] font-mono tracking-[0.3em] text-zinc-500 uppercase group-hover:text-accent-purple transition-colors duration-300 mb-1.5">INITIALIZE EXPLORATION</span>
          <div className="w-5 h-8 border-2 border-zinc-400 dark:border-zinc-600 group-hover:border-accent-purple rounded-full flex justify-center p-1 transition-colors duration-300">
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1 h-2 bg-accent-purple group-hover:bg-accent-cyan rounded-full transition-colors duration-300"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
