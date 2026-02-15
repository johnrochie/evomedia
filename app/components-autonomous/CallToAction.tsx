'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function CallToAction() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#000000] to-[#0f0f0f]" id="cta">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge - "pulse" animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <motion.div
              className="relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-8 h-8 bg-[#de1352] rounded-full"></div>
              <div className="absolute inset-0 bg-[#de1352] rounded-full blur-md"></div>
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#de1352] to-[#00e5ff] text-sm font-bold uppercase tracking-wider">
              Ready to Start?
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-5xl font-bold text-center mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#de1352] via-[#00e5ff] to-teal-400">
            {`Get Started`}?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-300 mb-8 text-center max-w-xl mx-auto"
        >
          Create your account and tell us about your project. We'll send you a quote within 24 hours.
        </motion.p>

        {/* Main CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/auth/signup"
            className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-[#de1352] to-[#00e5ff] hover:from-[#00e5ff] hover:to-[#de1352] text-[#0f0f0f] font-sans font-bold text-lg uppercase tracking-wider rounded-full transition-all duration-500 hover:scale-[1.08] hover:shadow-[0_0_60px_rgba(0,188,212,0.6)] transform hover:-translate-y-1 hover:translate-y-0"
          >
            <span className="text-base">
              Create Account
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M5 12h14" />
              <path d="m12 8 1.5-1.5 1.5 1.5-1.2 1.5H16" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
