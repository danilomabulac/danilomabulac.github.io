import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bug,
  Code,
  Code2,
  Database,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Send,
  Server,
  Sparkles,
  Sun,
  Terminal,
  Workflow,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const navItems = [
  { label: "about", id: "about" },
  { label: "skills", id: "skills" },
  { label: "work", id: "projects" },
  { label: "contact", id: "contact" },
];

const contacts = [
  {
    label: "Email",
    value: "danilomabulac1@gmail.com",
    href: "mailto:danilomabulac1@gmail.com",
    icon: Mail,
    accent: "group-hover:bg-purple-100 dark:group-hover:bg-purple-950/50 group-hover:text-purple-600 dark:group-hover:text-purple-400",
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
];

type SkillCategory = {
  category: string;
  icon: LucideIcon;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    category: "Professional Stack",
    icon: Code2,
    skills: [".NET", "C#", "ASP.NET", "REST APIs", "SQL Server", "Entity Framework", "Production Debugging"],
  },
  {
    category: "Web Development",
    icon: Globe,
    skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Node.js"],
  },
  {
    category: "Focus Areas",
    icon: Sparkles,
    skills: ["Automation Tools", "AI Integration", "Workflow Solutions", "Business Systems", "Internal Tools", "Enterprise Systems"],
  },
];

const projects = [
  {
    title: "Enterprise REST API System",
    description:
      "Production .NET API work for business applications with database-backed features, authentication, and practical error handling.",
    technologies: [".NET Core", "C#", "SQL Server", "REST API"],
    icon: Server,
  },
  {
    title: "Business Workflow Automation",
    description:
      "Internal workflow tools that reduce manual steps, align frontend screens with backend contracts, and make daily operations easier to run.",
    technologies: [".NET", "TypeScript", "React", "SQL Server"],
    icon: Workflow,
  },
  {
    title: "AI-Assisted Feature Experiments",
    description:
      "Small, practical AI-assisted features and product experiments focused on useful workflow support instead of novelty demos.",
    technologies: ["React", "Node.js", "OpenAI API", "TypeScript"],
    icon: Sparkles,
  },
  {
    title: "Internal Dashboard System",
    description:
      "Dashboard and admin interfaces for tracking operational data, reviewing records, and giving users clearer actions.",
    technologies: ["React", "ASP.NET", "SQL Server"],
    icon: Code2,
  },
  {
    title: "Data Integration Pipeline",
    description:
      "Backend-oriented data flow work involving database changes, API responses, and verification against real application behavior.",
    technologies: [".NET", "SQL Server", "REST APIs", "Entity Framework"],
    icon: Database,
  },
  {
    title: "Production Debugging Tooling",
    description:
      "Debugging habits and utilities around logs, requests, environment settings, build checks, and release-risk review.",
    technologies: [".NET", "C#", "SQL Server", "React"],
    icon: Bug,
  },
];

const skillIcons: Record<string, LucideIcon> = {
  ".NET": Code2,
  "C#": Code2,
  "ASP.NET": Server,
  "SQL Server": Database,
  React: Globe,
  TypeScript: Code2,
  JavaScript: Code2,
  "Node.js": Server,
  "AI Integration": Sparkles,
  "Automation Tools": Workflow,
  "Workflow Solutions": Workflow,
};

const skillColors: Record<string, string> = {
  ".NET": "text-purple-600 dark:text-purple-400",
  "C#": "text-purple-600 dark:text-purple-400",
  "ASP.NET": "text-purple-600 dark:text-purple-400",
  "Entity Framework": "text-purple-600 dark:text-purple-400",
  TypeScript: "text-blue-600 dark:text-blue-400",
  JavaScript: "text-yellow-600 dark:text-yellow-400",
  React: "text-cyan-600 dark:text-cyan-400",
  "Node.js": "text-green-600 dark:text-green-400",
  "SQL Server": "text-orange-600 dark:text-orange-400",
  "HTML/CSS": "text-orange-500 dark:text-orange-400",
  "Tailwind CSS": "text-cyan-600 dark:text-cyan-400",
  "REST APIs": "text-green-600 dark:text-green-400",
  "Automation Tools": "text-emerald-600 dark:text-emerald-400",
  "AI Integration": "text-violet-600 dark:text-violet-400",
  "Workflow Solutions": "text-blue-600 dark:text-blue-400",
};

