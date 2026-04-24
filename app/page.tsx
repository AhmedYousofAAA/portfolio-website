"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Boxes,
  ChevronDown,
  Code,
  FlaskConical,
  Mail,
  Menu,
  Play,
  Phone,
  PlugZap,
  Sparkles,
  Workflow,
  Wrench,
  X,
  Zap,
} from "lucide-react";

<img src="/me.png" alt="Ahmed" />

type NavItem = {
  label: string;
  href: string;
};

type Project = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  tintClass: string;
};

type Skill = {
  label: string;
  icon: LucideIcon;
  tintClass: string;
};

type Service = {
  number: string;
  title: string;
  description: string;
};

type Stat = {
  value: string;
  label: string;
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const trustTools: string[] = ["n8n", "Make", "Zapier", "OpenAI", "Python", "Notion", "Airtable"];

const projects: Project[] = [
  {
    number: "01",
    title: "Whatspp Chat Bot",
    description:
      "A self-hosted WhatsApp assistant that qualifies leads, answers FAQs, and updates CRM pipelines automatically.",
    tags: ["N8N", "DOCKER", "SELF-HOSTED"],
    href: "#",
    tintClass: "bg-amber-100",
  },
  {
    number: "02",
    title: "B.Tech Product Scraper",
    description:
      "Python scraping system for product tracking with scheduled reports, price alerts, and clean exports for sales teams.",
    tags: ["PYTHON", "SCRAPING"],
    href: "#",
    tintClass: "bg-emerald-100",
  },
  {
    number: "03",
    title: "Secure n8n Orchestration",
    description:
      "Production workflow infrastructure with secrets rotation, health checks, and GitHub Actions deployment automation.",
    tags: ["N8N", "GITHUB ACTIONS"],
    href: "#",
    tintClass: "bg-sky-100",
  },
  {
    number: "04",
    title: "AI Guide Hub",
    description:
      "Internal AI assistant for support documentation that routes questions, drafts responses, and logs feedback in Notion.",
    tags: ["AI AGENTS", "NOTION"],
    href: "#",
    tintClass: "bg-rose-100",
  },
  {
    number: "05",
    title: "Puter Ops Dashboard",
    description:
      "Unified operations dashboard that combines Airtable data, API metrics, and automated weekly executive summaries.",
    tags: ["AIRTABLE", "APIS"],
    href: "#",
    tintClass: "bg-violet-100",
  },
  {
    number: "06",
    title: "Monarch Wealth Intake",
    description:
      "Client onboarding pipeline that captures forms, scores lead quality, and routes each request to the correct advisor.",
    tags: ["ZAPIER", "AUTOMATION"],
    href: "#",
    tintClass: "bg-amber-100",
  },
];

const skills: Skill[] = [
  { label: "n8n", icon: Workflow, tintClass: "bg-amber-100" },
  { label: "Python", icon: FlaskConical, tintClass: "bg-emerald-100" },
  { label: "Docker", icon: Boxes, tintClass: "bg-sky-100" },
  { label: "APIs", icon: PlugZap, tintClass: "bg-rose-100" },
  { label: "Make", icon: Wrench, tintClass: "bg-violet-100" },
  { label: "Zapier", icon: Zap, tintClass: "bg-amber-100" },
];

const services: Service[] = [
  {
    number: "01",
    title: "n8n Workflow Automation",
    description:
      "I design and deploy dependable workflow systems that remove repetitive admin work, improve handoffs, and create predictable execution.",
  },
  {
    number: "02",
    title: "Python & API Integrations",
    description:
      "When no tool can bridge your stack cleanly, I build robust Python integrations with proper validation, retries, and monitoring.",
  },
  {
    number: "03",
    title: "AI Agents & Chatbots",
    description:
      "From internal copilots to customer-facing bots, I ship AI workflows that are practical, measurable, and grounded in business outcomes.",
  },
  {
    number: "04",
    title: "Process Optimization Consulting",
    description:
      "I map current operations, identify bottlenecks, and prioritize high-impact automation opportunities that return value quickly.",
  },
  {
    number: "05",
    title: "Custom Dashboards & Reporting",
    description:
      "I deliver clear dashboards that bring together scattered data so teams can spot blockers early and make better operational decisions.",
  },
];

const stats: Stat[] = [
  { value: "50+", label: "Workflows" },
  { value: "1000+", label: "Hours Saved" },
  { value: "6+", label: "Projects" },
  { value: "100%", label: "Client Satisfaction" },
];

const aboutSkills: string[] = [
  "n8n",
  "Python",
  "Docker",
  "APIs",
  "Notion",
  "Airtable",
  "Make",
  "Zapier",
  "GitHub Actions",
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Ahmed translated our messy operations into a clean automation system. We reduced manual workload immediately and finally had reliable process visibility.",
    name: "Mariam Adel",
    role: "Operations Lead, B.Tech",
  },
  {
    quote:
      "Ahmed&apos;s n8n workflow saved us 15 hrs/week. The handoffs are now consistent, and we can focus on shipping instead of fixing process errors.",
    name: "Khaled Nassar",
    role: "Founder, Monarch Wealth",
  },
  {
    quote:
      "Our automation rollout was calm and professional from day one. Ahmed delivered practical systems that our team could adopt without friction.",
    name: "Nour Elshazly",
    role: "Head of Growth, Ops Studio",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const activeTestimonial = testimonials[testimonialIndex];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const handleServiceToggle = (index: number) => {
    setOpenServiceIndex((current) => (current === index ? null : index));
  };

  const handlePrevTestimonial = () => {
    setTestimonialIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const handleNextTestimonial = () => {
    setTestimonialIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldName = event.target.name as keyof ContactFormData;
    setFormData((current) => ({ ...current, [fieldName]: event.target.value }));

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-stone-100 text-stone-900 font-[family-name:var(--font-geist)]">
      <Navigation isMenuOpen={isMenuOpen} onToggle={() => setIsMenuOpen((current) => !current)} onNavigate={handleNavClick} />

      <main className="bg-stone-100 pt-16">
        <HeroSection />
        <TrustStrip />
        <ProjectsSection />
        <SkillsSection />

        <ServicesSection
          openServiceIndex={openServiceIndex}
          onServiceToggle={handleServiceToggle}
        />

        <ResultsStrip />
        <AboutSection />

        <TestimonialsSection
          testimonial={activeTestimonial}
          testimonialIndex={testimonialIndex}
          testimonialCount={testimonials.length}
          onPrevious={handlePrevTestimonial}
          onNext={handleNextTestimonial}
        />

        <CtaBand />

        <ContactSection
          formData={formData}
          isSubmitted={isSubmitted}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </main>

      <SiteFooter />
    </div>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <p className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-stone-500">
      <span aria-hidden="true">—</span>
      <span>{label}</span>
    </p>
  );
}

function Navigation({
  isMenuOpen,
  onToggle,
  onNavigate,
}: {
  isMenuOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-stone-200 bg-stone-100/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          onClick={onNavigate}
          className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-900"
        >
          ahmedyousof
        </Link>

        <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-stone-600 lg:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-stone-900">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="inline-flex min-h-11 items-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
          >
            Book Free Audit
          </Link>
        </div>

        <button
          type="button"
          onClick={onToggle}
          aria-label="Toggle menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-stone-700 lg:hidden"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-stone-200 bg-stone-100 transition-[max-height,opacity] duration-300 lg:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onNavigate}
              className="inline-flex min-h-11 items-center text-sm uppercase tracking-[0.2em] text-stone-700"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={onNavigate}
            className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
          >
            Book Free Audit
          </Link>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="home" className="bg-stone-100 px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="space-y-8 lg:col-span-3">
          <SectionLabel label="Intro" />

          <h1 className="font-[family-name:var(--font-display)] text-5xl font-normal leading-[0.95] tracking-tight text-stone-900 md:text-6xl lg:text-7xl xl:text-8xl">
            I Build Automations
            <br />
            That Replace Manual Work
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
            I help small business owners, SaaS founders, and operations teams replace repetitive
            processes with dependable automation systems. Every workflow is built to stay reliable,
            reduce operational friction, and generate measurable ROI over time.
          </p>

          <RoleBadge />

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex min-h-11 items-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              Book Free Audit
            </Link>
            <Link
              href="#projects"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-stone-700 transition hover:text-stone-900"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative flex flex-col items-center gap-6 lg:col-span-2">
          <CircleOrnament />

          <div className="relative w-full max-w-sm rounded-2xl border border-stone-200/70 bg-white p-5">
            <p className="text-sm leading-relaxed text-stone-700">
              Ahmed&apos;s n8n workflow saved us 15 hrs/week.
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-stone-500">Client note</p>
            <span className="absolute -bottom-2 left-8 h-4 w-4 rotate-45 border-b border-r border-stone-200/70 bg-white" />
          </div>

          <div className="w-full max-w-sm overflow-hidden rounded-3xl border border-stone-200 bg-stone-50">
            <Image
              src="/me.png"
              alt="Ahmed Yousof portrait"
              width={640}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function RoleBadge() {
  return (
    <div className="relative inline-flex border border-stone-300 px-6 py-4">
      <span className="text-sm uppercase tracking-[0.2em] text-stone-700">AI Automation Expert</span>
      <span className="absolute -left-1 -top-1 h-4 w-4 border-l border-t border-stone-500" />
      <span className="absolute -right-1 -top-1 h-4 w-4 border-r border-t border-stone-500" />
      <span className="absolute -bottom-1 -left-1 h-4 w-4 border-b border-l border-stone-500" />
      <span className="absolute -bottom-1 -right-1 h-4 w-4 border-b border-r border-stone-500" />
    </div>
  );
}

function CircleOrnament() {
  return (
    <div className="w-full max-w-[320px] rounded-full border border-stone-200 bg-stone-50 p-4">
      <svg viewBox="0 0 320 320" role="img" aria-label="Decorative circular automation ornament">
        <defs>
          <path
            id="orbit-text"
            d="M160,160 m-118,0 a118,118 0 1,1 236,0 a118,118 0 1,1 -236,0"
          />
        </defs>

        <circle cx="160" cy="160" r="92" fill="none" stroke="currentColor" className="text-stone-300" />
        <circle cx="160" cy="160" r="66" fill="none" stroke="currentColor" className="text-stone-300" />

        <g>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 160 160"
            to="360 160 160"
            dur="34s"
            repeatCount="indefinite"
          />
          <text className="fill-stone-500 text-[11px] uppercase tracking-[0.22em]">
            <textPath href="#orbit-text" startOffset="0%">
              automation that actually works · workflows · ai agents ·
            </textPath>
          </text>
        </g>

        <circle cx="160" cy="160" r="5" fill="currentColor" className="text-stone-900" />
      </svg>
    </div>
  );
}

function TrustStrip() {
  return (
    <section className="border-y border-stone-200/70 bg-stone-100 px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-600">+50 workflows delivered</p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {trustTools.map((tool) => (
            <div
              key={tool}
              className="flex h-11 items-center justify-center rounded-full border border-stone-200 bg-stone-50 text-xs uppercase tracking-[0.18em] text-stone-500 opacity-60 transition hover:opacity-100"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="bg-stone-100 px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div id="blog" aria-hidden="true" className="relative -top-24 h-0" />

        <div className="space-y-4">
          <SectionLabel label="Latest Projects" />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-normal tracking-tight text-stone-900 md:text-5xl">
              Projects and practice
            </h2>
            <Link
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              See More
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-5">
      <p className="font-[family-name:var(--font-display)] text-3xl leading-none text-stone-900">{project.number}</p>

      <h3 className="mt-4 text-xl font-medium text-stone-900">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-600">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-stone-100 px-3 py-1 text-[10px] uppercase tracking-widest text-stone-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        className={`mt-5 flex aspect-[4/3] items-center justify-center rounded-xl border border-stone-200 ${project.tintClass}`}
      >
        <span className="text-[11px] uppercase tracking-[0.2em] text-stone-500">Screenshot Preview</span>
      </div>

      <Link
        href={project.href}
        className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-stone-700 transition hover:text-stone-900"
      >
        View project <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

function SkillsSection() {
  return (
    <section className="bg-stone-100 px-4 py-16 md:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <SectionLabel label="Skills" />
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-normal tracking-tight text-stone-900 md:text-5xl">
          Exploring My Automation Stack
        </h2>

        <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
          {skills.map((skill) => (
            <SkillTile key={skill.label} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillTile({ skill }: { skill: Skill }) {
  const Icon = skill.icon;

  return (
    <div className="text-center">
      <div
        className={`flex h-20 items-center justify-center rounded-2xl border border-stone-200 ${skill.tintClass}`}
      >
        <Icon className="h-7 w-7 text-stone-800" />
      </div>
      <p className="mt-3 text-xs uppercase tracking-[0.2em] text-stone-600">{skill.label}</p>
    </div>
  );
}

function ServicesSection({
  openServiceIndex,
  onServiceToggle,
}: {
  openServiceIndex: number | null;
  onServiceToggle: (index: number) => void;
}) {
  return (
    <section id="services" className="bg-stone-100 px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="space-y-4">
          <SectionLabel label="My Services" />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-normal tracking-tight text-stone-900 md:text-5xl">
              Unmatched Services for Your Needs
            </h2>
            <Link
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              Start a Project
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-3xl border border-stone-200 bg-stone-50">
            <Image
              src="/me.png"
              alt="Workspace preview"
              width={900}
              height={1100}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white px-6 py-2">
            {services.map((service, index) => (
              <ServiceAccordionItem
                key={service.number}
                service={service}
                isOpen={openServiceIndex === index}
                onToggle={() => onServiceToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceAccordionItem({
  service,
  isOpen,
  onToggle,
}: {
  service: Service;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t border-stone-200 first:border-t-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex min-h-11 w-full items-center justify-between gap-6 py-5 text-left"
      >
        <span className="flex items-center gap-2 text-stone-900">
          <span className="text-stone-500">—</span>
          <span className="text-base font-medium md:text-lg">{service.title}</span>
        </span>

        <span className="flex items-center gap-3">
          <span className="font-[family-name:var(--font-display)] text-2xl text-stone-900">{service.number}</span>
          <ChevronDown className={`h-4 w-4 text-stone-500 transition ${isOpen ? "rotate-180" : ""}`} />
        </span>
      </button>

      {isOpen && <p className="pb-6 pr-8 text-sm leading-relaxed text-stone-600">{service.description}</p>}
    </div>
  );
}

function ResultsStrip() {
  return (
    <section className="bg-stone-100 px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl border border-stone-200 bg-stone-50 px-6 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="font-[family-name:var(--font-display)] text-4xl leading-none text-stone-900 md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="bg-stone-100 px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionLabel label="About" />
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-normal tracking-tight text-stone-900 md:text-5xl">
          Excited About Automation Studio
        </h2>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-stone-600 md:text-lg">
              I&apos;m Ahmed Yousof, an AI Automation Expert focused on building systems that are
              elegant under the surface and practical for teams using them every day. My work sits
              at the intersection of n8n orchestration, API engineering, and AI-enabled operations.
            </p>

            <div className="flex flex-wrap gap-2">
              {aboutSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-xs uppercase tracking-[0.16em] text-stone-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-stone-200 bg-stone-50">
              <Image
                src="/me.png"
                alt="Ahmed Yousof portrait"
                width={780}
                height={980}
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#"
                className="inline-flex min-h-11 items-center rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
              >
                Download Resume
              </Link>
              <a
                href="https://www.linkedin.com/in/ahmed-yousof/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({
  testimonial,
  testimonialIndex,
  testimonialCount,
  onPrevious,
  onNext,
}: {
  testimonial: Testimonial;
  testimonialIndex: number;
  testimonialCount: number;
  onPrevious: () => void;
  onNext: () => void;
}) {
  const paginationLabel = `${String(testimonialIndex + 1).padStart(2, "0")} / ${String(testimonialCount).padStart(2, "0")}`;

  return (
    <section id="testimonials" className="bg-stone-100 px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="space-y-4">
          <SectionLabel label="Testimonials" />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-normal tracking-tight text-stone-900 md:text-5xl">
              what Our Clients Say
            </h2>
            <Link
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              Become a Client
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white p-8 md:p-12">
          <p className="font-[family-name:var(--font-display)] text-7xl leading-none text-stone-300">&ldquo;</p>
          <p className="mt-2 max-w-4xl text-lg leading-relaxed text-stone-700 md:text-xl">{testimonial.quote}</p>
          <p className="mt-8 text-lg font-semibold text-stone-900">{testimonial.name}</p>
          <p className="mt-1 text-sm uppercase tracking-[0.18em] text-stone-500">{testimonial.role}</p>

          <div className="mt-8 flex items-center justify-between border-t border-stone-200 pt-6">
            <button
              type="button"
              onClick={onPrevious}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <p className="font-[family-name:var(--font-display)] text-2xl text-stone-800">{paginationLabel}</p>

            <button
              type="button"
              onClick={onNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="bg-stone-100 py-8">
      <div className="rounded-3xl bg-stone-900 px-4 py-20 text-center text-white mx-4 lg:mx-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
          <div className="flex w-full items-center justify-between text-stone-400">
            <Sparkles className="h-5 w-5" />
            <Sparkles className="h-5 w-5" />
          </div>

          <h2 className="font-[family-name:var(--font-display)] text-4xl font-normal tracking-tight md:text-6xl">
            Let&apos;s Get In Touch
          </h2>

          <Link
            href="#contact"
            className="inline-flex min-h-11 items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-900 transition hover:bg-stone-100"
          >
            Become a Client
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContactSection({
  formData,
  isSubmitted,
  onInputChange,
  onSubmit,
}: {
  formData: ContactFormData;
  isSubmitted: boolean;
  onInputChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <section id="contact" className="bg-stone-100 px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionLabel label="Contact" />
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-normal tracking-tight text-stone-900 md:text-5xl">
          Let&apos;s Get in Touch
        </h2>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-6">
            <p className="max-w-xl text-base leading-relaxed text-stone-600 md:text-lg">
              Ready to replace repetitive workflows with systems that scale? Share your process and
              I&apos;ll map a practical automation plan with clear execution milestones.
            </p>

            <a
              href="mailto:acc.ahmed.m.yousef@gmail.com"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-stone-700 transition hover:text-stone-900"
            >
              <Mail className="h-4 w-4" />
              acc.ahmed.m.yousef@gmail.com
            </a>

            <p className="text-xs uppercase tracking-[0.25em] text-stone-500">Follow</p>

            <div className="flex flex-wrap gap-3">
              <SocialPill href="https://www.linkedin.com/in/ahmed-yousof/" label="LinkedIn" icon={BriefcaseBusiness} />
              <SocialPill href="https://github.com/AhmedYousofAAA" label="GitHub" icon={Code} />
              <SocialPill href="https://www.youtube.com" label="YouTube" icon={Play} />
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8">
            <div className="grid grid-cols-1 gap-4">
              <label className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-stone-500">Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={onInputChange}
                  required
                  className="h-11 w-full rounded-xl border border-stone-300 px-4 text-sm text-stone-900 outline-none transition focus:border-stone-500"
                />
              </label>

              <label className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-stone-500">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onInputChange}
                  required
                  className="h-11 w-full rounded-xl border border-stone-300 px-4 text-sm text-stone-900 outline-none transition focus:border-stone-500"
                />
              </label>

              <label className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-stone-500">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={onInputChange}
                  className="h-11 w-full rounded-xl border border-stone-300 px-4 text-sm text-stone-900 outline-none transition focus:border-stone-500"
                />
              </label>

              <label className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-stone-500">Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={onInputChange}
                  required
                  rows={5}
                  className="w-full rounded-xl border border-stone-300 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-stone-500"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex min-h-11 items-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              Send a Message
            </button>

            {isSubmitted && (
              <p className="mt-4 rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700">
                Thanks, your message has been received. I will reply as soon as possible.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function SocialPill({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-100 px-4 py-10 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6 text-center lg:text-left">
        <p className="text-sm text-stone-600">© 2026 Ahmed Yousof · Built with Next.js & Tailwind</p>

        <div className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.16em] text-stone-500 lg:justify-start">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-stone-800">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex justify-center gap-3 lg:justify-start">
          <a
            href="https://github.com/AhmedYousofAAA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
            aria-label="GitHub"
          >
            <Code className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-yousof/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
            aria-label="LinkedIn"
          >
            <BriefcaseBusiness className="h-4 w-4" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
            aria-label="YouTube"
          >
            <Play className="h-4 w-4" />
          </a>
          <a
            href="mailto:acc.ahmed.m.yousef@gmail.com"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="tel:+201000000000"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
            aria-label="Phone"
          >
            <Phone className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
