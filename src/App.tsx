import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Bug,
  CheckCircle2,
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
  { label: "about", id: "about" },
  { label: "clients", id: "clients" },
  { label: "skills", id: "skills" },
  { label: "services", id: "services" },
  { label: "work", id: "projects" },
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
    category: "Professional Experience",
    icon: Code2,
    skills: [
      "C#",
      "VB.NET",
      "ASP.NET Core",
      "ASP.NET MVC",
      "REST APIs",
      "Entity Framework Core",
      "SQL Server",
      "Stored Procedures",
      "Query Optimization",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Git",
      "Jira",
      "Postman",
    ],
  },
  {
    category: "Hireable Web Stack",
    icon: Globe,
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Supabase", "Prisma", "Drizzle", "Python", "FastAPI"],
  },
  {
    category: "Backend / Production Focus",
    icon: Server,
    skills: [
      "JWT/OAuth",
      "Clerk",
      "Dependency Injection",
      "API Integration",
      "API Gateways",
      "Webhooks",
      "Background Jobs",
      "Serilog",
      "Hangfire",
      "Redis",
      "Modular Monolith",
      "Clean Architecture",
      "SOLID Principles",
    ],
  },
  {
    category: "Cloud Platforms",
    icon: Globe,
    skills: ["Azure App Service", "Azure SQL", "Vercel", "Supabase", "DigitalOcean / VPS Hosting"],
  },
  {
    category: "Infrastructure & Deployment",
    icon: BriefcaseBusiness,
    skills: ["Docker", "Nginx", "Linux", "Linux VPS", "systemd", "GitHub Actions CI/CD", "Environment Variables", "DNS / Custom Domains", "SSL"],
  },
  {
    category: "AI & Automation",
    icon: Sparkles,
    skills: ["OpenAI API", "DeepSeek", "LLM Integration", "Prompt Engineering", "AI Workflow Automation", "API-based Automation"],
  },
  {
    category: "Automation Platforms",
    icon: Workflow,
    skills: ["n8n", "Make.com", "Zapier", "API-based Workflow Automation"],
  },
];

