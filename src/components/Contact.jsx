import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaInstagram, FaFacebookF, FaGithub, FaTwitter, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { developerInfo } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 2000);
  };

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
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden bg-white dark:bg-[#030014] light:bg-[#f8fafc] text-zinc-800 dark:text-zinc-200 transition-colors duration-500">
      {/* Background spotlights */}
      <div className="ambient-glow ambient-purple left-[10%] top-[30%] w-[450px] h-[450px] pointer-events-none" />
      <div className="ambient-glow ambient-cyan right-[5%] bottom-[10%] w-[450px] h-[450px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Info Card & Social Deck */}
          <div className="lg:col-span-5 text-left">
            {/* Section Tag */}
            <motion.div 
              variants={itemVariants}
              className="text-xs font-bold tracking-[0.2em] text-accent-purple uppercase mb-3 text-glow-purple"
            >
              05 // SYSTEM COMMUNICATION
            </motion.div>

            {/* Title */}
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-5xl font-black text-zinc-950 dark:text-white tracking-tight mb-6"
            >
              Let's Engineer{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan">
                Together
              </span>
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-zinc-650 dark:text-zinc-400 text-base leading-relaxed mb-10"
            >
              Interested in integrating a high-performance backend, database clustering solutions, or distributed auth models? Drop a line and let's configure standard endpoints.
            </motion.p>

            {/* Direct Connect Grid */}
            <div className="space-y-4">
              {/* Email */}
              <motion.div variants={itemVariants} whileHover={{ x: 4 }} className="group">
                <SpotlightCard className="p-5 flex items-center space-x-4 bg-zinc-50 dark:bg-space-card hover:bg-zinc-100 dark:hover:bg-space-cardHover border border-zinc-200 dark:border-space-border" glowColor="rgba(168, 85, 247, 0.15)">
                  <div className="w-10 h-10 rounded-xl bg-accent-purple/10 text-accent-purple border border-accent-purple/20 flex items-center justify-center text-base">
                    <FaEnvelope />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono tracking-wider text-zinc-500">Email Gateway</span>
                    <a href={`mailto:${developerInfo.email}`} className="text-sm font-bold text-zinc-950 dark:text-white hover:text-accent-purple transition-colors duration-300">
                      {developerInfo.email}
                    </a>
                  </div>
                </SpotlightCard>
              </motion.div>

              {/* LinkedIn */}
              <motion.div variants={itemVariants} whileHover={{ x: 4 }} className="group">
                <SpotlightCard className="p-5 flex items-center space-x-4 bg-zinc-50 dark:bg-space-card hover:bg-zinc-100 dark:hover:bg-space-cardHover border border-zinc-200 dark:border-space-border" glowColor="rgba(6, 182, 212, 0.15)">
                  <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 flex items-center justify-center text-base">
                    <FaLinkedin />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono tracking-wider text-zinc-500">Professional Pipeline</span>
                    <a href={developerInfo.linkedin} target="_blank" rel="noreferrer" className="text-sm font-bold text-zinc-950 dark:text-white hover:text-accent-cyan transition-colors duration-300">
                      linkedin.com/in/amar-dev
                    </a>
                  </div>
                </SpotlightCard>
              </motion.div>
            </div>

            {/* Social handles links */}
            <motion.div variants={itemVariants} className="flex items-center space-x-3.5 mt-8 pl-1">
              <a href={developerInfo.github} target="_blank" rel="noreferrer"
                 className="w-11 h-11 rounded-xl border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-white/3 text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-white/10 hover:bg-zinc-200 dark:hover:bg-white/5 flex items-center justify-center text-lg transition-all duration-300">
                <FaGithub/>
              </a>
              <a href={developerInfo.instagram} target="_blank" rel="noreferrer"
                 className="w-11 h-11 rounded-xl border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-white/3 text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-white/10 hover:bg-zinc-200 dark:hover:bg-white/5 flex items-center justify-center text-lg transition-all duration-300">
                <FaInstagram/>
              </a>
              <a href={developerInfo.linkedin} target="_blank" rel="noreferrer"
                 className="w-11 h-11 rounded-xl border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-white/3 text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-white/10 hover:bg-zinc-200 dark:hover:bg-white/5 flex items-center justify-center text-lg transition-all duration-300">
                <FaLinkedin/>
              </a>
              <a href={developerInfo.Facebook} target="_blank" rel="noreferrer"
                 className="w-11 h-11 rounded-xl border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-white/3 text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-white/10 hover:bg-zinc-200 dark:hover:bg-white/5 flex items-center justify-center text-lg transition-all duration-300">
                <FaFacebookF/>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Contact Form Panel */}
          <motion.div variants={itemVariants} className="lg:col-span-7 w-full">
            <SpotlightCard
                className="p-8 md:p-10 bg-zinc-50 dark:bg-space-card border border-zinc-200 dark:border-space-border"
                glowColor="rgba(168, 85, 247, 0.15)">
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                    <motion.form
                        key="contactForm"
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="name" className="text-[10px] font-mono tracking-widest text-zinc-500 dark:text-zinc-500 uppercase">Your Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          required
                          placeholder="John Doe"
                          className="w-full px-5 py-4 rounded-xl bg-zinc-100/50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-650 focus:outline-none focus:border-accent-purple/50 dark:focus:border-accent-purple/50 focus:bg-white dark:focus:bg-white/[0.04] transition-all duration-300"
                        />
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="email" className="text-[10px] font-mono tracking-widest text-zinc-500 dark:text-zinc-500 uppercase">Your Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          required
                          placeholder="john@example.com"
                          className="w-full px-5 py-4 rounded-xl bg-zinc-100/50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-650 focus:outline-none focus:border-accent-purple/50 dark:focus:border-accent-purple/50 focus:bg-white dark:focus:bg-white/[0.04] transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="subject" className="text-[10px] font-mono tracking-widest text-zinc-500 dark:text-zinc-500 uppercase">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleInputChange}
                        placeholder="Database Architecture Consultation"
                        className="w-full px-5 py-4 rounded-xl bg-zinc-100/50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-650 focus:outline-none focus:border-accent-purple/50 dark:focus:border-accent-purple/50 focus:bg-white dark:focus:bg-white/[0.04] transition-all duration-300"
                      />
                    </div>

                    {/* Message input */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="message" className="text-[10px] font-mono tracking-widest text-zinc-500 dark:text-zinc-500 uppercase">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formState.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Describe your backend scaling objectives..."
                        className="w-full px-5 py-4 rounded-xl bg-zinc-100/50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-650 focus:outline-none focus:border-accent-purple/50 dark:focus:border-accent-purple/50 focus:bg-white dark:focus:bg-white/[0.04] transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative flex items-center justify-center gap-2.5 w-full py-4 rounded-xl text-sm font-bold tracking-wider bg-gradient-to-r from-accent-purple to-accent-indigo hover:shadow-glow-purple text-white transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed overflow-hidden"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <FaPaperPlane className="text-xs group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                          Transmit Secure Signal
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="successMsg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="w-16 h-16 rounded-full bg-accent-emerald/15 text-accent-emerald flex items-center justify-center text-4xl mb-6 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                    >
                      <FaCheckCircle />
                    </motion.div>
                    <h3 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight mb-3">Transmission Confirmed</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-sm leading-relaxed mb-6">
                      Your query has bypassed local routing rules and reached my backend. I will get back to you as soon as humanly possible!
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-bold border border-zinc-200 dark:border-white/10 text-zinc-650 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </SpotlightCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
