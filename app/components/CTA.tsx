'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#0f0f0f] via-[#1a1a2e] to-[#000000]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge with pulse */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex items-center gap-2 mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative"
          >
            <div className="w-8 h-8 bg-[#de1352] rounded-full">
              <div className="absolute inset-0 bg-[#de1352] rounded-full blur-md"></div>
            </div>
          </motion.div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#de1352] to-[[#00bcd4] font-bold text-sm uppercase tracking-wider">
            Ready to Start?
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl font-bold text-center mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#de1352] via-[#00e5ff] to-[#00bcd4]">
            Ready to Start?
          </span>
        </motion.h2>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-slate-300 mb-8 text-center max-w-xl mx-auto"
        >
          Tell us about your project. We'll send you a custom quote within 24 hours.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-[#de1352] to-[#00bcd4] hover:from-[#00bcd4] hover:to-[#de1352] text-[#0f0f0f] font-bold text-lg uppercase tracking-wider rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(0,188,212,0.6)] transform hover:-translate-y-1"
          >
            Start Your Project
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 ml-2">
              <path d="M5 12h14" />
              <path d="m12 8 1.5-1.5 1.5 1.5-1.2 1.5H16" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
