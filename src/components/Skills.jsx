import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="skills" className="relative py-28 md:py-36 overflow-hidden bg-zinc-50 dark:bg-[#030014]/50 light:bg-[#f8fafc]/50 transition-colors duration-500">
      {/* Ambient background glows */}
      <div className="ambient-glow ambient-cyan left-[5%] bottom-[10%] w-[450px] h-[450px] pointer-events-none" />
      <div className="absolute inset-0 bg-transparent dark:bg-[#030014]/40 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          {/* Section Tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-[0.2em] text-accent-cyan uppercase mb-3 text-glow-cyan"
          >
            02 // SECURE ARMORY
          </motion.div>

          {/* Main Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-zinc-950 dark:text-white tracking-tight mb-8"
          >
            Backend & Cloud{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-emerald">
              Architecture Stack
            </span>
          </motion.h2>

          {/* Tab Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-1 p-2 bg-zinc-150 dark:bg-white/5 border border-zinc-200 dark:border-white/5 rounded-2xl backdrop-blur-md max-w-4xl"
          >
            {skillCategories.map((category, idx) => (
              <button
                key={category.title}
                onClick={() => setActiveTab(idx)}
                className={`relative px-4 py-2.5 rounded-xl text-[10px] md:text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  activeTab === idx 
                    ? 'text-zinc-950 dark:text-white' 
                    : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
                }`}
              >
                {activeTab === idx && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-accent-cyan/15 to-accent-emerald/15 dark:from-accent-cyan/20 dark:to-accent-emerald/20 border border-accent-cyan/20 dark:border-accent-cyan/30 rounded-xl"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{category.title}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Tab Content Panels */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
          >
            {/* Display category info card */}
            <motion.div variants={itemVariants} className="lg:col-span-4 h-full">
              <SpotlightCard 
                className="p-8 flex flex-col justify-between h-full bg-zinc-100/50 dark:bg-gradient-to-br dark:from-white/[0.03] dark:to-transparent border border-zinc-200 dark:border-space-border"
                glowColor="rgba(6, 182, 212, 0.15)"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center mb-6">
                    <span className="text-xl font-mono text-accent-cyan font-bold">0{activeTab + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-white tracking-wide mb-4">
                    {skillCategories[activeTab].title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    {skillCategories[activeTab].description}
                  </p>
                </div>
                <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-650 mt-12 uppercase tracking-[0.2em] text-left">
                  SYSTEM_INTEGRITY_INDEX_99.98%
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Display list of skills */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories[activeTab].skills.map((skill) => {
                const IconComponent = skill.icon;
                
                return (
                  <motion.div 
                    key={skill.name} 
                    variants={itemVariants}
                    whileHover={{ scale: 1.01 }}
                  >
                    <SpotlightCard 
                      className="p-5 flex flex-col justify-between h-full bg-zinc-50 dark:bg-space-card border border-zinc-200 dark:border-space-border"
                      glowColor={`${skill.color}20`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3.5">
                          <div 
                            className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-white/5 flex items-center justify-center border border-zinc-200 dark:border-white/5 transition-colors duration-300 group-hover:bg-zinc-200 dark:group-hover:bg-white/10"
                            style={{ color: skill.color }}
                          >
                            <IconComponent className="text-lg" />
                          </div>
                          <span className="text-sm font-bold tracking-wide text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-bold font-mono text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-white transition-colors duration-300">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Meter */}
                      <div className="w-full h-1.5 bg-zinc-200 dark:bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(to right, ${skill.color}80, ${skill.color})`,
                            boxShadow: `0 0 10px ${skill.color}40`
                          }}
                        />
                      </div>
                    </SpotlightCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
