import { jsPDF } from 'jspdf';
import { personalInfo, bioSummary, educationList, projects, certifications } from '../data/portfolioData';

/**
 * Safe text helper that ensures arguments passed to jsPDF.text are valid,
 * non-empty strings, numbers, or string arrays.
 */
function safeText(
  doc: jsPDF,
  text: string | string[] | number | null | undefined,
  x: number,
  y: number,
  options?: { align?: 'left' | 'center' | 'right' | 'justify' }
): void {
  if (text === null || text === undefined) return;
  if (typeof text === 'number') {
    doc.text(String(text), x, y, options);
    return;
  }
  if (Array.isArray(text)) {
    const validLines = text.filter((line) => typeof line === 'string' && line.trim().length > 0);
    if (validLines.length > 0) {
      doc.text(validLines, x, y, options);
    }
    return;
  }
  if (typeof text === 'string') {
    const trimmed = text.trim();
    if (trimmed.length > 0) {
      doc.text(trimmed, x, y, options);
    }
  }
}

/**
 * Builds a vector-rendered, ATS-compliant PDF resume for Swastik Padhy.
 * Formatted with strict line-height and layout guards to prevent any text overlap.
 */
export function generateDirectResumePDF(): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;
  let y = 14;

  // Colors
  const primaryColor = [20, 20, 20]; // #141414
  const accentColor = [22, 130, 70]; // Forest Green
  const subtextColor = [80, 80, 80]; // #505050
  const dividerColor = [200, 200, 200];

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  };

  // --- HEADER ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  safeText(doc, (personalInfo.name || 'SWASTIK PADHY').toUpperCase(), pageWidth / 2, y, { align: 'center' });
  y += 5.5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
  safeText(doc, 'SOFTWARE DEVELOPER | FULL-STACK ENGINEER | MERN & FLASK', pageWidth / 2, y, { align: 'center' });
  y += 4.5;

  // Contact line
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(subtextColor[0], subtextColor[1], subtextColor[2]);
  const contactText = `${personalInfo.email || ''}  |  ${personalInfo.phone || ''}  |  ${personalInfo.location || ''}`;
  safeText(doc, contactText, pageWidth / 2, y, { align: 'center' });
  y += 3.8;

  const linksText = `LinkedIn: in/swastik-padhy  |  GitHub: github.com/swastikpadhy7326`;
  safeText(doc, linksText, pageWidth / 2, y, { align: 'center' });
  y += 4;

  // Top Divider
  doc.setDrawColor(dividerColor[0], dividerColor[1], dividerColor[2]);
  doc.setLineWidth(0.3);
  doc.line(margin, y, pageWidth - margin, y);
  y += 4.5;

  // Section Header Helper
  const drawSectionHeader = (title: string) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    safeText(doc, title.toUpperCase(), margin, y);
    y += 1.5;

    doc.setDrawColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.setLineWidth(0.8);
    doc.line(margin, y, margin + 26, y);

    doc.setDrawColor(dividerColor[0], dividerColor[1], dividerColor[2]);
    doc.setLineWidth(0.2);
    doc.line(margin + 26, y, pageWidth - margin, y);
    y += 4.5;
  };

  // --- CAREER SUMMARY ---
  drawSectionHeader('Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.3);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  const summaryRaw = bioSummary?.shortBio || '';
  const summaryLines = doc.splitTextToSize(summaryRaw, contentWidth);
  safeText(doc, summaryLines, margin, y);
  y += (Array.isArray(summaryLines) ? summaryLines.length : 1) * 3.8 + 2;

  // --- EDUCATION ---
  drawSectionHeader('Education');
  (educationList || []).forEach((edu) => {
    checkPageBreak(11);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.8);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    safeText(doc, edu.degree || '', margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
    safeText(doc, `${edu.scoreLabel || 'Score'}: ${edu.score || ''}`, pageWidth - margin, y, { align: 'right' });
    y += 3.8;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.2);
    doc.setTextColor(subtextColor[0], subtextColor[1], subtextColor[2]);
    safeText(doc, edu.institution || '', margin, y);
    safeText(doc, edu.year || '', pageWidth - margin, y, { align: 'right' });
    y += 4.5;
  });
  y += 1;

  // --- TECHNICAL SKILLS ---
  drawSectionHeader('Technical Skills');
  const skillsData = [
    { label: 'Languages:', val: 'C, Java, Python, JavaScript (ES6+), TypeScript' },
    { label: 'Web & Backend:', val: 'Node.js, Express.js, Flask (Python), React, HTML5, CSS3, REST APIs' },
    { label: 'Databases & ODM:', val: 'MongoDB Atlas, Mongoose ODM, MySQL, SQLite' },
    { label: 'Tools & Practices:', val: 'Git, GitHub (Multi-branch), VS Code, API Security (.env), Postman' },
    { label: 'Focus Areas:', val: 'Full-Stack Web Development, Backend Architecture, AI/ML Web Integration' }
  ];

  skillsData.forEach((item) => {
    checkPageBreak(6);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.3);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    safeText(doc, item.label, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(subtextColor[0], subtextColor[1], subtextColor[2]);
    const valLines = doc.splitTextToSize(item.val, contentWidth - 36);
    safeText(doc, valLines, margin + 34, y);
    const lineCount = Array.isArray(valLines) ? valLines.length : 1;
    y += lineCount * 3.8 + 0.6;
  });
  y += 2;

  // --- PROJECTS ---
  drawSectionHeader('Academic & Engineering Projects');
  (projects || []).forEach((proj) => {
    checkPageBreak(25);
    
    // Line 1: Project Title (Left) and Tech Stack (Right)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    const projTitle = (proj.title || '').toUpperCase();
    safeText(doc, projTitle, margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.8);
    doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
    const techText = (proj.techStack || []).slice(0, 4).join(', ');
    safeText(doc, techText, pageWidth - margin, y, { align: 'right' });
    y += 3.8;

    // Line 2: Subtitle / Tagline on its own line (prevents horizontal collision with title or tech stack)
    if (proj.subtitle) {
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(8);
      doc.setTextColor(subtextColor[0], subtextColor[1], subtextColor[2]);
      const subLines = doc.splitTextToSize(proj.subtitle, contentWidth);
      safeText(doc, subLines, margin, y);
      const subCount = Array.isArray(subLines) ? subLines.length : 1;
      y += subCount * 3.4 + 0.8;
    }

    // Line 3+: Bullet points with proper line wrapping
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);

    (proj.highlights || []).forEach((hl) => {
      checkPageBreak(8);
      safeText(doc, '•', margin + 1.5, y);
      const hlLines = doc.splitTextToSize(hl || '', contentWidth - 6);
      safeText(doc, hlLines, margin + 5.5, y);
      const lineCount = Array.isArray(hlLines) ? hlLines.length : 1;
      y += lineCount * 3.5 + 0.6;
    });
    y += 2.5;
  });

  // --- CERTIFICATIONS ---
  drawSectionHeader('Certifications');
  (certifications || []).forEach((c) => {
    checkPageBreak(6);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.2);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    safeText(doc, '•  ' + (c.title || ''), margin + 1.5, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    doc.setTextColor(subtextColor[0], subtextColor[1], subtextColor[2]);
    const issuerText = c.issuer || c.category || '';
    safeText(doc, issuerText, pageWidth - margin, y, { align: 'right' });
    y += 4;
  });

  return doc;
}

