import { ExternalLink, Globe, Server, Stethoscope } from 'lucide-react';

const portfolio = [
  {
    name: 'Real Estate Agency',
    description: 'Modern property listings website with advanced search, map integration, and beautiful property showcases',
    tech: 'Next.js, React, Tailwind CSS, Mapbox',
    url: 'https://real-estate-agency-lemon.vercel.app/',
    icon: Globe,
  },
  {
    name: 'Dental Practice',
    description: 'Healthcare website with appointment booking, team profiles, services, and professional photography',
    tech: 'Next.js, React, Tailwind CSS, Vercel',
    url: 'https://dental-practice-xi.vercel.app/',
    icon: Stethoscope,
  },
  {
    name: 'ICT Services',
    description: 'Enterprise IT services site with GDPR compliance, partner showcase, and professional branding',
    tech: 'Next.js, React, Tailwind CSS, Responsive Design',
    url: 'https://ictservices-umber.vercel.app/',
    icon: Server,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 sm:py-24 lg:py-28 bg-[#1a1a2e]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">
            Featured Work
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
            Selected projects from our portfolio
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolio.map((project, index) => (
            <div
              key={project.name}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl overflow-hidden border border-white/10 hover:border-[#00bcd4]/50 hover:shadow-2xl hover:shadow-[#00bcd4]/10 transition-all duration-300"
            >
              {/* Header */}
              <div className="relative aspect-[3/2] bg-gradient-to-br from-[#00bcd4]/20 to-transparent overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="w-20 h-20 text-[#00bcd4]/40 group-hover:text-[#00bcd4] transition-colors" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-white mb-3 font-playfair">
                  {project.name}
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-[#00bcd4]/10 text-[#00bcd4] text-sm rounded-full">
                    {project.tech.split(',')[0]}
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-slate-300 text-sm rounded-full">
                    {project.tech.split(',')[1]}
                  </span>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#00bcd4] hover:bg-[#00a5c2] text-[#0f0f0f] rounded-lg font-semibold transition-all duration-300 group-hover:gap-3"
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
