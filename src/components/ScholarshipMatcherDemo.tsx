import { useState } from 'react';
import { simulatedScholarships } from '../data/portfolioData';
import { Sparkles, CheckCircle2, Sliders, AlertCircle, ArrowRight } from 'lucide-react';

export default function ScholarshipMatcherDemo() {
  const [cgpa, setCgpa] = useState<number>(7.65);
  const [income, setIncome] = useState<number>(500000);
  const [category, setCategory] = useState<string>('All');
  const [educationLevel, setEducationLevel] = useState<string>('Undergraduate (B.Tech)');

  // Recommendation engine logic simulating Swastik's Python/Flask algorithm
  const matchedScholarships = simulatedScholarships.filter(scholarship => {
    const cgpaMatches = cgpa >= scholarship.minCgpa;
    const incomeMatches = income <= scholarship.maxIncome;
    const categoryMatches = scholarship.category.includes('All') || 
                            category === 'All' || 
                            scholarship.category.includes(category);
    const educationMatches = scholarship.educationLevel === educationLevel;
    return cgpaMatches && incomeMatches && categoryMatches && educationMatches;
  });

  return (
    <div id="scholarship-matcher-demo" className="mt-6 p-6 sm:p-8 rounded-2xl bg-[#0a0a0a] border border-[#222222] shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-[#222222]">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex p-1.5 rounded-lg bg-[#141414] text-[#4ADE80] border border-[#222222]">
              <Sparkles className="w-4 h-4 text-[#4ADE80]" />
            </span>
            <h4 className="text-base sm:text-lg font-black uppercase font-display text-white">
              MeritUs Algorithm Simulator
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#888888] font-mono mt-1">
            Test the recommendation logic developed in Python/Flask & SQLite by Swastik
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-[#141414] text-[#4ADE80] border border-[#222222] w-fit">
          <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse"></span>
          Flask API Simulation Active
        </span>
      </div>

      {/* Input Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* CGPA Slider */}
        <div className="p-4 rounded-xl bg-[#121212] border border-[#222222]">
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-mono font-bold uppercase text-[#888888]">CGPA (Max 10)</label>
            <span className="text-xs font-black text-[#4ADE80] font-mono bg-[#181818] px-2.5 py-0.5 rounded-lg border border-[#2a2a2a]">
              {cgpa.toFixed(2)}
            </span>
          </div>
          <input
            type="range"
            min="5.0"
            max="10.0"
            step="0.05"
            value={cgpa}
            onChange={(e) => setCgpa(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-[#222222] rounded-lg appearance-none cursor-pointer accent-[#4ADE80]"
          />
          <div className="flex justify-between text-[10px] font-mono text-[#666666] mt-1.5">
            <span>5.0</span>
            <span className="text-[#AAAAAA] font-bold">NIST: 7.65</span>
            <span>10.0</span>
          </div>
        </div>

        {/* Family Income */}
        <div className="p-4 rounded-xl bg-[#121212] border border-[#222222]">
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-mono font-bold uppercase text-[#888888]">Annual Income</label>
            <span className="text-xs font-black text-[#4ADE80] font-mono bg-[#181818] px-2.5 py-0.5 rounded-lg border border-[#2a2a2a]">
              ₹{(income / 100000).toFixed(1)}L
            </span>
          </div>
          <input
            type="range"
            min="100000"
            max="1200000"
            step="50000"
            value={income}
            onChange={(e) => setIncome(parseInt(e.target.value))}
            className="w-full h-1.5 bg-[#222222] rounded-lg appearance-none cursor-pointer accent-[#4ADE80]"
          />
          <div className="flex justify-between text-[10px] font-mono text-[#666666] mt-1.5">
            <span>₹1L</span>
            <span>₹6L</span>
            <span>₹12L</span>
          </div>
        </div>

        {/* Social Category */}
        <div className="p-4 rounded-xl bg-[#121212] border border-[#222222]">
          <label className="block text-xs font-mono font-bold uppercase text-[#888888] mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 text-xs font-mono rounded-lg bg-[#0a0a0a] border border-[#222222] text-[#F5F5F5] focus:outline-none focus:border-[#4ADE80]"
          >
            <option value="All">All Categories</option>
            <option value="General">General</option>
            <option value="OBC">OBC</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="SEBC">SEBC</option>
          </select>
        </div>

        {/* Education Level */}
        <div className="p-4 rounded-xl bg-[#121212] border border-[#222222]">
          <label className="block text-xs font-mono font-bold uppercase text-[#888888] mb-2">Program Level</label>
          <select
            value={educationLevel}
            onChange={(e) => setEducationLevel(e.target.value)}
            className="w-full px-3 py-2 text-xs font-mono rounded-lg bg-[#0a0a0a] border border-[#222222] text-[#F5F5F5] focus:outline-none focus:border-[#4ADE80]"
          >
            <option value="Undergraduate (B.Tech)">Undergraduate (B.Tech)</option>
          </select>
        </div>
      </div>

      {/* Result Output */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-mono font-bold tracking-wider text-[#4ADE80]">
              Matched Scholarships ({matchedScholarships.length})
            </span>
            <span className="text-[11px] font-mono text-[#666666]">Query evaluated against SQLite schema</span>
          </div>
          <button 
            onClick={() => { setCgpa(7.65); setIncome(500000); setCategory('All'); }}
            className="text-xs font-mono uppercase font-bold text-[#888888] hover:text-[#4ADE80] transition-colors flex items-center gap-1"
          >
            <Sliders className="w-3 h-3" /> Reset Profile
          </button>
        </div>

        {matchedScholarships.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {matchedScholarships.map((s) => (
              <div 
                key={s.id} 
                className="p-5 rounded-2xl bg-[#121212] border border-[#222222] hover:border-[#4ADE80] transition-all group"
              >
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h5 className="text-sm font-bold uppercase font-display text-white group-hover:text-[#4ADE80] transition-colors">
                    {s.title}
                  </h5>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase bg-[#181818] text-[#4ADE80] border border-[#2a2a2a] whitespace-nowrap">
                    {s.amount}
                  </span>
                </div>
                <p className="text-xs text-[#999999] mb-3 leading-relaxed">
                  {s.description}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#888888] pt-2.5 border-t border-[#1f1f1f]">
                  <span className="flex items-center gap-1 text-[#CCCCCC]">
                    <CheckCircle2 className="w-3 h-3 text-[#4ADE80]" />
                    Min CGPA: <strong className="text-white">{s.minCgpa}</strong>
                  </span>
                  <span>•</span>
                  <span>Max Income: <strong className="text-white">₹{(s.maxIncome/100000)}L/yr</strong></span>
                  <span>•</span>
                  <span className="text-[#4ADE80] font-bold">{s.provider}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 rounded-2xl bg-[#121212] border border-[#333333] text-center">
            <AlertCircle className="w-6 h-6 text-amber-400 mx-auto mb-2" />
            <p className="text-sm font-bold uppercase font-display text-white">No scholarships meet threshold</p>
            <p className="text-xs font-mono text-[#888888] mt-1">Try lowering the CGPA or adjusting the family income limit slider above.</p>
          </div>
        )}
      </div>

      <div className="mt-5 pt-3 border-t border-[#222222] flex flex-wrap items-center justify-between text-xs font-mono text-[#666666] gap-2">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></span>
          REST API Endpoint: <code className="font-mono text-[#4ADE80] bg-[#121212] px-2 py-0.5 rounded border border-[#222222]">POST /api/recommend</code>
        </span>
        <span className="text-[#666666] font-mono">Status: 200 OK | Response: JSON Array</span>
      </div>
    </div>
  );
}
