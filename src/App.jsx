import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Loader Experience */}
      <AnimatePresence mode="wait">
        {loading ? <Loader onComplete={() => setLoading(false)} /> : null}
      </AnimatePresence>

      {/* Main Portfolio (revealed after preloader is done) */}
      {!loading && (
        <div className="relative z-10 w-full min-h-screen bg-white dark:bg-[#030014] light:bg-[#f8fafc] text-zinc-800 dark:text-zinc-100 selection:bg-accent-purple/30 selection:text-white transition-colors duration-500">
          {/* Faint overall noise / grid texture overlays */}
          <div className="fixed inset-0 grid-bg z-[-1] pointer-events-none opacity-30 dark:opacity-20" />

          {/* Global background + Router */}
          <ParticleBackground />

          <HashRouter>
            <Navbar />

            <Routes>
              <Route path="/" element={
                <main className="w-full">
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Experience />
                  <Contact />
                </main>
              } />

              <Route path="/achievements" element={<Achievements />} />
            </Routes>

            <Footer />
          </HashRouter>
        </div>
      )}
    </>
  );
}

export default App;