const services = [
  {
    title: "Business Web Application Development",
    description: "Build practical web applications with API-backed features, usable screens, and maintainable frontend/backend code.",
    fit: "Best for teams that need business software delivered across both UI and backend concerns.",
    icon: Code2,
    technologies: ["React", "TypeScript", ".NET", "SQL Server"],
  },
  {
    title: "Backend API Development",
    description: "Design, build, and maintain REST APIs, authentication flows, database-backed features, and service integrations.",
    fit: "Best for teams that need reliable backend delivery, clear contracts, and production-aware development.",
    icon: Server,
    technologies: ["ASP.NET Core", "C#", "REST APIs", "SQL Server", "Entity Framework Core"],
  },
  {
    title: "Business Systems and Internal Tools",
    description: "Create workflow tools, admin modules, dashboards, and reporting screens that support daily operations.",
    fit: "Best for companies replacing spreadsheets, manual tracking, or disconnected operational processes.",
    icon: Workflow,
    technologies: [".NET", "React", "SQL Server", "PostgreSQL"],
  },
  {
    title: "Database-Backed Applications",
    description: "Model data, write queries, optimize database access, and connect application workflows to reliable storage.",
    fit: "Best for applications where data quality, reporting, and operational correctness matter.",
    icon: Database,
    technologies: ["SQL Server", "Stored Procedures", "Query Optimization", "PostgreSQL"],
  },
  {
    title: "API and Webhook Integrations",
    description: "Connect systems through REST APIs, webhook flows, background jobs, and practical integration checks.",
    fit: "Best for teams that need applications to exchange data cleanly with other services.",
    icon: Code,
    technologies: ["REST APIs", "API Integration", "API Gateways", "Webhooks", "Background Jobs", "Hangfire", "Postman"],
  },
  {
    title: "Automation Workflows",
    description: "Design workflow automation that reduces repetitive work, manual data handling, and operational friction.",
    fit: "Best for teams with recurring business processes that can be simplified through software.",
    icon: Workflow,
    technologies: ["Python", "FastAPI", "Webhooks", "API-based Automation", "n8n", "Make.com", "Zapier"],
  },
  {
    title: "AI-Assisted Business Features",
    description: "Add AI-assisted features that support business workflows, summarize information, or help users work faster.",
    fit: "Best for teams exploring AI or automation with a business-first, MVP-focused approach.",
    icon: Sparkles,
    technologies: ["TypeScript", "Node.js", "Python", "FastAPI", "React"],
  },
  {
    title: "Admin Dashboard / Reporting System",
    description: "Build dashboard views, filters, tables, reports, and admin interfaces for operational visibility.",
    fit: "Best for businesses that need clearer data and faster daily decision-making.",
    icon: Globe,
    technologies: ["React", "TypeScript", "SQL Server", "Tailwind CSS"],
  },
  {
    title: "Bug Fixing and Production Troubleshooting",
    description: "Investigate failed requests, environment issues, query problems, data mismatches, and release risks.",
    fit: "Best for teams that need someone comfortable tracing issues across code, APIs, logs, and databases.",
    icon: Bug,
    technologies: [".NET", "Serilog", "SQL Server", "Postman"],
  },
  {
    title: "Cloud Deployment & CI/CD Setup",
    description: "Set up practical deployment flows, service hosting, environment configuration, and build pipelines.",
    fit: "Best for projects that need a more reliable path from development to live environments.",
    icon: BriefcaseBusiness,
    technologies: ["Docker", "GitHub Actions", "Vercel", "Azure App Service"],
  },
  {
    title: "Cloud Solutions and Infrastructure Setup",
    description:
      "Deploy and configure web applications using cloud platforms, VPS hosting, reverse proxies, custom domains, SSL, and environment-based configuration.",
    fit: "Best for teams that need applications moved from local development into a usable, maintainable hosted environment.",
    icon: Globe,
    technologies: ["Azure App Service", "Azure SQL", "DigitalOcean / VPS Hosting", "Nginx", "Linux VPS", "SSL"],
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
    description: "Founders who need a practical first version of a web app, SaaS workflow, API, or operations platform.",
    icon: Sparkles,
  },
  {
    title: "Companies Hiring Developers",
    description: "Engineering teams looking for .NET, backend, full-stack, API integration, or application support capability.",
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

const projects = [
  {
    title: "Business Operations SaaS Case Study",
    subtitle: "Cloud workspace for water refilling operations",
    problem: "Water refilling stations need clearer workflows for customers, products, orders, payments, inventory, and daily operations.",
    contribution:
      "Designed the public case-study story around a modular business system with API-backed workflows, operational dashboards, auth/tenancy thinking, and deployment considerations.",
    result:
      "Shows how I approach real business software: practical modules, maintainable backend boundaries, data ownership, and operations-focused UX.",
    technologies: [".NET", "React", "PostgreSQL", "REST APIs", "Cloud Deployment"],
    href: "https://github.com/danilomabulac/aquatrack-case-study",
    icon: Database,
  },
  {
    title: "Career Workspace SaaS Case Study",
    subtitle: "Job application tracker with AI mentor support",
    problem: "Job seekers need one workspace to track applications, statuses, follow-ups, notes, momentum, and guidance without relying on scattered spreadsheets.",
    contribution:
      "Framed the product as a career workspace that can start personal and grow into a SaaS-style tool with structured tracking, reminders, reporting, and DeepSeek-powered AI mentor support.",
    result:
      "Demonstrates my ability to turn a personal productivity pain into a practical product concept with SaaS and AI-assisted coaching potential.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Prisma", "Clerk", "DeepSeek"],
    href: "https://github.com/danilomabulac/huntly-case-study",
    demoHref: "https://huntly-application-tracker.vercel.app/",
    icon: BriefcaseBusiness,
  },
  {
    title: "Notification Infrastructure Case Study",
    subtitle: "Lightweight notification service for existing applications",
    problem: "Applications often need notification workflows without building a full notification platform from scratch.",
    contribution:
      "Documented an event-based notification service model with applications, subscribers, templates, API keys, inbox state, and integration safety.",
    result:
      "Highlights API design, platform thinking, auth boundaries, integration workflows, and infrastructure-style product development.",
    technologies: ["FastAPI", "Next.js", "PostgreSQL", "Clerk", "API Integration"],
    href: "https://github.com/danilomabulac/signalkit-case-study",
    icon: Server,
  },
  {
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
    title: "AI Client Intake Automation Case Study",
    subtitle: "IntakeFlow demo for turning inquiries into reviewable work",
    problem:
      "Businesses receive repeated inquiries, messages, and requests that need triage, summarization, routing, and follow-up before someone can act on them.",
    contribution:
      "Built a public IntakeFlow demo that captures structured intake, uses AI to summarize or extract context, supports human review, creates actionable tasks, and exposes integration points for business workflows.",
    result:
      "Shows how AI can reduce manual intake work while keeping people in control of review, decisions, and follow-up.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Route Handlers", "External AI/Webhook", "Vercel"],
    href: "https://github.com/danilomabulac/intakeflow-case-study",
    demoHref: "https://intakeflow-demo.vercel.app/",
    icon: Sparkles,
  },
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
  "C#": Code2,
  "VB.NET": Code2,
  "ASP.NET": Server,
  "ASP.NET Core": Server,
  "ASP.NET MVC": Server,
  "SQL Server": Database,
  "Stored Procedures": Database,
  "Query Optimization": Database,
  React: Globe,
  "Next.js": Globe,
  TypeScript: Code2,
  "Node.js": Server,
  JavaScript: Code2,
  Python: Code2,
  FastAPI: Server,
  Docker: Server,
  Linux: Server,
  Nginx: Server,
  "Linux VPS": Server,
  "GitHub Actions": Workflow,
  "GitHub Actions CI/CD": Workflow,
  Vercel: Globe,
  PostgreSQL: Database,
  Supabase: Database,
  "DigitalOcean / VPS Hosting": Globe,
  Prisma: Database,
  Drizzle: Database,
  "JWT/OAuth": Server,
  Clerk: Server,
  "API Integration": Workflow,
  "API Gateways": Server,
  Webhooks: Workflow,
  "Background Jobs": Workflow,
  Hangfire: Workflow,
  Redis: Database,
  systemd: Server,
  "Environment Variables": Code,
  "DNS / Custom Domains": Globe,
  SSL: Server,
  "OpenAI API": Sparkles,
  DeepSeek: Sparkles,
  "LLM Integration": Sparkles,
  "Prompt Engineering": Sparkles,
  "AI Workflow Automation": Sparkles,
  "API-based Automation": Workflow,
  n8n: Workflow,
  "Make.com": Workflow,
  Zapier: Workflow,
  "API-based Workflow Automation": Workflow,
  "Azure App Service": Globe,
  "Azure SQL": Database,
  "Modular Monolith": Code,
  "Clean Architecture": Code,
  "SOLID Principles": Code,
};

