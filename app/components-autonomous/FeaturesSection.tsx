'use client';

import React from 'react';
import { Zap, Shield, Clock, Fingerprint, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    id: 'ai-powered',
    title: 'AI-Powered',
    description: '99% automated with proven AI tools like Cursor CLI and OpenHands',
    color: '#de1352',
    accent: 'text-cyan-400',
    iconBg: 'bg-[#0a0a0a]',
    tags: ['AI', 'Automated'],
    Icon: Zap,
  },
  {
    id: 'secure',
    title: 'Secure',
    description: 'GDPR compliant, encrypted data, no AI training on client data',
    color: '#10b981',
    accent: 'text-emerald-400',
    iconBg: 'bg-[#0a0a0a]',
    tags: ['Secure', 'Encrypted'],
    Icon: Shield,
  },
  {
    id: 'fast',
    title: 'Fast',
    description: 'Weeks not months. Parallel AI agents work 24/7',
    color: '#f59e0b',
    accent: 'text-amber-400',
    iconBg: 'bg-[#0a0a0a]',
    tags: ['Fast', '24/7'],
    Icon: Clock,
  },
  {
    id: 'quality-first',
    title: 'Quality First',
    description: 'Automated testing, security scanning, and code review before delivery',
    color: '#8b5cf6',
    accent: 'text-violet-400',
    iconBg: 'bg-[#0a0a0a]',
    tags: ['Quality', 'Review'],
    Icon: Fingerprint,
  },
];

export function FeaturesSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#000000] to-[#0f0f0f0]" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pg-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#de1352] via-[#00e5ff] to-teal-400">
              How It Works
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-center mb-16 text-lg max-w-2xl mx-auto"
        >
          Complete websites in weeks, not months. 99% autonomous, human-reviewed.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: feature.id === 'ai-powered' ? 0.1 : 0.2 }}
              whileHover={{ scale: [1.02, 1.02], y: [0, -4] }}
              className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#151515] border-2xl p-8 overflow-hidden transition-all duration-300 ease-out cursor-pointer hover:scale-[1.02] hover:-translate-y-1"
            >
              {/* Animated background gradient */}
              <motion.div 
                className="absolute inset-0 opacity-0"
                animate={{ backgroundPosition: ['0% center', '100% center'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{
                  backgroundSize: '400% 400%',
                  backgroundImage: `linear-gradient(90deg, transparent 0%, transparent 100%, ${feature.color} 0%, ${feature.color} 0%, transparent 100%)`,
                }}
              />

              {/* Card content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="relative w-16 h-16 bg-[#0a0a0a] rounded-2xl flex items-center justify-center p-4 mb-6">
                  <feature.Icon 
                    className={`w-10 h-10 ${feature.accent}`}
                    strokeWidth={2}
                  />
                </div>

                <h3 className="font-serif text-2xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {feature.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium uppercase tracking-wider px-2 py-1 bg-[#0a0a0a]/40 rounded text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Trending arrow */}
                <TrendingUp className="absolute top-3 right-3 w-5 h-5 text-gray-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
