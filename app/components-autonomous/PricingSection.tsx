import React from 'react';
import { Zap, Shield, Clock, Fingerprint } from 'lucide-react';
import { motion } from 'framer-motion';

export function PricingSection() {
  // Pricing tier data
  const pricingTiers = [
    {
      id: 'portfolio',
      name: 'Portfolio',
      price: '€8,000',
      timeframe: '2-4 weeks',
      description: 'Complete website with animations and contact form',
      color: '#de1352',
      toColor: '#00e5ff',
      accent: 'text-cyan-400',
      tags: ['Next.js', 'Animations', 'Contact Form', 'Mobile First'],
      popular: true,
      Icon: Zap,
    },
    {
      id: 'ecommerce',
      name: 'E-commerce',
      price: '€15,000',
      timeframe: '4-8 weeks',
      description: 'Online store with payments, inventory, and order management',
      color: '#10b981',
      toColor: '#10d981',
      accent: 'text-emerald-400',
      tags: ['Stripe', 'Inventory', 'Orders', 'Shopify-ready'],
      popular: false,
      Icon: Shield,
    },
    {
      id: 'saas',
      name: 'SaaS App',
      price: '€25,000',
      timeframe: '8-12 weeks',
      description: 'Web application with user auth and dashboards',
      color: '#8b5cf6',
      toColor: '#a8b5d6',
      accent: 'text-violet-400',
      tags: ['NextAuth', 'Dashboards', 'API', 'Scalable'],
      popular: false,
      Icon: Clock,
    },
    {
      id: 'custom',
      name: 'Custom',
      price: '€50,000+',
      timeframe: '12+ weeks',
      description: 'Complex platforms with industry-specific features',
      color: '#f43f5e',
      toColor: '#f97316',
      accent: 'text-rose-400',
      tags: ['Custom Architecture', 'Enterprise', 'API Integration', 'Consulting'],
      popular: false,
      Icon: Fingerprint,
    },
  ];

  return(
    <section className="section-padding bg-gradient-to-b from-[#0f0f0f] to-[#000000]" id="pricing">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#de1352] via-[#00e5ff] to-teal-400">
            Pricing
          </span>
        </h2>

        <p className="text-gray-400 text-center mb-16 text-lg max-w-2xl mx-auto">
          High-value, low-volume. 2-4 projects per quarter.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`
                group relative bg-gradient-to-br from-[#1a1a1a] to-[#151515] border-2xl p-8 overflow-hidden transition-all duration-300 ease-out
                ${tier.id === 'portfolio' ? 'border-2 border-[#de1352] shadow-[0_0_60px_rgba(0,188,212,0.3)]' : 'border-gray-700 hover:border-[#1a1a1a]'}
              `}
            >
              {/* Background color gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-20 transition-opacity"
                style={{
                  background: `linear-gradient(135deg, ${tier.color} 0%, ${tier.toColor} 100%)`
                }}
              />

              {/* Content wrapper */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {tier.name}
                  </h3>
                  {tier.id === 'portfolio' && (
                    <span className="px-3 py-1 bg-[#de1352]/20 border border-[#de1352]/40 rounded-full text-xs font-bold uppercase tracking-wider text-[#de1352]">
                      Popular
                    </span>
                  )}
                </div>

                {/* Price */}
                <p className={tier.accent + " text-3xl font-bold mb-2"}>
                  {tier.price}
                </p>

                {/* Timeframe */}
                <p className="text-gray-400 text-sm mb-4">
                  {tier.timeframe}
                </p>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* Features list */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tier.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium uppercase tracking-wider px-2 py-1 bg-[#0a0a0a]/40 rounded text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Trending arrow indicator */}
                <Fingerprint className="absolute bottom-4 right-4 w-5 h-5 text-gray-500" />
              </div>

              {/* Icon floating */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#0a0a0a] rounded-2xl flex items-center justify-center border border-gray-700 p-3">
                <tier.Icon
                  className={`w-10 h-10 ${tier.accent}`}
                  strokeWidth={2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
