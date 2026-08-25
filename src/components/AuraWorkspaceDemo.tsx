import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Code2, ListTodo, FileText, Send, Copy, Check, 
  RotateCcw, Terminal, Zap, Shield, Laptop, Bot, Play
} from 'lucide-react';

interface PresetTask {
  id: string;
  name: string;
  category: 'code' | 'plan' | 'summary';
  prompt: string;
  output: string;
  tags: string[];
}

const PRESET_WORKFLOWS: PresetTask[] = [
  {
    id: 'rest-api',
    name: 'Express REST Router Generator',
    category: 'code',
    prompt: 'Generate a typed Express.js API router with validation middleware and MongoDB Atlas query handlers for user workspaces.',
    output: `// Generated via Aura AI Workspace Engine
import { Router, Request, Response } from 'express';
import { WorkspaceModel } from '../models/Workspace';
import { authenticateToken } from '../middleware/auth';

const router = Router();

// GET /api/v1/workspaces - Fetch user workspaces
router.get('/', authenticateToken, async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const workspaces = await WorkspaceModel.find({ ownerId: userId })
      .sort({ updatedAt: -1 })
      .lean();
    return res.status(200).json({ success: true, count: workspaces.length, data: workspaces });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

export default router;`,
    tags: ['Express.js', 'TypeScript', 'REST API']
  },
  {
    id: 'sprint-plan',
    name: 'Full-Stack Sprint Architecture',
    category: 'plan',
    prompt: 'Break down an AI-assisted web application into a 2-week engineering delivery plan with backend, database, and UI milestones.',
    output: `### 🚀 Aura AI Sprint Breakdown (2-Week Iteration)

#### Phase 1: Core Foundation & Auth (Days 1–4)
- [x] Configure TypeScript workspace scaffolding & Tailwind CSS tokens.
- [x] Establish secure environment variable handling (.env) for LLM API keys.
- [x] Implement MongoDB connection pooling & JWT session verification.

#### Phase 2: AI Pipeline & Streaming (Days 5–9)
- [x] Build asynchronous API proxy routes with SSE (Server-Sent Events) streaming.
- [x] Implement client-side chunk receiver with markdown parser & code block styling.
- [x] Add prompt template injection and parameter tuning (temperature, max tokens).

#### Phase 3: Polish & Deployment (Days 10–14)
- [x] Add persistent workspace document management & history drawer.
- [x] Write unit & integration tests for critical route handlers.
- [x] Finalize container build & deploy to cloud infrastructure.`,
    tags: ['Agile Sprint', 'System Design', 'Roadmap']
  },
  {
    id: 'tech-summary',
    name: 'Architecture Technical Summary',
    category: 'summary',
    prompt: 'Summarize the core technical strengths and advantages of Swastik Padhy\'s full-stack and AI project portfolio.',
    output: `### 📌 Candidate Strengths: Swastik Padhy

1. **Full-Stack Proficiency**: Demonstrated ability across TypeScript, React, Python/Flask, Node.js/Express, and Tailwind CSS.
2. **Database Mastery**: Practical schema modeling in both NoSQL (MongoDB Atlas clusters) and Relational (SQLite / MySQL) environments.
3. **Collaborative Rigor**: Proven ability in 11-member engineering teams managing Git multi-branch workflows, PRs, and merge conflict resolution.
4. **AI/ML Web Integration**: Proven track record building practical AI-driven applications with rule-based heuristics and generative AI pipelines.`,
    tags: ['Technical Audit', 'Skill Matrix', 'Review']
  }
];

