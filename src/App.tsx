import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Bug,
  CheckCircle2,
  ChevronDown,
  Code,
  Code2,
  Copy,
  Database,
  Download,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Phone,
  Server,
  Sparkles,
  Sun,
  Terminal,
  Workflow,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const resumeRequestFormId = "mgodqrzn";

const navItems = [
  { label: "work", id: "projects" },
  { label: "services", id: "services" },
  { label: "clients", id: "clients" },
  { label: "skills", id: "skills" },
  { label: "about", id: "about" },
  { label: "roles", id: "roles" },
  { label: "contact", id: "contact" },
];

const contacts = [
  {
    label: "Email",
    value: "danilomabulac1@gmail.com",
    copyValue: "danilomabulac1@gmail.com",
    href: "mailto:danilomabulac1@gmail.com",
    icon: Mail,
    accent: "group-hover:bg-purple-100 dark:group-hover:bg-purple-950/50 group-hover:text-purple-600 dark:group-hover:text-purple-400",
  },
  {
    label: "Phone",
    value: "+63 976 572 0751",
    copyValue: "+639765720751",
    href: "tel:+639765720751",
    icon: Phone,
    accent: "group-hover:bg-emerald-100 dark:group-hover:bg-emerald-950/50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
  },
  {
    label: "GitHub",
    value: "github.com/danilomabulac",
    href: "https://github.com/danilomabulac",
    icon: Github,
    accent: "group-hover:bg-slate-900 dark:group-hover:bg-slate-100 group-hover:text-white dark:group-hover:text-slate-900",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dbmabulac",
    href: "https://www.linkedin.com/in/dbmabulac",
    icon: Linkedin,
    accent: "group-hover:bg-blue-600 group-hover:text-white",
  },
  {
    label: "Resume",
    value: "Request resume",
    href: "#resume-request",
    icon: Download,
    accent: "group-hover:bg-emerald-100 dark:group-hover:bg-emerald-950/50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
  },
];

type SkillCategory = {
  category: string;
  icon: LucideIcon;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    category: "Enterprise Backend Mastery",
    icon: Code2,
    skills: [
      "C#",
      ".NET 10 / ASP.NET Core",
      "ASP.NET Core",
      "ASP.NET MVC",
      "REST Web APIs",
      "Entity Framework Core",
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
      "Stored Procedures",
      "Advanced Query Optimization",
      "ADO.NET",
      "Dependency Injection",
      "JWT/OAuth",
      "Clean Architecture Monoliths",
      "SOLID Principles",
    ],
  },
  {
    category: "Fast Frontend Engineering",
    icon: Globe,
    skills: ["React", "Next.js (App Router)", "TypeScript", "Node.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / CSS3", "Bootstrap Framework", "Responsive Mobile-First Design (PWA)"],
  },
  {
    category: "Production Ops & Infrastructure",
    icon: Server,
    skills: [
      "Docker Containerization",
      "Nginx Reverse Proxy Setup",
      "Linux / Ubuntu VPS Management",
      "systemd Process Monitoring",
      "GitHub Actions CI/CD Pipelines",
      "SSL Configuration",
      "DNS Routing",
      "Environment Variable Matrix Management",
      "Postman API Automation",
      "Serilog Error Logging",
      "Hangfire Asynchronous Background Tasks",
      "Redis Caching",
    ],
  },
  {
    category: "AI Integration & Workflow Automation",
    icon: Sparkles,
    skills: ["DeepSeek API Core Integration", "OpenAI Suite", "Advanced Prompt Engineering Architecture", "n8n Deployment", "Make.com Nodes", "Zapier Logic", "Custom Structural Webhooks"],
  },
];

const services = [
  {
    title: "Business Web Application Development",
    description: "Build decoupled web applications that connect modern React or Next.js interfaces to reliable backend APIs.",
    fit: "Best for teams that need production-ready MVPs or business systems delivered across UI, API, and database layers.",
    icon: Code2,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "ASP.NET Core", "SQL Server", "PostgreSQL"],
  },
  {
    title: "Backend API Development",
    description: "Design, build, and maintain REST APIs, authentication flows, database-backed features, and service integrations.",
    fit: "Best for teams that need reliable backend delivery, clear contracts, and production-aware development.",
    icon: Server,
    technologies: ["ASP.NET Core", "C#", "REST APIs", "Entity Framework Core", "SQL Server", "JWT/OAuth", "API Gateways"],
  },
  {
    title: "Business Systems and Internal Tools",
    description: "Create workflow tools, admin modules, dashboards, and reporting screens that organize daily operations into one usable system.",
    fit: "Best for companies replacing manual paperwork, spreadsheet tracking, or disconnected operational processes.",
    icon: Workflow,
    technologies: [".NET", "React", "TypeScript", "SQL Server", "PostgreSQL", "Background Jobs", "Tailwind CSS"],
  },
  {
    title: "Database-Backed Applications",
    description: "Model data, write queries, optimize database access, and connect application workflows to reliable storage.",
    fit: "Best for applications where data quality, reporting, and operational correctness matter.",
    icon: Database,
    technologies: ["SQL Server", "PostgreSQL", "Azure SQL", "Entity Framework Core", "Stored Procedures", "Query Optimization"],
  },
  {
    title: "API and Webhook Integrations",
    description: "Connect systems through REST APIs, webhook flows, background jobs, and practical integration checks.",
    fit: "Best for teams that need applications to exchange data cleanly with other services.",
    icon: Code,
    technologies: ["REST APIs", "API Integration", "API Gateways", "Webhooks", "Background Jobs", "Payment Gateways", "Postman"],
  },
  {
    title: "Automation Workflows",
    description: "Design automated workflow channels that reduce repetitive work, manual data handling, and operational friction.",
    fit: "Best for teams with recurring business processes that can be simplified through software.",
    icon: Workflow,
    technologies: ["n8n", "Make.com", "Zapier", "Webhooks", "API-based Workflow Automation", "Postman"],
  },
  {
    title: "AI-Assisted Business Features",
    description: "Add AI-assisted features that support business workflows, summarize information, or help users work faster.",
    fit: "Best for teams exploring AI or automation with a business-first, MVP-focused approach.",
    icon: Sparkles,
    technologies: ["OpenAI API", "DeepSeek", "LLM Integration", "Prompt Engineering", "TypeScript", "Python", "FastAPI"],
  },
  {
    title: "Admin Dashboard / Reporting System",
    description: "Build dashboard views, filters, tables, reports, and admin interfaces for operational visibility.",
    fit: "Best for businesses that need clearer data and faster daily decision-making.",
    icon: Globe,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "SQL Server", "PostgreSQL"],
  },
  {
    title: "Bug Fixing and Production Troubleshooting",
    description: "Investigate failed requests, environment issues, query problems, data mismatches, and release risks.",
    fit: "Best for teams that need someone comfortable tracing issues across code, APIs, logs, and databases.",
    icon: Bug,
    technologies: [".NET", "Serilog", "SQL Server", "Postman", "Query Optimization", "REST APIs"],
  },
  {
    title: "Cloud Deployment & CI/CD Setup",
    description: "Set up practical deployment flows, service hosting, environment configuration, build pipelines, and live release paths.",
    fit: "Best for projects that need a more reliable path from development to live environments.",
    icon: BriefcaseBusiness,
    technologies: ["Docker", "GitHub Actions CI/CD", "Vercel", "Railway", "Azure App Service", "Environment Variables"],
  },
  {
    title: "Cloud Solutions and Infrastructure Setup",
    description:
      "Deploy and configure web applications using cloud platforms, VPS hosting, reverse proxies, custom domains, SSL, and environment-based configuration.",
    fit: "Best for teams that need applications moved from local development into a usable, maintainable hosted environment.",
    icon: Globe,
    technologies: ["Azure App Service", "Azure SQL", "Supabase", "DigitalOcean / VPS Hosting", "Nginx", "Linux VPS", "DNS / Custom Domains", "SSL"],
  },
];

const audiences = [
  {
    title: "Small Businesses",
    description: "Teams that need internal systems, dashboards, ordering tools, inventory workflows, or reporting without overbuilding.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Startups and MVPs",
    description: "Founders who need a functional first version of a web app, SaaS workflow, API, or operations platform.",
    icon: Sparkles,
  },
  {
    title: "Software Development Agencies",
    description: "Teams with a clear backlog, structured tickets, or client project work that needs reliable execution support.",
    icon: Code2,
  },
  {
    title: "Operations-Heavy Teams",
    description: "Businesses with manual tracking, spreadsheets, repeated admin work, or disconnected tools that need automation.",
    icon: Workflow,
  },
  {
    title: "Teams Exploring AI Automation",
    description: "Organizations that want useful AI-assisted features for workflows, summaries, notifications, or business support.",
    icon: Sparkles,
  },
];

