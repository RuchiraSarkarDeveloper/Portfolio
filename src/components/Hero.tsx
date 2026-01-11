import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-600 to-teal-700 dark:from-slate-900 dark:via-blue-900 dark:to-slate-800">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
            Ruchira Sarkar
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-300 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="text-2xl sm:text-3xl lg:text-4xl font-light text-white/90 mb-6"
        >
          Frontend Software Engineer
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Building privacy-first, adaptive interfaces. Turning behavioral insights into elegant user experiences.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            View Projects
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white border-2 border-white/30 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            Contact Me
          </button>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex gap-6 justify-center">
          <a
            href="https://github.com/RuchiraSarkarDeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/ruchira-sarkar-313227392/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a
            href="mailto:ruchirasarkar57@gmail.com"
            className="p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6 text-white" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </motion.div>
    </section>
  );
}
