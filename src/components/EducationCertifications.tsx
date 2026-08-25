import { educationList, certifications } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, CheckCircle2, ShieldCheck, BookOpen, School } from 'lucide-react';

export default function EducationCertifications() {
  return (
    <section id="education" className="py-16 md:py-24 border-b border-[#222222] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase font-mono tracking-wider bg-[#141414] text-[#4ADE80] border border-[#222222] mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>04 // Academic Track</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase font-display text-white tracking-tight">
            Education & Credentials
          </h2>
          <p className="text-sm sm:text-base text-[#999999] max-w-2xl mt-3">
            Rigorous undergraduate computer science engineering foundation paired with continuous specialized technical certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Timeline (Left Column - 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-[#222222]">
              <School className="w-5 h-5 text-[#4ADE80]" />
              <h3 className="text-xl font-bold uppercase font-display text-white">Education History</h3>
            </div>

            <div className="space-y-4">
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all ${
                    edu.current
                      ? 'bg-[#121212] border-[#4ADE80]/50 shadow-lg shadow-[#4ADE80]/5'
                      : 'bg-[#121212] border-[#222222]'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="flex items-center gap-1.5 text-xs text-[#4ADE80] font-mono font-bold">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.year}
                    </span>
                    {edu.current && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase font-mono bg-[#181818] text-[#4ADE80] border border-[#4ADE80]/30">
                        Currently Enrolled
                      </span>
                    )}
                  </div>

                  <h4 className="text-base sm:text-lg font-black uppercase font-display text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#AAAAAA] font-mono font-bold mt-0.5">
                    {edu.institution}
                  </p>

                  <div className="mt-3 py-1.5 px-3 rounded-xl bg-[#0a0a0a] border border-[#222222] w-fit">
                    <span className="text-xs text-[#888888] font-mono">{edu.scoreLabel}: </span>
                    <strong className="text-xs font-black text-[#4ADE80] font-mono">{edu.score}</strong>
                  </div>

                  {edu.details && edu.details.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-[#1f1f1f] space-y-1.5 text-xs text-[#999999] font-mono">
                      {edu.details.map((detail, i) => (
                        <p key={i} className="leading-relaxed">
                          • {detail}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications (Right Column - 6 cols) */}
          <div id="certifications" className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-[#222222]">
              <Award className="w-5 h-5 text-[#4ADE80]" />
              <h3 className="text-xl font-bold uppercase font-display text-white">Certifications & Accreditations</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#121212] border border-[#222222] hover:border-[#4ADE80] transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#4ADE80] font-mono">
                        {cert.category}
                      </span>
                      <h4 className="text-base font-bold uppercase font-display text-white mt-0.5">
                        {cert.title}
                      </h4>
                    </div>
                    <div className="p-2 rounded-xl bg-[#1a1a1a] text-[#4ADE80] border border-[#2a2a2a] shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs text-[#999999] leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {cert.skillsLearned.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#0a0a0a] border border-[#222222] text-[#CCCCCC]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