const capabilityHighlights = [
  {
    title: "Production-Ready MVPs",
    description: "Turn clear requirements, tickets, or wireframes into working web applications with frontend, backend, database, and deployment covered.",
    icon: Sparkles,
  },
  {
    title: "Decoupled Web Systems",
    description: "Build React or Next.js interfaces connected to typed .NET, FastAPI, or integration-focused backend APIs.",
    icon: Code2,
  },
  {
    title: "Automation & AI Workflows",
    description: "Design intake, file-processing, webhook, and AI-assisted workflows that reduce manual operations work.",
    icon: Workflow,
  },
  {
    title: "Deployment Support",
    description: "Prepare projects for real hosting with CI/CD, cloud platforms, VPS setup, domains, SSL, and environment configuration.",
    icon: Server,
  },
];

type ProjectScreenshot = {
  src: string;
  alt: string;
  label: string;
};

type ActivePreview = ProjectScreenshot & {
  projectTitle: string;
};

type Project = {
  category: string;
  title: string;
  subtitle: string;
  problem: string;
  contribution: string;
  result: string;
  technologies: string[];
  icon: LucideIcon;
  href?: string;
  demoHref?: string;
  privateLabel?: string;
  caseStudyLabel?: string;
  screenshots?: ProjectScreenshot[];
};

const projects: Project[] = [
  {
    category: "live-demos",
    title: "AI Travel Itinerary Planner",
    subtitle: "Smart trip-generation platform with interactive spatial mapping",
    problem:
      "Planning structured local travel forces users to jump between maps, reviews, opening hours, and fragmented notes.",
    contribution:
      "Built a lightweight PWA that accepts natural language travel prompts, coordinates AI-generated structured outputs, and presents map-ready stops through a responsive planning interface.",
    result:
      "Shows practical AI product work: structured prompt output, API contract validation, third-party map integration, and mobile-first itinerary UX.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Leaflet", "PWA", ".NET API", "Google Maps API", "Google Places API", "Gemini", "DeepSeek", "Grok", "Supabase", "Vercel", "Railway"],
    demoHref: "https://gala-tayo.vercel.app/",
    icon: Globe,
    caseStudyLabel: "Case study coming soon",
    screenshots: [
      { src: "/project-screenshots/gala-tayo/landing.png", alt: "AI travel itinerary planner landing page", label: "Landing" },
      { src: "/project-screenshots/gala-tayo/planner.png", alt: "AI travel itinerary planner prompt page", label: "Planner" },
      { src: "/project-screenshots/gala-tayo/routes.png", alt: "AI travel itinerary planner route view", label: "Routes" },
    ],
  },
  {
    category: "private-professional-work",
    title: "Business Operations SaaS Platform",
    subtitle: "Cloud-based architecture for water refilling operations and delivery tracking",
    problem: "Delivery-heavy local businesses deal with tracking friction, manual order bookkeeping, and disconnected logistics.",
    contribution:
      "Designed an end-to-end multi-tenant business system with structured order workflows, operational dashboards, auth boundaries, and a mobile-first interface for field users.",
    result:
      "Demonstrates complex business workflow modeling, multi-tenant data boundaries, secure API design, and practical PWA-style accessibility for operations teams.",
    technologies: [".NET", "Entity Framework Core", "PostgreSQL", "Next.js", "Tailwind CSS", "PWA", "Clerk", "JWT/OAuth", "Payment Gateways", "REST APIs"],
    href: "https://github.com/danilomabulac/aquatrack-case-study",
    icon: Database,
    privateLabel: "Request a demo",
    screenshots: [
      { src: "/project-screenshots/aquatrack/landing.png", alt: "Business operations SaaS landing page", label: "Landing" },
      { src: "/project-screenshots/aquatrack/dashboard.png", alt: "Business operations SaaS dashboard", label: "Dashboard" },
      { src: "/project-screenshots/aquatrack/orders.png", alt: "Business operations SaaS orders page", label: "Orders" },
    ],
  },
  {
    category: "live-demos",
    title: "Career Workspace SaaS Application",
    subtitle: "Focused job pipeline tracker with contextual AI mentor support",
    problem: "Job applicants manage multiple interview stages, follow-ups, notes, and decisions across scattered tools.",
    contribution:
      "Built an integrated pipeline workspace for status tracking, interaction logs, follow-up planning, and DeepSeek-powered AI mentor support.",
    result:
      "Demonstrates SaaS workflow design, authenticated user experience, structured data tracking, and practical AI assistance inside a focused product.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Prisma", "Clerk", "DeepSeek"],
    href: "https://github.com/danilomabulac/huntly-case-study",
    demoHref: "https://huntly-application-tracker.vercel.app/",
    icon: BriefcaseBusiness,
    screenshots: [
      { src: "/project-screenshots/huntly/landing.png", alt: "Career workspace landing page", label: "Landing" },
      { src: "/project-screenshots/huntly/dashboard.png", alt: "Career workspace dashboard", label: "Dashboard" },
      { src: "/project-screenshots/huntly/applications.png", alt: "Career workspace applications page", label: "Applications" },
    ],
  },
  {
    category: "live-demos",
    title: "Notification Infrastructure Engine",
    subtitle: "Light event-driven notification service for existing applications",
    problem: "Applications often add alerting, templates, and subscriber handling directly into the main codebase, creating avoidable complexity.",
    contribution:
      "Designed a lightweight service model with API token endpoints, applications, subscribers, templates, inbox state, and integration safety.",
    result:
      "Highlights API design, platform thinking, auth boundaries, event-driven integrations, and infrastructure-style product development.",
    technologies: ["FastAPI", "Next.js", "PostgreSQL", "Clerk", "Railway", "API Integration"],
    href: "https://github.com/danilomabulac/signalkit-case-study",
    demoHref: "http://signalkit-webapp-nextjs.vercel.app/",
    icon: Server,
  },
  {
    category: "automation-workflows",
    title: "Production Deployment Pipeline Case Study",
    subtitle: "From local web app to live VPS deployment",
    problem:
      "Small teams and client projects often need a reliable path from local development to a hosted application with domains, SSL, environment configuration, and repeatable releases.",
    contribution:
      "Plan a production-style deployment flow using Docker, Nginx, Linux VPS hosting, systemd services, GitHub Actions, environment variables, DNS, SSL, and basic logs.",
    result:
      "Shows that I can support the full delivery path: not only building the app, but preparing it to run in a real hosted environment.",
    technologies: ["Docker", "Nginx", "Linux VPS", "systemd", "GitHub Actions CI/CD", "SSL"],
    icon: Globe,
  },
  {
    category: "automation-workflows",
    title: "Enterprise AI Intake Automation",
    subtitle: "Automated triage engine turning unstructured inquiries into reviewable tasks",
    problem:
      "Operations teams spend time reading messy incoming text, classifying requests, and manually turning them into next steps.",
    contribution:
      "Built a public demo that captures raw intake, extracts core intent with structured AI processing, supports review, and maps the result into workflow-ready outputs.",
    result:
      "Shows how AI can reduce manual intake work while keeping people in control of review, decisions, routing, and follow-up.",
    technologies: ["Next.js", "TypeScript", "Route Handlers", "LLM Integration", "Webhooks", "Vercel"],
    href: "https://github.com/danilomabulac/intakeflow-case-study",
    demoHref: "https://intakeflow-demo.vercel.app/",
    icon: Sparkles,
    screenshots: [
      { src: "/project-screenshots/intakeflow/intake.png", alt: "AI intake automation form", label: "Intake" },
      { src: "/project-screenshots/intakeflow/review.png", alt: "AI intake automation review output", label: "Review" },
    ],
  },
  {
    category: "private-professional-work",
    title: "Enterprise .NET Systems",
    subtitle: "Professional work on private business applications",
    problem:
      "Enterprise teams need stable systems that support real users, business workflows, production fixes, and ongoing feature delivery.",
    contribution:
      "Built, maintained, debugged, and enhanced private web applications across UI, API, and database layers while working with production issues and business requirements.",
    result:
      "Represents professional experience with maintainable business software, REST APIs, SQL-backed workflows, and production support.",
    technologies: ["C#", "ASP.NET Core", "ASP.NET MVC", "SQL Server", "REST APIs", "Entity Framework Core"],
    icon: Code2,
    privateLabel: "Request a work summary",
  },
  {
    category: "private-professional-work",
    title: "Client Web & Windows Applications",
    subtitle: "Independent work with international client support",
    problem:
      "Clients often need practical improvements, troubleshooting, and support for existing web or Windows applications without exposing their private source code.",
    contribution:
      "Handled client interaction, issue clarification, application support, and practical fixes for web and Windows-based systems outside full-time roles.",
    result:
      "Shows communication, debugging, and delivery experience in client-facing software work while keeping private implementation details protected.",
    technologies: [".NET", "SQL Server", "JavaScript", "HTML", "CSS", "Postman", "Git"],
    icon: BriefcaseBusiness,
    privateLabel: "Request a work summary",
  },
  {
    category: "automation-workflows",
    title: "Enterprise Multi-Format File Extractor",
    subtitle: "Structural data processing for PDF, CSV, and XLSX uploads",
    problem:
      "Manual copy-pasting from PDFs, vendor documents, or spreadsheet attachments introduces errors and slows down operations.",
    contribution:
      "Built and tested a file-processing product that accepts a file plus a process type, routes PDF, CSV, and XLSX requests to the right extraction path, and returns structured API-style output.",
    result:
      "Demonstrates practical product thinking around workflow automation, multi-format parsing, API testing, and reusable document-processing services.",
    technologies: ["Webhooks", "API-based Workflow Automation", "Postman", "PDF Extraction", "CSV Extraction", "XLSX Extraction"],
    demoHref: "https://file-extractor-demo.vercel.app/",
    icon: Workflow,
    screenshots: [
      { src: "/project-screenshots/file-extractor/landing.png", alt: "File processing automation upload screen", label: "Upload" },
      { src: "/project-screenshots/file-extractor/output.png", alt: "File processing automation extracted output", label: "Output" },
    ],
  },
];

