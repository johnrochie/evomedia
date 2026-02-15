import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a2e] to-[#0f0f0f]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMDBiY2Q0IiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIi8+PC9nPjwvc3ZnPg==')]"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00bcd4]/10 border border-[#00bcd4]/30 mb-8">
            <Mail className="w-4 h-4 text-[#00bcd4]" />
            <span className="text-sm font-medium text-[#00bcd4]">
              Web Development & Digital Design
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight font-playfair">
            We Build Digital<br />
            <span className="text-[#00bcd4]">Experiences That Matter</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-10 sm:mb-12 max-w-2xl mx-auto">
            From sleek websites to powerful applications, we bring your vision to life with precision and purpose.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#portfolio"
              className="group px-8 py-4 bg-[#00bcd4] hover:bg-[#00a5c2] text-[#0f0f0f] rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-[#00bcd4]/20 hover:shadow-xl hover:shadow-[#00bcd4]/30 flex items-center gap-2"
            >
              View Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 bg-transparent hover:bg-white/5 text-white border-2 border-white/30 hover:border-[#00bcd4] rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
