import {
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Rocket,
  Server,
  ShieldCheck,
  TerminalSquare,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export type Project = {
  title: string;
  summary: string;
  stack: string[];
  role: string;
  highlights: string[];
  repoUrl?: string;
  demoUrl?: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type TargetRole = {
  title: string;
  description: string;
};

export type ContactLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Target Roles", href: "#roles" },
  { label: "Contact", href: "#contact" },
];

export const profile = {
  name: "Danilo Mabulac",
  eyebrow: "Mid-level .NET Developer",
  headline: "I build practical business systems with clean APIs, reliable data flows, and usable web interfaces.",
  summary:
    "I focus on ASP.NET Core, React, TypeScript, PostgreSQL, and deployment workflows that help small teams move from idea to working software.",
  location: "Philippines",
  availability: "Open to .NET, backend, and full-stack roles",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    icon: Server,
    skills: ["ASP.NET Core", "REST APIs", "EF Core", "Authentication", "Modular monoliths"],
  },
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "TypeScript", "Tailwind CSS", "Vite", "Responsive UI"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "SQL Server", "Migrations", "Query design", "Data modeling"],
  },
  {
    title: "Delivery",
    icon: Rocket,
    skills: ["GitHub", "GitHub Pages", "Docker basics", "VPS deployment", "Debugging"],
  },
];

export const projects: Project[] = [
  {
    title: "Water Refilling System",
    summary:
      "An operations platform for managing orders, customers, inventory, payments, employees, and branch-aware workflows for a water refilling business.",
    stack: ["ASP.NET Core", "PostgreSQL", "Next.js", "TypeScript", "Tailwind CSS"],
    role: "Full-stack developer",
    highlights: [
      "Designed API contracts for frontend integration.",
      "Built order, inventory, product, employee, and payment workflows.",
      "Worked through staging deployment and environment configuration.",
    ],
  },
  {
    title: "SignalKit",
    summary:
      "A notification platform concept for sending application events through subscriber-aware messaging flows.",
    stack: ["FastAPI", "Supabase", "Next.js", "Clerk", "PostgreSQL"],
    role: "Product and integration developer",
    highlights: [
      "Modeled applications, subscribers, and notification ownership.",
      "Integrated application events from another backend service.",
      "Focused the product around reusable notification infrastructure.",
    ],
  },
  {
    title: "AquaTrack Web App",
    summary:
      "A frontend application direction for a water-delivery management experience with modern SaaS-style screens and responsive layouts.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    role: "Frontend implementer",
    highlights: [
      "Adapted reference designs into a practical app structure.",
      "Improved dashboard, navigation, and page-level user flows.",
      "Kept the interface aligned with business operations use cases.",
    ],
  },
];

export const services: Service[] = [
  {
    title: "Business Web Apps",
    description: "Build internal tools, admin dashboards, and workflow systems that match real business operations.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Backend API Development",
    description: "Design ASP.NET Core APIs with clear contracts, database-backed features, and practical architecture.",
    icon: TerminalSquare,
  },
  {
    title: "Deployment Support",
    description: "Prepare small applications for GitHub, VPS, static hosting, or simple staging environments.",
    icon: Wrench,
  },
];

export const targetRoles: TargetRole[] = [
  {
    title: ".NET Developer",
    description: "Backend-focused product work using ASP.NET Core, EF Core, SQL, and REST APIs.",
  },
  {
    title: "Full-stack Developer",
    description: "Business application work across API design, React interfaces, and database integration.",
  },
  {
    title: "Backend Developer",
    description: "Service, data, and integration-heavy roles where reliability and debugging matter.",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    href: "mailto:danilomabulac1@,gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/danilomabulac",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dbmabulac",
    icon: Linkedin,
  },
];

export const strengths = [
  {
    label: "Practical architecture",
    detail: "I prefer systems that are understandable, testable, and realistic for the team maintaining them.",
    icon: ShieldCheck,
  },
  {
    label: "API-first thinking",
    detail: "I keep frontend and backend contracts explicit so screens, services, and data stay aligned.",
    icon: TerminalSquare,
  },
  {
    label: "Debugging discipline",
    detail: "I work from logs, real requests, database state, and environment details before changing code.",
    icon: Wrench,
  },
];
