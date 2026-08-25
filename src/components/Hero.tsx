import { useState } from 'react';
import { personalInfo, bioSummary } from '../data/portfolioData';
import { 
  FileText, Send, Github, Linkedin, Mail, Phone, MapPin, 
  Sparkles, Terminal, Code2, Database, ArrowRight, Check, 
  GraduationCap, Award, Users, Layers
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-[#222222]">
      {/* Background Decorative Subtle Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#4ADE80]/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Header */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121212] border border-[#2a2a2a] shadow-sm backdrop-blur-md mb-8 hover:border-[#4ADE80]/60 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ADE80]"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5] font-mono">
              Available For Developer Internships 2025–2026
            </span>
          </div>

          {/* Huge Bold Typography Headline */}
          <div className="mb-4">
            <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#4ADE80] mb-2 font-bold">
              Software Engineer & Full-Stack Builder
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase font-display text-white leading-[0.9] select-none">
              {personalInfo.name}
            </h1>
          </div>

          {/* Subtitle Tech Strip */}
          <div className="text-sm sm:text-base md:text-lg font-mono uppercase font-bold tracking-wider text-[#AAAAAA] mt-4 mb-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5">
            <span className="text-white">Full-Stack Web</span>
            <span className="text-[#4ADE80]">•</span>
            <span className="text-white">MERN & Python/Flask</span>
            <span className="text-[#4ADE80]">•</span>
            <span className="text-[#4ADE80]">B.Tech CSE @ NIST</span>
          </div>

          {/* Subtitle / Bio Pitch */}
          <p className="text-sm sm:text-base text-[#999999] max-w-2xl leading-relaxed mb-8">
            Third-year B.Tech CSE student building production-ready web apps, scalable backend REST APIs, NoSQL/SQL schemas, and collaborative engineering systems in multidisciplinary teams.
          </p>

          {/* Quick Contact & Action Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10 w-full">
            <a
              href="#projects"
              id="hero-view-projects-btn"
              className="px-6 py-3.5 rounded-xl bg-[#4ADE80] hover:bg-white text-black text-xs sm:text-sm font-black uppercase tracking-wider transition-all hover:scale-105 flex items-center gap-2 shadow-xl shadow-[#4ADE80]/10"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              id="hero-view-resume-btn"
              className="px-6 py-3.5 rounded-xl bg-[#141414] hover:bg-[#202020] text-[#F5F5F5] border border-[#2a2a2a] hover:border-[#4ADE80] text-xs sm:text-sm font-black uppercase tracking-wider transition-all hover:scale-105 flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#4ADE80]" />
              <span>Curriculum Vitae</span>
            </button>

            <button
              onClick={handleCopyEmail}
              id="hero-copy-email-btn"
              className="px-5 py-3.5 rounded-xl bg-[#141414] hover:bg-[#202020] text-[#CCCCCC] border border-[#2a2a2a] text-xs font-mono transition-colors flex items-center gap-2"
              title="Copy Email Address"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-[#4ADE80]" />
                  <span className="text-[#4ADE80] font-bold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-[#4ADE80]" />
                  <span>{personalInfo.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Social / Direct Connect Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono mb-14">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-[#121212] border border-[#222222] hover:border-[#4ADE80] text-[#CCCCCC] hover:text-white transition-all flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#4ADE80]" />
              <span>in/swastik-padhy</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-[#121212] border border-[#222222] hover:border-[#4ADE80] text-[#CCCCCC] hover:text-white transition-all flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5 text-[#4ADE80]" />
              <span>gh/swastikpadhy7326</span>
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="px-3.5 py-1.5 rounded-lg bg-[#121212] border border-[#222222] hover:border-[#4ADE80] text-[#CCCCCC] hover:text-white transition-all flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#4ADE80]" />
              <span>{personalInfo.phone}</span>
            </a>
            <span className="px-3.5 py-1.5 rounded-lg bg-[#121212] border border-[#222222] text-[#888888] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#888888]" />
              <span>{personalInfo.location}</span>
            </span>
          </div>

          {/* High-Impact Stat Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full">
            
            {/* Stat 1: Education */}
            <div className="p-5 rounded-2xl bg-[#121212] border border-[#222222] text-left hover:border-[#4ADE80] transition-colors">
              <div className="p-2.5 w-fit rounded-xl bg-[#1a1a1a] text-[#4ADE80] mb-3">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="text-[11px] text-[#888888] font-bold uppercase tracking-wider font-mono">Degree</div>
              <div className="text-xl sm:text-2xl font-black font-display text-white mt-1 uppercase">B.Tech CSE</div>
              <div className="text-xs text-[#888888] mt-1 font-mono">NIST (2024–2028)</div>
            </div>

            {/* Stat 2: Academic CGPA */}
            <div className="p-5 rounded-2xl bg-[#121212] border border-[#222222] text-left hover:border-[#4ADE80] transition-colors">
              <div className="p-2.5 w-fit rounded-xl bg-[#1a1a1a] text-[#4ADE80] mb-3">
                <Award className="w-4 h-4" />
              </div>
              <div className="text-[11px] text-[#888888] font-bold uppercase tracking-wider font-mono">Academic CGPA</div>
              <div className="text-xl sm:text-2xl font-black font-display text-[#4ADE80] mt-1 font-mono">{personalInfo.cgpa}</div>
              <div className="text-xs text-[#888888] mt-1 font-mono">Computer Science</div>
            </div>

            {/* Stat 3: Teamwork */}
            <div className="p-5 rounded-2xl bg-[#121212] border border-[#222222] text-left hover:border-[#4ADE80] transition-colors">
              <div className="p-2.5 w-fit rounded-xl bg-[#1a1a1a] text-[#4ADE80] mb-3">
                <Users className="w-4 h-4" />
              </div>
              <div className="text-[11px] text-[#888888] font-bold uppercase tracking-wider font-mono">Team Experience</div>
              <div className="text-xl sm:text-2xl font-black font-display text-white mt-1 uppercase">11 Devs</div>
              <div className="text-xs text-[#888888] mt-1 font-mono">Git / GitHub Branching</div>
            </div>

            {/* Stat 4: Full Stack Architecture */}
            <div className="p-5 rounded-2xl bg-[#121212] border border-[#222222] text-left hover:border-[#4ADE80] transition-colors">
              <div className="p-2.5 w-fit rounded-xl bg-[#1a1a1a] text-[#4ADE80] mb-3">
                <Layers className="w-4 h-4" />
              </div>
              <div className="text-[11px] text-[#888888] font-bold uppercase tracking-wider font-mono">Tech Stack</div>
              <div className="text-xl sm:text-2xl font-black font-display text-white mt-1 uppercase">MERN + Flask</div>
              <div className="text-xs text-[#888888] mt-1 font-mono">MongoDB & SQLite</div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
