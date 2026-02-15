export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/logo.png" 
                alt="Evolution Media Group" 
                className="w-32 sm:w-40 h-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-white font-playfair">
                Evolution Media Group
              </h3>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              We craft extraordinary digital experiences that matter. From sleek websites to powerful applications, we bring your vision to life with AI-powered development.
            </p>
            <div className="text-sm text-slate-500">
              <div className="mb-2">
                <a href="mailto:hello@evomedia.site" className="hover:text-[#00bcd4] transition-colors">
                  hello@evomedia.site
                </a>
              </div>
              <div>Dublin, Ireland</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#portfolio" className="text-slate-400 hover:text-[#00bcd4] transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-[#00bcd4] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <p className="text-slate-400">
                  Web Development
                </p>
              </li>
              <li>
                <p className="text-slate-400">
                  E-commerce
                </p>
              </li>
              <li>
                <p className="text-slate-400">
                  Brand Identity
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-500">
              © {new Date().getFullYear()} Evolution Media Group. All rights reserved.
            </div>
            <div className="text-sm text-slate-500">
              Built with Next.js, React, & Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