const projectSections = [
  {
    id: "live-demos",
    title: "Live Product Demos",
    description: "Working applications that visitors can open and try. Public source may stay private, with case-study repos used for explanation.",
  },
  {
    id: "public-case-studies",
    title: "Public Case Studies",
    description: "Public write-ups and GitHub case-study repos for projects where the sanitized case-study artifact is the main proof.",
  },
  {
    id: "private-professional-work",
    title: "Private / Professional Work",
    description: "Real products, professional work, and client-style systems that can be discussed without exposing private source code or production details.",
  },
  {
    id: "automation-workflows",
    title: "Automation & DevOps",
    description: "Workflow automation, deployment infrastructure, CI/CD, and integration-focused systems.",
  }
];

const targetRoles = [
  {
    title: ".NET Backend Developer",
    summary: "Strongest professional fit.",
    points: ["ASP.NET Core / C# API development", "SQL Server and EF Core-backed features", "Production issue investigation"],
  },
  {
    title: "Software Developer",
    summary: "Broad fit for business application teams.",
    points: ["Maintainable application development", "Feature delivery across existing systems", "Debugging and support for real users"],
  },
  {
    title: "Backend Developer",
    summary: "Good fit for API and database-heavy work.",
    points: ["REST API implementation", "Database-backed business logic", "Integrations and background processes"],
  },
  {
    title: "Full-Stack Developer",
    summary: "Good fit for product teams and internal systems.",
    points: ["React + TypeScript frontend work", "API integration and contract alignment", "Business workflow implementation"],
  },
  {
    title: "Web Application Developer",
    summary: "Good fit for practical app delivery across modern stacks.",
    points: ["Dashboards, admin tools, and forms", "Frontend/backend feature wiring", "Maintainable business application code"],
  },
  {
    title: "API Integration Developer",
    summary: "Good fit for connecting systems and workflows.",
    points: ["REST API and webhook integrations", "Contract alignment between services", "Testing and troubleshooting integration flows"],
  },
  {
    title: "Business Systems Developer",
    summary: "Good fit for operational software.",
    points: ["Workflow-focused feature development", "Reporting and admin tools", "Business data and process support"],
  },
  {
    title: "Internal Tools Developer",
    summary: "Good fit for teams improving internal operations.",
    points: ["Admin panels and internal dashboards", "Data entry and tracking workflows", "Practical tools for non-technical users"],
  },
  {
    title: "Automation Developer",
    summary: "Good fit for operations-heavy teams.",
    points: ["Workflow automation", "Process improvement tools", "Recurring task reduction"],
  },
  {
    title: "AI Integration Developer",
    summary: "Good fit for teams adding AI to existing workflows.",
    points: ["AI-assisted business features", "MVP-focused experiments", "Useful automation over novelty demos"],
  },
  {
    title: "Cloud / Deployment Support Developer",
    summary: "Good fit for teams that need practical hosting and release support.",
    points: ["App hosting and environment setup", "CI/CD and deployment troubleshooting", "Custom domains, SSL, and VPS configuration"],
  },
  {
    title: "Application Support Developer",
    summary: "Good fit for production support and maintenance.",
    points: ["Bug investigation", "Log and request tracing", "Database and environment issue diagnosis"],
  },
];

const skillIcons: Record<string, LucideIcon> = {
  ".NET": Code2,
  ".NET 10 / ASP.NET Core": Server,
  ".NET API": Server,
  "C#": Code2,
  "VB.NET": Code2,
  "ASP.NET": Server,
  "ASP.NET Core": Server,
  "ASP.NET MVC": Server,
  "SQL Server": Database,
  MongoDB: Database,
  "Stored Procedures": Database,
  "Query Optimization": Database,
  "Advanced Query Optimization": Database,
  "ADO.NET": Database,
  "REST Web APIs": Server,
  React: Globe,
  Leaflet: Globe,
  "Next.js": Globe,
  "Next.js (App Router)": Globe,
  TypeScript: Code2,
  "Node.js": Server,
  JavaScript: Code2,
  "JavaScript (ES6+)": Code2,
  "HTML5 / CSS3": Code2,
  "Bootstrap Framework": Code2,
  "Responsive Mobile-First Design (PWA)": Globe,
  Python: Code2,
  FastAPI: Server,
  Docker: Server,
  "Docker Containerization": Server,
  Linux: Server,
  Nginx: Server,
  "Nginx Reverse Proxy Setup": Server,
  "Linux / Ubuntu VPS Management": Server,
  "Linux VPS": Server,
  "GitHub Actions": Workflow,
  "GitHub Actions CI/CD": Workflow,
  "GitHub Actions CI/CD Pipelines": Workflow,
  Vercel: Globe,
  Railway: Globe,
  PostgreSQL: Database,
  Supabase: Database,
  "DigitalOcean / VPS Hosting": Globe,
  Prisma: Database,
  Drizzle: Database,
  "JWT/OAuth": Server,
  Clerk: Server,
  "API Integration": Workflow,
  "API Gateways": Server,
  "Payment Gateways": Workflow,
  Webhooks: Workflow,
  "Background Jobs": Workflow,
  Hangfire: Workflow,
  "Hangfire Asynchronous Background Tasks": Workflow,
  Redis: Database,
  "Redis Caching": Database,
  systemd: Server,
  "systemd Process Monitoring": Server,
  "Environment Variables": Code,
  "Environment Variable Matrix Management": Code,
  "DNS / Custom Domains": Globe,
  "DNS Routing": Globe,
  SSL: Server,
  "SSL Configuration": Server,
  "Postman API Automation": Workflow,
  "Serilog Error Logging": Bug,
  "OpenAI API": Sparkles,
  "OpenAI Suite": Sparkles,
  "Google Maps API": Globe,
  "Google Places API": Globe,
  Gemini: Sparkles,
  DeepSeek: Sparkles,
  "DeepSeek API Core Integration": Sparkles,
  Grok: Sparkles,
  PWA: Globe,
  "LLM Integration": Sparkles,
  "Prompt Engineering": Sparkles,
  "Advanced Prompt Engineering Architecture": Sparkles,
  "AI Workflow Automation": Sparkles,
  "API-based Automation": Workflow,
  n8n: Workflow,
  "n8n Deployment": Workflow,
  "Make.com": Workflow,
  "Make.com Nodes": Workflow,
  Zapier: Workflow,
  "Zapier Logic": Workflow,
  "Custom Structural Webhooks": Workflow,
  "API-based Workflow Automation": Workflow,
  "PDF Extraction": Workflow,
  "CSV Extraction": Workflow,
  "XLSX Extraction": Workflow,
  "Azure App Service": Globe,
  "Azure SQL": Database,
  "Modular Monolith": Code,
  "Clean Architecture": Code,
  "SOLID Principles": Code,
};

