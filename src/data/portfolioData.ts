import { ContactInfo, EducationItem, Project, SkillCategory, Certification } from '../types';

export const personalInfo: ContactInfo = {
  name: "Swastik Padhy",
  title: "Software Developer & Full-Stack Engineer",
  email: "swastik.padhy.cse.2024@nist.edu",
  secondaryEmail: "swastikpadhy0@gmail.com",
  phone: "+91 73268 89731",
  location: "Brahmapur, Odisha, India",
  linkedin: "https://linkedin.com/in/swastik-padhy",
  github: "https://github.com/swastikpadhy7326",
  university: "National Institute of Science and Technology (NIST)",
  expectedGraduation: "2028",
  cgpa: "7.65 / 10",
};

export const bioSummary = {
  shortBio: "Third-year B.Tech Computer Science and Engineering student at NIST with hands-on experience designing and building full-stack web applications using Python, Flask, Node.js, and MongoDB. Demonstrated expertise in backend API development, relational & NoSQL database modeling, and collaborative software delivery across large Git teams.",
  detailedBio: "Passionate about bridging backend systems architecture with intuitive user experiences. Experienced in building AI-powered recommendation systems in Python/Flask and scalable MERN applications with secure database connectivity. Active contributor in collaborative 11-member team workflows using Git/GitHub version control.",
  targetRoles: "Seeking Software Developer / Web Developer internship opportunities to engineer scalable systems and deliver production-grade software.",
  coreFocusAreas: [
    "Full-Stack Web Engineering (MERN & Python/Flask)",
    "Backend Architecture & RESTful API Engineering",
    "Database Schema Modeling (MongoDB Atlas, SQLite, MySQL)",
    "AI & Recommendation Logic Web Integration",
    "Agile Teamwork & GitHub Multi-Branch Workflows"
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Web & Backend Engineering",
    skills: [
      { name: "Node.js", level: "Proficient", iconName: "Server", description: "Event-driven runtime for scalable backend microservices & server logic" },
      { name: "Express.js", level: "Proficient", iconName: "Layers", description: "RESTful API routes, middleware, request validation & auth pipelines" },
      { name: "Python", level: "Advanced", iconName: "Terminal", description: "Backend logic, AI/ML scripting, algorithms, data processing" },
      { name: "Flask", level: "Proficient", iconName: "Cpu", description: "Lightweight Python micro-framework for REST APIs & recommendation logic" },
      { name: "JavaScript (ES6+)", level: "Advanced", iconName: "Code2", description: "Modern async/await, DOM, modular patterns & full-stack logic" },
      { name: "HTML5 / CSS3", level: "Advanced", iconName: "Layout", description: "Semantic UI structure, modern responsive design & styling" },
      { name: "REST APIs", level: "Proficient", iconName: "Network", description: "Design, implementation, JSON endpoints & client-server contracts" }
    ]
  },
  {
    category: "Database Technologies",
    skills: [
      { name: "MongoDB Atlas", level: "Proficient", iconName: "Database", description: "Cloud NoSQL clusters, collections, indexing & Atlas cluster management" },
      { name: "Mongoose ODM", level: "Proficient", iconName: "FileCode", description: "Schema definition, validations, relationships for Users, Playlists, Tracks" },
      { name: "SQLite", level: "Proficient", iconName: "HardDrive", description: "Lightweight relational storage for fast local querying & AI matching logic" },
      { name: "MySQL", level: "Proficient", iconName: "Boxes", description: "Relational database modeling, SQL queries & structured transactions" }
    ]
  },
  {
    category: "Core Programming Languages",
    skills: [
      { name: "Python", level: "Advanced", iconName: "Code", description: "Data structures, algorithms, Flask APIs, script automation" },
      { name: "Java", level: "Proficient", iconName: "Coffee", description: "Object-oriented design, core CS concepts, strong typing" },
      { name: "C", level: "Proficient", iconName: "Binary", description: "Foundational memory management, pointers, and data structures" },
      { name: "C++ (OOP)", level: "Proficient", iconName: "FileCode2", description: "Certified in Object-Oriented Programming principles & abstraction" }
    ]
  },
  {
    category: "Tools, Platforms & Practices",
    skills: [
      { name: "Git & GitHub", level: "Advanced", iconName: "GitBranch", description: "Multi-branch workflows, PR reviews, merge conflict resolution in 11-member teams" },
      { name: "VS Code", level: "Proficient", iconName: "Laptop", description: "Primary IDE with linters, debuggers, extensions & Git integration" },
      { name: "Environment Security", level: "Proficient", iconName: "ShieldCheck", description: "Securing database credentials, API keys with .env configurations" },
      { name: "AI/ML Integration", level: "Proficient", iconName: "BrainCircuit", description: "Building recommendation algorithms and AI matching logic for web apps" }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "aura-ai-workspace",
    title: "Aura AI Workspace",
    subtitle: "AI-Powered Productivity & Intelligent Collaboration Workspace",
    category: "AI & Web",
    role: "Lead Full-Stack & Generative AI Developer",
    summary: "A next-generation AI workspace platform uniting intelligent assistant workflows, smart prompt execution, automated document & code synthesis, and dynamic project collaboration into a high-performance developer canvas.",
    highlights: [
      "Architected a responsive AI workspace canvas integrating LLM APIs for multi-step reasoning, real-time code generation, and contextual text synthesis.",
      "Built asynchronous streaming API routes and robust client-side state handlers for seamless token streaming, markdown parsing, and syntax highlighting.",
      "Designed structured workspace storage schema for saving sessions, custom prompt presets, execution history, and exportable artifacts.",
      "Implemented modular React component architecture with dark mode design system, split-pane layout, and responsive workflow tooling."
    ],
    techStack: ["TypeScript", "React", "Node.js", "AI / LLM APIs", "REST API", "Tailwind CSS", "Git", "GitHub"],
    architecture: {
      frontend: "Modern React 18 & TypeScript interactive workspace with real-time streaming text, syntax-highlighted code output, and dynamic multi-panel canvas",
      backend: "Node.js / Express API gateway managing prompt engineering pipelines, rate limiting, and secure LLM endpoint integrations",
      database: "MongoDB / Cloud Storage for persistent user workspace documents, history, and template presets",
      keyArchitecturePoints: [
        "Asynchronous token streaming with real-time UI render pipeline",
        "Modular prompt template manager with variable injection and customizable parameters",
        "Protected API key routing and error recovery middleware"
      ]
    },
    metrics: [
      { label: "Core Feature", value: "GenAI Workspace" },
      { label: "Frontend Stack", value: "React + TypeScript" },
      { label: "Repository", value: "Public GitHub" }
    ],
    githubUrl: "https://github.com/swastikpadhy7326/aura-ai-workspace",
    hasInteractiveDemo: "ai-workspace"
  },
  {
    id: "meritus",
    title: "MeritUs",
    subtitle: "AI-Based Scholarship Recommendation Platform",
    category: "AI & Web",
    role: "Lead Backend & AI Logic Developer",
    summary: "An AI-powered web platform designed to eliminate financial barriers for students by intelligently matching them to verified scholarships based on personalized eligibility, academic level, caste category, and annual family income criteria.",
    highlights: [
      "Independently engineered the Python Flask backend server and structured REST API endpoints to process real-time eligibility evaluation.",
      "Developed an intelligent rule-based matching engine that ranks scholarships tailored to student profiles.",
      "Designed and optimized the SQLite data handling layer to store, query, and index student records and scholarship criteria efficiently.",
      "Created dynamic frontend views using HTML5, CSS3, and JavaScript communicating seamlessly with the Flask API."
    ],
    techStack: ["Python", "Flask", "AI/ML Logic", "SQLite", "REST API", "JavaScript", "HTML5", "CSS3"],
    architecture: {
      frontend: "HTML5, CSS3, Modern JavaScript with asynchronous Fetch API for dynamic results rendering",
      backend: "Python / Flask RESTful API server with multi-criteria recommendation scoring algorithm",
      database: "SQLite database handling student profile entities and scholarship eligibility matrices",
      keyArchitecturePoints: [
        "Eligibility Decision Engine with multi-variable weighting (Marks, Category, Family Income, Domicile)",
        "REST API endpoints for /api/recommend, /api/scholarships, /api/filter",
        "Lightweight, low-latency relational SQLite schema for instant query response"
      ]
    },
    metrics: [
      { label: "Recommendation Accuracy", value: "Multi-Criteria Matching" },
      { label: "Backend Framework", value: "Python Flask REST" },
      { label: "Database Engine", value: "SQLite Relational" }
    ],
    githubUrl: "https://github.com/swastikpadhy7326",
    hasInteractiveDemo: "scholarship"
  },
  {
    id: "spotify-clone",
    title: "Spotify Clone",
    subtitle: "Music Streaming & Playlist Web Application",
    category: "Full-Stack MERN",
    role: "Database Architect & Backend Engineer",
    summary: "A full-stack music streaming web application enabling users to explore music catalogs, stream tracks, curate custom playlists, and manage user favorites with an intuitive Spotify-inspired UI.",
    highlights: [
      "Designed the MongoDB Atlas cloud database architecture and crafted Mongoose schemas for User accounts, Custom Playlists, and Track metadata.",
      "Configured robust security mechanisms by storing sensitive database URIs and authentication keys within environment variables.",
      "Actively collaborated in an 11-member engineering team, coordinating feature modules, resolving merge conflicts, and delivering code through GitHub shared dev branches.",
      "Implemented modular REST API routes in Node.js and Express.js for playlist CRUD operations and track discovery."
    ],
    techStack: ["Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "JavaScript", "Git", "GitHub", "REST APIs"],
    architecture: {
      frontend: "Responsive music dashboard with interactive audio playback controls, playlist sidebar, and track queues",
      backend: "Node.js & Express.js server providing REST endpoints for playlist curation, search, and user preferences",
      database: "MongoDB Atlas cloud cluster with Mongoose ODM models (Users, Playlists, Tracks, Library)",
      keyArchitecturePoints: [
        "Relational-style referencing in MongoDB for user-created playlists and liked track collections",
        "Environment-variable-backed connection pooling to MongoDB Atlas with error recovery",
        "Collaborative Git branching strategy across an 11-developer team environment"
      ]
    },
    metrics: [
      { label: "Team Size", value: "11 Developers" },
      { label: "Database", value: "MongoDB Atlas + Mongoose" },
      { label: "Backend Stack", value: "Node.js & Express.js" }
    ],
    githubUrl: "https://github.com/swastikpadhy7326",
    hasInteractiveDemo: "music-player"
  }
];

export const educationList: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    institution: "National Institute of Science and Technology (NIST)",
    year: "2024 – 2028 (Expected)",
    score: "7.65 / 10.00",
    scoreLabel: "Current CGPA",
    current: true,
    details: [
      "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Web Technologies, Computer Networks.",
      "Active participant in technical collaborative team projects and software engineering initiatives."
    ]
  },
  {
    degree: "Higher Secondary Certificate (Class XII)",
    institution: "Council of Higher Secondary Education",
    year: "Completed",
    score: "50%",
    scoreLabel: "Final Percentage",
    details: [
      "Concentration in Science stream (Physics, Chemistry, Mathematics)."
    ]
  },
  {
    degree: "Secondary School Examination (Class X)",
    institution: "Board of Secondary Education",
    year: "Completed",
    score: "69%",
    scoreLabel: "Final Percentage",
    details: [
      "Solid foundational performance in Mathematics, Science, and English language skills."
    ]
  }
];

