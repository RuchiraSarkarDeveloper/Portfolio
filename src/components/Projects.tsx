import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

interface Project {
  title: string;
  description: string;
  impact: string;
  tech: string[];
  challenge: string;
  liveUrl: string;
  githubUrl: string;
  category: string;
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Cognitive Load Dashboard',
      description: 'Frontend-only, privacy-first cognitive load engine analyzing 9 behavioral signals over a 120s rolling window, generating a 0–100 load score with confidence trends at < 1% CPU usage and 0 network calls.',
      impact: 'Designed a 4-level adaptive interface framework with 10 autonomous AI mechanisms, reducing visual and decision complexity by 40–65%, scaling typography up to 20%, and slowing animations by 30–60% under high cognitive load.',
      tech: ['TypeScript', 'React', 'Zustand', 'Browser APIs'],
      challenge: 'Implemented predictive overload modeling (30–90s), micro-recovery stabilization, and soft-failure mitigation using requestAnimationFrame sampling and passive listeners with fully in-memory execution and user-controlled transparency.',
      liveUrl: 'https://cognitive-load-dashboard.vercel.app/',
      githubUrl: 'https://github.com/RuchiraSarkarDeveloper/Cognitive-Load-Dashboard',
      category: 'Frontend'
    },
    {
      title: 'Digital Body Language Translator',
      description: 'Behavioral-signal-driven UX intelligence layer with 12 real-time pattern detectors, delivering contextual cues at < 1% CPU utilization, sub-1ms event latency, and 0 content inspection or retention.',
      impact: 'Introduced non-verbal adaptive interventions including impulse dampening (300–500ms micro-delay), hesitation-aware pacing, confidence volatility signaling, and revision loop interruption, reducing premature sends by 35–50% without limiting user autonomy.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Browser APIs'],
      challenge: 'Established a privacy-centric frontend architecture using in-memory rolling analysis (500ms granularity), 0 outbound requests, 165KB optimized bundle size, sustained 60FPS feedback, and full opt-in user governance for compliance readiness.',
      liveUrl: 'https://digital-body-language-translator.vercel.app/',
      githubUrl: 'https://github.com/RuchiraSarkarDeveloper/Digital-Body-Language-Translator',
      category: 'Frontend'
    },
    {
      title: 'Personal UX Genome',
      description: 'Frontend-only personalization engine processing 10+ passive interaction signals to adapt UI behavior in real time, eliminating 100% of manual preferences, onboarding flows, and settings screens.',
      impact: 'Orchestrated a rule-based adaptation layer driven by CSS variables and component logic, dynamically adjusting animation speed by 30–60%, layout density by 25–40%, and typography scale up to 20%. Applied a strict privacy architecture with 100% client-side execution, 0 network requests, 0 raw interaction logs stored, and sustained 60 FPS rendering at < 1% CPU usage.',
      tech: ['React', 'Next.js', 'TypeScript', 'Zustand', 'Tailwind CSS', 'Browser APIs'],
      challenge: 'Implemented a confidence-weighted trait inference pipeline using 120s rolling windows, decay functions, and stability thresholds, reducing abrupt UI changes by 85–90% during behavioral fluctuation. Defined a portable UX genome schema with versioned JSON export/import, enabling consistent interaction behavior across applications with 0 data loss and full user ownership.',
      liveUrl: 'https://personal-ux-genome.vercel.app/',
      githubUrl: 'https://github.com/RuchiraSarkarDeveloper/Personal-UX-Genome',
      category: 'Frontend'
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Building solutions that make a difference
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="bg-white dark:bg-slate-700 rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-cyan-500 via-blue-600 to-teal-700 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white text-center px-6">
                    {project.title}
                  </h3>
                </div>
                <div className="p-8">
                  <p className="text-slate-600 dark:text-slate-300 mb-4 text-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="sticky top-0 bg-gradient-to-r from-cyan-500 to-blue-600 p-6 flex justify-between items-center">
              <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Impact</h4>
                <p className="text-lg text-slate-600 dark:text-slate-300">{selectedProject.impact}</p>
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Technical Challenge</h4>
                <p className="text-lg text-slate-600 dark:text-slate-300">{selectedProject.challenge}</p>
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Demo
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