const skillColors: Record<string, string> = {
  ".NET": "text-purple-600 dark:text-purple-400",
  "C#": "text-purple-600 dark:text-purple-400",
  "VB.NET": "text-purple-600 dark:text-purple-400",
  "ASP.NET": "text-purple-600 dark:text-purple-400",
  "ASP.NET Core": "text-purple-600 dark:text-purple-400",
  "ASP.NET MVC": "text-purple-600 dark:text-purple-400",
  "Entity Framework": "text-purple-600 dark:text-purple-400",
  "Entity Framework Core": "text-purple-600 dark:text-purple-400",
  TypeScript: "text-blue-600 dark:text-blue-400",
  JavaScript: "text-yellow-600 dark:text-yellow-400",
  React: "text-cyan-600 dark:text-cyan-400",
  "Next.js": "text-slate-700 dark:text-slate-300",
  "Node.js": "text-green-600 dark:text-green-400",
  Python: "text-blue-600 dark:text-blue-400",
  FastAPI: "text-emerald-600 dark:text-emerald-400",
  "SQL Server": "text-orange-600 dark:text-orange-400",
  PostgreSQL: "text-blue-600 dark:text-blue-400",
  Supabase: "text-emerald-600 dark:text-emerald-400",
  Prisma: "text-slate-700 dark:text-slate-300",
  Drizzle: "text-green-600 dark:text-green-400",
  "HTML/CSS": "text-orange-500 dark:text-orange-400",
  HTML: "text-orange-500 dark:text-orange-400",
  CSS: "text-blue-600 dark:text-blue-400",
  Bootstrap: "text-purple-600 dark:text-purple-400",
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
  n8n: "text-orange-600 dark:text-orange-400",
  "Make.com": "text-violet-600 dark:text-violet-400",
  Zapier: "text-orange-600 dark:text-orange-400",
  Docker: "text-blue-600 dark:text-blue-400",
  Linux: "text-slate-700 dark:text-slate-300",
  Nginx: "text-emerald-600 dark:text-emerald-400",
  "Linux VPS": "text-slate-700 dark:text-slate-300",
  "GitHub Actions": "text-slate-700 dark:text-slate-300",
  "GitHub Actions CI/CD": "text-slate-700 dark:text-slate-300",
  Vercel: "text-slate-700 dark:text-slate-300",
  "JWT/OAuth": "text-emerald-600 dark:text-emerald-400",
  Clerk: "text-violet-600 dark:text-violet-400",
  Serilog: "text-orange-600 dark:text-orange-400",
  Hangfire: "text-violet-600 dark:text-violet-400",
  Redis: "text-red-600 dark:text-red-400",
  systemd: "text-slate-700 dark:text-slate-300",
  "Azure App Service": "text-blue-600 dark:text-blue-400",
  "Azure SQL": "text-blue-600 dark:text-blue-400",
  "DigitalOcean / VPS Hosting": "text-blue-600 dark:text-blue-400",
  "Environment Variables": "text-emerald-600 dark:text-emerald-400",
  "DNS / Custom Domains": "text-cyan-600 dark:text-cyan-400",
  SSL: "text-emerald-600 dark:text-emerald-400",
  "Modular Monolith": "text-violet-600 dark:text-violet-400",
  "Clean Architecture": "text-violet-600 dark:text-violet-400",
  "SOLID Principles": "text-violet-600 dark:text-violet-400",
};

