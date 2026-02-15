import { Users, Zap, Clock, HeadphonesIcon } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: 'Client-Focused Approach',
    description: 'Your goals are our priority. We work collaboratively to understand your vision and deliver results that exceed expectations.',
  },
  {
    icon: Zap,
    title: 'Modern Technology Stack',
    description: 'We use the latest technologies - Next.js, React, Tailwind CSS, and modern deployment platforms - to build fast, scalable solutions.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'We respect your time. Our efficient processes ensure timely delivery without compromising on quality.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Ongoing Support',
    description: 'Our relationship doesn\'t end at launch. We provide ongoing support and maintenance to keep your digital presence running smoothly.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">
            About Evolution Media Group
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto">
            We are a passionate team of designers and developers dedicated to crafting exceptional digital experiences that drive business growth.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 text-center font-playfair">
            Why Choose Us
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-white/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#00bcd4]/20 to-[#00bcd4]/10 rounded-xl flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-[#00bcd4]" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-playfair">
                  {reason.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#00bcd4] mb-1">50+</div>
            <div className="text-sm text-slate-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#00bcd4] mb-1">8+</div>
            <div className="text-sm text-slate-400">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#00bcd4] mb-1">99%</div>
            <div className="text-sm text-slate-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#00bcd4] mb-1">3+</div>
            <div className="text-sm text-slate-400">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
