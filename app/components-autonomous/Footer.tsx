'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const year = new Date().getFullYear();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const footerLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ];
  
  return (
    <footer className="section-padding bg-[#0f0f0f] border-t border-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-6">
          {/* Left: Logo/Name */}
          <div className="flex flex-col lg:flex-row items-center gap-4 text-left order-2 lg:order-1">
            <span className="text-gray-400 text-sm font-medium">
              © {year} Autonomous Design Agency. All rights reserved.
            </span>
            <span className="text-gray-500 text-xs">
              AI-powered development, human-reviewed · Premium websites in weeks, not months.
            </span>
          </div>

          {/* Right: Navigation - Desktop full links, Mobile with dropdown */}
          <div className="flex flex-row items-center gap-8 text-sm order-1 lg:order-2">
            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-all duration-200 hover:text-[#de1352] hover:font-semibold"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile: Dropdown button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:text-[#de1352] transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute bottom-full right-0 left-0 bg-[#151515] border border-gray-700 rounded-xl p-4 mx-4 mb-4 z-50 shadow-2xl">
              <div className="flex flex-col gap-4">
                {footerLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-white hover:text-[#de1352] transition-all duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
