import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaServer, FaShieldAlt, FaDatabase } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

const categories = ['All', 'APIs & Core', 'Security & OAuth', 'Enterprise Systems'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'APIs & Core') {
      return project.title.includes('Engine') || project.title.includes('Monitor');
    }
    if (activeCategory === 'Security & OAuth') {
      return project.title.includes('Identity') || project.authMethod.includes('JWT');
    }
    if (activeCategory === 'Enterprise Systems') {
      return project.title.includes('Academic') || project.title.includes('Engine');
    }
    return true;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="projects" className="relative py-28 md:py-36 overflow-hidden bg-white dark:bg-[#030014] light:bg-[#f8fafc] text-zinc-800 dark:text-zinc-200 transition-colors duration-500">
      {/* Glow Spots */}
      <div className="ambient-glow ambient-purple left-[-10%] top-[40%] w-[500px] h-[500px] pointer-events-none" />
      <div className="ambient-glow ambient-cyan right-[-10%] top-[20%] w-[500px] h-[500px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          {/* Section Tag */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.2em] text-accent-purple uppercase mb-3 text-glow-purple"
          >
            03 // REPOSITORIES SHOWCASE
          </motion.div>

          {/* Main Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-zinc-950 dark:text-white tracking-tight mb-8"
          >
            Backend & Systems{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-indigo">
              Engineering Work
            </span>
          </motion.h2>

          {/* Filter Categories */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center p-1.5 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5 rounded-2xl backdrop-blur-md"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'text-zinc-950 dark:text-white' 
                    : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeProjTab"
                    className="absolute inset-0 bg-gradient-to-r from-accent-purple/15 to-accent-indigo/15 dark:from-accent-purple/20 dark:to-accent-indigo/20 border border-accent-purple/20 dark:border-accent-purple/30 rounded-xl"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                className="group h-full"
              >
                <SpotlightCard 
                  className="h-full flex flex-col bg-zinc-50 dark:bg-space-card hover:bg-zinc-100 dark:hover:bg-space-cardHover border border-zinc-200 dark:border-space-border"
                  glowColor="rgba(168, 85, 247, 0.18)"
                >
                  {/* Visual Background image overlay */}
                  <div className="relative aspect-video w-full overflow-hidden border-b border-zinc-200 dark:border-white/5">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:filter group-hover:brightness-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 dark:from-[#030014] via-transparent to-transparent opacity-80" />
                    
                    <span className="absolute top-4 right-4 text-[9px] font-mono tracking-wider bg-zinc-950/85 border border-white/10 px-3 py-1 rounded-full text-zinc-300">
                      {project.subtitle}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow justify-between text-left">
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-zinc-950 dark:text-white tracking-tight mb-3 group-hover:text-accent-purple transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Backend Diagnostics Specifications Details */}
                      <div className="rounded-xl bg-[#05021a] border border-white/5 p-4 mb-6 font-mono text-[11px] leading-relaxed space-y-2 text-zinc-400">
                        <div className="flex items-start gap-2">
                          <FaServer className="text-accent-cyan mt-0.5 flex-shrink-0" />
                          <div><span className="text-zinc-500 font-bold">API Features:</span> <span className="text-white">{project.apiFeatures}</span></div>
                        </div>
                        <div className="flex items-start gap-2">
                          <FaShieldAlt className="text-accent-purple mt-0.5 flex-shrink-0" />
                          <div><span className="text-zinc-500 font-bold">Auth Method:</span> <span className="text-white">{project.authMethod}</span></div>
                        </div>
                        <div className="flex items-start gap-2">
                          <FaDatabase className="text-accent-emerald mt-0.5 flex-shrink-0" />
                          <div><span className="text-zinc-500 font-bold">Database:</span> <span className="text-white">{project.database}</span></div>
                        </div>
                      </div>
                    </div>

                    <div>
                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="text-[10px] font-bold font-mono tracking-wide px-2.5 py-1 rounded-md bg-zinc-200 dark:bg-white/5 border border-zinc-300 dark:border-white/5 text-zinc-600 dark:text-zinc-400 group-hover:border-accent-purple/20 group-hover:text-zinc-800 dark:group-hover:text-zinc-300 transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links Buttons */}
                      <div className="flex items-center gap-3">
                        <a 
                          href={project.liveUrl} 
                          className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-zinc-200 dark:bg-white/5 border border-zinc-300 dark:border-white/10 text-zinc-800 dark:text-white hover:bg-accent-purple hover:border-accent-purple hover:text-white shadow-inner transition-all duration-300"
                        >
                          <FaExternalLinkAlt className="text-[10px]" />
                          Endpoint Docs
                        </a>
                        <a 
                          href={project.githubUrl} 
                          className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold border border-zinc-300 dark:border-white/10 text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-white/20 transition-all duration-300"
                        >
                          <FaGithub className="text-xs" />
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
