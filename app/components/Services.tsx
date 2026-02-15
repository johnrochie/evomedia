import { Layout, ShoppingCart, Palette, Search } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Custom Web Design & Development',
    description: 'Bespoke websites tailored to your brand identity and business needs',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Powerful online stores with seamless checkout and inventory management',
  },
  {
    icon: Palette,
    title: 'Brand Identity & Digital Presence',
    description: 'Complete branding solutions that make your business stand out',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Improve your search rankings and reach more customers online',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 lg:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">
            What We Do
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
            Comprehensive digital solutions for modern businesses
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#00bcd4]/50 hover:shadow-2xl hover:shadow-[#00bcd4]/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-[#00bcd4]/20 to-[#00bcd4]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-[#00bcd4]" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 font-playfair">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
