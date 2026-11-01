import { motion } from 'motion/react';
import { bioSummary, personalInfo } from '../data/portfolioData';
import { User, Target, CheckCircle2, ArrowRight, Sparkles, Code2, Award, School } from 'lucide-react';

export default function AboutSection() {
  const avatarSrc = personalInfo.avatarUrl || "/assets/aistudio/portfolio_photo_61c5f2ec.jpeg";

  return (
    <section id="about" className="py-16 md:py-24 border-b border-[#222222] relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#00C3FF]/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#4ADE80]/5 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase font-mono tracking-wider bg-[#141414] text-[#4ADE80] border border-[#222222] mb-3">
            <User className="w-3.5 h-3.5" />
            <span>01 // Developer Profile</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase font-display text-white tracking-tight">
            Background & Philosophy
          </h2>
          <p className="text-sm sm:text-base text-[#999999] max-w-2xl mt-3">
            Third-year B.Tech CSE student at NIST bridging backend architectures with robust, production-ready web interfaces.
          </p>
        </motion.div>

        {/* Profile Content Display */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#121212] border border-[#222222] rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Detailed Bio & Core Engineering Disciplines */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#262626] text-xs font-mono text-[#00C3FF]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Engineering Mindset & Approach</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase font-display text-white leading-snug">
                Building Scalable, Purpose-Driven Software from the Ground Up
              </h3>
              <p className="text-sm sm:text-base text-[#CCCCCC] leading-relaxed">
                {bioSummary.shortBio}
              </p>
              <p className="text-sm sm:text-base text-[#999999] leading-relaxed">
                {bioSummary.detailedBio}
              </p>

              <div className="pt-4 border-t border-[#222222]">
                <h4 className="text-xs uppercase tracking-wider text-[#4ADE80] font-bold font-mono mb-3 flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Core Engineering Disciplines</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {bioSummary.coreFocusAreas.map((area, idx) => (
                    <motion.li 
                      key={idx}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-[#CCCCCC] p-1.5 rounded-lg hover:bg-[#181818] transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0" />
                      <span>{area}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Developer ID Card with Profile Photo */}
            <div className="lg:col-span-5">
              <motion.div 
                whileHover={{ y: -4, borderColor: "#00C3FF" }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl bg-[#0a0a0a] border border-[#222222] space-y-5 shadow-xl transition-all"
              >
                {/* ID Header with Photo & Details */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-2xl p-0.5 bg-gradient-to-tr from-[#00C3FF] to-[#4ADE80] shadow-[0_0_15px_rgba(0,195,255,0.3)] shrink-0">
                    <img
                      src={avatarSrc}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover rounded-[14px]"
                    />
                    <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#4ADE80] border-2 border-[#0a0a0a]" />
                  </div>
                  <div>
                    <div className="text-base font-black uppercase font-display text-white">
                      {personalInfo.name}
                    </div>
                    <div className="text-xs text-[#00C3FF] font-mono font-bold">
                      Full-Stack Web & Backend
                    </div>
                    <div className="text-[11px] text-[#888888] font-mono">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>

                {/* Institution Row */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#141414] border border-[#242424]">
                  <div className="w-10 h-10 rounded-lg bg-[#1c1c1c] border border-[#333333] flex items-center justify-center font-black text-sm text-[#4ADE80] font-display">
                    NIST
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase font-display text-white">Academic Institution</div>
                    <div className="text-[11px] text-[#888888] font-mono">{personalInfo.university}</div>
                  </div>
                </div>

                {/* Standing & Metrics Table */}
                <div className="space-y-2 pt-1 text-xs border-t border-[#1f1f1f]">
                  <div className="flex justify-between py-1.5 border-b border-[#1a1a1a]">
                    <span className="text-[#888888]">Current Standing:</span>
                    <span className="font-bold text-white font-mono">3rd Year B.Tech CSE</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#1a1a1a]">
                    <span className="text-[#888888]">Cumulative GPA:</span>
                    <span className="font-black text-[#4ADE80] font-mono">7.65 / 10.0</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#1a1a1a]">
                    <span className="text-[#888888]">Expected Graduation:</span>
                    <span className="font-bold text-white font-mono">2028</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#888888]">Target Roles:</span>
                    <span className="font-bold text-[#00C3FF] font-mono uppercase">SDE / Web Dev Intern</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#141414] border border-[#262626] text-xs text-[#CCCCCC] flex items-center gap-2 font-mono">
                  <Target className="w-4 h-4 text-[#4ADE80] shrink-0" />
                  <span>Actively seeking collaborative internship opportunities.</span>
                </div>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="w-full py-3 rounded-xl bg-[#181818] hover:bg-[#4ADE80] text-[#CCCCCC] hover:text-black border border-[#2a2a2a] hover:border-[#4ADE80] text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <span>Discuss Opportunities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.a>
              </motion.div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