export const certifications: Certification[] = [
  {
    title: "MERN Full Stack Web Development",
    issuer: "Udemy / Certificate",
    category: "Full-Stack Development",
    description: "Hands-on mastery of full-stack JavaScript development encompassing React frontend patterns, Node.js & Express backend architecture, MongoDB schema modeling, and RESTful API integration.",
    skillsLearned: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Full Stack CRUD"]
  },
  {
    title: "Object-Oriented Programming Using C++",
    issuer: "Coding Ninjas",
    category: "Core Software Engineering",
    description: "Deep dive into object-oriented principles including classes, encapsulation, inheritance, polymorphism, templates, memory management, and abstraction.",
    skillsLearned: ["C++", "OOP Principles", "Data Abstraction", "Encapsulation", "Polymorphism"]
  },
  {
    title: "Artificial Intelligence",
    issuer: "Academic Specialization",
    category: "AI / Machine Learning",
    description: "Foundational principles of artificial intelligence, search algorithms, decision systems, recommendation engines, and machine learning methodologies.",
    skillsLearned: ["AI Algorithms", "Recommendation Logic", "Pattern Recognition", "Python ML Basics"]
  },
  {
    title: "Proficiency Course in Academic Writing Skills",
    issuer: "NIST Academic Center",
    category: "Communication & Technical Writing",
    description: "Advanced training in technical communication, documentation, structured engineering reporting, academic research drafting, and collaborative correspondence.",
    skillsLearned: ["Technical Documentation", "Structured Reporting", "Engineering Communication", "Research Writing"]
  }
];

