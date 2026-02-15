'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Portfolio',
    price: '€8,000',
    timeframe: '2-4 weeks',
    description: 'Complete website with animations and contact form',
    features: ['Next.js', 'Animations', 'Contact Form', 'Mobile First'],
    color: 'from-cyan-500 to-rose-500',
    popular: true,
  },
  {
    name: 'E-commerce',
    price: '€15,000',
    timeframe: '4-8 weeks',
    description: 'Online store with payments, inventory, and order management',
    features: ['Stripe', 'Inventory', 'Orders', 'Shopify-ready'],
    color: 'from-emerald-500 to-teal-500',
    popular: false,
  },
  {
    name: 'SaaS App',
    price: '€25,000',
    timeframe: '8-12 weeks',
    description: 'Web application with user auth and dashboards',
    features: ['User Auth', 'Admin Dashboard', 'API', 'DB Design'],
    color: 'from-violet-500 to-purple-500',
    popular: false,
  },
  {
    name: 'Enterprise',
    price: '€50,000+',
    timeframe: '12+ weeks',
    description: 'Complex platforms with advanced integrations',
    features: ['Custom Dev', 'Security', 'DevOps', 'Support'],
    color: 'from-rose-500 to-orange-500',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-24 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4 font-serif">
            Investment Plans
          </h2>
          <p className="text-slate-400 text-lg">
            High-value, low-volume. 2-4 projects per quarter.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-2xl border hover:shadow-2xl transition-all ${
                tier.popular
                  ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-rose-500/10'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="text-center mb-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-rose-500 text-black font-bold text-xs px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2 font-serif">
                  {tier.name}
                </h3>
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {tier.price}
                </div>
                <p className="text-sm text-slate-400 mb-6">
                  {tier.timeframe}
                </p>
                <p className="text-slate-300 mb-6 text-sm">
                  {tier.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`block w-full text-center py-3 rounded-xl font-semibold hover:scale-105 transition-transform bg-gradient-to-r ${tier.color} text-black`}
                >
                  Get Started
                  <ArrowRight className="inline-block w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
