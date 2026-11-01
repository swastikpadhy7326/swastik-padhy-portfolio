import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Copy, Check, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [subject, setSubject] = useState<string>('Software Developer / Web Developer Internship Opportunity');
  const [senderName, setSenderName] = useState<string>('');
  const [senderEmail, setSenderEmail] = useState<string>('');
  const [senderCompany, setSenderCompany] = useState<string>('');
  const [message, setMessage] = useState<string>('Hi Swastik, I reviewed your portfolio and would like to discuss an engineering opportunity with you.');
  const [isSent, setIsSent] = useState<boolean>(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${senderName}\nEmail: ${senderEmail}\nCompany: ${senderCompany}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoUrl;
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  const quickTemplates = [
    { label: "Internship Offer", subject: "Software Developer Internship Opportunity", msg: "Hi Swastik, we were impressed by your projects (MeritUs & Spotify Clone) and would like to interview you for an SDE / Web Dev internship." },
    { label: "Full-Stack Project", subject: "Full-Stack Web Collaboration", msg: "Hi Swastik, I have a project requiring MERN / Python Flask backend development and would like to collaborate." },
    { label: "General Chat", subject: "Connecting via Portfolio", msg: "Hi Swastik, I came across your portfolio profile and would love to connect with you." },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-[#222222] relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-[#00C3FF]/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase font-mono tracking-wider bg-[#141414] text-[#4ADE80] border border-[#222222] mb-3">
            <Send className="w-3.5 h-3.5" />
            <span>05 // Connect</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase font-display text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-[#999999] max-w-2xl mt-3">
            Open for Software Developer & Web Developer internships, collaborative projects, or engineering discussions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Cards & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Email Card */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -2, borderColor: "#00C3FF" }}
              className="p-5 rounded-2xl bg-[#121212] border border-[#222222] transition-colors shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#1a1a1a] text-[#00C3FF] border border-[#2a2a2a]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#888888] font-mono">Primary Email</span>
                    <div className="text-sm font-bold text-white font-mono break-all">{personalInfo.email}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-xl bg-[#181818] border border-[#2a2a2a] text-[#CCCCCC] hover:text-[#00C3FF] hover:border-[#00C3FF] transition-colors"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-[#4ADE80]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </motion.div>

            {/* Secondary Email Card */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -2, borderColor: "#4ADE80" }}
              className="p-5 rounded-2xl bg-[#121212] border border-[#222222] transition-colors shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#1a1a1a] text-[#4ADE80] border border-[#2a2a2a]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#888888] font-mono">Personal Email</span>
                    <div className="text-sm font-bold text-white font-mono break-all">{personalInfo.secondaryEmail}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.secondaryEmail, 'sec-email')}
                  className="p-2 rounded-xl bg-[#181818] border border-[#2a2a2a] text-[#CCCCCC] hover:text-[#4ADE80] hover:border-[#4ADE80] transition-colors"
                  title="Copy Personal Email"
                >
                  {copiedField === 'sec-email' ? <Check className="w-4 h-4 text-[#4ADE80]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -2, borderColor: "#4ADE80" }}
              className="p-5 rounded-2xl bg-[#121212] border border-[#222222] transition-colors shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#1a1a1a] text-[#4ADE80] border border-[#2a2a2a]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#888888] font-mono">Phone / WhatsApp</span>
                    <div className="text-sm font-bold text-white font-mono">{personalInfo.phone}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 rounded-xl bg-[#181818] border border-[#2a2a2a] text-[#CCCCCC] hover:text-[#4ADE80] hover:border-[#4ADE80] transition-colors"
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-[#4ADE80]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </motion.div>

            {/* Location & Academic Base Card */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-5 rounded-2xl bg-[#121212] border border-[#222222]"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#1a1a1a] text-[#4ADE80] border border-[#2a2a2a]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#888888] font-mono">Location & Campus</span>
                  <div className="text-sm font-bold text-white font-mono">{personalInfo.location}</div>
                  <div className="text-xs text-[#888888] font-mono mt-0.5">{personalInfo.university}</div>
                </div>
              </div>
            </motion.div>

            {/* Social Links Row */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#121212] border border-[#222222] hover:border-[#00C3FF] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-[#00C3FF]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5] font-mono">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#666666] group-hover:text-[#00C3FF] transition-colors" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#121212] border border-[#222222] hover:border-[#4ADE80] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-[#4ADE80]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5] font-mono">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#666666] group-hover:text-[#4ADE80] transition-colors" />
              </motion.a>
            </div>

          </div>

          {/* Right Column: Direct Message Composer Form (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-[#222222] shadow-xl">
              
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#222222]">
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-[#4ADE80]" />
                  <h3 className="text-base sm:text-lg font-black uppercase font-display text-white">Send Direct Message</h3>
                </div>
                <span className="text-[11px] text-[#888888] font-mono">
                  Direct to Swastik's Inbox
                </span>
              </div>

              {/* Quick Template Buttons */}
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase font-mono text-[#888888] mb-2">Quick Message Templates:</label>
                <div className="flex flex-wrap gap-2">
                  {quickTemplates.map((tpl, i) => (
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      key={i}
                      type="button"
                      onClick={() => {
                        setSubject(tpl.subject);
                        setMessage(tpl.msg);
                      }}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold uppercase bg-[#181818] hover:bg-[#222222] border border-[#2a2a2a] hover:border-[#4ADE80] text-[#CCCCCC] transition-all"
                    >
                      {tpl.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase font-mono text-[#CCCCCC] mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan / Lead Engineer"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-[#0a0a0a] border border-[#222222] text-[#F5F5F5] placeholder:text-[#555555] focus:outline-none focus:border-[#4ADE80] font-mono transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase font-mono text-[#CCCCCC] mb-1.5">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-[#0a0a0a] border border-[#222222] text-[#F5F5F5] placeholder:text-[#555555] focus:outline-none focus:border-[#4ADE80] font-mono transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase font-mono text-[#CCCCCC] mb-1.5">Company / Team</label>
                    <input
                      type="text"
                      placeholder="e.g. Tech Studio / Startup"
                      value={senderCompany}
                      onChange={(e) => setSenderCompany(e.target.value)}
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-[#0a0a0a] border border-[#222222] text-[#F5F5F5] placeholder:text-[#555555] focus:outline-none focus:border-[#4ADE80] font-mono transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase font-mono text-[#CCCCCC] mb-1.5">Subject</label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-[#0a0a0a] border border-[#222222] text-[#F5F5F5] placeholder:text-[#555555] focus:outline-none focus:border-[#4ADE80] font-mono transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase font-mono text-[#CCCCCC] mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your inquiry or interview details here..."
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-[#0a0a0a] border border-[#222222] text-[#F5F5F5] placeholder:text-[#555555] focus:outline-none focus:border-[#4ADE80] resize-none font-mono transition-colors"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#4ADE80] hover:bg-white text-black font-black uppercase tracking-wider text-xs sm:text-sm transition-all shadow-xl shadow-[#4ADE80]/10 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Swastik</span>
                </motion.button>

                {isSent && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-[#141414] border border-[#4ADE80]/40 text-xs text-[#4ADE80] font-mono text-center"
                  >
                    ✓ Opening your email client to dispatch message to <span className="font-bold text-white">{personalInfo.email}</span>!
                  </motion.div>
                )}
              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
