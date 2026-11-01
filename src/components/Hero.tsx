import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { 
  FileText, Send, Github, Linkedin, Mail, Phone, MapPin, 
  Sparkles, Code2, Database, ArrowRight, Check, 
  GraduationCap, Award, Users, Layers, Terminal, Cpu
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

const titles = [
  "Full-Stack Web Developer",
  "MERN Stack Specialist",
  "Python & Flask REST Engineer",
  "B.Tech CSE @ NIST (2024–2028)"
];

export default function Hero({ onOpenResume }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);

  // Cycling headline text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const avatarSrc = personalInfo.avatarUrl || "/assets/aistudio/portfolio_photo_61c5f2ec.jpeg";

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#222222]">
      {/* Dynamic Animated Ambient Glow Lights */}
      <motion.div 
        animate={{ 
          scale: [1, 1.25, 1],
          opacity: [0.08, 0.16, 0.08],
          x: [-20, 20, -20]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-1/4 w-[500px] h-[350px] bg-[#00C3FF] blur-[150px] rounded-full pointer-events-none -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.06, 0.14, 0.06],
          x: [30, -30, 30]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-1/4 w-[500px] h-[350px] bg-[#4ADE80] blur-[160px] rounded-full pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two Column Layout on Desktop: Left Content, Right Animated Portrait Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          
          {/* Left Column: Intro, Typography, Pitch, CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121212]/90 border border-[#2a2a2a] shadow-lg backdrop-blur-md mb-6 hover:border-[#4ADE80] transition-colors"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4ADE80]"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5] font-mono">
                Available For Developer Internships 2025–2026
              </span>
            </motion.div>

            {/* Sub-headline / Animated Role Cycler */}
            <div className="h-7 mb-2 flex items-center justify-center lg:justify-start overflow-hidden">
              <motion.div
                key={currentTitleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="text-xs sm:text-sm font-mono uppercase tracking-[0.22em] text-[#4ADE80] font-bold flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00C3FF]" />
                <span>{titles[currentTitleIndex]}</span>
              </motion.div>
            </div>

            {/* Huge Bold Typography Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase font-display text-white leading-[0.92] select-none mb-4">
              {personalInfo.name}
            </h1>

            {/* Subtitle Tech Strip */}
            <div className="text-xs sm:text-sm md:text-base font-mono uppercase font-bold tracking-wider text-[#AAAAAA] mb-5 flex flex-wrap items-center justify-center lg:justify-start gap-x-2.5 gap-y-1.5">
              <span className="text-white px-2 py-0.5 rounded bg-[#181818] border border-[#262626]">Full-Stack Web</span>
              <span className="text-[#4ADE80]">•</span>
              <span className="text-white px-2 py-0.5 rounded bg-[#181818] border border-[#262626]">MERN Stack</span>
              <span className="text-[#00C3FF]">•</span>
              <span className="text-white px-2 py-0.5 rounded bg-[#181818] border border-[#262626]">Python & Flask</span>
              <span className="text-[#4ADE80]">•</span>
              <span className="text-[#4ADE80] font-black">NIST B.Tech CSE</span>
            </div>

            {/* Bio Pitch */}
            <p className="text-sm sm:text-base text-[#999999] max-w-xl leading-relaxed mb-8">
              Third-year B.Tech Computer Science student building production-ready web apps, scalable backend REST APIs, NoSQL/SQL schemas, and collaborative engineering systems in multidisciplinary teams.
            </p>

            {/* Quick Contact & Action Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-8 w-full">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                id="hero-view-projects-btn"
                className="px-6 py-3.5 rounded-xl bg-[#4ADE80] hover:bg-white text-black text-xs sm:text-sm font-black uppercase tracking-wider transition-all flex items-center gap-2 shadow-xl shadow-[#4ADE80]/20"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenResume}
                id="hero-view-resume-btn"
                className="px-6 py-3.5 rounded-xl bg-[#141414] hover:bg-[#202020] text-[#F5F5F5] border border-[#2a2a2a] hover:border-[#4ADE80] text-xs sm:text-sm font-black uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#4ADE80]" />
                <span>Curriculum Vitae</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
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
              </motion.button>
            </div>

            {/* Social / Direct Connect Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs font-mono">
              <motion.a
                whileHover={{ scale: 1.06, y: -2 }}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-[#121212] border border-[#222222] hover:border-[#00C3FF] text-[#CCCCCC] hover:text-white transition-all flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#00C3FF]" />
                <span>in/swastik-padhy</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.06, y: -2 }}
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-[#121212] border border-[#222222] hover:border-[#4ADE80] text-[#CCCCCC] hover:text-white transition-all flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5 text-[#4ADE80]" />
                <span>gh/swastikpadhy7326</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.06, y: -2 }}
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="px-3.5 py-1.5 rounded-lg bg-[#121212] border border-[#222222] hover:border-[#4ADE80] text-[#CCCCCC] hover:text-white transition-all flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#4ADE80]" />
                <span>{personalInfo.phone}</span>
              </motion.a>
              <span className="px-3.5 py-1.5 rounded-lg bg-[#121212] border border-[#222222] text-[#888888] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#888888]" />
                <span>{personalInfo.location}</span>
              </span>
            </div>

          </motion.div>

          {/* Right Column: Animated Portrait Showcase with Floating Satellites & Neon Aura */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div 
              className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] flex items-center justify-center"
              onMouseEnter={() => setIsPhotoHovered(true)}
              onMouseLeave={() => setIsPhotoHovered(false)}
            >
              {/* Outer Cyan Neon Glow Ripple */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.35, 0.65, 0.35]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00C3FF]/30 via-[#4ADE80]/20 to-[#00C3FF]/30 blur-2xl -z-10"
              />

              {/* Slow Rotating Neon Orbit Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 sm:-inset-6 rounded-full border border-dashed border-[#00C3FF]/30 pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00C3FF] shadow-[0_0_12px_#00C3FF]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#4ADE80] shadow-[0_0_10px_#4ADE80]" />
              </motion.div>

              {/* Main Portrait Image Container */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-[260px] h-[260px] sm:w-[330px] sm:h-[330px] md:w-[370px] md:h-[370px] rounded-full p-1.5 sm:p-2 bg-gradient-to-tr from-[#00C3FF] via-[#1a2b3c] to-[#4ADE80] shadow-[0_0_40px_rgba(0,195,255,0.35)] cursor-pointer overflow-hidden group"
              >
                <img
                  src={avatarSrc}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-full select-none transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle Interactive Shimmer Overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
                
                {/* Active Status Ring Badge on photo bottom */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0a0a0a]/90 border border-[#00C3FF]/60 shadow-lg backdrop-blur-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse"></span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white">Full-Stack SDE</span>
                </div>
              </motion.div>

              {/* Floating Satellite Badge 1: Top-Left (Full Stack) */}
              <motion.div
                animate={{
                  y: [-6, 6, -6],
                  x: [-2, 2, -2]
                }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -left-2 sm:top-2 sm:left-0 z-20"
              >
                <div className="px-3.5 py-2 rounded-2xl bg-[#121212]/95 border border-[#2a2a2a] hover:border-[#4ADE80] shadow-2xl backdrop-blur-md flex items-center gap-2.5 transition-all">
                  <div className="p-1.5 rounded-lg bg-[#1a1a1a] text-[#4ADE80]">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-[#888888] font-mono uppercase font-bold">Stack</div>
                    <div className="text-xs font-bold text-white font-display">MERN + Python</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Satellite Badge 2: Top-Right (APIs & Backend) */}
              <motion.div
                animate={{
                  y: [6, -6, 6],
                  x: [2, -2, 2]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-2 -right-2 sm:top-4 sm:right-0 z-20"
              >
                <div className="px-3.5 py-2 rounded-2xl bg-[#121212]/95 border border-[#2a2a2a] hover:border-[#00C3FF] shadow-2xl backdrop-blur-md flex items-center gap-2.5 transition-all">
                  <div className="p-1.5 rounded-lg bg-[#1a1a1a] text-[#00C3FF]">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-[#888888] font-mono uppercase font-bold">Backend</div>
                    <div className="text-xs font-bold text-white font-display">Flask & Express REST</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Satellite Badge 3: Bottom-Left (NIST & Academics) */}
              <motion.div
                animate={{
                  y: [5, -5, 5],
                  x: [-3, 3, -3]
                }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-2 sm:bottom-2 sm:-left-4 z-20"
              >
                <div className="px-3.5 py-2 rounded-2xl bg-[#121212]/95 border border-[#2a2a2a] hover:border-[#4ADE80] shadow-2xl backdrop-blur-md flex items-center gap-2.5 transition-all">
                  <div className="p-1.5 rounded-lg bg-[#1a1a1a] text-[#4ADE80]">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-[#888888] font-mono uppercase font-bold">NIST CSE</div>
                    <div className="text-xs font-bold text-[#4ADE80] font-mono">CGPA 7.65 / 10</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Satellite Badge 4: Bottom-Right (Git & Teams) */}
              <motion.div
                animate={{
                  y: [-5, 5, -5],
                  x: [3, -3, 3]
                }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-4 -right-2 sm:bottom-2 sm:-right-4 z-20"
              >
                <div className="px-3.5 py-2 rounded-2xl bg-[#121212]/95 border border-[#2a2a2a] hover:border-[#00C3FF] shadow-2xl backdrop-blur-md flex items-center gap-2.5 transition-all">
                  <div className="p-1.5 rounded-lg bg-[#1a1a1a] text-[#00C3FF]">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-[#888888] font-mono uppercase font-bold">Collaboration</div>
                    <div className="text-xs font-bold text-white font-display">11-Dev Team Git</div>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* High-Impact Stat Bento Grid with Staggered Scroll Animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full">
          
          {/* Stat 1: Education */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, borderColor: "#4ADE80" }}
            transition={{ duration: 0.4 }}
            className="p-5 rounded-2xl bg-[#121212] border border-[#222222] text-left transition-colors"
          >
            <div className="p-2.5 w-fit rounded-xl bg-[#1a1a1a] text-[#4ADE80] mb-3">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div className="text-[11px] text-[#888888] font-bold uppercase tracking-wider font-mono">Degree</div>
            <div className="text-xl sm:text-2xl font-black font-display text-white mt-1 uppercase">B.Tech CSE</div>
            <div className="text-xs text-[#888888] mt-1 font-mono">NIST (2024–2028)</div>
          </motion.div>

          {/* Stat 2: Academic CGPA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, borderColor: "#00C3FF" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-5 rounded-2xl bg-[#121212] border border-[#222222] text-left transition-colors"
          >
            <div className="p-2.5 w-fit rounded-xl bg-[#1a1a1a] text-[#00C3FF] mb-3">
              <Award className="w-4 h-4" />
            </div>
            <div className="text-[11px] text-[#888888] font-bold uppercase tracking-wider font-mono">Academic CGPA</div>
            <div className="text-xl sm:text-2xl font-black font-display text-[#4ADE80] mt-1 font-mono">{personalInfo.cgpa}</div>
            <div className="text-xs text-[#888888] mt-1 font-mono">Computer Science</div>
          </motion.div>

          {/* Stat 3: Teamwork */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, borderColor: "#4ADE80" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-5 rounded-2xl bg-[#121212] border border-[#222222] text-left transition-colors"
          >
            <div className="p-2.5 w-fit rounded-xl bg-[#1a1a1a] text-[#4ADE80] mb-3">
              <Users className="w-4 h-4" />
            </div>
            <div className="text-[11px] text-[#888888] font-bold uppercase tracking-wider font-mono">Team Experience</div>
            <div className="text-xl sm:text-2xl font-black font-display text-white mt-1 uppercase">11 Devs</div>
            <div className="text-xs text-[#888888] mt-1 font-mono">Git / GitHub Branching</div>
          </motion.div>

          {/* Stat 4: Full Stack Architecture */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, borderColor: "#00C3FF" }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-5 rounded-2xl bg-[#121212] border border-[#222222] text-left transition-colors"
          >
            <div className="p-2.5 w-fit rounded-xl bg-[#1a1a1a] text-[#00C3FF] mb-3">
              <Layers className="w-4 h-4" />
            </div>
            <div className="text-[11px] text-[#888888] font-bold uppercase tracking-wider font-mono">Tech Stack</div>
            <div className="text-xl sm:text-2xl font-black font-display text-white mt-1 uppercase">MERN + Flask</div>
            <div className="text-xs text-[#888888] mt-1 font-mono">MongoDB & SQLite</div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
