import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../utils/animations';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      degree: 'Bachelor of Computer Application',
      institution: 'NSHM Knowledge Campus',
      year: 'Jul. 2024 – Present',
      highlights: [
        'Location: Kolkata, West Bengal',
        'Relevant Coursework: Data Structures, Web Design'
      ]
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Education
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full hidden lg:block"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white dark:bg-slate-700 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                        <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-lg font-semibold text-cyan-600 dark:text-cyan-400">
                          {edu.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
                        {edu.institution}
                      </p>
                      <div className="space-y-2">
                        {edu.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2 justify-center lg:justify-start">
                            <Award className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                            <p className="text-slate-600 dark:text-slate-300">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block relative">
                    <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full border-4 border-slate-50 dark:border-slate-800"></div>
                  </div>

                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
