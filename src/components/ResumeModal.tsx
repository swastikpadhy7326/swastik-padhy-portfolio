import { useState } from 'react';
import { personalInfo, bioSummary, educationList, projects, certifications } from '../data/portfolioData';
import { downloadResumePDF, printResumeDocument } from '../utils/resumeGenerator';
import { 
  X, Printer, Download, Mail, Phone, MapPin, Linkedin, Github, 
  FileText, Check, AlertCircle, Loader2
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState<string | null>(null);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [printStatus, setPrintStatus] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleDownloadPdf = async () => {
    setIsDownloadingPdf(true);
    setPrintStatus(null);
    try {
      const success = await downloadResumePDF();
      if (success) {
        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 3000);
      }
    } catch (err) {
      console.error('PDF download error:', err);
    } finally {
      setIsDownloadingPdf(false);
    }
  };

  const handlePrint = () => {
    setPrintStatus('Initiating print dialog...');
    const result = printResumeDocument();
    if (result) {
      setTimeout(() => setPrintStatus(null), 2500);
    } else {
      // If printing fails/blocked, automatically download the PDF
      setPrintStatus('Print window restricted. Generating direct PDF file...');
      handleDownloadPdf();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#121212] border border-[#222222] rounded-3xl shadow-2xl overflow-hidden text-[#F5F5F5]">
        
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-[#0a0a0a] border-b border-[#222222] shrink-0">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-[#4ADE80]" />
            <div>
              <h3 className="text-xs sm:text-base font-black uppercase font-display text-white">
                Curriculum Vitae // {personalInfo.name}
              </h3>
              <p className="text-[10px] sm:text-xs text-[#888888] font-mono">
                Official Engineering Resume • ATS Optimized
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            
            {/* Direct PDF Download Button */}
            <button
              onClick={handleDownloadPdf}
              disabled={isDownloadingPdf}
              id="resume-modal-download-pdf-btn"
              className="px-3.5 py-1.5 rounded-xl bg-[#4ADE80] hover:bg-white text-black text-xs font-mono font-bold uppercase transition-all shadow-md flex items-center gap-1.5 disabled:opacity-50"
              title="Download ATS-ready PDF"
            >
              {isDownloadingPdf ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Generating PDF...</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </>
              )}
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              id="resume-modal-print-btn"
              className="px-3 py-1.5 rounded-xl bg-[#181818] hover:bg-[#222222] text-xs font-mono font-bold uppercase text-white border border-[#2a2a2a] hover:border-[#4ADE80] transition-colors flex items-center gap-1.5"
              title="Print document or save via system printer"
            >
              <Printer className="w-3.5 h-3.5 text-[#4ADE80]" />
              <span className="hidden sm:inline">Print</span>
            </button>

            {/* Close Modal Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-[#888888] hover:text-white hover:bg-[#181818] transition-colors"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Status notice banner if print/download was triggered */}
        {printStatus && (
          <div className="bg-[#181818] border-b border-[#2a2a2a] px-4 py-2 text-xs font-mono text-[#4ADE80] flex items-center gap-2 justify-between">
            <span className="flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              {printStatus}
            </span>
            <button 
              onClick={() => setPrintStatus(null)}
              className="text-[#888888] hover:text-white text-[10px]"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Resume Content Sheet */}
        <div 
          id="printable-resume-sheet" 
          className="flex-1 overflow-y-auto p-4 sm:p-8 md:p-10 bg-[#080808] font-sans"
        >
          <div className="max-w-3xl mx-auto bg-[#121212] border border-[#222222] rounded-2xl p-6 sm:p-8 shadow-inner">
            
            {/* Header / Banner */}
            <div className="text-center pb-6 border-b border-[#222222]">
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white uppercase font-display">
                {personalInfo.name}
              </h1>
              <p className="text-xs sm:text-sm font-bold font-mono tracking-widest text-[#4ADE80] uppercase mt-1">
                Software Developer // Full-Stack Engineer // MERN & Flask
              </p>

              {/* Contact Strip */}
              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1.5 text-xs font-mono text-[#AAAAAA] mt-3">
                <a href={`mailto:${personalInfo.email}`} className="hover:text-[#4ADE80] transition-colors flex items-center gap-1">
                  <Mail className="w-3 h-3 text-[#4ADE80]" /> {personalInfo.email}
                </a>
                <span>•</span>
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="hover:text-[#4ADE80] transition-colors flex items-center gap-1">
                  <Phone className="w-3 h-3 text-[#4ADE80]" /> {personalInfo.phone}
                </a>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#4ADE80]" /> {personalInfo.location}
                </span>
                <span>•</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#4ADE80] hover:underline flex items-center gap-0.5">
                  <Linkedin className="w-3 h-3" /> linkedin.com/in/swastik-padhy
                </a>
                <span>•</span>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-[#4ADE80] hover:underline flex items-center gap-0.5">
                  <Github className="w-3 h-3" /> github.com/swastikpadhy7326
                </a>
              </div>
            </div>

            {/* Career Summary */}
            <div className="mt-6">
              <h2 className="text-xs font-black tracking-widest text-[#4ADE80] uppercase font-mono border-b border-[#222222] pb-1 mb-2">
                Career Summary
              </h2>
              <p className="text-xs leading-relaxed text-[#CCCCCC]">
                {bioSummary.shortBio}
              </p>
            </div>

            {/* Education */}
            <div className="mt-6">
              <h2 className="text-xs font-black tracking-widest text-[#4ADE80] uppercase font-mono border-b border-[#222222] pb-1 mb-3">
                Education
              </h2>
              <div className="space-y-3">
                {educationList.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs gap-1">
                    <div>
                      <div className="font-bold text-white">{edu.degree}</div>
                      <div className="text-[#888888] font-mono">{edu.institution}</div>
                    </div>
                    <div className="text-left sm:text-right font-medium text-[#AAAAAA]">
                      <div className="font-mono">{edu.year}</div>
                      <div className="text-[#4ADE80] font-bold font-mono">{edu.scoreLabel}: {edu.score}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mt-6">
              <h2 className="text-xs font-black tracking-widest text-[#4ADE80] uppercase font-mono border-b border-[#222222] pb-1 mb-2.5">
                Technical Skills
              </h2>
              <div className="space-y-2 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                  <span className="font-bold text-white font-mono uppercase text-[11px] sm:col-span-1">Languages:</span>
                  <span className="text-[#CCCCCC] font-mono sm:col-span-3">C, Java, Python, JavaScript (ES6+), TypeScript</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                  <span className="font-bold text-white font-mono uppercase text-[11px] sm:col-span-1">Web Tech:</span>
                  <span className="text-[#CCCCCC] font-mono sm:col-span-3">HTML5, CSS3, JavaScript, React, Node.js, Express.js, Flask, REST APIs</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                  <span className="font-bold text-white font-mono uppercase text-[11px] sm:col-span-1">Databases:</span>
                  <span className="text-[#CCCCCC] font-mono sm:col-span-3">MongoDB Atlas, Mongoose ODM, MySQL, SQLite</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                  <span className="font-bold text-white font-mono uppercase text-[11px] sm:col-span-1">Tools & Practices:</span>
                  <span className="text-[#CCCCCC] font-mono sm:col-span-3">Git, GitHub (Multi-branch), VS Code, API Security (.env), Postman</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                  <span className="font-bold text-white font-mono uppercase text-[11px] sm:col-span-1">Focus Areas:</span>
                  <span className="text-[#CCCCCC] font-mono sm:col-span-3">Full-Stack Web Development, AI/ML Web Integration, Scalable Backend Services</span>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="mt-6">
              <h2 className="text-xs font-black tracking-widest text-[#4ADE80] uppercase font-mono border-b border-[#222222] pb-1 mb-3">
                Academic & Engineering Projects
              </h2>
              <div className="space-y-4">
                {projects.map((proj) => (
                  <div key={proj.id} className="text-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <div className="font-bold text-white flex items-center gap-1.5">
                        <span className="font-bold uppercase">{proj.title}</span> — <span className="font-normal text-[#888888]">{proj.subtitle}</span>
                      </div>
                      <div className="text-[11px] font-mono font-bold text-[#4ADE80]">
                        {proj.techStack.slice(0, 5).join(', ')}
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-[#CCCCCC] leading-relaxed pl-1">
                      {proj.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-6">
              <h2 className="text-xs font-black tracking-widest text-[#4ADE80] uppercase font-mono border-b border-[#222222] pb-1 mb-2">
                Certifications
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#CCCCCC] font-mono">
                {certifications.map((c, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></span>
                    <span>{c.title} ({c.issuer || c.category})</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#0a0a0a] border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shrink-0">
          <div className="flex items-center gap-2 text-[#888888] font-mono">
            <span>Quick Copy:</span>
            <button
              onClick={() => handleCopy(personalInfo.email, 'email')}
              className="px-3 py-1 rounded-xl bg-[#181818] hover:bg-[#222222] text-[#CCCCCC] hover:text-white border border-[#2a2a2a] transition-colors flex items-center gap-1 font-mono text-xs"
            >
              {copied === 'email' ? <Check className="w-3 h-3 text-[#4ADE80]" /> : <Mail className="w-3 h-3 text-[#4ADE80]" />}
              {copied === 'email' ? 'Copied Email' : 'Email'}
            </button>
            <button
              onClick={() => handleCopy(personalInfo.phone, 'phone')}
              className="px-3 py-1 rounded-xl bg-[#181818] hover:bg-[#222222] text-[#CCCCCC] hover:text-white border border-[#2a2a2a] transition-colors flex items-center gap-1 font-mono text-xs"
            >
              {copied === 'phone' ? <Check className="w-3 h-3 text-[#4ADE80]" /> : <Phone className="w-3 h-3 text-[#4ADE80]" />}
              {copied === 'phone' ? 'Copied Phone' : 'Phone'}
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadPdf}
              disabled={isDownloadingPdf}
              className="px-4 py-2 rounded-xl bg-[#181818] hover:bg-[#252525] text-[#4ADE80] font-mono font-bold text-xs border border-[#2a2a2a] hover:border-[#4ADE80] transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save PDF File</span>
            </button>

            <a
              href={`mailto:${personalInfo.email}?subject=Internship%20Opportunity%20-%20Swastik%20Padhy`}
              className="px-5 py-2 rounded-xl bg-[#4ADE80] hover:bg-white text-black font-black uppercase tracking-wider text-xs transition-all shadow-xl shadow-[#4ADE80]/10 flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" /> Send Email / Offer
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
