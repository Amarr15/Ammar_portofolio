import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { experience } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="experience" className="relative py-28 md:py-36 overflow-hidden bg-[#030014]/30">
      {/* Background neon lights */}
      <div className="ambient-glow ambient-emerald right-[10%] bottom-[20%] w-[400px] h-[400px]" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          {/* Section tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.2em] text-accent-emerald uppercase mb-3 text-glow-emerald"
          >
            04 // THE JOURNEY
          </motion.div>

          {/* Section Main Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4"
          >
            Experience &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-emerald to-accent-cyan animate-pulse-slow">
              Education
            </span>
          </motion.h2>
          <p className="text-zinc-500 text-sm max-w-lg">
            A chronological timeline of my professional accomplishments, engineering positions, and formal academic training.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-accent-emerald via-accent-cyan to-accent-purple/30 z-0 pointer-events-none" />

          {/* Timeline Node List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="space-y-12 md:space-y-16"
          >
            {experience.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isExperience = item.type === 'experience';

              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Glowing Node Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 w-5 h-5 rounded-full bg-[#030014] border-2 border-accent-emerald flex items-center justify-center z-10 shadow-[0_0_15px_rgba(16,185,129,0.6)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-ping" />
                  </div>

                  {/* Spacer Column (Takes half width on desktop) */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Column (Takes other half width) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <SpotlightCard 
                      className="p-6 md:p-8 bg-space-card hover:bg-space-cardHover border border-space-border"
                      glowColor={isExperience ? 'rgba(16, 185, 129, 0.15)' : 'rgba(6, 182, 212, 0.15)'}
                    >
                      {/* Meta Header */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <div className="flex items-center space-x-2.5">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                            isExperience 
                              ? 'bg-accent-emerald/10 text-accent-emerald' 
                              : 'bg-accent-cyan/10 text-accent-cyan'
                          }`}>
                            {isExperience ? <FaBriefcase /> : <FaGraduationCap />}
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-white tracking-wide">
                              {item.role}
                            </h3>
                            <span className="text-xs text-zinc-500 font-medium">
                              {item.company}
                            </span>
                          </div>
                        </div>
                        <span className={`text-[10px] font-mono tracking-wider px-3 py-1 rounded-full border ${
                          isExperience 
                            ? 'border-accent-emerald/20 bg-accent-emerald/5 text-accent-emerald' 
                            : 'border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan'
                        }`}>
                          {item.duration}
                        </span>
                      </div>

                      {/* Details Description */}
                      <p className="text-zinc-400 text-sm leading-relaxed text-left">
                        {item.description}
                      </p>
                    </SpotlightCard>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