/**
 * Downloads the resume as a formatted PDF file.
 */
export async function downloadResumePDF(): Promise<boolean> {
  try {
    const doc = generateDirectResumePDF();
    doc.save('Swastik_Padhy_Resume.pdf');
    return true;
  } catch (err) {
    console.error('Failed to generate direct PDF:', err);
    return false;
  }
}

/**
 * Generates and triggers clean print for the resume.
 * Uses an isolated hidden iframe with clean print styles to avoid clipping.
 */
export function printResumeDocument(): boolean {
  try {
    const printContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Curriculum Vitae - ${personalInfo.name || 'Swastik Padhy'}</title>
        <style>
          @page {
            size: A4;
            margin: 14mm 14mm 14mm 14mm;
          }
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: #111;
            background: #fff;
            line-height: 1.45;
            font-size: 11px;
            padding: 8px;
          }
          .header {
            text-align: center;
            border-bottom: 2px solid #222;
            padding-bottom: 10px;
            margin-bottom: 12px;
          }
          h1 {
            font-size: 22px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 3px;
            font-weight: 800;
          }
          .role {
            font-size: 11px;
            font-weight: 700;
            color: #15803d;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
          }
          .contacts {
            font-size: 10px;
            color: #444;
          }
          .contacts a {
            color: #111;
            text-decoration: none;
          }
          .section {
            margin-bottom: 12px;
            page-break-inside: avoid;
          }
          .section-title {
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            color: #111;
            border-bottom: 1.5px solid #15803d;
            padding-bottom: 2px;
            margin-bottom: 6px;
          }
          .summary-text {
            font-size: 10.5px;
            color: #222;
            line-height: 1.45;
          }
          .edu-row, .proj-row {
            margin-bottom: 8px;
            page-break-inside: avoid;
          }
          .row-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-size: 11px;
            font-weight: 700;
          }
          .proj-subtitle {
            font-size: 10px;
            font-style: italic;
            color: #555;
            margin-bottom: 3px;
          }
          .sub-header {
            display: flex;
            justify-content: space-between;
            font-size: 10px;
            color: #555;
            margin-bottom: 3px;
          }
          .score {
            color: #15803d;
            font-weight: 700;
          }
          .skills-grid {
            display: table;
            width: 100%;
            font-size: 10.5px;
          }
          .skills-row {
            display: table-row;
          }
          .skills-label {
            display: table-cell;
            font-weight: 700;
            width: 120px;
            padding: 2px 0;
            color: #111;
          }
          .skills-val {
            display: table-cell;
            color: #333;
            padding: 2px 0;
          }
          ul.bullets {
            padding-left: 14px;
            margin-top: 2px;
          }
          ul.bullets li {
            font-size: 10px;
            color: #333;
            margin-bottom: 2px;
            line-height: 1.35;
          }
          .certs-list {
            list-style: none;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3px 10px;
          }
          .certs-list li {
            font-size: 10px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>${personalInfo.name || 'Swastik Padhy'}</h1>
          <div class="role">Software Developer | Full-Stack Engineer | MERN & Flask</div>
          <div class="contacts">
            ${personalInfo.email || ''} &bull; ${personalInfo.phone || ''} &bull; ${personalInfo.location || ''}<br/>
            LinkedIn: linkedin.com/in/swastik-padhy &bull; GitHub: github.com/swastikpadhy7326
          </div>
        </div>

        <div class="section">
          <div class="section-title">Career Summary</div>
          <div class="summary-text">${bioSummary?.shortBio || ''}</div>
        </div>

        <div class="section">
          <div class="section-title">Education</div>
          ${(educationList || []).map(e => `
            <div class="edu-row">
              <div class="row-header">
                <span>${e.degree || ''}</span>
                <span class="score">${e.scoreLabel || 'Score'}: ${e.score || ''}</span>
              </div>
              <div class="sub-header">
                <span>${e.institution || ''}</span>
                <span>${e.year || ''}</span>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="section">
          <div class="section-title">Technical Skills</div>
          <div class="skills-grid">
            <div class="skills-row">
              <div class="skills-label">Languages:</div>
              <div class="skills-val">C, Java, Python, JavaScript, TypeScript</div>
            </div>
            <div class="skills-row">
              <div class="skills-label">Web Technologies:</div>
              <div class="skills-val">HTML, CSS, JavaScript, React, Node.js, Express.js, Flask, REST APIs</div>
            </div>
            <div class="skills-row">
              <div class="skills-label">Databases:</div>
              <div class="skills-val">MongoDB Atlas, Mongoose ODM, MySQL, SQLite</div>
            </div>
            <div class="skills-row">
              <div class="skills-label">Tools & Platforms:</div>
              <div class="skills-val">Git, GitHub (Multi-branching), VS Code, Environment Security (.env)</div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Academic & Engineering Projects</div>
          ${(projects || []).map(p => `
            <div class="proj-row">
              <div class="row-header">
                <span>${(p.title || '').toUpperCase()}</span>
                <span style="color: #15803d; font-size: 10px;">${(p.techStack || []).slice(0, 4).join(', ')}</span>
              </div>
              ${p.subtitle ? `<div class="proj-subtitle">${p.subtitle}</div>` : ''}
              <ul class="bullets">
                ${(p.highlights || []).map(h => `<li>${h}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>

        <div class="section">
          <div class="section-title">Certifications</div>
          <ul class="certs-list">
            ${(certifications || []).map(c => `<li>&bull; <strong>${c.title}</strong> (${c.issuer || c.category || ''})</li>`).join('')}
          </ul>
        </div>
      </body>
      </html>
    `;

    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow?.document || iframe.contentDocument;
    if (doc) {
      doc.open();
      doc.write(printContent);
      doc.close();

      setTimeout(() => {
        try {
          iframe.contentWindow?.focus();
          iframe.contentWindow?.print();
        } catch (e) {
          console.warn('Iframe print fallback triggered:', e);
          window.print();
        } finally {
          setTimeout(() => {
            if (document.body.contains(iframe)) {
              document.body.removeChild(iframe);
            }
          }, 3000);
        }
      }, 500);
      return true;
    }
    return false;
  } catch (err) {
    console.error('Print failed:', err);
    window.print();
    return false;
  }
}
