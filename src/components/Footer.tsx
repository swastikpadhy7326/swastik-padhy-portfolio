import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#222222] bg-[#080808] text-[#888888] text-xs py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#222222]">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#141414] border border-[#2a2a2a] flex items-center justify-center font-mono font-black text-[#4ADE80] text-xs">
              SP
            </div>
            <div>
              <div className="font-black uppercase font-display text-white text-sm tracking-wider">{personalInfo.name}</div>
              <div className="text-[11px] font-mono text-[#888888]">Software Developer // NIST CSE</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono font-bold uppercase text-[#AAAAAA]">
            <a href="#about" className="hover:text-[#4ADE80] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#4ADE80] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#4ADE80] transition-colors">Projects</a>
            <a href="#education" className="hover:text-[#4ADE80] transition-colors">Education</a>
            <a href="#contact" className="hover:text-[#4ADE80] transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#121212] border border-[#222222] text-[#CCCCCC] hover:text-[#4ADE80] hover:border-[#4ADE80] transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#121212] border border-[#222222] text-[#CCCCCC] hover:text-[#4ADE80] hover:border-[#4ADE80] transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-[#121212] border border-[#222222] text-[#CCCCCC] hover:text-[#4ADE80] hover:border-[#4ADE80] transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#121212] hover:bg-[#181818] border border-[#222222] hover:border-[#4ADE80] text-[#CCCCCC] hover:text-[#4ADE80] transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#666666]">
          <div>
            © {new Date().getFullYear()} SWASTIK PADHY. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-1.5 uppercase font-bold text-[#888888]">
            <span>ENGINEERED WITH REACT, TYPESCRIPT & TAILWIND CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
