'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Globe, Stethoscope, Server } from 'lucide-react';

const portfolio = [
  {
    name: 'Real Estate Agency',
    description: 'Modern property listings platform with advanced search, map integration, and stunning property showcases',
    tech: 'Next.js • React • Tailwind • Mapbox',
    url: 'https://real-estate-agency-lemon.vercel.app/',
    icon: Globe,
    color: 'from-orange-500 to-pink-500',
    stats: '200+ Properties Listed',
  },
  {
    name: 'Dental Practice',
    description: 'Premium healthcare website with appointment booking, team profiles, and professional photography',
    tech: 'Next.js • React • Tailwind • Vercel',
    url: 'https://dental-practice-xi.vercel.app/',
    icon: Stethoscope,
    color: 'from-teal-500 to-cyan-500',
    stats: '10K+ Patients Served',
  },
  {
    name: 'ICT Services',
    description: 'Enterprise IT services platform with GDPR compliance, partner showcases, and corporate branding',
    tech: 'Next.js • React • Security • Responsive',
    url: 'https://ictservices-umber.vercel.app/',
    icon: Server,
    color: 'from-blue-500 to-indigo-500',
    stats: 'Enterprise Grade',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] },
  },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] via-[#1a1a2e] to-[#0f0f0f] opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#00bcd4] text-sm font-semibold tracking-wider uppercase mb-4">
            Featured Work
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            World-class digital experiences we've crafted
          </p>
        </motion.div>

        {/* Portfolio grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {portfolio.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group glass-card p-8 hover:border-white/20 transition-all duration-500 hover:-translate-y-4"
            >
              {/* Project icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className="w-8 h-8 text-white" />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity`} />
              </div>

              {/* Project info */}
              <h3 className="text-2xl font-bold text-white mb-3 font-serif">
                {project.name}
              </h3>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="mb-6 text-slate-500 text-xs uppercase tracking-wider">
                {project.tech}
              </div>

              {/* Stats badge */}
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10 text-xs text-[#00bcd4]">
                {project.stats}
              </div>

              {/* View project button */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#de1352] to-[#00bcd4] hover:from-[#00bcd4] hover:to-[#de1352] text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20"
              >
                View Project
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-transparent hover:bg-white/10 text-white border-2 border-white/20 hover:border-[#00bcd4]/50 rounded-full font-semibold transition-all"
          >
            Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