const skillColors: Record<string, string> = {
  ".NET": "text-purple-600 dark:text-purple-400",
  ".NET 10 / ASP.NET Core": "text-purple-600 dark:text-purple-400",
  ".NET API": "text-purple-600 dark:text-purple-400",
  "C#": "text-purple-600 dark:text-purple-400",
  "VB.NET": "text-purple-600 dark:text-purple-400",
  "ASP.NET": "text-purple-600 dark:text-purple-400",
  "ASP.NET Core": "text-purple-600 dark:text-purple-400",
  "ASP.NET MVC": "text-purple-600 dark:text-purple-400",
  "Entity Framework": "text-purple-600 dark:text-purple-400",
  "Entity Framework Core": "text-purple-600 dark:text-purple-400",
  "REST Web APIs": "text-green-600 dark:text-green-400",
  "Advanced Query Optimization": "text-orange-600 dark:text-orange-400",
  "ADO.NET": "text-orange-600 dark:text-orange-400",
  TypeScript: "text-blue-600 dark:text-blue-400",
  JavaScript: "text-yellow-600 dark:text-yellow-400",
  "JavaScript (ES6+)": "text-yellow-600 dark:text-yellow-400",
  React: "text-cyan-600 dark:text-cyan-400",
  Leaflet: "text-emerald-600 dark:text-emerald-400",
  "Next.js": "text-slate-700 dark:text-slate-300",
  "Next.js (App Router)": "text-slate-700 dark:text-slate-300",
  "Node.js": "text-green-600 dark:text-green-400",
  Python: "text-blue-600 dark:text-blue-400",
  FastAPI: "text-emerald-600 dark:text-emerald-400",
  "SQL Server": "text-orange-600 dark:text-orange-400",
  PostgreSQL: "text-blue-600 dark:text-blue-400",
  Supabase: "text-emerald-600 dark:text-emerald-400",
  Prisma: "text-slate-700 dark:text-slate-300",
  Drizzle: "text-green-600 dark:text-green-400",
  "HTML/CSS": "text-orange-500 dark:text-orange-400",
  "HTML5 / CSS3": "text-orange-500 dark:text-orange-400",
  HTML: "text-orange-500 dark:text-orange-400",
  CSS: "text-blue-600 dark:text-blue-400",
  Bootstrap: "text-purple-600 dark:text-purple-400",
  "Bootstrap Framework": "text-purple-600 dark:text-purple-400",
  "Responsive Mobile-First Design (PWA)": "text-cyan-600 dark:text-cyan-400",
  "Tailwind CSS": "text-cyan-600 dark:text-cyan-400",
  "REST APIs": "text-green-600 dark:text-green-400",
  "Stored Procedures": "text-orange-600 dark:text-orange-400",
  "Query Optimization": "text-orange-600 dark:text-orange-400",
  "API Integration": "text-emerald-600 dark:text-emerald-400",
  "API Gateways": "text-emerald-600 dark:text-emerald-400",
  Webhooks: "text-emerald-600 dark:text-emerald-400",
  "Background Jobs": "text-violet-600 dark:text-violet-400",
  "Cloud Deployment": "text-blue-600 dark:text-blue-400",
  "Workflow Automation": "text-emerald-600 dark:text-emerald-400",
  "AI Workflow Automation": "text-violet-600 dark:text-violet-400",
  "LLM Integration": "text-violet-600 dark:text-violet-400",
  "Prompt Engineering": "text-violet-600 dark:text-violet-400",
  "API-based Automation": "text-emerald-600 dark:text-emerald-400",
  "API-based Workflow Automation": "text-emerald-600 dark:text-emerald-400",
  "PDF Extraction": "text-emerald-600 dark:text-emerald-400",
  "CSV Extraction": "text-emerald-600 dark:text-emerald-400",
  "XLSX Extraction": "text-emerald-600 dark:text-emerald-400",
  n8n: "text-orange-600 dark:text-orange-400",
  "n8n Deployment": "text-orange-600 dark:text-orange-400",
  "Make.com": "text-violet-600 dark:text-violet-400",
  "Make.com Nodes": "text-violet-600 dark:text-violet-400",
  Zapier: "text-orange-600 dark:text-orange-400",
  "Zapier Logic": "text-orange-600 dark:text-orange-400",
  "Custom Structural Webhooks": "text-emerald-600 dark:text-emerald-400",
  Docker: "text-blue-600 dark:text-blue-400",
  "Docker Containerization": "text-blue-600 dark:text-blue-400",
  Linux: "text-slate-700 dark:text-slate-300",
  Nginx: "text-emerald-600 dark:text-emerald-400",
  "Nginx Reverse Proxy Setup": "text-emerald-600 dark:text-emerald-400",
  "Linux / Ubuntu VPS Management": "text-slate-700 dark:text-slate-300",
  "Linux VPS": "text-slate-700 dark:text-slate-300",
  "GitHub Actions": "text-slate-700 dark:text-slate-300",
  "GitHub Actions CI/CD": "text-slate-700 dark:text-slate-300",
  "GitHub Actions CI/CD Pipelines": "text-slate-700 dark:text-slate-300",
  Vercel: "text-slate-700 dark:text-slate-300",
  Railway: "text-slate-700 dark:text-slate-300",
  "JWT/OAuth": "text-emerald-600 dark:text-emerald-400",
  Clerk: "text-violet-600 dark:text-violet-400",
  "Payment Gateways": "text-emerald-600 dark:text-emerald-400",
  Serilog: "text-orange-600 dark:text-orange-400",
  "Serilog Error Logging": "text-orange-600 dark:text-orange-400",
  Hangfire: "text-violet-600 dark:text-violet-400",
  "Hangfire Asynchronous Background Tasks": "text-violet-600 dark:text-violet-400",
  Redis: "text-red-600 dark:text-red-400",
  "Redis Caching": "text-red-600 dark:text-red-400",
  systemd: "text-slate-700 dark:text-slate-300",
  "systemd Process Monitoring": "text-slate-700 dark:text-slate-300",
  "Azure App Service": "text-blue-600 dark:text-blue-400",
  "Azure SQL": "text-blue-600 dark:text-blue-400",
  "DigitalOcean / VPS Hosting": "text-blue-600 dark:text-blue-400",
  "Environment Variables": "text-emerald-600 dark:text-emerald-400",
  "Environment Variable Matrix Management": "text-emerald-600 dark:text-emerald-400",
  "DNS / Custom Domains": "text-cyan-600 dark:text-cyan-400",
  "DNS Routing": "text-cyan-600 dark:text-cyan-400",
  SSL: "text-emerald-600 dark:text-emerald-400",
  "SSL Configuration": "text-emerald-600 dark:text-emerald-400",
  "Postman API Automation": "text-orange-600 dark:text-orange-400",
  "Google Maps API": "text-blue-600 dark:text-blue-400",
  "Google Places API": "text-blue-600 dark:text-blue-400",
  Gemini: "text-violet-600 dark:text-violet-400",
  "OpenAI Suite": "text-violet-600 dark:text-violet-400",
  "DeepSeek API Core Integration": "text-violet-600 dark:text-violet-400",
  "Advanced Prompt Engineering Architecture": "text-violet-600 dark:text-violet-400",
  Grok: "text-violet-600 dark:text-violet-400",
  PWA: "text-cyan-600 dark:text-cyan-400",
  "Modular Monolith": "text-violet-600 dark:text-violet-400",
  "Clean Architecture": "text-violet-600 dark:text-violet-400",
  "SOLID Principles": "text-violet-600 dark:text-violet-400",
};

const techColors: Record<string, string> = {
  ".NET": "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800",
  ".NET Core": "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800",
  ".NET API": "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800",
  "C#": "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800",
  "ASP.NET": "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800",
  "ASP.NET Core": "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800",
  "Entity Framework": "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800",
  "Entity Framework Core": "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800",
  "Next.js": "bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700",
  TypeScript: "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800",
  React: "bg-cyan-100 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800",
  Leaflet: "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
  "Tailwind CSS": "bg-cyan-100 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800",
  PWA: "bg-cyan-100 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800",
  "Route Handlers": "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
  "External AI/Webhook": "bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800",
  "Node.js": "bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800",
  Python: "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800",
  FastAPI: "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
  Docker: "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800",
  Linux: "bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700",
  Nginx: "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
  "Linux VPS": "bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700",
  "GitHub Actions": "bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700",
  "GitHub Actions CI/CD": "bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700",
  Vercel: "bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700",
  Railway: "bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700",
  "Azure App Service": "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800",
  "Azure SQL": "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800",
  "SQL Server": "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800",
  PostgreSQL: "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800",
  MongoDB: "bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800",
  "DigitalOcean / VPS Hosting": "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800",
  "Stored Procedures": "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800",
  "Query Optimization": "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800",
  "REST API": "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
  "REST APIs": "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
  "API Integration": "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
  "API Gateways": "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
  Webhooks: "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
  "Background Jobs": "bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800",
  "Cloud Deployment": "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800",
  "Workflow Automation": "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
  "AI Workflow Automation": "bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800",
  "LLM Integration": "bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800",
  "Prompt Engineering": "bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800",
  "API-based Automation": "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
  "API-based Workflow Automation": "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
  "PDF Extraction": "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
  "CSV Extraction": "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
  "XLSX Extraction": "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
  n8n: "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800",
  "Make.com": "bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800",
  Zapier: "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800",
  Clerk: "bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800",
  "Payment Gateways": "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
  DeepSeek: "bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800",
  Hangfire: "bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800",
  Postman: "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800",
  Serilog: "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800",
  SSL: "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
  "OpenAI API": "bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800",
  "Google Maps API": "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800",
  "Google Places API": "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800",
  Gemini: "bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800",
  Grok: "bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800",
};

function scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mx-auto mb-12 flex max-w-xl items-center justify-center gap-4">
      <div className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
      <h2 className="font-mono text-xs uppercase tracking-[0.28em] text-violet-600 dark:text-violet-300">{children}</h2>
      <div className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
    </div>
  );
}

function Header({ theme, mobileMenuOpen, onToggleTheme, onToggleMenu, onOpenResumeRequest }: {
  theme: "dark" | "light";
  mobileMenuOpen: boolean;
  onToggleTheme: () => void;
  onToggleMenu: () => void;
  onOpenResumeRequest: () => void;
}) {
  const handleNav = (sectionId: string) => {
    scrollToSection(sectionId);
    if (mobileMenuOpen) onToggleMenu();
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-slate-200/70 bg-white/85 px-4 py-2.5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-black/45">
        <button onClick={() => scrollToSection("hero")} className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-slate-900 dark:text-slate-100">
          dbmblc.dev
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-slate-100"
            >
              {item.label}
            </button>
          ))}
          <div className="ml-2 flex items-center gap-1 border-l border-slate-200 pl-3 dark:border-white/10">
            <button
              type="button"
              onClick={onOpenResumeRequest}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-violet-400 hover:bg-violet-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-violet-400/50 dark:hover:bg-violet-400/10"
            >
              <Download className="size-3.5" />
              CV
            </button>
            <a
              href="https://github.com/danilomabulac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-slate-100"
            >
              <Github className="size-3.5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dbmabulac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-700 dark:text-slate-400 dark:hover:bg-blue-400/10 dark:hover:text-blue-300"
            >
              <Linkedin className="size-3.5" />
              LinkedIn
            </a>
          </div>
          <button
            onClick={onToggleTheme}
            className="rounded-full p-1.5 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-slate-100"
            aria-label="Toggle color theme"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onToggleTheme}
            className="rounded-full p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-slate-100"
            aria-label="Toggle color theme"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button
            onClick={onToggleMenu}
            className="rounded-full p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mt-2 rounded-3xl border border-slate-200 bg-white/95 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-black/90 md:hidden">
          <div className="flex flex-col gap-2 px-6 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="py-2 text-left text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                onOpenResumeRequest();
                if (mobileMenuOpen) onToggleMenu();
              }}
              className="flex items-center gap-2 py-2 text-left text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              <Download className="size-4" />
              Request CV
            </button>
            <a
              href="https://github.com/danilomabulac"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 text-left text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              <Github className="size-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dbmabulac"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 text-left text-sm text-slate-600 transition-colors hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-300"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

type HelloPhase = "typingWorld" | "deletingWorld" | "typingDan" | "success" | "holding";

const helloPrefix = "Hello ";
const helloWorld = `${helloPrefix}world`;
const helloDan = `${helloPrefix}I'm Dan`;