const techColors: Record<string, string> = {
  ".NET": "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800",
  ".NET Core": "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800",
  "C#": "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800",
  "ASP.NET": "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800",
  "ASP.NET Core": "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800",
  "Entity Framework": "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800",
  "Entity Framework Core": "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800",
  "Next.js": "bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700",
  TypeScript: "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800",
  React: "bg-cyan-100 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800",
  "Tailwind CSS": "bg-cyan-100 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800",
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
  "Azure App Service": "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800",
  "Azure SQL": "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800",
  "SQL Server": "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800",
  PostgreSQL: "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800",
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
  n8n: "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800",
  "Make.com": "bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800",
  Zapier: "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800",
  Clerk: "bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800",
  DeepSeek: "bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800",
  Hangfire: "bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800",
  Postman: "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800",
  Serilog: "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800",
  SSL: "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
  "OpenAI API": "bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800",
};

function scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-12 flex items-center gap-3">
      <h2 className="font-mono text-sm text-slate-500 dark:text-slate-400">{children}</h2>
      <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
    </div>
  );
}

function Header({ theme, mobileMenuOpen, onToggleTheme, onToggleMenu }: {
  theme: "dark" | "light";
  mobileMenuOpen: boolean;
  onToggleTheme: () => void;
  onToggleMenu: () => void;
}) {
  const handleNav = (sectionId: string) => {
    scrollToSection(sectionId);
    if (mobileMenuOpen) onToggleMenu();
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm transition-colors dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <button onClick={() => scrollToSection("hero")} className="font-mono text-sm text-slate-900 dark:text-slate-100">
          dbmblc.dev
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={onToggleTheme}
            className="ml-2 text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            aria-label="Toggle color theme"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onToggleTheme}
            className="p-2 text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            aria-label="Toggle color theme"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button
            onClick={onToggleMenu}
            className="rounded-md p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 md:hidden">
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
const helloCommand = "let greeting = \"Hello world\";\ngreeting = greeting.replace(\"world\", \"I'm Dan\");\nconsole.log(greeting);";

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
    <div className="mb-8">
      <div className="mb-6 overflow-hidden rounded-lg border border-slate-200 bg-white/90 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
        <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3 dark:border-slate-800">
          <Terminal className="size-4 text-emerald-600 dark:text-emerald-400" />
          <p className="font-mono text-xs text-slate-500 dark:text-slate-400">intro.ts</p>
        </div>
        <div className="space-y-3 px-4 py-4 font-mono text-sm">
          <pre className="whitespace-pre-wrap text-slate-600 dark:text-slate-400">{helloCommand}</pre>
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400" aria-live="polite">
            <span className="text-slate-400">&gt;</span>
            <span>{animatedOutput}</span>
            <span className="h-5 w-2 animate-pulse bg-emerald-600 dark:bg-emerald-400" aria-hidden="true" />
          </div>
          {(phase === "success" || phase === "holding") && (
            <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400">
              <span className="text-slate-400">&gt;</span>
              <span>return Success(200, "OK");</span>
            </div>
          )}
        </div>
      </div>

      <h1 className="min-h-[7.5rem] text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 md:min-h-[10.5rem] md:text-7xl">
        {animatedOutput}
       <span className="sr-only">Software Engineer | Web Applications, APIs, Cloud & AI Automation</span>
      </h1>
    </div>
  );
}

