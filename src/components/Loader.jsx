import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Elegant non-linear speed increase for the loader
    let currentCount = 0;
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 4) + 1;
      currentCount = Math.min(currentCount + increment, 100);
      setCount(currentCount);

      if (currentCount === 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 800); // Faint linger for user appreciation
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100vh',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030014] overflow-hidden"
    >
      {/* Background radial effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Cybernetic geometric lines decoration */}
      <div className="absolute inset-10 border border-white/[0.02] pointer-events-none flex items-center justify-center">
        <div className="w-[80vw] h-[80vh] border border-white/[0.01] flex items-center justify-center">
          <div className="w-[50vw] h-[50vh] border border-white/[0.01] rounded-full" />
        </div>
      </div>

      <div className="relative flex flex-col items-center z-10">
        {/* Glowing Brand text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-extrabold tracking-[0.2em] text-white flex items-center justify-center">
            AMAR<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan">.DEV</span>
          </h1>
        </motion.div>

        {/* Counter Number */}
        <div className="h-28 overflow-hidden flex items-center justify-center">
          <span className="text-8xl md:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 font-mono">
            {count.toString().padStart(3, '0')}
          </span>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-[2px] bg-white/10 rounded-full mt-6 overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-purple via-accent-indigo to-accent-cyan"
            style={{ width: `${count}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        {/* Cyberpunk Status Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-4 text-xs tracking-[0.3em] font-mono text-zinc-500 uppercase"
        >
          {count < 30 ? 'Initializing Matrix...' : count < 70 ? 'Synthesizing Components...' : count < 100 ? 'Calibrating Animators...' : 'Systems Online.'}
        </motion.div>
      </div>

      {/* Cyber details */}
      <div className="absolute bottom-8 left-8 text-[10px] font-mono text-zinc-600 tracking-wider">
        SYS_VER_3.5_STABLE
      </div>
      <div className="absolute bottom-8 right-8 text-[10px] font-mono text-zinc-600 tracking-wider">
        PORTFOLIO_PROJECT_2026
      </div>
    </motion.div>
  );
};

export default Loader;
