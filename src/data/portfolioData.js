import { 
  FaServer, FaDatabase, FaCogs, FaShieldAlt, FaTerminal, FaGitAlt, 
  FaDocker, FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaNetworkWired, FaCode, FaCloud, FaLaptopCode
} from 'react-icons/fa';
import { 
  SiDotnet, SiPostgresql, SiMysql, 
  SiRedis, SiPostman, SiSwagger
} from 'react-icons/si';

export const developerInfo = {
  name: "Ammar",
  title: "Senior Backend .NET Developer",
  roles: [
    "Backend .NET Developer",
    "ASP.NET Core Specialist",
    "REST API Architect",
    "Database & System Design Enthusiast"
  ],
  bio: "I architect high-performance, secure, and scalable server-side systems. Specialized in the C# and .NET ecosystem, ASP.NET Core, and distributed systems, I construct robust backends focusing on clean architecture, optimized database queries, containerization, and bulletproof security protocols.",
  shortBio: "Crafting performant APIs and secure backend systems with C# and .NET",
  email: "amar.yasser.frag1230@gmail.com",
  linkedin: "https://www.linkedin.com/in/amar-yasser-71b063263/",
  github: "https://github.com/Amarr15",
  Facebook: "https://www.facebook.com/amar.yasser.98349",
  instagram: "https://www.instagram.com/amarrr_31/",
  resumeUrl: "#",
  avatarUrl: `${import.meta.env.BASE_URL}ammmar.jpg`,
  about: "With 5+ years of experience building enterprise-grade backend systems, I specialize in creating scalable, secure APIs that power modern applications. My expertise spans ASP.NET Core, database architecture, real-time systems, and microservices. I'm passionate about clean code, performance optimization, and building systems that scale.",
};

export const stats = [
  { value: "50+", label: "APIs Built" },
  { value: "25+", label: "Projects Completed" },
  { value: "15+", label: "Technologies Mastered" },
];

