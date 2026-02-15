'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Clock, Fingerprint } from 'lucide-react';

const features = [
  {
    id: 'ai-powered',
    title: 'AI-Powered',
    description: '99% automated development with Cursor CLI and OpenHands - results in weeks, not months',
    icon: Zap,
  },
  {
    id: 'secure',
    title: 'Enterprise Secure',
    description: 'GDPR compliant, encrypted data, rigorous security protocols for enterprise clients',
    icon: Shield,
  },
  {
    id: 'fast',
    title: 'Lightning Fast',
    description: 'Parallel development pipelines and 24/7 AI agents deliver in weeks not months',
    icon: Clock,
  },
  {
    id: 'quality',
    title: 'Quality First',
    description: 'Automated testing, security scanning, and human review before final delivery',
    icon: Fingerprint,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export default function Features() {
  return (
    <section id="features" className="section-padding bg-gradient-to-b from-[#0f0f0f] via-[#1a1a2e] to-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#00bcd4] text-sm font-semibold tracking-wider uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            The Evolution Advantage
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            AI-powered development that delivers premium results with unprecedented speed
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#de1352]/0 via-[#00bcd4]/0 to-[#00e5ff]/0 opacity-0 group-hover:opacity-30 transition-opacity"
              />
              
              {/* Icon */}
              <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-[#de1352] to-[#00bcd4] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 font-serif relative z-10">
                {feature.title}
              </h3>
              <p className="text-slate-400 relative z-10 leading-relaxed">
                {feature.description}
              </p>

              {/* Tags */}
              <div className="flex flex gap-2 mt-4 relative z-10">
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-[#00bcd4] text-sm rounded-full">
                  AI
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