export const simulatedScholarships = [
  {
    id: 1,
    title: "National Merit Tech Scholarship",
    amount: "₹50,000 / year",
    category: "All Categories",
    minCgpa: 7.0,
    maxIncome: 800000,
    educationLevel: "Undergraduate (B.Tech)",
    provider: "Ministry of Education",
    description: "For meritorious engineering students demonstrating academic excellence and project innovation."
  },
  {
    id: 2,
    title: "State STEM Higher Education Grant",
    amount: "₹35,000 / year",
    category: "OBC / General / SC / ST",
    minCgpa: 6.5,
    maxIncome: 600000,
    educationLevel: "Undergraduate (B.Tech)",
    provider: "Higher Education Council",
    description: "Need-cum-merit financial aid for undergraduate students pursuing Computer Science & Engineering."
  },
  {
    id: 3,
    title: "Digital India AI Innovators Fellowship",
    amount: "₹60,000 / year",
    category: "All Categories",
    minCgpa: 7.5,
    maxIncome: 1000000,
    educationLevel: "Undergraduate (B.Tech)",
    provider: "AICTE & Industry Partners",
    description: "Supports engineering students building AI, Machine Learning, or full-stack software initiatives."
  },
  {
    id: 4,
    title: "Post-Matric Technical Assistance Scholarship",
    amount: "Full Tuition Waiver",
    category: "SC / ST / SEBC",
    minCgpa: 6.0,
    maxIncome: 250000,
    educationLevel: "Undergraduate (B.Tech)",
    provider: "State Welfare Department",
    description: "Comprehensive financial support covering college tuition and examination allowances."
  }
];

export const samplePlaylistTracks = [
  { id: 1, title: "Starboy", artist: "The Weeknd, Daft Punk", duration: "3:50", album: "Starboy", plays: "2.8B" },
  { id: 2, title: "Blinding Lights", artist: "The Weeknd", duration: "3:20", album: "After Hours", plays: "4.1B" },
  { id: 3, title: "Midnight City", artist: "M83", duration: "4:03", album: "Hurry Up, We're Dreaming", plays: "1.2B" },
  { id: 4, title: "Levitating", artist: "Dua Lipa", duration: "3:23", album: "Future Nostalgia", plays: "2.1B" },
  { id: 5, title: "Shape of You", artist: "Ed Sheeran", duration: "3:53", album: "÷ (Divide)", plays: "3.7B" }
];