export const skillCategories = [
  {
    title: "Backend Core",
    description: "Constructing lightning-fast server engines and robust web protocols.",
    skills: [
      { name: "C# Language", icon: FaCode, color: "#178600", level: 98 },
      { name: "ASP.NET Core", icon: SiDotnet, color: "#512BD4", level: 95 },
      { name: ".NET Framework", icon: SiDotnet, color: "#512BD4", level: 95 },
      { name: "REST APIs & SOAP", icon: FaNetworkWired, color: "#007ACC", level: 98 },
      { name: "Entity Framework Core", icon: FaDatabase, color: "#512BD4", level: 92 },
      { name: "LINQ Querying", icon: FaCogs, color: "#512BD4", level: 95 },
      { name: "JWT Authentication", icon: FaShieldAlt, color: "#E10098", level: 92 },
      { name: "SignalR (Real-time)", icon: FaNetworkWired, color: "#38B2AC", level: 88 },
    ]
  },
  {
    title: "Databases & Storage",
    description: "Designing optimized schemas, query indexing, and caching layers.",
    skills: [
      { name: "SQL Server (T-SQL)", icon: FaDatabase, color: "#CC292B", level: 94 },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: 90 },
      { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 85 },
      { name: "Redis Caching", icon: SiRedis, color: "#DC382D", level: 90 },
    ]
  },
  {
    title: "Architecture & Design",
    description: "Building resilient, maintainable, and loosely coupled enterprise systems.",
    skills: [
      { name: "Clean Architecture", icon: FaServer, color: "#6366F1", level: 95 },
      { name: "SOLID Principles", icon: FaCogs, color: "#10B981", level: 98 },
      { name: "Repository Pattern", icon: FaDatabase, color: "#F59E0B", level: 95 },
      { name: "Dependency Injection", icon: FaNetworkWired, color: "#EF4444", level: 98 },
      { name: "Microservices Architect", icon: FaServer, color: "#8B5CF6", level: 85 },
      { name: "Auth & RBAC Protocols", icon: FaShieldAlt, color: "#10B981", level: 90 },
    ]
  },
  {
    title: "Dev Tools & Pipeline",
    description: "Standardizing pipelines, container orchestration, and rapid testing.",
    skills: [
      { name: "Git & GitHub", icon: FaGitAlt, color: "#F05032", level: 94 },
      { name: "Docker", icon: FaDocker, color: "#2496ED", level: 88 },
      { name: "Postman Testing", icon: SiPostman, color: "#FF6C37", level: 96 },
      { name: "Swagger / OpenAPI", icon: SiSwagger, color: "#85EA2D", level: 95 },
      { name: "Visual Studio IDE", icon: FaLaptopCode, color: "#5C2D91", level: 94 },
      { name: "VS Code", icon: FaCode, color: "#007ACC", level: 92 },
    ]
  },
  {
    title: "Cloud & Deployment",
    description: "Deploying highly resilient systems on global cloud systems.",
    skills: [
      { name: "Azure Services", icon: FaCloud, color: "#0089D6", level: 82 },
      { name: "CI/CD Pipelines", icon: FaCogs, color: "#10B981", level: 85 },
      { name: "Vercel & Static", icon: FaCloud, color: "#FFFFFF", level: 80 },
      { name: "Render & Hosting", icon: FaServer, color: "#6366F1", level: 85 },
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Queue Management System - Smart Virtual Queue Platform",
    subtitle: "High-Performance Real-time Booking Engine",
    description: " A real-time queue management system designed to streamline customer flow and reduce waiting time through virtual ticket booking, live queue tracking, and administrator monitoring dashboards..",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    tags: [".NET Core", "SQL Server", "Entity Framework Core", "REST APIs", "Flutter Integration", "Cloudflare", "Git/GitHub"],
    apiFeatures: "Real-time queue updates, Ticket management APIs, Notification handling, Admin analytics dashboard",
    authMethod: "WT Authentication, Role-based Authorization",
    database: "SQL Server with Entity Framework Core integration for efficient queue and user management",
    liveUrl: "#",
    githubUrl: "https://github.com/Amarr15/Tabourak-Project",
  },
  {
    id: 2,
    title: "Lingoafy - Online Learning Platform",
    subtitle: "Enterprise Authentication & JWT Issuer",
    description: "A modern online courses platform built using ASP.NET Core, designed to provide students with an interactive learning experience while enabling instructors and admins to efficiently manage courses, content, enrollments, and progress tracking.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    tags: [".NET 8", "SQL Server", "Docker", "JWT", "SOLID Principles"],
    apiFeatures: "OAuth2 compliant APIs, Secure cookie endpoints, CORS policy enforcement, Course management APIs, Enrollment system, Progress tracking, Role-based dashboards",
    authMethod: "JWT Authentication, Multi-factor auth verification codes, Role-based Authorization (Student / Instructor / Admin)",
    database: "SQL Server (backed by Entity Framework migration scripts)",
    liveUrl: "https://lingoafy.netlify.app/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Donation Management System - Digital Egypt Initiative",
    subtitle: "Clean Architecture E-Learning Portal",
    description: " A full-featured donation platform developed as a graduation project for the Digital Egypt Initiative, enabling users to browse donation campaigns, contribute securely, and allowing administrators to manage donations, campaigns, and reporting systems efficiently.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    tags: [".NET Core", "JWT", "Git/GitHub","REST APIs", "Entity Framework Core", "SQL Server"],
    apiFeatures: "Donation processing APIs, Campaign management system, Admin reporting dashboard, User contribution tracking",
    authMethod: "JWT Authentication, ASP.NET Identity authorization system",
    database: "SQL Server integrated with Entity Framework Core for secure and scalable data handling",
    liveUrl: "#",
    githubUrl: "https://github.com/Fareselawady/DEPI_Donation",
  },
  {
    id: 4,
    title: "Social Media App - Full Stack Social Platform",
    subtitle: "Server Performance Diagnostics API",
    description: " A social networking platform inspired by Facebook, allowing users to create profiles, publish posts, interact through likes and comments, and manage personal content within a secure and responsive environment.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    tags: ["Python", "Django REST Framework", "JavaScript", "Django", "PostgreSQL", "REST APIs", "Bootstrap", "Git/GitHub"],
    apiFeatures: " User authentication APIs, Post and comment management, Real-time interaction handling, Profile management system",
    authMethod: "Django Authentication System, Secure session-based authorization",
    database: "PostgreSQL integrated with Django ORM for scalable data management",
    liveUrl: "#",
    githubUrl: "https://github.com/mejo-sal/Social-Media-App",
  }
];

export const experience = [
    {
    id: 3,
    role: "B.S. Computer Science & Software Engineering",
    company: "Mansoura University",
    duration: "2022 - 2026",
    description: " Studying software engineering with a strong focus on backend development, scalable systems, database design, and modern application architecture.",
    type: "education"
  },
  {
    id: 1,
    role: "Volunteer & Cultural Exchange Participant",
    company: "AIESEC Jaipur, India",
    duration: "2024 - 2025",
    description: "Participated in educational and community activities, collaborated with international teams, enhanced communication and leadership skills, and contributed to cultural awareness initiatives with local children and communities.",
    type: "experience"
  },
  {
    id: 2,
    role: "Full Stack .NET Developer",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    duration: "2024 - 2025",
    description: "Developed scalable ASP.NET Core applications, implemented RESTful APIs, managed SQL Server databases using Entity Framework, and collaborated within Agile teams while applying Clean Architecture principles.",
    type: "experience"
  },
  {
    id: 4,
    role: "Python Backend Developer Trainee",
    company: "Information Technology Institute (ITI)",
    duration: "2024 - 2025",
    description: " Built backend systems using Django and Flask, integrated REST APIs, managed PostgreSQL databases, and improved application performance and security through practical full stack projects.",
    type: "experience"
  }
];