function Hero({ onOpenResumeRequest }: { onOpenResumeRequest: () => void }) {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 transition-colors">
      <div
        className="absolute inset-0 opacity-20 [mask-image:linear-gradient(0deg,transparent,black)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-6">
          <AnimatedHelloIntro />
          <p className="mb-6 text-xl text-slate-600 dark:text-slate-300 md:text-2xl">
            Software Engineer | Web Applications, APIs, Cloud & AI Automation
          </p>
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-900/70 dark:bg-emerald-950/40 dark:text-emerald-300">
              <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
              Open to hire
            </span>
            <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
              Full-time
            </span>
            <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
              Part-time
            </span>
            <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
              Freelance
            </span>
          </div>
        </div>

        <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          <p>
            I build web applications, APIs, dashboards, automations, and cloud-deployed business systems for teams that
            need practical software delivered end to end.
          </p>
          <p>
            Professional experience in{" "}
            <span className="rounded bg-purple-100 px-2 py-1 font-mono text-sm text-purple-700 dark:bg-purple-950/50 dark:text-purple-300">
              .NET
            </span>{" "}
            web development, REST APIs, SQL databases, production debugging, and enterprise systems.
          </p>
        </div>

        <div className="mt-12 space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollToSection("contact")}
              className="group flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm text-white transition-colors hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-300"
            >
              Discuss a Role
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-slate-100"
            >
              Inquire About Services
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-slate-100"
            >
              View Case Studies
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={onOpenResumeRequest}
              className="flex items-center gap-2 rounded-md border border-slate-200 bg-white/70 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-slate-100"
            >
              <Download className="size-4" />
              Request Resume
            </button>
            <a
              href="https://github.com/danilomabulac"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-slate-200 bg-white/70 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-slate-100"
            >
              <Github className="size-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dbmabulac"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-slate-200 bg-white/70 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-slate-100"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const cards = [
    {
      title: "Enterprise Development",
      description: "Building .NET applications, REST APIs, and production systems for business requirements.",
      icon: Code,
      color: "purple",
    },
    {
      title: "Data & Systems",
      description: "SQL Server work, data-backed features, API contracts, and production debugging.",
      icon: Database,
      color: "orange",
    },
    {
      title: "Automation & AI",
      description: "Creating practical tools that automate workflows, integrate AI, and reduce repetitive work.",
      icon: Workflow,
      color: "cyan",
    },
  ];

  const colorClasses = {
    purple: "bg-purple-100 text-purple-600 group-hover:border-purple-300 dark:bg-purple-950/50 dark:text-purple-400 dark:group-hover:border-purple-700",
    orange: "bg-orange-100 text-orange-600 group-hover:border-orange-300 dark:bg-orange-950/50 dark:text-orange-400 dark:group-hover:border-orange-700",
    cyan: "bg-cyan-100 text-cyan-600 group-hover:border-cyan-300 dark:bg-cyan-950/50 dark:text-cyan-400 dark:group-hover:border-cyan-700",
  };

  return (
    <section id="about" className="relative overflow-hidden border-t border-slate-200 px-6 py-24 transition-colors dark:border-slate-800">
      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionLabel>about</SectionLabel>

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="group rounded-lg border border-slate-200 bg-white p-6 transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50 dark:hover:shadow-slate-900/50"
              >
                <div
                  className={`mb-4 flex size-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110 ${colorClasses[card.color as keyof typeof colorClasses]}`}
                >
                  <Icon className="size-6" />
                </div>
                <h3 className="mb-3 text-slate-900 dark:text-slate-100">{card.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{card.description}</p>
              </article>
            );
          })}
        </div>

        <div className="max-w-3xl space-y-4 leading-relaxed text-slate-600 dark:text-slate-400">
          <p>
            I'm a Software Developer with professional experience building, maintaining, and debugging enterprise web
            applications. My background includes .NET web development, REST APIs, SQL Server, production issue
            investigation, and business workflow support.
          </p>
          <p>
            I focus on practical software: systems that help businesses manage data, automate workflows, improve
            operations, and support real users. My core strength is web application development, with additional
            capability in cloud deployment, infrastructure setup, CI/CD, and AI-assisted automation.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhoIHelp() {
  return (
    <section id="clients" className="bg-slate-50 px-6 py-24 transition-colors dark:bg-slate-900/50">
      <div className="mx-auto max-w-5xl">
        <SectionLabel>who i help</SectionLabel>

        <div className="mb-10 max-w-3xl text-slate-600 dark:text-slate-400">
          <p>
            I work best with people who need practical software for operations, data, workflows, integrations, and
            product ideas that need to move from rough concept to working system.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <article
                key={audience.title}
                className="rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-slate-700"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-slate-100 p-2 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-slate-900 dark:text-slate-100">{audience.title}</h3>
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
  return (
    <section id="skills" className="border-t border-slate-200 px-6 py-24 transition-colors dark:border-slate-800">
      <div className="mx-auto max-w-5xl">
        <SectionLabel>skills</SectionLabel>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <article key={category.category} className="group">
                <div className="mb-6 flex items-center gap-2">
                  <div className="rounded-lg bg-slate-200 p-2 text-slate-700 transition-transform group-hover:scale-110 dark:bg-slate-800 dark:text-slate-300">
                    <CategoryIcon className="size-5" />
                  </div>
                  <h3 className="text-sm text-slate-900 dark:text-slate-100">{category.category}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill) => {
                    const SkillIcon = skillIcons[skill];
                    return (
                      <div
                        key={skill}
                        className={`flex items-center gap-2 font-mono text-sm transition-transform hover:translate-x-1 ${skillColors[skill] ?? "text-slate-600 dark:text-slate-400"}`}
                      >
                        {SkillIcon && <SkillIcon className="size-4" />}
                        <span>{skill}</span>
                      </div>
                    );
                  })}
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
    <section id="services" className="border-t border-slate-200 px-6 py-24 transition-colors dark:border-slate-800">
      <div className="mx-auto max-w-5xl">
        <SectionLabel>what i can build</SectionLabel>

        <div className="mb-10 max-w-3xl space-y-4 text-slate-600 dark:text-slate-400">
          <p>
            I can help build and support practical software across backend APIs, web applications, business systems,
            cloud hosting, infrastructure setup, automation, integrations, dashboards, troubleshooting, deployment, and
            AI-assisted features.
          </p>
          <button
            type="button"
            onClick={onOpenMessage}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-slate-100"
          >
            Interested in a service? Leave me a message
            <ArrowRight className="size-4" />
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-slate-700 dark:hover:shadow-slate-900/50"
              >
                <div className="mb-4 flex items-start gap-3">
                  <div className="rounded-lg bg-slate-100 p-2 text-slate-700 transition-transform group-hover:scale-110 dark:bg-slate-800 dark:text-slate-300">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg text-slate-900 dark:text-slate-100">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{service.description}</p>
                  </div>
                </div>
                <p className="mb-4 border-l-2 border-slate-200 pl-3 text-sm leading-relaxed text-slate-500 dark:border-slate-700 dark:text-slate-400">
                  {service.fit}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-md px-3 py-1.5 font-mono text-xs ${techColors[tech] ?? "border border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300"}`}
                    >
                      {tech}
                    </span>
                  ))}
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

function Projects() {
  return (
    <section id="projects" className="border-t border-slate-200 px-6 py-24 transition-colors dark:border-slate-800">
      <div className="mx-auto max-w-5xl">
        <SectionLabel>selected case studies</SectionLabel>

        <div className="mb-10 max-w-3xl text-slate-600 dark:text-slate-400">
          <p>
            These public case studies are written to show product thinking, architecture decisions, business value, and
            implementation approach without exposing private source code, secrets, production configuration, or customer
            data.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article
                key={project.title}
                className="group rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-slate-700 dark:hover:shadow-slate-900/50"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-slate-100 p-2 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-lg text-slate-900 transition-colors group-hover:text-purple-600 dark:text-slate-100 dark:group-hover:text-purple-400">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{project.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {project.demoHref ? (
                      <a
                        href={project.demoHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg p-2 text-slate-400 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                        title="View live demo"
                      >
                        <ExternalLink className="size-4" />
                      </a>
                    ) : (
                      <a
                        href="#contact"
                        className="rounded-lg p-2 text-slate-400 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                        title="Ask about this project"
                      >
                        <ExternalLink className="size-4" />
                      </a>
                    )}
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg p-2 text-slate-400 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                        title="View GitHub case study"
                      >
                        <Github className="size-4" />
                      </a>
                    ) : (
                      <span
                        className="rounded-lg p-2 text-slate-400 transition-all dark:text-slate-600"
                        title="GitHub link coming soon"
                      >
                        <Github className="size-4" />
                      </span>
                    )}
                  </div>
                </div>
                <div className="mb-5 grid gap-4 md:grid-cols-3">
                  <div>
                    <h4 className="mb-2 text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Problem</h4>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Contribution</h4>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.contribution}</p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Value</h4>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.result}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="mb-2 text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`rounded-md px-3 py-1.5 font-mono text-xs transition-transform hover:scale-105 ${techColors[tech] ?? "border border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300"}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-3 dark:border-slate-800">
                    {project.demoHref ? (
                      <a
                        href={project.demoHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md border border-rose-200 bg-rose-50 px-3 py-1.5 font-mono text-xs text-rose-700 transition-colors hover:border-rose-300 hover:text-rose-900 dark:border-rose-900/60 dark:bg-rose-950/30 dark:text-rose-300 dark:hover:border-rose-700 dark:hover:text-rose-100"
                      >
                        View live demo
                      </a>
                    ) : null}
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-xs text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-slate-100"
                      >
                        View GitHub case study
                      </a>
                    ) : (
                      <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-xs text-slate-500 dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-400">
                        GitHub link coming soon
                      </span>
                    )}
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

