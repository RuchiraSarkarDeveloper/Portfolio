import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Zap, Target, Users } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable solutions that stand the test of time'
    },
    {
      icon: Zap,
      title: 'Fast Execution',
      description: 'Delivering high-performance applications with optimal user experience'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Breaking down complex challenges into elegant, simple solutions'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborating effectively and mentoring others to grow together'
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
              About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto mb-16">
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed text-center">
              I'm a Frontend Software Engineer passionate about building privacy-first, adaptive user interfaces.
              With expertise in React, TypeScript, and browser APIs, I create intelligent UX systems that respond
              to user behavior while maintaining complete privacy. I believe in technology that supports human
              wellbeing without compromising autonomy or data security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-4 p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl w-fit">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
