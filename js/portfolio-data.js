/**
 * Centralized Portfolio Data Configuration
 * Configured for Satyajit Vank — Modern Web Developer & Full-Stack Developer in Progress
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Satyajit Vank",
    preferredName: "Satyajit",
    role: "Modern Web Developer • Full-Stack in Progress",
    tagline: "Modern Web Developer • Full-Stack Developer in Progress • Automotive Tech Enthusiast",
    statusBadge: "B.Tech IT Student • Open for Opportunities & Collaborations",
    location: "India • Open to Remote & Global Work",
    experienceYears: "2+",
    completedProjects: "10+",
    technologiesCount: "14+",
    clientSatisfaction: "100%",
    bio: [
      "Hey there! I am Satyajit Vank, a dedicated Information Technology engineer currently pursuing my Bachelor of Technology (B.Tech) in IT, having already completed a comprehensive 3-year Diploma in Information Technology.",
      "My passion lies at the intersection of modern frontend craft and resilient backend architectures, with a strong enthusiasm for automotive technologies. I focus on writing clean, semantic code and crafting engaging, accessible web applications using React, Next.js, TypeScript, and modern backend stacks."
    ],
    social: {
      github: "https://github.com/satyajitvank",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "satyajit.dev@example.com"
    },
    quickSpecs: [
      { label: "Current Status", value: "B.Tech in Information Technology" },
      { label: "Prior Academic", value: "Diploma in IT (Completed)" },
      { label: "Core Focus", value: "Modern Web & Full-Stack Dev" },
      { label: "Special Interest", value: "Automotive Tech & UI/UX" },
      { label: "Availability", value: "Internships & Technical Projects" }
    ],
    pillars: [
      {
        icon: "layout",
        title: "Modern Web Architecture",
        desc: "Building fast, dynamic, and mobile-first web interfaces with React, Next.js, and clean CSS3/Tailwind styling."
      },
      {
        icon: "server",
        title: "Backend & API Foundations",
        desc: "Developing structured REST APIs with Node.js, Express, and managing data persistence with MongoDB and PostgreSQL."
      },
      {
        icon: "zap",
        title: "Automotive Tech & Innovation",
        desc: "Designing specialized digital tools, diagnostic concepts, and parts catalog interfaces inspired by automotive engineering."
      }
    ]
  },

  education: [
    {
      id: "edu-btech",
      degree: "Bachelor of Technology (B.Tech) in Information Technology",
      institution: "Department of Information Technology",
      period: "Pursuing (Undergraduate)",
      location: "India",
      honors: "Active Academic Standing • Web & System Engineering Focus",
      gpa: "First Class",
      description: "Comprehensive university curriculum focusing on advanced computing systems, software engineering methodologies, web system design, and database architectures.",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems (DBMS)",
        "Web Engineering & Technologies",
        "Operating Systems",
        "Computer Networks",
        "Object-Oriented Programming (Java/C++)",
        "Software Engineering & Agile"
      ],
      capstone: {
        title: "Full-Stack Web & Automotive Technology Solutions",
        summary: "Developing full-stack web platforms and interactive automotive diagnostics workflows combining modern frontend stacks with RESTful APIs."
      }
    },
    {
      id: "edu-diploma",
      degree: "Diploma in Information Technology (Polytechnic)",
      institution: "State Board of Technical Education",
      period: "Completed (3-Year Program)",
      location: "India",
      honors: "Successfully Completed with Distinction",
      gpa: "First Class with Distinction",
      description: "Rigorous foundational engineering program covering hands-on programming, system administration, database schemas, web fundamentals, and computer hardware.",
      coursework: [
        "C & C++ Programming",
        "Core Java Development",
        "Relational Database Systems (SQL)",
        "Client-Side Web Development (HTML5, CSS3, JS)",
        "Computer Hardware & Networking Fundamentals",
        "Operating System Concepts"
      ],
      capstone: {
        title: "Diploma Project: Digital Inventory & Information System",
        summary: "Architected a practical database-driven information management project demonstrating end-to-end CRUD operations and intuitive user navigation."
      }
    }
  ],

  certifications: [
    {
      title: "Full-Stack Web Development Specialization",
      issuer: "Modern Web Academy",
      date: "2024",
      credentialId: "FS-WD-202409",
      badgeIcon: "code"
    },
    {
      title: "Diploma in Information Technology Credential",
      issuer: "Technical Education Board",
      date: "Completed",
      credentialId: "DIT-ENG-DIST",
      badgeIcon: "box"
    },
    {
      title: "Git & Collaborative Open-Source Workflows",
      issuer: "GitHub & Community",
      date: "2024",
      credentialId: "GIT-OSS-8921",
      badgeIcon: "cloud"
    }
  ],

  skills: [
    // Frontend Stack
    { name: "HTML5 & Semantic Markup", category: "frontend", level: 95, exp: "2+ yrs", highlight: true },
    { name: "CSS3 & Responsive Design", category: "frontend", level: 92, exp: "2+ yrs", highlight: true },
    { name: "JavaScript (ES6+)", category: "frontend", level: 90, exp: "2+ yrs", highlight: true },
    { name: "React.js", category: "frontend", level: 86, exp: "1.5 yrs", highlight: true },
    { name: "Next.js", category: "frontend", level: 82, exp: "1 yr", highlight: true },
    { name: "Tailwind CSS", category: "frontend", level: 88, exp: "1.5 yrs", highlight: true },

    // Backend & API Development (Currently improving)
    { name: "TypeScript", category: "backend", level: 78, exp: "Improving", highlight: true },
    { name: "Node.js", category: "backend", level: 82, exp: "1.5 yrs", highlight: true },
    { name: "Express.js", category: "backend", level: 84, exp: "1.5 yrs", highlight: true },
    { name: "REST APIs Development", category: "backend", level: 86, exp: "2 yrs", highlight: true },

    // Databases & Cloud
    { name: "MongoDB", category: "cloud", level: 82, exp: "1+ yr", highlight: true },
    { name: "PostgreSQL", category: "cloud", level: 78, exp: "Improving", highlight: true },
    { name: "Database Development & Schemas", category: "cloud", level: 85, exp: "2 yrs", highlight: true },
    { name: "Docker (Containerization)", category: "cloud", level: 72, exp: "Learning", highlight: true },
    { name: "Cloud & Deployment (Vercel, Render)", category: "cloud", level: 80, exp: "1+ yr", highlight: true },

    // Tools & Core CS
    { name: "Git & GitHub Version Control", category: "tools", level: 90, exp: "2+ yrs", highlight: true },
    { name: "Object-Oriented Programming (OOP)", category: "tools", level: 88, exp: "Diploma & B.Tech", highlight: true },
    { name: "Data Structures & Algorithms", category: "tools", level: 80, exp: "In Progress", highlight: true },
    { name: "UI/UX & Mobile-First Design", category: "tools", level: 85, exp: "2 yrs", highlight: true }
  ],

  currentlyExploring: [
    { name: "TypeScript", tag: "🌱 Learning" },
    { name: "Node.js & Backend", tag: "⚡ Improving" },
    { name: "REST APIs", tag: "🚀 Building" },
    { name: "Database Dev (Postgres/Mongo)", tag: "💾 Data" },
    { name: "Docker", tag: "📦 Containers" },
    { name: "Cloud & Deployment", tag: "☁️ Infra" }
  ],

  projects: [
    {
      id: "project-apex",
      title: "APEX AutoParts — Automotive Parts & Technology Platform",
      subtitle: "🚗 Full-Stack Automotive E-Commerce, Parts Information & Diagnostics Web Platform",
      category: "fullstack",
      categoryLabel: "Featured Project • Automotive Tech",
      image: "assets/images/apex-autoparts.jpg",
      tags: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Git", "GitHub"],
      summary: "A modern automotive parts platform engineered to streamline vehicle parts cataloging, make/model lookup, automotive diagnostic concepts, and responsive digital retail experiences.",
      impact: "Developed with an intuitive component architecture, automotive diagnostic telemetry widgets, and responsive UI built while mastering modern web technologies.",
      metrics: [
        { label: "Architecture", value: "Component UI" },
        { label: "Diagnostics", value: "Interactive" },
        { label: "Layout", value: "100% Responsive" }
      ],
      demoUrl: "https://github.com/satyajitvank/AutoParts",
      githubUrl: "https://github.com/satyajitvank/AutoParts",
      highlights: [
        "🛒 Automotive Parts Platform with dynamic vehicle make/model/year lookup filter.",
        "🚗 Comprehensive Vehicle & Parts Information display with high-fidelity component cards.",
        "🔍 Integrated Automotive Diagnostics Concepts & Telemetry data visualizer.",
        "⚡ Built with an Interactive User Interface and Mobile-First Responsive Web Design.",
        "🎨 Modern UI/UX styled with clean dark mode aesthetics and accessible typography."
      ]
    },
    {
      id: "project-saas",
      title: "PulseFlow: Cloud Microservices Observability",
      subtitle: "Distributed trace visualization and latency analytics platform",
      category: "fullstack",
      categoryLabel: "Cloud Systems • Observability",
      image: "assets/images/project-saas.jpg",
      tags: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "Tailwind CSS"],
      summary: "Telemetry engine monitoring simulated distributed microservices nodes. Visualizes service health metrics, trace distributions, and real-time status alerts.",
      impact: "Enhanced diagnostic workflows with real-time health monitors and interactive metric charts.",
      metrics: [
        { label: "Throughput", value: "20k+ req/s" },
        { label: "Telemetry", value: "Real-time" },
        { label: "Nodes", value: "Cluster View" }
      ],
      demoUrl: "https://github.com/satyajitvank",
      githubUrl: "https://github.com/satyajitvank",
      highlights: [
        "Designed real-time event pipeline architecture with clean state management.",
        "Crafted interactive cluster topological graph showing service connectivity.",
        "Structured modular REST endpoints for rapid log metric retrieval."
      ]
    },
    {
      id: "project-ai",
      title: "Nexus AI: Interactive Code & Embedding Studio",
      subtitle: "Developer workspace & vector dimensionality visualizer",
      category: "ai",
      categoryLabel: "AI Tools • Interactive Frontend",
      image: "assets/images/project-ai.jpg",
      tags: ["React", "JavaScript", "REST APIs", "Node.js", "CSS3"],
      summary: "An interactive development environment interface featuring contextual code sandboxes, conversational assistant dialogues, and vector embedding visualizations.",
      impact: "Designed clean developer tooling interfaces with responsive drawer panels and instant feedback.",
      metrics: [
        { label: "Interface", value: "Dark Glass" },
        { label: "Feedback", value: "Sub-second" },
        { label: "Code Run", value: "Playground" }
      ],
      demoUrl: "https://github.com/satyajitvank",
      githubUrl: "https://github.com/satyajitvank",
      highlights: [
        "Interactive syntax-highlighted code playground with live evaluation states.",
        "Vector visualization canvas rendering multi-cluster node projections.",
        "Responsive sidebars and keyboard shortcut support for rapid navigation."
      ]
    }
  ],

  experience: [
    {
      role: "Full-Stack Web Developer (Projects & Open Source)",
      company: "Independent Technical Development",
      period: "2023 — Present",
      location: "India",
      type: "Self-Directed & Academic",
      description: "Architecting modern web applications, including the APEX AutoParts platform, while mastering full-stack technologies and contributing to technical repositories.",
      achievements: [
        "Engineered APEX AutoParts platform from scratch using modern React/Next.js and Tailwind CSS.",
        "Practiced clean Git commit hygiene, semantic versioning, and open-source workflows on GitHub.",
        "Continually advancing skills in TypeScript, Node.js REST APIs, MongoDB, and PostgreSQL."
      ]
    },
    {
      role: "Information Technology Scholar",
      company: "Diploma in IT & B.Tech IT Curriculum",
      period: "2020 — Present",
      location: "India",
      type: "Formal Technical Education",
      description: "Completed rigorous 3-year Diploma in IT with distinction and advancing into upper-level B.Tech IT subjects.",
      achievements: [
        "Awarded First Class with Distinction in Diploma in Information Technology.",
        "Led student academic projects in database management systems and client-server web programming."
      ]
    }
  ]
};
