/**
 * ============================================================================
 *  SITE CONTENT & CONFIG — SINGLE SOURCE OF TRUTH
 * ============================================================================
 *  Edit THIS file to update the whole site. You should not need to touch
 *  component code for normal content changes.
 *
 *  TRUTHFULNESS RULES (from the build pack):
 *   - Keep empty strings ("") for links that are not real yet.
 *   - Use explicit "[Confirm / add details]" placeholders for unknown facts.
 *   - Do NOT convert placeholders into real claims until confirmed.
 *   - Do NOT invent metrics, users, deployments, employers, or certifications.
 * ============================================================================
 */

export type SkillLevel =
  | "Hands-on"
  | "Hands-on exposure"
  | "Industrial exposure"
  | "Working knowledge"
  | "Learning"
  | "Familiar with"
  | "[Confirm / add details]";

export type ProjectStatus = "In progress" | "Planned" | "Completed";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string[];
  domains?: string[];
  reflection?: string;
  evidenceUrl: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  status: ProjectStatus;
  oneLine: string;
  stack: string[];
  github: string;
  demo: string;
  featured?: boolean;
  placeholder?: boolean;
}

export const siteConfig = {
  person: {
    name: "Rakesh Kumar Behera",
    shortName: "RKB",
    role: "Electrical Engineering Graduate | Industrial Systems & Software Builder",
    headline: "Engineering reliable systems — from the factory floor to the web.",
    altHeadline:
      "I build dependable systems at the intersection of electrical engineering, industrial operations, and software.",
    supporting:
      "Electrical Engineering graduate with hands-on industrial exposure in quality inspection, industrial safety, and automation / SCADA learning. Also building toward backend systems, Rust, APIs, and practical web products with a focus on reliability, clarity, and system behavior.",
    bio:
      "Electrical Engineering graduate with hands-on industrial exposure in quality inspection, industrial safety, automation and SCADA learning. I also build modern software products and backend systems using Rust and web technologies.",
    location: "India",
    availabilityLabel: "Open to opportunities",
    availabilityLine: "Based in India — available for remote and on-site opportunities.",
    // Leave empty until real. Placeholder states render when these are blank.
    email: "",
    github: "",
    linkedin: "",
    resumeUrl: "",
  },

  nav: [
    { label: "Work", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Now", href: "/now" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ],

  credibility: [
    "Electrical Engineering",
    "Industrial Quality Exposure",
    "Automation & SCADA Learning",
    "Rust & Backend Systems",
    "Available for Opportunities",
  ],

  opportunities: [
    "Graduate Electrical Engineer roles",
    "Electrical maintenance and industrial engineering roles",
    "Automation / SCADA trainee roles",
    "Quality and manufacturing engineering roles",
    "Technical operations roles",
    "Junior backend / systems-development opportunities",
    "Remote internships and early-stage product roles",
  ],

  approach: [
    {
      title: "Observe the system",
      body: "Before changing anything, understand the process, the environment, and the constraints. Industrial training reinforced the value of looking carefully at how a system behaves in practice before proposing improvements.",
    },
    {
      title: "Build with constraints",
      body: "Good engineering decisions are shaped by safety, time, clarity, and maintainability. Whether the context is a shop floor or a backend service, tradeoffs should be explicit rather than hidden.",
    },
    {
      title: "Document what matters",
      body: "Reliable work should be understandable to someone else. Notes, inspection records, architecture decisions, and clear write-ups help make systems repeatable and trustworthy.",
    },
  ],

  experience: [
    {
      company: "Sakthi Auto Component Ltd (SACL)",
      role: "Electrical / Quality Control Intern",
      period: "Dec 2025 – Apr 2026",
      location: "Tiruppur, India",
      type: "Internship",
      summary: [
        "Assisted with quality inspection of steering-knuckle components",
        "Performed or supported hardness-testing activities and recording results",
        "Inspected components for visible quality issues such as defects, burrs, porosity, rust, or machining-related issues",
        "Supported inspection documentation and non-conformance / rejection records",
      ],
      domains: ["Quality inspection", "Hardness testing", "Documentation"],
      reflection:
        "Reinforced how disciplined observation and honest record-keeping keep a quality process trustworthy.",
      evidenceUrl: "",
    },
    {
      company: "Central Tool Room & Training Centre (CTTC)",
      role: "Industrial Automation and SCADA Trainee",
      period: "Jun 2025",
      location: "Bhubaneswar, India",
      type: "Technical Training",
      summary: [
        "Learned fundamentals of industrial automation and SCADA",
        "Studied control-system and automation concepts",
      ],
      domains: ["Automation", "SCADA", "Control systems"],
      reflection:
        "Connected control-system theory to how monitored industrial processes actually behave.",
      evidenceUrl: "",
    },
    {
      company: "SAIL — Rourkela Steel Plant",
      role: "Vocational Industrial Trainee",
      period: "Jun 2024 – Jul 2024",
      location: "Rourkela, India",
      type: "Vocational Training",
      summary: [
        "Learned about electrical installations, transformers, motors, and control panels",
        "Built safety awareness around PPE, lockout / tagout, and SOP-driven work",
        "Gained exposure to electrical distribution, instrumentation, and energy-management learning",
      ],
      domains: ["Electrical distribution", "Instrumentation", "Industrial safety"],
      reflection:
        "Grounded electrical fundamentals in real installations and safety-first working practice.",
      evidenceUrl: "",
    },
  ] as ExperienceEntry[],

  education: {
    degree: "B.Tech / Bachelor’s degree in Electrical Engineering",
    completion: "2026",
    location: "India",
    institution: "[Confirm / add details]",
    cgpa: "7.19",
    showCgpa: true,
  },

  projects: [
    {
      slug: "lumino-xp",
      title: "Lumino XP",
      category: "Product concept / backend & systems",
      status: "In progress",
      oneLine:
        "An online test / CBT-platform direction being explored with careful attention to system design and a Rust-backend interest.",
      stack: ["Rust [Confirm / add details]", "APIs [Confirm / add details]", "Web systems"],
      github: "",
      demo: "",
      featured: true,
    },
    {
      slug: "project-2",
      title: "Project 2",
      category: "[Confirm / add details]",
      status: "Planned",
      oneLine: "Project slot reserved for a real case study.",
      stack: ["[Confirm / add details]"],
      github: "",
      demo: "",
      placeholder: true,
    },
    {
      slug: "project-3",
      title: "Project 3",
      category: "[Confirm / add details]",
      status: "Planned",
      oneLine: "Add a second verified build here.",
      stack: ["[Confirm / add details]"],
      github: "",
      demo: "",
      placeholder: true,
    },
  ] as Project[],

  skills: {
    electricalIndustrial: [
      { name: "Electrical engineering fundamentals", level: "Working knowledge" },
      { name: "Industrial safety awareness", level: "Industrial exposure" },
      { name: "Quality inspection exposure", level: "Hands-on exposure" },
      { name: "Hardness-testing exposure", level: "Hands-on exposure" },
      { name: "Automation and SCADA learning", level: "Learning" },
    ],
    softwareSystems: [
      { name: "Rust", level: "Learning" },
      { name: "Backend development", level: "Learning" },
      { name: "APIs", level: "Learning" },
      { name: "Web systems", level: "Learning" },
      { name: "Cloud deployment learning", level: "Learning" },
    ],
    toolsWorkflow: [
      { name: "Documentation", level: "Hands-on exposure" },
      { name: "Git / GitHub", level: "[Confirm / add details]" },
      { name: "HTML / CSS / JavaScript / TypeScript", level: "[Confirm / add details]" },
    ],
  } as { electricalIndustrial: Skill[]; softwareSystems: Skill[]; toolsWorkflow: Skill[] },

  about: {
    intro:
      "Rakesh Kumar Behera is an Electrical Engineering graduate building a profile at the intersection of industrial systems and modern software. His background combines exposure to quality inspection, safety-first industrial environments, and automation learning with a growing focus on backend systems, Rust, APIs, and practical web products.",
    introSecondary:
      "He is best understood not as someone switching between two unrelated tracks, but as someone developing a consistent engineering perspective across physical and digital systems: reliability matters, constraints matter, and documentation matters.",
    whyEngineering: [
      "Electrical engineering offers a direct way to understand how real systems behave under constraints. It brings together physical infrastructure, control, safety, process discipline, and the need to make dependable decisions when failure has consequences.",
      "That perspective continues to shape the way Rakesh approaches software. He is interested in systems that are understandable, maintainable, and clear about their tradeoffs rather than systems that appear impressive but are difficult to trust.",
    ],
    industrialToSoftware: [
      "Exposure to industrial environments made process, repeatability, and observation feel concrete rather than theoretical. Training around quality checks, equipment, installations, safety practices, and automation concepts created a strong appreciation for how real work is shaped by procedure and constraints.",
      "That experience naturally led toward an interest in automation, SCADA concepts, backend systems, and web products. Software became interesting not as a separate identity, but as another layer of systems design: inputs, outputs, monitoring, failure modes, and clear operational behavior.",
    ],
    principles: [
      { title: "Safety", body: "Even when learning, safety is not a background detail. Industrial exposure reinforced that careful engineering begins with safe behavior, respect for procedure, and awareness of consequences." },
      { title: "Clarity", body: "Good work should be understandable by teammates, reviewers, and future maintainers. Clear documentation and explicit assumptions reduce confusion and make collaboration easier." },
      { title: "Reliability", body: "Whether inspecting components or designing software flows, dependable systems are built through disciplined thinking rather than vague confidence." },
      { title: "Curiosity", body: "A learning path driven by curiosity about how systems actually function — from electrical infrastructure and industrial processes to application design and backend architecture." },
      { title: "Documentation", body: "Notes, evidence, architecture write-ups, and process records are not optional extras. They are part of how engineering work becomes reusable and trustworthy." },
    ],
    currentFocus: {
      handsOn: "Quality inspection support, documentation support, vocational training, automation / SCADA learning contexts",
      software: "Rust, backend development, APIs, web systems, and product-oriented technical case studies",
      needsConfirmation: "Specific deployed tools, production systems, repositories, or live software links",
    },
    beyond: [
      "Professional interests outside direct project work: [Confirm / add details]",
      "Reading / study interests: [Confirm / add details]",
      "Long-term areas of curiosity: industrial systems, dependable software, and engineering documentation",
    ],
  },

  now: {
    intro: "A concise engineering notebook. Starter entries only — no fabricated history.",
    focus: [
      "Deepening Rust and backend fundamentals",
      "Shaping the Lumino XP architecture and scope",
      "Continuing automation / SCADA learning",
      "Strengthening documentation and system-design habits",
    ],
    log: [
      { date: "2026 — starter entry", note: "Set up this portfolio and defined an honest structure for work, experience, and skills. [Replace with real dated entries as you go.]" },
    ],
  },

  proof: {
    intro: "Strong engineering work is supported by clear evidence and documentation.",
    // Empty string => rendered as a clean placeholder state, never a fake button.
    github: "",
    resume: "",
    certificates: "",
    writeups: "Lumino XP case study + future project documentation",
  },

  resume: {
    summary:
      "Electrical Engineering graduate with hands-on industrial exposure in quality inspection, safety, and automation / SCADA learning, now building toward backend systems, Rust, APIs, and dependable web products.",
    pdfNote:
      "A downloadable PDF resume will appear here once added. Set person.resumeUrl in content/site-config.ts.",
  },

  finalCta: {
    headline: "Have a system worth improving?",
    body: "Invite recruiters, engineering teams, and collaborators to connect around dependable, systems-oriented work.",
  },

  seo: {
    description:
      "Portfolio of Rakesh Kumar Behera — Electrical Engineering graduate and industrial systems & software builder. Reliability, clarity, and system thinking across industrial and software work.",
    keywords: [
      "Rakesh Kumar Behera",
      "Electrical Engineering",
      "Industrial Systems",
      "Automation",
      "SCADA",
      "Rust",
      "Backend",
      "Portfolio",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;

export function getProject(slug: string): Project | undefined {
  return siteConfig.projects.find((p) => p.slug === slug);
}