function TargetRoles() {
  return (
    <section id="roles" className="bg-slate-50 px-6 py-24 transition-colors dark:bg-slate-900/50">
      <div className="mx-auto max-w-5xl">
        <SectionLabel>target roles</SectionLabel>

        <p className="mb-10 max-w-3xl text-slate-600 dark:text-slate-400">
          These are the roles where my professional .NET background and broader web application skills map well to real
          job openings.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {targetRoles.map((role) => (
            <article
              key={role.title}
              className="rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-slate-700"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-slate-100 p-2 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  <BriefcaseBusiness className="size-5" />
                </div>
                <div>
                  <h3 className="text-lg text-slate-900 dark:text-slate-100">{role.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{role.summary}</p>
                </div>
              </div>
              <div className="space-y-3">
                {role.points.map((point) => (
                  <div key={point} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
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
    <section id="contact" className="relative overflow-hidden bg-slate-50 px-6 py-24 transition-colors dark:bg-slate-900/50">
      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionLabel>contact</SectionLabel>

        <div className="max-w-2xl">
          <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
            I'm open to full-time and part-time software development roles, freelance work, and project-based
            opportunities involving web applications, APIs, business systems, cloud deployment, infrastructure setup,
            automation, and AI-assisted tools.
          </p>
          <p className="mb-8 text-slate-600 dark:text-slate-400">
            Have a system, workflow, or product idea you want to build? Send me a message and I can help scope the MVP,
            identify the first useful release, and turn it into a working application.
          </p>
          <button
            type="button"
            onClick={onOpenMessage}
            className="mb-8 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm text-white transition-colors hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-300"
          >
            Send Me an Email Here
            <ArrowRight className="size-4" />
          </button>

          <div className="space-y-3">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              const isExternal = contact.href.startsWith("http");
              const copyValue = "copyValue" in contact ? contact.copyValue : undefined;
              const isResume = contact.label === "Resume";

              if (copyValue) {
                return (
                  <div
                    key={contact.label}
                    className="group flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-slate-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-slate-700 dark:hover:shadow-slate-900/50"
                  >
                    <div
                      className={`rounded-lg bg-slate-100 p-2 text-slate-700 transition-colors dark:bg-slate-800 dark:text-slate-300 ${contact.accent}`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <a href={contact.href} className="min-w-0 flex-1">
                      <div className="mb-1 text-xs text-slate-500 dark:text-slate-400">{contact.label}</div>
                      <span className="text-slate-900 transition-colors group-hover:text-purple-600 dark:text-slate-100 dark:group-hover:text-purple-400">
                        {contact.value}
                      </span>
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopyContact(contact.label, copyValue)}
                      className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-950 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-slate-100"
                      aria-label={`Copy ${contact.label.toLowerCase()}`}
                    >
                      <Copy className="size-4" />
                      {copiedContact === contact.label ? "Copied" : "Copy"}
                    </button>
                  </div>
                );
              }

              if (isResume) {
                return (
                  <button
                    key={contact.label}
                    type="button"
                    onClick={onOpenResumeRequest}
                    className="group flex w-full items-center gap-4 rounded-lg border border-slate-200 bg-white p-4 text-left transition-all hover:border-slate-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-slate-700 dark:hover:shadow-slate-900/50"
                  >
                    <div
                      className={`rounded-lg bg-slate-100 p-2 text-slate-700 transition-colors dark:bg-slate-800 dark:text-slate-300 ${contact.accent}`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 text-xs text-slate-500 dark:text-slate-400">{contact.label}</div>
                      <span className="text-slate-900 transition-colors group-hover:text-purple-600 dark:text-slate-100 dark:group-hover:text-purple-400">
                        {contact.value}
                      </span>
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
                  className="group flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-slate-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-slate-700 dark:hover:shadow-slate-900/50"
                >
                  <div
                    className={`rounded-lg bg-slate-100 p-2 text-slate-700 transition-colors dark:bg-slate-800 dark:text-slate-300 ${contact.accent}`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 text-xs text-slate-500 dark:text-slate-400">{contact.label}</div>
                    <span className="text-slate-900 transition-colors group-hover:text-purple-600 dark:text-slate-100 dark:group-hover:text-purple-400">
                      {contact.value}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ onOpenResumeRequest }: { onOpenResumeRequest: () => void }) {
  return (
    <footer className="border-t border-slate-200 py-12 transition-colors dark:border-slate-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="font-mono text-sm text-slate-500 dark:text-slate-400">&copy; 2026 dbmblc</p>
        <div className="flex gap-6">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            const isExternal = contact.href.startsWith("http");
            if (contact.label === "Resume") {
              return (
                <button
                  key={contact.label}
                  type="button"
                  onClick={onOpenResumeRequest}
                  className="text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
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
                className="text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
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
      />
      <main>
        <Hero onOpenResumeRequest={() => setResumeRequestOpen(true)} />
        <About />
        <WhoIHelp />
        <Skills />
        <Services onOpenMessage={() => setMessageFormOpen(true)} />
        <Projects />
        <TargetRoles />
        <Contact
          onOpenResumeRequest={() => setResumeRequestOpen(true)}
          onOpenMessage={() => setMessageFormOpen(true)}
        />
      </main>
      <Footer onOpenResumeRequest={() => setResumeRequestOpen(true)} />
      <ResumeRequestModal isOpen={resumeRequestOpen} onClose={() => setResumeRequestOpen(false)} />
      <MessageFormModal isOpen={messageFormOpen} onClose={() => setMessageFormOpen(false)} />
    </div>
  );
}