export default function AuraWorkspaceDemo() {
  const [selectedTask, setSelectedTask] = useState<PresetTask>(PRESET_WORKFLOWS[0]);
  const [customPrompt, setCustomPrompt] = useState(PRESET_WORKFLOWS[0].prompt);
  const [displayedOutput, setDisplayedOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [streamProgress, setStreamProgress] = useState(100);

  const startStreamEffect = (fullText: string) => {
    setIsGenerating(true);
    setDisplayedOutput('');
    setStreamProgress(0);

    let currentIndex = 0;
    const totalChars = fullText.length;
    const chunkSize = Math.max(3, Math.floor(totalChars / 40));

    const interval = setInterval(() => {
      currentIndex += chunkSize;
      if (currentIndex >= totalChars) {
        setDisplayedOutput(fullText);
        setStreamProgress(100);
        setIsGenerating(false);
        clearInterval(interval);
      } else {
        setDisplayedOutput(fullText.slice(0, currentIndex));
        setStreamProgress(Math.floor((currentIndex / totalChars) * 100));
      }
    }, 25);
  };

  useEffect(() => {
    startStreamEffect(selectedTask.output);
  }, [selectedTask]);

  const handleSelectPreset = (task: PresetTask) => {
    setSelectedTask(task);
    setCustomPrompt(task.prompt);
  };

  const handleRunExecution = () => {
    startStreamEffect(selectedTask.output);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(displayedOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="aura-workspace-interactive-demo" className="p-6 sm:p-8 rounded-2xl bg-[#0a0a0a] border border-[#222222] shadow-2xl">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-[#222222]">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex p-1.5 rounded-lg bg-[#141414] text-[#4ADE80] border border-[#222222]">
              <Sparkles className="w-4 h-4 text-[#4ADE80]" />
            </span>
            <h4 className="text-base sm:text-lg font-black uppercase font-display text-white">
              Aura AI Workspace // Interactive Canvas Preview
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#888888] font-mono mt-1">
            Simulated real-time AI execution, prompt generation, and streaming pipeline
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-[#141414] text-[#4ADE80] border border-[#222222]">
            <span className={`w-2 h-2 rounded-full ${isGenerating ? 'bg-amber-400 animate-ping' : 'bg-[#4ADE80] animate-pulse'}`}></span>
            {isGenerating ? 'Streaming Tokens...' : 'Engine Ready'}
          </span>
        </div>
      </div>

      {/* Workflow Preset Switcher */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6">
        {PRESET_WORKFLOWS.map((task) => (
          <button
            key={task.id}
            onClick={() => handleSelectPreset(task)}
            className={`p-3.5 rounded-xl text-left border transition-all flex flex-col justify-between gap-2 ${
              selectedTask.id === task.id
                ? 'bg-[#181818] border-[#4ADE80] text-white'
                : 'bg-[#121212] border-[#222222] text-[#888888] hover:text-white hover:border-[#333333]'
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-xs font-bold uppercase font-display text-white truncate">
                {task.name}
              </span>
              {task.category === 'code' && <Code2 className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />}
              {task.category === 'plan' && <ListTodo className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />}
              {task.category === 'summary' && <FileText className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />}
            </div>
            <div className="flex flex-wrap gap-1">
              {task.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#0a0a0a] text-[#AAAAAA] border border-[#222222]">
                  {tag}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      {/* Main Workspace Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Prompt Input Pane */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-[#121212] border border-[#222222] space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-bold uppercase text-[#888888] flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#4ADE80]" />
                <span>Prompt Input / Directive</span>
              </label>
              <span className="text-[10px] font-mono text-[#666666]">Template: {selectedTask.category}</span>
            </div>

            <textarea
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              rows={4}
              className="w-full p-3 rounded-lg bg-[#0a0a0a] border border-[#222222] text-[#F5F5F5] font-mono text-xs focus:outline-none focus:border-[#4ADE80] resize-none leading-relaxed"
              placeholder="Enter instructions for Aura AI Workspace..."
            />

            <div className="flex items-center justify-between pt-1">
              <div className="text-[11px] font-mono text-[#888888]">
                Tokens: <span className="text-white font-bold">{Math.round(customPrompt.length / 4)}</span>
              </div>
              
              <button
                onClick={handleRunExecution}
                disabled={isGenerating}
                className="px-4 py-2 rounded-lg bg-[#4ADE80] hover:bg-white text-black text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 disabled:opacity-50"
              >
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>{isGenerating ? 'Executing...' : 'Run Prompt'}</span>
              </button>
            </div>
          </div>

          {/* Model Config Strip */}
          <div className="p-3.5 rounded-xl bg-[#121212] border border-[#222222] space-y-2 text-xs font-mono">
            <div className="text-[11px] font-bold text-white uppercase flex items-center justify-between">
              <span>Engine Configuration</span>
              <span className="text-[#4ADE80]">LLM Agent v2.4</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px] text-[#888888]">
              <div>Mode: <strong className="text-[#CCCCCC]">Streaming SSE</strong></div>
              <div>Temp: <strong className="text-[#CCCCCC]">0.2 (Precise)</strong></div>
              <div>Context: <strong className="text-[#CCCCCC]">8k Tokens</strong></div>
              <div>Sanitization: <strong className="text-[#4ADE80]">Active</strong></div>
            </div>
          </div>
        </div>

        {/* Output Canvas Pane */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex-1 p-4 sm:p-5 rounded-xl bg-[#121212] border border-[#222222] flex flex-col justify-between">
            
            {/* Top Toolbar */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#222222]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#333333]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#333333]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#333333]"></span>
                <span className="text-xs font-mono font-bold uppercase text-[#888888] ml-2">
                  workspace://output.{selectedTask.category === 'code' ? 'ts' : 'md'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="px-2.5 py-1 rounded-lg bg-[#181818] hover:bg-[#222222] text-[#CCCCCC] hover:text-white border border-[#2a2a2a] text-xs font-mono flex items-center gap-1 transition-colors"
                  title="Copy Output"
                >
                  {copied ? <Check className="w-3 h-3 text-[#4ADE80]" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
                <button
                  onClick={handleRunExecution}
                  className="p-1 rounded-lg bg-[#181818] hover:bg-[#222222] text-[#CCCCCC] hover:text-white border border-[#2a2a2a] transition-colors"
                  title="Re-run Execution"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Output Display Area */}
            <div className="relative min-h-[220px] max-h-[340px] overflow-y-auto font-mono text-xs text-[#E0E0E0] bg-[#080808] p-4 rounded-lg border border-[#1c1c1c] leading-relaxed whitespace-pre-wrap">
              {displayedOutput}
              {isGenerating && (
                <span className="inline-block w-2 h-4 ml-1 bg-[#4ADE80] animate-pulse align-middle" />
              )}
            </div>

            {/* Bottom Stream Status */}
            <div className="mt-3 pt-2.5 border-t border-[#222222] flex items-center justify-between text-[11px] font-mono text-[#666666]">
              <span>Stream: {streamProgress}% complete</span>
              <span>Latency: ~180ms</span>
            </div>

          </div>
        </div>

      </div>

      {/* Footer Info */}
      <div className="mt-6 pt-4 border-t border-[#222222] flex flex-wrap items-center justify-between text-xs font-mono text-[#888888] gap-3">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-[#4ADE80] font-bold">
            <Bot className="w-3.5 h-3.5" /> Generative AI Integration
          </span>
          <span>•</span>
          <span className="text-[#AAAAAA]">Asynchronous Streaming</span>
          <span>•</span>
          <span className="text-[#AAAAAA]">Interactive Workspace</span>
        </div>
        <a
          href="https://github.com/swastikpadhy7326/aura-ai-workspace"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4ADE80] hover:underline flex items-center gap-1 font-bold"
        >
          View aura-ai-workspace on GitHub →
        </a>
      </div>

    </div>
  );
}
