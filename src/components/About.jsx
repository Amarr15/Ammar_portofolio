import React from 'react';
import { motion } from 'framer-motion';
import { stats, developerInfo } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

const About = () => {
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
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden bg-white dark:bg-[#030014] light:bg-[#f8fafc] text-zinc-800 dark:text-zinc-200 transition-colors duration-500">
      {/* Background spotlights */}
      <div className="ambient-glow ambient-purple right-[10%] top-[20%] w-[400px] h-[400px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Text Content & dotnet Terminal Profile */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Section Tagline */}
            <motion.div 
              variants={itemVariants}
              className="text-xs font-bold tracking-[0.2em] text-accent-purple uppercase mb-3 text-glow-purple"
            >
              01 // CORE COMPILER
            </motion.div>

            {/* Main Header */}
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-5xl font-black text-zinc-950 dark:text-white tracking-tight mb-8"
            >
              Architecting High-Performance{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan">
                Backends
              </span>
            </motion.h2>

            {/* Narrative Bio */}
            <motion.div 
              variants={itemVariants}
              className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed space-y-6 mb-10"
            >
              <p>
                Hello, This is <strong className="text-zinc-950 dark:text-white">Ammar</strong>, a backend engineer dedicated to constructing robust server-side infrastructures. I focus on developing enterprise web APIs, designing scalable database schemas, and building secure, performant cloud deployment pipelines.
              </p>
              <p>
                My design philosophies center around <strong className="text-zinc-950 dark:text-white">SOLID principles</strong>, <strong className="text-zinc-950 dark:text-white">Clean Architecture</strong>, and strict repository patterns. I love optimizing database query indices, integrating distributed Redis caching layers, and engineering token authentication mechanisms to guarantee that systems are bulletproof under heavy loads.
              </p>
            </motion.div>

            {/* Simulated dotnet Terminal Profile */}
            <motion.div 
              variants={itemVariants}
              className="w-full"
            >
              <div className="rounded-2xl border border-zinc-200 dark:border-white/5 bg-[#05021a] overflow-hidden shadow-2xl font-mono text-xs w-full">
                {/* Terminal Header */}
                <div className="bg-white/[0.03] border-b border-zinc-800 dark:border-white/5 px-4 py-3 flex items-center justify-between">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] text-zinc-500 tracking-wider">dotnet_cli_diagnostics.sh</span>
                </div>
                {/* Terminal Lines */}
                <div className="p-5 space-y-3.5 text-zinc-300 leading-relaxed overflow-x-auto no-scrollbar">
                  <div>
                    <span className="text-accent-purple font-semibold">&gt;</span> <span className="text-cyan-400">dotnet watch run</span> --project src/CoreAPI
                  </div>
                  <div className="text-zinc-500 pl-4">
                    [LOADING MICROSERVICES CORE ENG...]
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500">Framework:</span> <span className="text-white">.NET 8.0 SDK (x64)</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500">Engine Status:</span> <span className="text-emerald-400">ONLINE // 8 WORKER THREADS</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500">DB Migrations:</span> <span className="text-cyan-400">EF Core Applied // SQL Server [SUCCESS]</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500">Cache Layer:</span> <span className="text-white">Redis Node Active (Port 6379)</span>
                  </div>
                  <div>
                    <span className="text-accent-purple font-semibold">&gt;</span> <span className="text-cyan-400">curl -X GET</span> "/api/v1/health" -H "accept: application/json"
                  </div>
                  <div className="text-emerald-400 pl-4 font-bold">
                    ✓ 200 OK - {`{"status": "Healthy", "latency": "4.5ms", "uptime": "99.99%"}`}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Statistics Grid & Key Pillars */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group w-full"
                >
                  <SpotlightCard 
                    className="p-6 md:p-8 flex flex-col items-center justify-center text-center h-full bg-zinc-50 dark:bg-space-card hover:bg-zinc-100 dark:hover:bg-space-cardHover border border-zinc-200 dark:border-space-border"
                    glowColor="rgba(6, 182, 212, 0.15)"
                  >
                    <span className="text-3xl md:text-5xl font-black text-zinc-950 dark:text-white tracking-tight mb-2 group-hover:text-accent-cyan transition-colors duration-300">
                      {stat.value}
                    </span>
                    <span className="text-xs md:text-sm font-bold tracking-wide text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-300 uppercase font-mono">
                      {stat.label}
                    </span>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>

            {/* Core Values Card */}
            <motion.div variants={itemVariants}>
              <SpotlightCard className="p-8 flex flex-col text-left bg-zinc-50 dark:bg-space-card border border-zinc-200 dark:border-space-border">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white tracking-wide mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                  Engineering Standard Practices
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  Constructing bulletproof APIs requires robust testing, clean separations of layers, and secure auth hooks. I make sure every project adheres to strict unit tests and scalable code.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold tracking-wider uppercase font-mono px-3 py-1.5 rounded bg-zinc-200 dark:bg-white/5 border border-zinc-300 dark:border-white/5 text-accent-cyan">
                    SQL Index Tuning
                  </span>
                  <span className="text-[10px] font-bold tracking-wider uppercase font-mono px-3 py-1.5 rounded bg-zinc-200 dark:bg-white/5 border border-zinc-300 dark:border-white/5 text-accent-purple">
                    Clean Architecture
                  </span>
                  <span className="text-[10px] font-bold tracking-wider uppercase font-mono px-3 py-1.5 rounded bg-zinc-200 dark:bg-white/5 border border-zinc-300 dark:border-white/5 text-accent-indigo">
                    Dockerized Containers
                  </span>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
