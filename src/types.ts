export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & Web' | 'Full-Stack MERN' | 'Backend API';
  period?: string;
  role: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  architecture: {
    frontend?: string;
    backend: string;
    database: string;
    keyArchitecturePoints: string[];
  };
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  hasInteractiveDemo?: 'scholarship' | 'music-player' | 'ai-workspace' | string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Familiar';
    iconName: string;
    description: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  score: string;
  scoreLabel: string;
  details?: string[];
  current?: boolean;
}

export interface Certification {
  title: string;
  issuer?: string;
  category: string;
  description: string;
  skillsLearned: string[];
  credentialId?: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  secondaryEmail: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  university: string;
  expectedGraduation: string;
  cgpa: string;
  avatarUrl?: string;
}
