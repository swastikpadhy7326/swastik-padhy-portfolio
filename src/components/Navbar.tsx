import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, FileText, Send, Sparkles, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'education', 'certifications', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/90 backdrop-blur-md border-b border-[#222222] shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-[#141414] border border-[#2a2a2a] p-0.5 group-hover:border-[#4ADE80] transition-colors flex items-center justify-center">
            <span className="font-display font-black text-sm text-[#4ADE80] tracking-tighter">
              SP
            </span>
          </div>
          <div>
            <div className="font-display font-black text-white tracking-tight group-hover:text-[#4ADE80] transition-colors flex items-center gap-1.5 text-base uppercase">
              {personalInfo.name}
            </div>
            <div className="text-[11px] text-[#999999] flex items-center gap-1.5 font-mono uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse"></span>
              Full-Stack Dev
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#121212] border border-[#222222] px-2 py-1.5 rounded-xl backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-[#222222] text-[#4ADE80] border border-[#333333]'
                    : 'text-[#999999] hover:text-white hover:bg-[#1a1a1a]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenResume}
            id="nav-resume-btn"
            className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#141414] hover:bg-[#1f1f1f] text-[#F5F5F5] border border-[#2a2a2a] hover:border-[#4ADE80] transition-all flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-[#4ADE80]" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            id="nav-contact-btn"
            className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#4ADE80] hover:bg-white text-black transition-all hover:scale-105 flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Connect</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenResume}
            className="p-2 rounded-xl bg-[#141414] border border-[#2a2a2a] text-[#F5F5F5] text-xs font-bold flex items-center gap-1"
            title="View Resume"
          >
            <FileText className="w-4 h-4 text-[#4ADE80]" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#141414] border border-[#2a2a2a] text-[#F5F5F5] hover:text-[#4ADE80] transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 border-b border-[#222222] px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#141414] border border-[#222222] text-[#F5F5F5] hover:bg-[#222] hover:text-[#4ADE80] transition-colors text-center"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#222222] flex items-center justify-between gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#141414] border border-[#2a2a2a] text-[#F5F5F5] hover:border-[#4ADE80] flex items-center justify-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-[#4ADE80]" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#4ADE80] hover:bg-white text-black flex items-center justify-center gap-1.5"
            >
              <Send className="w-4 h-4" />
              <span>Connect</span>
            </a>
          </div>

          <div className="flex justify-center items-center gap-4 pt-2 text-[#888888] text-xs font-mono">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#4ADE80] flex items-center gap-1">
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
            <span>•</span>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#4ADE80] flex items-center gap-1">
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <span>•</span>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-[#4ADE80] flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