const techColors: Record<string, string> = {
  ".NET": "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800",
  ".NET Core": "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800",
  "C#": "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800",
  "ASP.NET": "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800",
  "Entity Framework": "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800",
  TypeScript: "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800",
  React: "bg-cyan-100 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800",
  "Node.js": "bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800",
  "SQL Server": "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800",
  "REST API": "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
  "REST APIs": "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
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
          dan.dev
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

function Hero() {
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
        <div className="mb-8">
          <div className="mb-6 flex items-center gap-2">
            <Terminal className="size-5 text-slate-500 dark:text-slate-400" />
            <p className="font-mono text-sm text-slate-500 dark:text-slate-400">whoami</p>
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 md:text-7xl">
            Danilo Mabulac
          </h1>
          <p className="mb-6 text-xl text-slate-600 dark:text-slate-300 md:text-2xl">Software Developer</p>
        </div>

        <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          <p>
            Professional experience in{" "}
            <span className="rounded bg-purple-100 px-2 py-1 font-mono text-sm text-purple-700 dark:bg-purple-950/50 dark:text-purple-300">
              .NET
            </span>{" "}
            web development, enterprise systems, REST APIs, and SQL Server.
          </p>
          <p>
            I build practical automation tools, AI-assisted features, and workflow solutions that solve real operational
            problems.
          </p>
        </div>

        <div className="mt-12 flex items-center gap-6">
          <button
            onClick={() => scrollToSection("projects")}
            className="group flex items-center gap-2 pb-1 text-sm text-slate-900 transition-colors hover:text-slate-600 dark:text-slate-100 dark:hover:text-slate-400"
          >
            View work
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            Get in touch
          </button>
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
            My professional background is in .NET web development, where I work with enterprise systems, REST APIs, SQL
            Server databases, and production debugging. I focus on building reliable, maintainable solutions for real
            business requirements.
          </p>
          <p>
            Outside of my professional work, I develop practical web applications and business systems including
            automation tools, AI-assisted features, workflow solutions, and internal tools. My goal is to create
            software that solves real operational problems, not just tutorial projects.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-slate-50 px-6 py-24 transition-colors dark:bg-slate-900/50">
      <div className="mx-auto max-w-5xl">
        <SectionLabel>skills</SectionLabel>

        <div className="grid gap-8 md:grid-cols-3">
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

function Projects() {
  return (
    <section id="projects" className="border-t border-slate-200 px-6 py-24 transition-colors dark:border-slate-800">
      <div className="mx-auto max-w-5xl">
        <SectionLabel>selected work</SectionLabel>

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
                    <h3 className="text-lg text-slate-900 transition-colors group-hover:text-purple-600 dark:text-slate-100 dark:group-hover:text-purple-400">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/danilomabulac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-2 text-slate-400 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                      title="View GitHub"
                    >
                      <Github className="size-4" />
                    </a>
                    <a
                      href="#contact"
                      className="rounded-lg p-2 text-slate-400 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                      title="Ask about this project"
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.description}</p>
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-50 px-6 py-24 transition-colors dark:bg-slate-900/50">
      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionLabel>contact</SectionLabel>

        <div className="max-w-2xl">
          <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
            Open to discussing developer roles, practical software projects, or collaborations on business systems.
          </p>

          <div className="space-y-3">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              const isExternal = contact.href.startsWith("http");
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
                  <Send className="size-4 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-purple-600 dark:text-slate-600 dark:group-hover:text-purple-400" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-12 transition-colors dark:border-slate-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="font-mono text-sm text-slate-500 dark:text-slate-400">&copy; 2026 Dan</p>
        <div className="flex gap-6">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            const isExternal = contact.href.startsWith("http");
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
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
