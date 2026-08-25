import { bioSummary, personalInfo } from '../data/portfolioData';
import { User, Target, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-[#222222] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
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
        </div>

        {/* Profile Content Display */}
        <div className="bg-[#121212] border border-[#222222] rounded-3xl p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl sm:text-2xl font-black uppercase font-display text-white leading-snug">
                Building Scalable, Purpose-Driven Software from the Ground Up
              </h3>
              <p className="text-sm sm:text-base text-[#CCCCCC] leading-relaxed">
                {bioSummary.shortBio}
              </p>
              <p className="text-sm sm:text-base text-[#999999] leading-relaxed">
                {bioSummary.detailedBio}
              </p>

              <div className="pt-4 border-t border-[#222222]">
                <h4 className="text-xs uppercase tracking-wider text-[#4ADE80] font-bold font-mono mb-3">
                  Core Engineering Disciplines
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {bioSummary.coreFocusAreas.map((area, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#CCCCCC]">
                      <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-[#222222] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#181818] border border-[#2a2a2a] flex items-center justify-center font-black text-lg text-[#4ADE80] font-display">
                    NIST
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase font-display text-white">Academic Institution</div>
                    <div className="text-xs text-[#888888] font-mono">{personalInfo.university}</div>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2 text-xs border-t border-[#222222]">
                  <div className="flex justify-between py-1.5 border-b border-[#1f1f1f]">
                    <span className="text-[#888888]">Current Standing:</span>
                    <span className="font-bold text-white font-mono">3rd Year B.Tech CSE</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#1f1f1f]">
                    <span className="text-[#888888]">Cumulative GPA:</span>
                    <span className="font-black text-[#4ADE80] font-mono">7.65 / 10.0</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#1f1f1f]">
                    <span className="text-[#888888]">Expected Graduation:</span>
                    <span className="font-bold text-white font-mono">2028</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#888888]">Target Role:</span>
                    <span className="font-bold text-[#4ADE80] font-mono uppercase">SDE / Web Dev Intern</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141414] border border-[#262626] text-xs text-[#CCCCCC] flex items-center gap-2 font-mono">
                  <Target className="w-4 h-4 text-[#4ADE80] shrink-0" />
                  <span>Actively seeking collaborative internship opportunities.</span>
                </div>

                <a
                  href="#contact"
                  className="w-full py-3 rounded-xl bg-[#181818] hover:bg-[#4ADE80] text-[#CCCCCC] hover:text-black border border-[#2a2a2a] hover:border-[#4ADE80] text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <span>Discuss Opportunities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
