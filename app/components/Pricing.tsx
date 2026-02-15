'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const pricingTiers = [
  {
    id: 'portfolio',
    name: 'Portfolio',
    price: '€8,000',
    timeframe: '2-4 weeks',
    description: 'Complete website with animations, contact forms, and mobile-first design',
    features: ['Custom design', 'Responsive mobile', 'Contact form', 'SEO basics', 'Fast delivery', '1 month support'],
    color: 'from-[#de1352] to-[#00e5ff]',
    textColor: 'text-cyan-400',
    popular: true,
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    price: '€15,000',
    timeframe: '4-8 weeks',
    description: 'Online store withStripe payments, inventory sync, and order tracking',
    features: ['Payment gateway', 'Inventory sync', 'Order management', 'Admin dashboard', 'Mobile checkout', 'Shipping calc', 'Product variants'],
    color: 'from-[#10b981] to-[#00e5ff]',
    textColor: 'text-emerald-400',
    popular: false,
  },
  {
    id: 'saas',
    name: 'SaaS Application',
    price: '€25,000',
    timeframe: '8-12 weeks',
    description: 'Web application with user authentication, dashboards, and scalable architecture',
    features: ['User authentication', 'Admin dashboard', 'API development', 'Real-time updates', 'Database design', 'Scalable infrastructure', 'Performance optimization'],
    color: 'from-[#8b5cf6] to-[#00e5ff]',
    textColor: 'text-violet-400',
    popular: false,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '€50,000+',
    timeframe: '12+ weeks',
    description: 'Complex platforms with industry-specific features and enterprise integrations',
    features: ['Custom architecture', 'Advanced integrations', 'API development', 'Security audit', 'Performance tuning', 'Scalable hosting', 'DevOps setup'],
    color: 'from-[#f43f5e] to-[#00e5ff]',
    textColor: 'text-rose-400',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-[#1a1a2e] to-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#00bcd4] text-sm font-semibold tracking-wider uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Investment Plans
          </h2>
          <p className="text-slate-400 text-lg">
            High-value, low-volume. 2-4 projects per quarter for exceptional quality.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`glass-card p-8 relative overflow-hidden group ${
                tier.popular ? 'border-2 border-[#00bcd4]/50' : 'border-white/10'
              }`}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-0 group-hover:opacity-30 transition-opacity`}
              />

              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#de1352] to-[#00bcd4] text-[#0f0f0f] font-bold text-xs px-4 py-1 rounded-full border border-white/20">
                    Popular
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 font-serif">
                  {tier.name}
                </h3>
                <div className="text-3xl font-bold {tier.textColor} mb-2">
                  {tier.price}
                </div>
                <p className="text-sm text-slate-400 mb-6">
                  {tier.timeframe}
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {tier.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-400">
                      <Check className="w-5 h-5 text-[#00bcd4] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${tier.color} hover:from-[#00bcd4] hover:to-[#de1352] text-[#0f0f0f] rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[0_0_60px_rgba(0, 188, 212,0.6)] transform hover:-translate-y-1"`
                >
                  Get Started
                  <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
