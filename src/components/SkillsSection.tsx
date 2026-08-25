import { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Code2, Server, Database, GitBranch, Cpu, Terminal, 
  Layers, Layout, Network, FileCode, HardDrive, Boxes, 
  Coffee, Binary, FileCode2, Laptop, ShieldCheck, BrainCircuit,
  CheckCircle2, Sparkles
} from 'lucide-react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Helper to map icon string to Lucide icon component
  const renderSkillIcon = (iconName: string) => {
    const iconProps = { className: "w-5 h-5 text-[#4ADE80] group-hover:text-white transition-colors" };
    switch (iconName) {
      case 'Server': return <Server {...iconProps} />;
      case 'Layers': return <Layers {...iconProps} />;
      case 'Terminal': return <Terminal {...iconProps} />;
      case 'Cpu': return <Cpu {...iconProps} />;
      case 'Code2': return <Code2 {...iconProps} />;
      case 'Layout': return <Layout {...iconProps} />;
      case 'Network': return <Network {...iconProps} />;
      case 'Database': return <Database {...iconProps} />;
      case 'FileCode': return <FileCode {...iconProps} />;
      case 'HardDrive': return <HardDrive {...iconProps} />;
      case 'Boxes': return <Boxes {...iconProps} />;
      case 'Code': return <Code2 {...iconProps} />;
      case 'Coffee': return <Coffee {...iconProps} />;
      case 'Binary': return <Binary {...iconProps} />;
      case 'FileCode2': return <FileCode2 {...iconProps} />;
      case 'GitBranch': return <GitBranch {...iconProps} />;
      case 'Laptop': return <Laptop {...iconProps} />;
      case 'ShieldCheck': return <ShieldCheck {...iconProps} />;
      case 'BrainCircuit': return <BrainCircuit {...iconProps} />;
      default: return <Code2 {...iconProps} />;
    }
  };

  const allSkills = skillCategories.flatMap(cat => 
    cat.skills.map(s => ({ ...s, category: cat.category }))
  );

  const displayedSkills = activeCategory === 'All'
    ? allSkills
    : allSkills.filter(s => s.category === activeCategory);

  const categoryNames = ['All', ...skillCategories.map(c => c.category)];

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-[#222222] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase font-mono tracking-wider bg-[#141414] text-[#4ADE80] border border-[#222222] mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>02 // Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase font-display text-white tracking-tight">
            Technical Stack
          </h2>
          <p className="text-sm sm:text-base text-[#999999] max-w-2xl mt-3">
            Proven competencies across programming languages, web frameworks, databases, and engineering workflows.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#121212] border border-[#222222] shadow-inner max-w-full">
            {categoryNames.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-[#4ADE80] text-black shadow-md'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {displayedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="group p-5 rounded-2xl bg-[#121212] border border-[#222222] hover:border-[#4ADE80] hover:bg-[#161616] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] group-hover:border-[#4ADE80]/40 transition-colors">
                    {renderSkillIcon(skill.iconName)}
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                    skill.level === 'Advanced' 
                      ? 'bg-[#1a1a1a] text-[#4ADE80] border border-[#4ADE80]/30' 
                      : 'bg-[#1a1a1a] text-[#CCCCCC] border border-[#333333]'
                  }`}>
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-base font-bold font-display uppercase tracking-wide text-white group-hover:text-[#4ADE80] transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-[#999999] mt-1.5 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1f1f1f] flex items-center justify-between text-[11px] text-[#777777] font-mono">
                <span>{skill.category}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4ADE80] opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Highlights Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#121212] border border-[#222222] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-bold uppercase font-display text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-[#4ADE80]" />
              <span>Full-Stack Development Workflow</span>
            </h4>
            <p className="text-xs text-[#999999]">
              Experienced in creating end-to-end applications from database architecture to responsive client interfaces.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono font-bold">
            <span className="px-3 py-1.5 rounded-xl bg-[#181818] border border-[#2a2a2a] text-[#CCCCCC]">
              Node.js + Express
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-[#181818] border border-[#2a2a2a] text-[#4ADE80]">
              Python + Flask
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-[#181818] border border-[#2a2a2a] text-[#CCCCCC]">
              MongoDB Atlas + SQLite
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-[#181818] border border-[#2a2a2a] text-[#4ADE80]">
              Git & GitHub Teams
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
