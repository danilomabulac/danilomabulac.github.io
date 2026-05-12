import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Badge } from "./components/ui/badge";
import { ButtonLink } from "./components/ui/button";
import {
  contactLinks,
  navItems,
  profile,
  projects,
  services,
  skillGroups,
  strengths,
  targetRoles,
} from "./data/portfolio";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div className="mx-auto max-w-3xl text-center" {...fadeUp}>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
    </motion.div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3 font-semibold text-slate-950">
          <span className="grid size-9 place-items-center rounded-md bg-slate-950 text-sm text-white">DM</span>
          <span className="hidden sm:inline">Danilo Mabulac</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </div>
        <ButtonLink href="#contact" variant="secondary" className="hidden sm:inline-flex">
          <Mail className="size-4" />
          Contact
        </ButtonLink>
      </nav>
    </header>
  );
}

function HeroVisual() {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" as const }}
      aria-label="Portfolio preview showing development workflow cards"
    >
      <div className="border-b border-slate-200 bg-slate-950 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-rose-400" />
          <span className="size-2.5 rounded-full bg-amber-300" />
          <span className="size-2.5 rounded-full bg-teal-300" />
          <span className="ml-3 text-xs font-medium text-slate-300">business-system.workflow</span>
        </div>
      </div>
      <div className="grid gap-4 p-5">
        <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-950">API Contract</p>
              <p className="mt-1 text-xs text-slate-500">Orders, inventory, payments, branches</p>
            </div>
            <Badge tone="accent">Ready</Badge>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <span className="h-2 rounded-full bg-teal-500" />
            <span className="h-2 rounded-full bg-amber-400" />
            <span className="h-2 rounded-full bg-slate-300" />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-md border border-slate-200 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Backend</p>
            <p className="mt-2 text-2xl font-bold text-slate-950">.NET</p>
            <p className="mt-2 text-sm text-slate-600">Auth, EF Core, PostgreSQL</p>
          </div>
          <div className="rounded-md border border-slate-200 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Frontend</p>
            <p className="mt-2 text-2xl font-bold text-slate-950">React</p>
            <p className="mt-2 text-sm text-slate-600">TypeScript, Tailwind, UX</p>
          </div>
        </div>
        <div className="rounded-md bg-slate-950 p-4 font-mono text-xs leading-6 text-slate-200">
          <p>
            <span className="text-teal-300">$</span> npm run build
          </p>
          <p className="text-slate-400">dist ready for GitHub Pages</p>
        </div>
      </div>
    </motion.div>
  );
}

function HomeSection() {
  return (
    <section id="home" className="scroll-mt-24 bg-white">
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <Badge tone="accent">{profile.eyebrow}</Badge>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{profile.summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#projects">
              View Projects
              <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Contact Me
              <Mail className="size-4" />
            </ButtonLink>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-teal-700" />
              {profile.location}
            </span>
            <span className="hidden text-slate-300 sm:inline">/</span>
            <span>{profile.availability}</span>
          </div>
        </motion.div>
        <HeroVisual />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">About</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              I like building systems that make daily operations easier to run.
            </h2>
          </motion.div>
          <motion.div className="space-y-6 text-base leading-8 text-slate-600" {...fadeUp}>
            <p>
              I am a developer focused on practical business software: APIs, dashboards, data flows, and deployment
              details that make an application usable outside a demo.
            </p>
            <p>
              My current work leans toward ASP.NET Core backends, React frontends, PostgreSQL data modeling, and the
              real-world debugging that connects all of them. I value clear contracts, simple architecture, and steady
              iteration over unnecessary complexity.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {strengths.map((strength) => {
                const Icon = strength.icon;
                return (
                  <div key={strength.label} className="rounded-md border border-slate-200 bg-white p-4">
                    <Icon className="size-5 text-teal-700" />
                    <h3 className="mt-3 text-sm font-semibold text-slate-950">{strength.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{strength.detail}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Capabilities grouped by the work they support"
          description="The focus is not just knowing tools, but using them to design, debug, and ship business applications."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.article key={group.title} className="rounded-md border border-slate-200 bg-white p-5 shadow-sm" {...fadeUp}>
                <Icon className="size-6 text-teal-700" />
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} tone="quiet">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 border-y border-slate-200 bg-stone-50">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Case studies that show how I think through product work"
          description="Each project is framed around the problem, my role, the stack, and the practical engineering decisions behind it."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.article key={project.title} className="flex rounded-md border border-slate-200 bg-white p-6 shadow-sm" {...fadeUp}>
              <div className="flex w-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-slate-950">{project.title}</h3>
                  <Sparkles className="size-5 shrink-0 text-amber-500" />
                </div>
                <p className="mt-3 text-sm font-semibold text-teal-800">{project.role}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
                <ul className="mt-6 space-y-3">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-600">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal-700" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                {(project.repoUrl || project.demoUrl) && (
                  <div className="mt-6 flex gap-3">
                    {project.repoUrl && (
                      <ButtonLink href={project.repoUrl} variant="ghost" target="_blank" rel="noreferrer">
                        <Github className="size-4" />
                        Repo
                      </ButtonLink>
                    )}
                    {project.demoUrl && (
                      <ButtonLink href={project.demoUrl} variant="ghost" target="_blank" rel="noreferrer">
                        <ExternalLink className="size-4" />
                        Demo
                      </ButtonLink>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Ways I can help small teams and business systems"
          description="These are intentionally practical services, aimed at building or improving software that people use to run work."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article key={service.title} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm" {...fadeUp}>
                <Icon className="size-6 text-teal-700" />
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RolesSection() {
  return (
    <section id="roles" className="scroll-mt-24 border-y border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">Target Roles</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Where I can contribute right away</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              I am most interested in product teams that need dependable backend work, business-focused web apps, and
              a developer who can trace problems through the whole stack.
            </p>
          </motion.div>
          <div className="grid gap-4">
            {targetRoles.map((role) => (
              <motion.article key={role.title} className="rounded-md border border-white/10 bg-white/5 p-5" {...fadeUp}>
                <h3 className="text-lg font-semibold">{role.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{role.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8">
        <motion.div {...fadeUp}>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">Contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Let us build something practical.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            I am open to developer roles, practical software projects, and conversations about backend or full-stack
            business applications.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              const external = link.href.startsWith("http");
              return (
                <ButtonLink
                  key={link.label}
                  href={link.href}
                  variant={link.label === "Email" ? "primary" : "secondary"}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                >
                  <Icon className="size-4" />
                  {link.label}
                  {external && <ArrowUpRight className="size-4" />}
                </ButtonLink>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} Danilo Mabulac. Built with React, Vite, and Tailwind CSS.</p>
        <a href="#home" className="font-medium text-slate-700 hover:text-slate-950">
          Back to top
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <RolesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
