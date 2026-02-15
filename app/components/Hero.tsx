'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] },
  },
};

const heroVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] },
  },
};

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '50M+', label: 'Users Reached' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '8+', label: 'Years Experience' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />
      <div className="hero-blob hero-blob-4" />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="hero-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Tagline */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#00bcd4] text-sm font-semibold tracking-wider uppercase">
              AI-Powered Digital Excellence
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1 variants={heroVariants} className="mb-6">
            <div className="font-serif leading-[1.05] tracking-tight">
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[6rem] xl:text-[7rem] text-white font-black mb-4">
                Evolution
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[6rem] xl:text-[7rem] gradient-text font-black">
                Media Group
              </span>
            </div>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We craft extraordinary digital experiences that transform brands
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            From world-class websites to powerful applications, our AI-powered development delivers premium results in weeks, not months.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <Link
              href="#portfolio"
              className="group px-8 py-4 bg-gradient-to-r from-[#de1352] to-[#00bcd4] hover:from-[#00bcd4] hover:to-[#de1352] text-white rounded-full font-semibold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 flex items-center gap-2"
            >
              View Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="group px-8 py-4 bg-transparent hover:bg-white/10 text-white border-2 border-white/20 rounded-full font-semibold transition-all hover:border-[#00bcd4]/50 flex items-center gap-2"
            >
              Start a Project
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {stats.map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl gradient-text font-black font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-20"
          >
            <div className="text-slate-500 text-sm animate-bounce">
              Scroll to explore
            </div>
            <div className="w-6 h-10 border-2 border-slate-700 mx-auto mt-2 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-slate-500 rounded-full mt-2 animate-pulse" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
