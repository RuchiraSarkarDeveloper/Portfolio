import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications = [
    {
      name: 'Python for Programmers',
      issuer: 'IBM',
      year: '2025',
      credentialUrl: 'https://skills.yourlearning.ibm.com/certificate/share/19081256caewogICJsZWFybmVyQ05VTSIgOiAiMzI5OTA4OVJFRyIsCiAgIm9iamVjdElkIiA6ICJVUkwtODA2QjhEOUIwN0ZEIiwKICAib2JqZWN0VHlwZSIgOiAiQUNUSVZJVFkiCn0dce1f158a8-10'
    },
    {
      name: 'Web Development Basics',
      issuer: 'IBM',
      year: '2025',
      credentialUrl: 'https://skills.yourlearning.ibm.com/certificate/share/19081256caewogICJsZWFybmVyQ05VTSIgOiAiMzI5OTA4OVJFRyIsCiAgIm9iamVjdElkIiA6ICJVUkwtODA2QjhEOUIwN0ZEIiwKICAib2JqZWN0VHlwZSIgOiAiQUNUSVZJVFkiCn0dce1f158a8-10'
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
              Certifications
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-4 p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl w-fit mx-auto">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-center min-h-[56px] flex items-center justify-center">
                  {cert.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-center mb-2">
                  {cert.issuer}
                </p>
                <p className="text-cyan-600 dark:text-cyan-400 text-center font-semibold mb-4">
                  {cert.year}
                </p>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Credential
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
