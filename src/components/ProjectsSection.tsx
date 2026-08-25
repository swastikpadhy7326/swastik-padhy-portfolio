import { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import ScholarshipMatcherDemo from './ScholarshipMatcherDemo';
import SpotifyMiniPlayer from './SpotifyMiniPlayer';
import AuraWorkspaceDemo from './AuraWorkspaceDemo';
import { 
  FolderGit2, Github, ExternalLink, Sparkles, Layers, 
  Database, Server, Cpu, CheckCircle2, ChevronRight, Play, Eye
} from 'lucide-react';

export default function ProjectsSection() {
  const [activeDemoId, setActiveDemoId] = useState<string | null>('aura-ai-workspace');
  const [selectedProjectModal, setSelectedProjectModal] = useState<Project | null>(null);

  const toggleDemo = (id: string) => {
    setActiveDemoId(activeDemoId === id ? null : id);
  };

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-[#222222] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase font-mono tracking-wider bg-[#141414] text-[#4ADE80] border border-[#222222] mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03 // Featured Works</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase font-display text-white tracking-tight">
            Key Software Projects
          </h2>
          <p className="text-sm sm:text-base text-[#999999] max-w-2xl mt-3">
            Hands-on full-stack systems demonstrating backend API development, database architecture, and team collaboration.
          </p>
        </div>

        {/* Projects Cards List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-[#121212] border border-[#222222] rounded-3xl p-6 sm:p-8 md:p-10 transition-all hover:border-[#4ADE80] duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Project Overview (Left / Main) */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase font-mono bg-[#181818] text-[#4ADE80] border border-[#2a2a2a]">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-[#181818] text-[#AAAAAA] border border-[#2a2a2a]">
                      Role: {project.role}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-4xl font-black uppercase font-display text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono uppercase font-bold text-[#4ADE80] mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#CCCCCC] leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs uppercase font-mono tracking-wider text-[#4ADE80] font-bold">
                      Key Technical Contributions
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#CCCCCC]">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider text-[#888888] font-bold mb-2">
                      Technologies & Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-[#181818] text-[#F5F5F5] border border-[#2a2a2a]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => toggleDemo(project.id)}
                      className={`px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
                        activeDemoId === project.id
                          ? 'bg-[#4ADE80] text-black shadow-lg shadow-[#4ADE80]/10'
                          : 'bg-[#181818] hover:bg-[#222222] text-white border border-[#2a2a2a] hover:border-[#4ADE80]'
                      }`}
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{activeDemoId === project.id ? 'Hide Interactive Demo' : 'Launch Interactive Demo'}</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#181818] hover:bg-[#222222] text-[#CCCCCC] hover:text-white border border-[#2a2a2a] hover:border-[#4ADE80] transition-all flex items-center gap-2 font-mono"
                    >
                      <Github className="w-4 h-4 text-[#4ADE80]" />
                      <span>GitHub Repo</span>
                    </a>
                  </div>
                </div>

                {/* Architecture Breakdown (Right Panel) */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                  <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-[#222222] space-y-4">
                    <h4 className="text-xs font-black uppercase font-mono tracking-wider text-[#4ADE80] flex items-center gap-1.5 pb-2.5 border-b border-[#222222]">
                      <Layers className="w-4 h-4" />
                      <span>System Architecture Overview</span>
                    </h4>

                    <div className="space-y-3.5 text-xs">
                      <div>
                        <span className="text-[#888888] block font-mono font-bold uppercase text-[11px]">Backend & API Layer:</span>
                        <p className="text-[#F5F5F5] font-mono mt-1 text-[11px] leading-relaxed">
                          {project.architecture.backend}
                        </p>
                      </div>

                      <div>
                        <span className="text-[#888888] block font-mono font-bold uppercase text-[11px]">Database Layer:</span>
                        <p className="text-[#F5F5F5] font-mono mt-1 text-[11px] leading-relaxed">
                          {project.architecture.database}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[#222222]">
                        <span className="text-[#888888] block font-mono font-bold uppercase text-[11px] mb-2">Architectural Pillars:</span>
                        <ul className="space-y-2 text-[#CCCCCC] text-[11px] font-mono">
                          {project.architecture.keyArchitecturePoints.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-[#4ADE80] font-bold">›</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Project Metrics / Quick Stats */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-[#0a0a0a] border border-[#222222] text-center">
                          <div className="text-[10px] text-[#888888] font-mono uppercase">{m.label}</div>
                          <div className="text-xs font-black font-display text-white mt-0.5 truncate">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>

              {/* Embedded Interactive Demo Area */}
              {activeDemoId === project.id && (
                <div className="mt-8 pt-6 border-t border-[#222222] animate-in fade-in slide-in-from-top-4 duration-300">
                  {project.id === 'aura-ai-workspace' && <AuraWorkspaceDemo />}
                  {project.id === 'meritus' && <ScholarshipMatcherDemo />}
                  {project.id === 'spotify-clone' && <SpotifyMiniPlayer />}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
