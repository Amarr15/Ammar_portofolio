import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiShield } from 'react-icons/fi';
import { certificates, trainings, experiences, featuredAchievement } from '../data/achievementsData';

const FullPage = ({ children }) => (
  <div className="min-h-screen w-full relative py-24 px-6 md:px-12 text-white">
    <div className="max-w-7xl mx-auto">{children}</div>
  </div>
);

const useCountUp = (target, active, duration = 1600) => {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const from = 0;
    const to = target;

    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.floor(from + (to - from) * eased));
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, active, duration]);

  return value;
};

const AchievementModal = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
      <div onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-xl" />
      <motion.div initial={{ y: 24, opacity: 0, scale: 0.96 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 24, opacity: 0, scale: 0.96 }} transition={{ type: 'spring', stiffness: 220, damping: 28 }} className="relative z-10 w-full max-w-5xl rounded-[32px] border border-white/10 bg-[#071124]/90 p-8 shadow-[0_40px_120px_-30px_rgba(14,165,233,0.45)]">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_0.7fr]">
          <div>
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#071124]/70 shadow-inner">
              <img src={cert.image} alt={cert.title} className="h-80 w-full object-contain bg-[#08162e]" />
            </div>
            <div className="mt-6 rounded-3xl border border-white/10 bg-[#071124]/80 p-5">
              <h3 className="text-2xl font-semibold">{cert.title}</h3>
              <p className="text-sm text-zinc-400 mt-2">{cert.organization} • {cert.date}</p>
              <p className="mt-4 text-zinc-300">{cert.description}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-[#0d1e38]/90 p-4 border border-white/10">
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Credential ID</p>
                  <p className="mt-2 text-sm text-zinc-100">{cert.credentialId}</p>
                </div>
                <div className="rounded-3xl bg-[#0d1e38]/90 p-4 border border-white/10">
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Skills Acquired</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {cert.skills.map(skill => <span key={skill} className="px-3 py-1 rounded-full bg-white/5 text-xs text-zinc-100">{skill}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl bg-[#0f1b32]/95 p-6 border border-white/5 shadow-[0_20px_80px_-40px_rgba(148,163,184,0.25)]">
              <p className="text-sm uppercase tracking-[0.3em] text-accent-cyan mb-4">Credential verification</p>
              <div className="space-y-3">
                <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="block rounded-3xl bg-gradient-to-r from-accent-purple to-accent-indigo px-4 py-3 text-center font-semibold text-white">View Credential</a>
                <a href={cert.linkedinUrl} target="_blank" rel="noreferrer" className="block rounded-3xl border border-white/10 px-4 py-3 text-center text-zinc-100">Open LinkedIn</a>
                <a href={cert.organizationUrl} target="_blank" rel="noreferrer" className="block rounded-3xl border border-white/10 px-4 py-3 text-center text-zinc-100">Visit Organization</a>
              </div>
            </div>
            <button onClick={onClose} className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white">Close Window</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const statBlocks = [
  { label: 'Projects Completed', value: 14 },
  { label: 'Training Programs', value: 5 },
  { label: 'Certifications', value: 12 },
  { label: 'Technologies Used', value: 24 },
  { label: 'International Experiences', value: 2 }
];

const categoryTabs = ['Certificates', 'Training Programs', 'Work Experience'];

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('Certificates');
  const [modalCert, setModalCert] = useState(null);
  const [trainOpen, setTrainOpen] = useState({});

  const certCount = useCountUp(certificates.length, true);
  const trainCount = useCountUp(trainings.length, true);
  const expCount = useCountUp(experiences.length, true);

  return (
    <FullPage>
      <div className="grid gap-8 xl:grid-cols-[1.2fr_0.85fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#061025]/90 px-4 py-2 text-sm text-accent-cyan backdrop-blur-md">
            <FiShield className="text-lg" /> Featured Achievement
          </div>
          <div className="rounded-[36px] border border-white/10 bg-[#07162d]/90 p-8 shadow-[0_30px_90px_-45px_rgba(59,130,246,0.25)] backdrop-blur-xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-accent-cyan/80">2025 Highlight</p>
                <h1 className="text-5xl font-semibold tracking-tight text-white">Azure API Gateway Security Platform</h1>
                <p className="text-zinc-300 leading-8">Delivered a next-generation secure gateway architecture for backend .NET services using Azure API Management, JWT-based auth, caching, and observability.</p>
                <div className="flex flex-wrap gap-3">
                  {featuredAchievement.skills.map(skill => <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.3em] text-zinc-200">{skill}</span>)}
                </div>
              </div>
              <div className="rounded-[32px] bg-[#081628]/90 border border-white/10 p-6 text-sm text-zinc-300 shadow-[0_25px_60px_-35px_rgba(59,130,246,0.25)]">
                <p className="uppercase tracking-[0.3em] text-accent-cyan/80 mb-4">Project Impact</p>
                <ul className="space-y-3 text-zinc-300">
                  {featuredAchievement.highlights.map(item => <li key={item} className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-accent-cyan" />{item}</li>)}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {statBlocks.map(block => (
              <div key={block.label} className="rounded-3xl border border-white/10 bg-[#08172f]/90 p-6 backdrop-blur-xl shadow-[0_18px_50px_-30px_rgba(59,130,246,0.25)]">
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">{block.label}</p>
                <p className="mt-4 text-4xl font-semibold text-white">{block.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[36px] border border-white/10 bg-[#07162d]/90 p-8 shadow-[0_30px_90px_-45px_rgba(168,85,247,0.2)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FiGithub className="text-2xl text-accent-cyan" />
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-accent-cyan/80">GitHub Profile</p>
                <h2 className="mt-3 text-3xl font-semibold">Recruiter-ready portfolio</h2>
              </div>
            </div>
            <div className="rounded-3xl bg-[#081a32]/80 px-4 py-2 text-sm text-zinc-300">Live stats</div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#08172f]/90 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Repositories</p>
              <p className="mt-3 text-3xl font-semibold">20</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#08172f]/90 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Commits/Year</p>
              <p className="mt-3 text-3xl font-semibold">1,240</p>
            </div>
          </div>
          <div className="mt-6 rounded-3xl border border-white/10 bg-[#08172f]/90 p-5">
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Languages</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['C#','SQL','Python','JavaScript'].map(lang => (
                <span key={lang} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-zinc-200">{lang}</span>
              ))}
            </div>
          </div>
          <div className="mt-6 rounded-3xl border border-white/10 bg-[#08172f]/90 p-5">
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Recent repositories</p>
            <div className="mt-4 space-y-3">
              <div className="rounded-3xl border border-white/10 bg-[#091831]/90 p-4">
                <p className="font-semibold text-white">Eureka-Backend</p>
                <p className="mt-2 text-sm text-zinc-400">Enterprise-grade backend built with FastAPI, featuring authentication, subject management, role-based access control, and RESTful API integration.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#091831]/90 p-4">
                <p className="font-semibold text-white">Tabourak</p>
                <p className="mt-2 text-sm text-zinc-400">Full-stack web application featuring user authentication, data management, and responsive user interfaces for an efficient user experience.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#091831]/90 p-4">
                <p className="font-semibold text-white">Lingoafy</p>
                <p className="mt-2 text-sm text-zinc-400">Modern language-learning application that provides interactive lessons, progress tracking, and personalized learning experiences to help users master new languages.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#091831]/90 p-4">
                <p className="font-semibold text-white">Social-Media-App</p>
                <p className="mt-2 text-sm text-zinc-400">Modern social media application that provides a platform for users to share updates, photos, and engage with others in a dynamic community environment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-[36px] border border-white/10 bg-[#07162d]/90 p-8 shadow-[0_40px_120px_-50px_rgba(14,165,233,0.3)] backdrop-blur-xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-accent-cyan/80">Achievements Summary</p>
            <h2 className="mt-3 text-4xl font-semibold">Futuristic timeline + credential experience</h2>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-zinc-300">
            <div className="rounded-3xl bg-[#081a32]/90 px-4 py-3">Premium engineering workspace</div>
            <div className="rounded-3xl bg-[#081a32]/90 px-4 py-3">Awwwards-grade polish</div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap gap-3">
            {categoryTabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`rounded-full px-5 py-3 text-sm font-semibold transition ${activeTab === tab ? 'bg-gradient-to-r from-accent-purple to-accent-indigo text-white shadow-[0_15px_60px_-35px_rgba(99,102,241,0.55)]' : 'bg-white/5 text-zinc-300 hover:bg-white/10'}`}>
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-10">
            <AnimatePresence mode="wait">
              {activeTab === 'Certificates' && (
                <motion.div key="certs" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className="grid gap-6 xl:grid-cols-3">
                  {certificates.map(cert => (
                    <motion.div key={cert.id} whileHover={{ y: -6 }} className="rounded-[32px] border border-white/10 bg-[#081728]/90 p-6 shadow-[0_20px_60px_-35px_rgba(99,102,241,0.22)] transition-transform">
                      <div className="h-52 rounded-3xl bg-gradient-to-br from-accent-purple/10 to-accent-cyan/10 p-4 flex items-center justify-center overflow-hidden">
                        <img src={cert.image} alt={cert.title} className="h-full object-contain" />
                      </div>
                      <div className="mt-5 space-y-3">
                        <div>
                          <p className="text-sm uppercase tracking-[0.3em] text-accent-cyan/80">{cert.organization}</p>
                          <h3 className="mt-2 text-xl font-semibold">{cert.title}</h3>
                        </div>
                        <p className="text-sm text-zinc-400">{cert.date}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {cert.skills.slice(0, 3).map(skill => <span key={skill} className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-200">{skill}</span>)}
                        </div>
                        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                          <button onClick={() => setModalCert(cert)} className="rounded-full bg-gradient-to-r from-accent-purple to-accent-indigo px-4 py-3 text-sm font-semibold text-white">View Certificate</button>
                          <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-3 text-sm text-zinc-200">Credential</a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'Training Programs' && (
                <motion.div key="trainings" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className="space-y-6">
                  {trainings.map(program => (
                    <div key={program.id} className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#071827]/90 p-6 shadow-[0_30px_80px_-50px_rgba(59,130,246,0.2)]">
                      <span className="absolute right-5 top-4 h-16 w-16 rounded-full bg-accent-cyan/10 blur-2xl" />
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.35em] text-accent-cyan/70">{program.organization}</p>
                          <h3 className="mt-3 text-2xl font-semibold">{program.title}</h3>
                          <p className="mt-2 text-sm text-zinc-400">{program.duration}</p>
                        </div>
                        <button onClick={() => setTrainOpen(prev => ({ ...prev, [program.id]: !prev[program.id] }))} className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white/10">{trainOpen[program.id] ? 'Hide Details' : 'View Details'}</button>
                      </div>
                      <AnimatePresence>
                        {trainOpen[program.id] && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-6 overflow-hidden">
                            <p className="text-zinc-300">{program.description}</p>
                            <div className="mt-6 grid gap-4 lg:grid-cols-2">
                              <div className="rounded-3xl border border-white/10 bg-[#081a30]/90 p-5">
                                <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Projects Completed</p>
                                <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
                                  {program.projects.map(project => <li key={project}>{project}</li>)}
                                </ul>
                              </div>
                              <div className="rounded-3xl border border-white/10 bg-[#081a30]/90 p-5">
                                <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Achievements</p>
                                <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
                                  {program.achievements.map(item => <li key={item}>{item}</li>)}
                                </ul>
                              </div>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-2">
                              {program.technologies.map(tech => <span key={tech} className="rounded-full bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-zinc-200">{tech}</span>)}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'Work Experience' && (
                <motion.div key="experience" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className="space-y-8">
                  {experiences.map((experience) => (
                    <motion.div key={experience.id} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} className="relative rounded-[32px] border border-white/10 bg-[#071827]/90 p-6 shadow-[0_30px_80px_-50px_rgba(168,85,247,0.2)]">
                      <div className="absolute left-0 top-10 h-6 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan border border-white/20" />
                      <div className="ml-8 space-y-4">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="text-xs uppercase tracking-[0.35em] text-accent-cyan/80">{experience.organization}</p>
                            <h3 className="mt-2 text-2xl font-semibold">{experience.role}</h3>
                          </div>
                          <p className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">{experience.duration}</p>
                        </div>
                        <p className="text-zinc-300">{experience.description}</p>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {experience.achievements.map(item => (
                            <div key={item} className="rounded-3xl border border-white/10 bg-[#081a30]/90 p-4 text-sm text-zinc-300">{item}</div>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map(tech => <span key={tech} className="rounded-full bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.18em] text-zinc-200">{tech}</span>)}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>{modalCert && <AchievementModal cert={modalCert} onClose={() => setModalCert(null)} />}</AnimatePresence>
    </FullPage>
  );
};

export default Achievements;
