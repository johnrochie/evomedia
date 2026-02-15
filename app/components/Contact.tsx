import { Mail, Phone, MessageCircle, Github, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-28 bg-[#1a1a2e]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">
            Get in Touch
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to start your project? Let's talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 sm:p-10 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 font-playfair">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#00bcd4]/50 focus:ring-2 focus:ring-[#00bcd4]/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#00bcd4]/50 focus:ring-2 focus:ring-[#00bcd4]/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#00bcd4]/50 focus:ring-2 focus:ring-[#00bcd4]/20 transition-all"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#00bcd4]/50 focus:ring-2 focus:ring-[#00bcd4]/20 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#00bcd4] hover:bg-[#00a5c2] text-[#0f0f0f] rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-[#00bcd4]/20 hover:shadow-xl hover:shadow-[#00bcd4]/30"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 font-playfair">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#00bcd4] mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Email</div>
                    <a
                      href="mailto:hello@evomedia.site"
                      className="text-white hover:text-[#00bcd4] transition-colors"
                    >
                      hello@evomedia.site
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#00bcd4] mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Phone</div>
                    <a
                      href="tel:+35312345678"
                      className="text-white hover:text-[#00bcd4] transition-colors"
                    >
                      +353 1 234 5678
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-5 h-5 text-[#00bcd4] mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Location</div>
                    <div className="text-white">
                      Dublin, Ireland
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 font-playfair">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/johnrochie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-[#00bcd4]/20 border border-white/10 hover:border-[#00bcd4]/50 rounded-xl flex items-center justify-center transition-all group"
                >
                  <Github className="w-5 h-5 text-slate-400 group-hover:text-[#00bcd4]" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-[#00bcd4]/20 border border-white/10 hover:border-[#00bcd4]/50 rounded-xl flex items-center justify-center transition-all group"
                >
                  <Twitter className="w-5 h-5 text-slate-400 group-hover:text-[#00bcd4]" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-[#00bcd4]/20 border border-white/10 hover:border-[#00bcd4]/50 rounded-xl flex items-center justify-center transition-all group"
                >
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-[#00bcd4]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
