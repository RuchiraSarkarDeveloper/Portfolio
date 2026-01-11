import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      category: 'Languages',
      skills: ['TypeScript', 'JavaScript', 'Python', 'C']
    },
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'Astro', 'HTML', 'CSS', 'Tailwind CSS', 'Web Components', 'PWAs', 'Accessibility (WCAG)']
    },
    {
      category: 'State & Design Systems',
      skills: ['Design Systems', 'Component Architecture', 'UI State Modeling', 'Theming', 'Tokenization']
    },
    {
      category: 'APIs & Data',
      skills: ['REST', 'GraphQL', 'Apollo', 'Relay Modern']
    },
    {
      category: 'Tooling & Version Control',
      skills: ['Git', 'GitHub', 'GitLab', 'npm', 'Vite']
    },
    {
      category: 'Testing',
      skills: ['Jest', 'Playwright', 'Cypress']
    },
    {
      category: 'Performance & Web Platform',
      skills: ['Lighthouse', 'DevTools', 'Service Workers', 'Cache-Control', 'Streaming Responses']
    },
    {
      category: 'Security',
      skills: ['HTTPS', 'CORS', 'CSP', 'OWASP Fundamentals']
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl shadow-xl"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="h-2 w-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={scaleIn}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium shadow-lg hover:shadow-2xl transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Always learning, always growing. Focused on building privacy-first, adaptive interfaces that enhance user experience.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