function AnimatedHelloIntro() {
  const [phase, setPhase] = useState<HelloPhase>("typingWorld");
  const [animatedOutput, setAnimatedOutput] = useState("");

  useEffect(() => {
    if (phase === "typingWorld") {
      if (animatedOutput.length < helloWorld.length) {
        const typingTimer = window.setTimeout(() => {
          setAnimatedOutput(helloWorld.slice(0, animatedOutput.length + 1));
        }, 64);

        return () => window.clearTimeout(typingTimer);
      }

      const pauseTimer = window.setTimeout(() => {
        setPhase("deletingWorld");
      }, 850);

      return () => window.clearTimeout(pauseTimer);
    }

    if (phase === "deletingWorld") {
      if (animatedOutput.length > helloPrefix.length) {
        const deletingTimer = window.setTimeout(() => {
          setAnimatedOutput((current) => current.slice(0, -1));
        }, 48);

        return () => window.clearTimeout(deletingTimer);
      }

      const replaceTimer = window.setTimeout(() => {
        setPhase("typingDan");
      }, 180);

      return () => window.clearTimeout(replaceTimer);
    }

    if (phase === "typingDan") {
      if (animatedOutput.length < helloDan.length) {
        const typingTimer = window.setTimeout(() => {
          setAnimatedOutput(helloDan.slice(0, animatedOutput.length + 1));
        }, 64);

        return () => window.clearTimeout(typingTimer);
      }

      const holdTimer = window.setTimeout(() => {
        setPhase("success");
      }, 650);

      return () => window.clearTimeout(holdTimer);
    }

    if (phase === "success") {
      const successTimer = window.setTimeout(() => {
        setPhase("holding");
      }, 1800);

      return () => window.clearTimeout(successTimer);
    }

    if (phase === "holding") {
      const typingTimer = window.setTimeout(() => {
        setAnimatedOutput("");
        setPhase("typingWorld");
      }, 650);

      return () => window.clearTimeout(typingTimer);
    }
  }, [animatedOutput, phase]);

  return (
    <div className="mx-auto mb-8 flex w-fit items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-4 py-2 font-mono text-xs text-slate-600 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
      <Terminal className="size-3.5 text-violet-600 dark:text-violet-300" />
      <span className="text-slate-400">&gt;</span>
      <span aria-live="polite">{animatedOutput}</span>
      <span className="h-4 w-1.5 animate-pulse rounded-full bg-violet-500" aria-hidden="true" />
      {(phase === "success" || phase === "holding") && (
        <span className="hidden text-emerald-600 dark:text-emerald-300 sm:inline">return Success(200, "OK");</span>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-6 pb-16 pt-28 transition-colors dark:bg-[#030207]">
      <div className="frame-glow absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl dark:bg-violet-500/25" />
      <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(180deg,black,transparent_82%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />

      <div className="frame-section relative z-10 mx-auto max-w-5xl text-center md:-translate-y-4">
        <div className="mx-auto mb-8 max-w-4xl">
          <AnimatedHelloIntro />

          <p className="mb-4 font-mono text-xs uppercase tracking-[0.32em] text-violet-600 dark:text-violet-300">
            Web Applications • Decoupled APIs • AI & Cloud Automation
          </p>

          <h1 className="mx-auto mb-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-6xl lg:text-7xl">
            Hi, I'm Danilo Mabulac Jr.
            <span className="mt-3 block text-2xl font-medium text-slate-500 dark:text-slate-400 md:text-4xl">
              Full-Stack .NET & React Engineer
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
            I build production-ready web applications, secure APIs, business dashboards, automation workflows, and
            AI-assisted tools for teams that need practical software delivered end to end.
          </p>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-300">
              <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
              Open to full-time, part-time, freelance, and contract work
            </span>
          </div>
        </div>

        <div className="mx-auto mb-10 flex max-w-2xl flex-wrap items-center justify-center gap-2.5">
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-violet-950/10 transition-all hover:scale-105 dark:bg-white dark:text-slate-950"
            >
              Discuss a Project
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="rounded-full border border-slate-300 bg-white/50 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-violet-400 hover:bg-violet-50 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-violet-400/50 dark:hover:bg-violet-400/10"
            >
              MVP Services
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="rounded-full border border-slate-300 bg-white/50 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-cyan-400 hover:bg-cyan-50 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-cyan-400/50 dark:hover:bg-cyan-400/10"
            >
              Live Demos
            </button>
        </div>

        <div className="frame-line mx-auto grid max-w-4xl gap-3 border-y border-slate-200 py-5 dark:border-white/10 md:grid-cols-3">
          {[
            ["Professional core", ".NET APIs, SQL Server, enterprise systems"],
            ["Modern delivery", "React, Next.js, cloud deployment, CI/CD"],
            ["Business automation", "Workflow tools, AI-assisted features, integrations"],
          ].map(([label, value]) => (
            <div key={label} className="px-3 text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">{label}</p>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickStats() {
  const stats = [
    { value: 5, label: "Years Experience", suffix: "+", icon: BriefcaseBusiness },
    { value: 20, label: "Projects Delivered", suffix: "+", icon: Code2 },
    { value: 15, label: "Technologies", suffix: "+", icon: Terminal },
    { value: 100, label: "Client Satisfaction", suffix: "%", icon: CheckCircle2 },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("quick-stats");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setAnimatedValues((prev) => {
          const newValues = [...prev];
          if (newValues[index] < stat.value) {
            newValues[index] = Math.min(newValues[index] + stat.value / steps, stat.value);
          }
          return newValues;
        });
      }, stepDuration);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [isVisible, stats]);

  return (
    <section id="quick-stats" className="frame-section border-y border-slate-200 bg-white px-6 py-12 transition-colors dark:border-white/10 dark:bg-[#030207]">
      <div className="mx-auto max-w-5xl">
        <div className="frame-line grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 dark:border-white/10 dark:bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="frame-card group bg-white p-6 text-center transition-colors hover:bg-slate-50 dark:bg-[#07050d] dark:hover:bg-white/[0.04]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mx-auto mb-4 flex size-11 items-center justify-center rounded-full border border-slate-200 text-violet-600 dark:border-white/10 dark:text-violet-300">
                    <Icon className="size-5" />
                  </div>
                  <div className="mb-2">
                    <span className="text-3xl font-semibold text-slate-950 dark:text-white">
                      {Math.round(animatedValues[index])}
                    </span>
                    <span className="text-xl font-semibold text-violet-600 dark:text-violet-300">{stat.suffix}</span>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-500">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CapabilitySnapshot() {
  return (
    <section id="capabilities" className="frame-section border-b border-slate-200 bg-white px-6 py-20 transition-colors dark:border-white/10 dark:bg-[#030207]">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>capabilities</SectionLabel>
        <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-4xl">
              Practical execution across MVPs, APIs, automations, and deployment.
            </h2>
          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-violet-400 hover:text-slate-950 dark:border-white/10 dark:text-slate-300 dark:hover:border-violet-400/50 dark:hover:text-white"
          >
            See proof
            <ArrowRight className="size-4" />
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {capabilityHighlights.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <article
                key={capability.title}
                className={`frame-card group rounded-3xl border border-slate-200 bg-slate-50/70 p-5 transition-colors hover:border-violet-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-violet-400/40 dark:hover:bg-white/[0.05] stagger-${index + 1}`}
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-full border border-slate-200 text-violet-600 dark:border-white/10 dark:text-violet-300">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-slate-950 dark:text-slate-100">{capability.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{capability.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  const cards = [
    {
      title: "Enterprise Development",
      description: "Building decoupled .NET APIs, REST services, and production systems for real business requirements.",
      icon: Code,
    },
    {
      title: "Data & Systems",
      description: "SQL Server and PostgreSQL work, data-backed features, API contracts, and production debugging.",
      icon: Database,
    },
    {
      title: "Automation & AI",
      description: "Creating practical tools that automate workflows, integrate AI, and reduce repetitive operational work.",
      icon: Workflow,
    },
  ];

  return (
    <section id="about" className="frame-section border-b border-slate-200 bg-white px-6 py-20 transition-colors dark:border-white/10 dark:bg-[#030207]">
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionLabel>about</SectionLabel>

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            I'm a Software Developer with professional experience building, maintaining, and debugging enterprise-grade
            backend infrastructure and modern web software. My background includes .NET web development, REST APIs, SQL
            databases, production issue investigation, and business workflow support.
          </p>
        </div>

        <div className="mb-12 grid gap-4 md:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="frame-card group rounded-3xl border border-slate-200 bg-slate-50/70 p-6 text-center transition-colors hover:border-violet-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-violet-400/40 dark:hover:bg-white/[0.05]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full border border-slate-200 text-violet-600 dark:border-white/10 dark:text-violet-300">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-slate-950 dark:text-slate-100">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{card.description}</p>
              </article>
            );
          })}
        </div>

        <div className="frame-card mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-slate-50/70 p-6 text-center dark:border-white/10 dark:bg-white/[0.03]">
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
            My working style is maker-focused: take complex requirements, open the editor, use documentation and modern
            tools well, and deliver integrated software end to end. I focus on systems that reduce manual friction,
            replace broken spreadsheets, automate administrative overhead, and support real users.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhoIHelp() {
  return (
    <section id="clients" className="frame-section border-b border-slate-200 bg-white px-6 py-20 transition-colors dark:border-white/10 dark:bg-[#030207]">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>who i help</SectionLabel>

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
            Ideal Clients
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            I work best with people who have clear requirements, rough wireframes, operational pain, or a backlog of
            features that need to move from idea to working software.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <article
                key={audience.title}
                className="frame-card group rounded-3xl border border-slate-200 bg-slate-50/70 p-6 transition-colors hover:border-violet-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-violet-400/40 dark:hover:bg-white/[0.05]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full border border-slate-200 text-violet-600 dark:border-white/10 dark:text-violet-300">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-950 dark:text-slate-100">{audience.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{audience.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const [openSkillGroups, setOpenSkillGroups] = useState<Record<string, boolean>>({});

  return (
    <section id="skills" className="frame-section border-b border-slate-200 bg-white px-6 py-20 transition-colors dark:border-white/10 dark:bg-[#030207]">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>skills</SectionLabel>

        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
            Technical Expertise
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            A compact view of the stack I use for business web applications, APIs, workflow automation, and production
            deployment work.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;
            const isOpen = openSkillGroups[category.category] ?? false;

            return (
              <article key={category.category} className="frame-card rounded-3xl border border-slate-200 bg-slate-50/70 dark:border-white/10 dark:bg-white/[0.03]">
                <button
                  type="button"
                  onClick={() =>
                    setOpenSkillGroups((current) => ({
                      ...current,
                      [category.category]: !isOpen,
                    }))
                  }
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-violet-600 dark:border-white/10 dark:bg-transparent dark:text-violet-300">
                      <CategoryIcon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-slate-900 dark:text-slate-100">{category.category}</span>
                      <span className="font-mono text-xs text-slate-500 dark:text-slate-400">{category.skills.length} skills</span>
                    </span>
                  </span>
                  <ChevronDown className={`size-4 text-slate-500 transition-transform md:hidden ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <div className={`${isOpen ? "block" : "hidden"} border-t border-slate-200 px-4 py-4 dark:border-white/10 md:block`}>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {category.skills.map((skill) => {
                      const SkillIcon = skillIcons[skill];
                      return (
                        <span
                          key={skill}
                          className={`inline-flex items-center gap-1.5 font-mono text-xs ${skillColors[skill] ?? "text-slate-600 dark:text-slate-400"}`}
                        >
                          {SkillIcon && <SkillIcon className="size-3.5" />}
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Services({ onOpenMessage }: { onOpenMessage: () => void }) {
  return (
    <section id="services" className="frame-section border-b border-slate-200 bg-white px-6 py-20 transition-colors dark:border-white/10 dark:bg-[#030207]">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>what i can build</SectionLabel>

        <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Services & Expertise
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            I deliver practical software across decoupled SaaS applications, backend APIs, business systems, workflow
            automation, database-backed dashboards, production troubleshooting, cloud deployment, and AI-assisted
            product features.
            </p>
          <button
            type="button"
            onClick={onOpenMessage}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
          >
            Discuss a service
            <ArrowRight className="size-4" />
          </button>
        </div>

        <div className="frame-line overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="frame-card grid gap-5 border-b border-slate-200 bg-slate-50/70 p-6 last:border-b-0 dark:border-white/10 dark:bg-white/[0.03] md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
                <div className="flex gap-4">
                  <div className="mt-1 flex size-10 flex-none items-center justify-center rounded-full border border-slate-200 text-violet-600 dark:border-white/10 dark:text-violet-300">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{service.description}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      <span className="font-medium text-slate-800 dark:text-slate-200">Best fit:</span> {service.fit}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Relevant stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-md px-2.5 py-1 font-mono text-xs ${techColors[tech] ?? "border border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300"}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MessageFormModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [state, handleSubmit] = useForm(resumeRequestFormId);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/60 px-4 py-8 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-lg border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-950">
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5 dark:border-slate-800">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Leave Me a Message</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Tell me about the role, service, automation, or project you are interested in.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-100"
            aria-label="Close message form"
          >
            <X className="size-5" />
          </button>
        </div>

        {state.succeeded ? (
          <div className="px-6 py-8">
            <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
              <CheckCircle2 className="size-6" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">Message sent</h3>
            <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Thanks for the message. I will review it and get back to you.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm text-white transition-colors hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-300"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6">
            <input type="hidden" name="form_type" value="General message" />
            <div>
              <label htmlFor="message-name" className="mb-2 block text-sm text-slate-700 dark:text-slate-300">
                Name
              </label>
              <input
                id="message-name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-slate-500"
              />
              <ValidationError field="name" errors={state.errors} className="mt-1 text-sm text-red-600 dark:text-red-400" />
            </div>

            <div>
              <label htmlFor="message-email" className="mb-2 block text-sm text-slate-700 dark:text-slate-300">
                Email
              </label>
              <input
                id="message-email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-slate-500"
              />
              <ValidationError field="email" errors={state.errors} className="mt-1 text-sm text-red-600 dark:text-red-400" />
            </div>

            <div>
              <label htmlFor="message-topic" className="mb-2 block text-sm text-slate-700 dark:text-slate-300">
                Interested In
              </label>
              <select
                id="message-topic"
                name="interested_in"
                required
                defaultValue="Software development role"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-slate-500"
              >
                <option>Software development role</option>
                <option>Freelance / project work</option>
                <option>Web application development</option>
                <option>Automation or AI integration</option>
                <option>Cloud deployment or infrastructure</option>
              </select>
            </div>

            <div>
              <label htmlFor="message-body" className="mb-2 block text-sm text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                id="message-body"
                name="message"
                required
                rows={5}
                placeholder="Share a quick note about what you need or what role you are hiring for."
                className="w-full resize-none rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-slate-500"
              />
              <ValidationError field="message" errors={state.errors} className="mt-1 text-sm text-red-600 dark:text-red-400" />
            </div>

            <ValidationError errors={state.errors} className="text-sm text-red-600 dark:text-red-400" />

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={state.submitting}
                className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm text-white transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-300"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-slate-100"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Projects({ onOpenPreview }: { onOpenPreview: (preview: ActivePreview) => void }) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filters = [
    { id: "all", label: "All Projects" },
    ...projectSections.map((section) => ({ id: section.id, label: section.title })),
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  const renderProjectCard = (project: Project, index: number) => {
    const Icon = project.icon;
    const isHero = index === 0 && activeFilter === "all";
    const heroScreenshot = project.screenshots?.[0];

    return (
      <article
        key={project.title}
        className={`project-card group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all hover:border-violet-300 dark:border-white/10 dark:bg-[#030207] dark:hover:border-violet-400/40 ${
          isHero ? "md:col-span-2 xl:col-span-3 md:flex-row" : ""
        }`}
      >
        {/* Visual Hero Area */}
        <div 
          className={`relative overflow-hidden bg-slate-100 dark:bg-slate-900 ${isHero ? "md:w-3/5 xl:w-2/3 md:min-h-[400px]" : "aspect-[16/9]"}`}
          onClick={() => {
            if (heroScreenshot) {
              onOpenPreview({ ...heroScreenshot, projectTitle: project.title });
            }
          }}
          style={{ cursor: heroScreenshot ? "pointer" : "default" }}
        >
          {heroScreenshot ? (
            <div className="relative h-full w-full">
              <img
                src={heroScreenshot.src}
                alt={heroScreenshot.alt}
                loading="lazy"
                className="project-card-image absolute inset-0 h-full w-full object-cover"
              />
              <div className="project-card-overlay absolute inset-0 pointer-events-none" />
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800/50 dark:to-slate-900/50">
              <Icon className="size-16 text-slate-300 dark:text-slate-700" />
            </div>
          )}
          
          {/* Content that overlays the image in non-hero */}
          {!isHero && heroScreenshot && (
            <div className="absolute inset-x-0 bottom-0 p-6 z-10 flex flex-col justify-end pointer-events-none">
              <h3 className="text-xl font-bold text-white drop-shadow-md">{project.title}</h3>
              <p className="mt-1 text-sm text-slate-200 drop-shadow-md line-clamp-1">{project.subtitle}</p>
            </div>
          )}
        </div>

        {/* Details Area */}
        <div className={`flex flex-col p-6 ${isHero ? "md:w-2/5 xl:w-1/3 md:justify-center" : "flex-1"}`}>
          {(!heroScreenshot || isHero) && (
            <div className="mb-4">
              <h3 className={`font-bold text-slate-900 dark:text-slate-100 ${isHero ? "text-2xl lg:text-3xl" : "text-xl"}`}>{project.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{project.subtitle}</p>
            </div>
          )}

          <p className={`mb-6 text-sm leading-relaxed text-slate-700 dark:text-slate-300 ${isHero ? "text-base" : ""}`}>{project.result}</p>

          <div className="mt-auto">
            <div className="mb-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`rounded-md px-2.5 py-1 font-mono text-[10px] sm:text-xs ${techColors[tech] ?? "border border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400"}`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.demoHref ? (
                <a
                  href={project.demoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2.5 font-mono text-sm font-semibold text-white transition-all hover:from-violet-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-violet-500/25"
                >
                  Live Demo
                  <ExternalLink className="size-4" />
                </a>
              ) : project.privateLabel ? (
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2.5 font-mono text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-300"
                >
                  {project.privateLabel}
                </a>
              ) : (
                <span className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-2.5 font-mono text-sm font-medium text-rose-600 dark:border-rose-900/50 dark:bg-rose-950/20 dark:text-rose-400">
                  Live demo soon
                </span>
              )}
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-4 py-2.5 font-mono text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-900/50 dark:hover:text-slate-100"
                >
                  Case Study
                  <Github className="size-4" />
                </a>
              ) : project.privateLabel || project.demoHref ? null : (
                <span className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 font-mono text-sm font-medium text-slate-500 dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-400">
                  {project.caseStudyLabel ?? "GitHub link coming soon"}
                </span>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section id="projects" className="frame-section border-b border-slate-200 bg-slate-50/50 px-6 py-24 transition-colors dark:border-white/10 dark:bg-[#030207]">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>showcase</SectionLabel>

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Selected Work
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            A collection of products, workflows, and engineering systems I've built.
            Focusing on clean architecture and highly polished user experiences.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-slate-950 text-white shadow-md dark:bg-white dark:text-slate-950"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-violet-300 hover:text-slate-950 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-violet-400/40 dark:hover:text-slate-100"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => renderProjectCard(project, index))}
        </div>
      </div>
    </section>
  );
}

function ScreenshotPreviewModal({
  preview,
  onClose,
}: {
  preview: ActivePreview | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!preview) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [preview, onClose]);

  if (!preview) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-sm" onClick={onClose}>
      <div
        className="w-full max-w-6xl overflow-hidden rounded-lg border border-slate-800 bg-slate-950 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 px-5 py-4">
          <div>
            <p className="font-mono text-xs uppercase text-slate-500">{preview.projectTitle}</p>
            <h2 className="mt-1 text-lg font-semibold text-slate-100">{preview.label}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-700 p-2 text-slate-400 transition-colors hover:border-slate-500 hover:text-slate-100"
            aria-label="Close preview"
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="max-h-[78vh] overflow-auto bg-slate-900">
          <img src={preview.src} alt={preview.alt} className="mx-auto h-auto w-full object-contain" />
        </div>
      </div>
    </div>
  );
}

function TargetRoles() {
  return (
    <section id="roles" className="frame-section border-b border-slate-200 bg-white px-6 py-20 transition-colors dark:border-white/10 dark:bg-[#030207]">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>target roles</SectionLabel>

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
            Target Roles
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            These are the roles where my professional .NET background and broader web application skills map well to real
            job openings.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {targetRoles.map((role, index) => (
            <article
              key={role.title}
              className="frame-card group rounded-3xl border border-slate-200 bg-slate-50/70 p-6 transition-colors hover:border-violet-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-violet-400/40 dark:hover:bg-white/[0.05]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full border border-slate-200 text-violet-600 dark:border-white/10 dark:text-violet-300">
                    <BriefcaseBusiness className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950 dark:text-slate-100">{role.title}</h3>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{role.summary}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {role.points.map((point) => (
                    <div key={point} className="flex items-start gap-2 text-base text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResumeRequestModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [state, handleSubmit] = useForm(resumeRequestFormId);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/60 px-4 py-8 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-lg border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-950">
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5 dark:border-slate-800">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Request Resume</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Leave your email and a short note. I will send my CV directly to your inbox.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-100"
            aria-label="Close resume request form"
          >
            <X className="size-5" />
          </button>
        </div>

        {state.succeeded ? (
          <div className="px-6 py-8">
            <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
              <CheckCircle2 className="size-6" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">Request sent</h3>
            <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Thanks for reaching out. I received your request and will reply with my resume if the opportunity is a fit.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm text-white transition-colors hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-300"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6">
            <input type="hidden" name="form_type" value="Resume request" />
            <div>
              <label htmlFor="resume-name" className="mb-2 block text-sm text-slate-700 dark:text-slate-300">
                Name
              </label>
              <input
                id="resume-name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-slate-500"
              />
              <ValidationError field="name" errors={state.errors} className="mt-1 text-sm text-red-600 dark:text-red-400" />
            </div>

            <div>
              <label htmlFor="resume-email" className="mb-2 block text-sm text-slate-700 dark:text-slate-300">
                Email
              </label>
              <input
                id="resume-email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-slate-500"
              />
              <ValidationError field="email" errors={state.errors} className="mt-1 text-sm text-red-600 dark:text-red-400" />
            </div>

            <div>
              <label htmlFor="resume-company" className="mb-2 block text-sm text-slate-700 dark:text-slate-300">
                Company / Organization
              </label>
              <input
                id="resume-company"
                name="company"
                type="text"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-slate-500"
              />
            </div>

            <div>
              <label htmlFor="resume-inquiry-type" className="mb-2 block text-sm text-slate-700 dark:text-slate-300">
                Inquiry Type
              </label>
              <select
                id="resume-inquiry-type"
                name="inquiry_type"
                required
                defaultValue="Request Resume"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-slate-500"
              >
                <option>Hiring / Job Opportunity</option>
                <option>Freelance / Project Work</option>
                <option>Automation or AI Integration</option>
                <option>Request Resume</option>
              </select>
            </div>

            <div>
              <label htmlFor="resume-message" className="mb-2 block text-sm text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                id="resume-message"
                name="message"
                required
                rows={4}
                placeholder="Tell me briefly about the role, project, or opportunity."
                className="w-full resize-none rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-slate-500"
              />
              <ValidationError field="message" errors={state.errors} className="mt-1 text-sm text-red-600 dark:text-red-400" />
            </div>

            <ValidationError errors={state.errors} className="text-sm text-red-600 dark:text-red-400" />

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={state.submitting}
                className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm text-white transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-300"
              >
                {state.submitting ? "Sending..." : "Send Request"}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-slate-100"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Contact({
  onOpenResumeRequest,
  onOpenMessage,
}: {
  onOpenResumeRequest: () => void;
  onOpenMessage: () => void;
}) {
  const [copiedContact, setCopiedContact] = useState<string | null>(null);

  const handleCopyContact = async (label: string, value: string) => {
    await navigator.clipboard.writeText(value);
    setCopiedContact(label);
    window.setTimeout(() => setCopiedContact(null), 1800);
  };

  return (
    <section id="contact" className="frame-section bg-white px-6 py-20 transition-colors dark:bg-[#030207]">
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionLabel>contact</SectionLabel>

        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
            Let's Work Together
          </h2>
          <p className="mb-6 text-lg text-slate-600 dark:text-slate-300">
            I'm open to full-time execution roles, part-time technical projects, freelance work, and MVP contracts
            involving web applications, APIs, business systems, cloud deployment, automation, and AI-assisted tools.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Have a backlog of developer tickets, a feature that needs immediate building, or a product idea ready for a
            first useful release? Send me the requirements and I can help turn them into working software.
          </p>
        </div>

        <div className="mb-12 text-center">
          <button
            type="button"
            onClick={onOpenMessage}
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
          >
            Send Me an Email Here
            <ArrowRight className="size-5" />
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            const isExternal = contact.href.startsWith("http");
            const copyValue = "copyValue" in contact ? contact.copyValue : undefined;
            const isResume = contact.label === "Resume";

            if (copyValue) {
              return (
                <div
                  key={contact.label}
                  className="frame-card group rounded-3xl border border-slate-200 bg-slate-50/70 p-5 transition-colors hover:border-violet-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-violet-400/40"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex size-11 items-center justify-center rounded-full border border-slate-200 text-violet-600 dark:border-white/10 dark:text-violet-300">
                      <Icon className="size-5" />
                    </div>
                    <a href={contact.href} className="min-w-0 flex-1">
                      <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{contact.label}</div>
                      <span className="text-base font-semibold text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-slate-100 dark:group-hover:text-indigo-400">
                        {contact.value}
                      </span>
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopyContact(contact.label, copyValue)}
                      className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-violet-300 dark:border-white/10 dark:bg-black/20 dark:text-slate-300 dark:hover:border-violet-400/40"
                      aria-label={`Copy ${contact.label.toLowerCase()}`}
                    >
                      <Copy className="size-4" />
                      {copiedContact === contact.label ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
              );
            }

            if (isResume) {
              return (
                <button
                  key={contact.label}
                  type="button"
                  onClick={onOpenResumeRequest}
                  className="frame-card group flex w-full items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50/70 p-5 text-left transition-colors hover:border-violet-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-violet-400/40"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex size-11 items-center justify-center rounded-full border border-slate-200 text-violet-600 dark:border-white/10 dark:text-violet-300">
                      <Icon className="size-5" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{contact.label}</div>
                      <span className="text-base font-semibold text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-slate-100 dark:group-hover:text-indigo-400">
                        {contact.value}
                      </span>
                    </div>
                  </div>
                </button>
              );
            }

            return (
              <a
                key={contact.label}
                href={contact.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="frame-card group flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50/70 p-5 transition-colors hover:border-violet-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-violet-400/40"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-11 items-center justify-center rounded-full border border-slate-200 text-violet-600 dark:border-white/10 dark:text-violet-300">
                    <Icon className="size-5" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{contact.label}</div>
                    <span className="text-base font-semibold text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-slate-100 dark:group-hover:text-indigo-400">
                      {contact.value}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer({ onOpenResumeRequest }: { onOpenResumeRequest: () => void }) {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 transition-colors dark:border-white/10 dark:bg-[#030207]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-mono text-sm font-semibold text-slate-600 dark:text-slate-400">&copy; 2026 dbmblc</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">Full-Stack .NET & React Engineer</p>
        </div>
        <div className="flex gap-2">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            const isExternal = contact.href.startsWith("http");
            if (contact.label === "Resume") {
              return (
                <button
                  key={contact.label}
                  type="button"
                  onClick={onOpenResumeRequest}
                  className="rounded-full border border-slate-200 p-3 text-slate-500 transition-colors hover:border-violet-300 hover:text-violet-600 dark:border-white/10 dark:text-slate-400 dark:hover:border-violet-400/40 dark:hover:text-violet-300"
                  title={contact.label}
                >
                  <Icon className="size-5" />
                </button>
              );
            }

            return (
              <a
                key={contact.label}
                href={contact.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="rounded-full border border-slate-200 p-3 text-slate-500 transition-colors hover:border-violet-300 hover:text-violet-600 dark:border-white/10 dark:text-slate-400 dark:hover:border-violet-400/40 dark:hover:text-violet-300"
                title={contact.label}
              >
                <Icon className="size-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeRequestOpen, setResumeRequestOpen] = useState(false);
  const [messageFormOpen, setMessageFormOpen] = useState(false);
  const [activePreview, setActivePreview] = useState<ActivePreview | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="min-h-screen bg-white transition-colors dark:bg-slate-950">
      <Header
        theme={theme}
        mobileMenuOpen={mobileMenuOpen}
        onToggleTheme={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
        onToggleMenu={() => setMobileMenuOpen((current) => !current)}
        onOpenResumeRequest={() => setResumeRequestOpen(true)}
      />
      <main>
        <Hero />
        <QuickStats />
        <CapabilitySnapshot />
        <Services onOpenMessage={() => setMessageFormOpen(true)} />
        <Projects onOpenPreview={setActivePreview} />
        <WhoIHelp />
        <Skills />
        <About />
        <TargetRoles />
        <Contact
          onOpenResumeRequest={() => setResumeRequestOpen(true)}
          onOpenMessage={() => setMessageFormOpen(true)}
        />
      </main>
      <Footer onOpenResumeRequest={() => setResumeRequestOpen(true)} />
      <ResumeRequestModal isOpen={resumeRequestOpen} onClose={() => setResumeRequestOpen(false)} />
      <MessageFormModal isOpen={messageFormOpen} onClose={() => setMessageFormOpen(false)} />
      <ScreenshotPreviewModal preview={activePreview} onClose={() => setActivePreview(null)} />
    </div>
  );
}
