import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationCertifications from './components/EducationCertifications';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { FileText, Send, ArrowUp } from 'lucide-react';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F5] font-sans relative selection:bg-[#4ADE80] selection:text-black">
      
      {/* Top Navbar */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationCertifications />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Viewer / Print Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Floating Quick Action Widget for quick mobile / scroll access */}
      <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-30 flex flex-col gap-2.5">
        <button
          onClick={() => setResumeModalOpen(true)}
          className="p-3.5 rounded-xl bg-[#141414] border border-[#2a2a2a] text-[#F5F5F5] hover:text-black hover:bg-[#4ADE80] hover:border-[#4ADE80] shadow-2xl backdrop-blur-md transition-all hover:scale-105 flex items-center justify-center group font-bold"
          title="Open Resume / CV"
        >
          <FileText className="w-4 h-4" />
          <span className="sr-only">Open Resume</span>
        </button>
        <a
          href="#contact"
          className="p-3.5 rounded-xl bg-[#4ADE80] hover:bg-white text-black font-bold shadow-2xl transition-all hover:scale-105 flex items-center justify-center"
          title="Contact Swastik"
        >
          <Send className="w-4 h-4" />
          <span className="sr-only">Contact Swastik</span>
        </a>
      </aside>

    </div>
  );
}
