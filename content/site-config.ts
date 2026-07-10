/**
 * SINGLE EDITABLE CONTENT SOURCE
 * -------------------------------------------------------------
 * Update everything about the site here. Components read from this
 * file only — you should never need to edit component code to change
 * copy, links, experience, projects, or skills.
 *
 * TRUTHFULNESS RULES (keep these):
 *  - Empty string ("") means the link/fact is not known yet.
 *  - "[Confirm / add details]" is an explicit placeholder — keep it
 *    until the real value is confirmed. Do not turn it into a claim.
 *  - Do not invent metrics, users, production/uptime claims, clients,
 *    certificates, or employers.
 */

export type SkillLevel =
  | "Hands-on"
  | "Hands-on exposure"
  | "Industrial exposure"
  | "Working knowledge"
  | "Learning"
  | "Familiar with"
  | "[Confirm / add details]";

export type ProjectStatus = "In progress" | "Planned" | "Live";

export const siteConfig = {
  person: {
    name: "Rakesh Kumar Behera",
    monogram: "RKB",
    role: "Electrical Engineering Graduate | Industrial Systems & Software Builder",
    headline: "Engineering reliable systems — from the factory floor to the web.",
    altHeadline:
      "I build dependable systems at the intersection of electrical engineering, industrial operations, and software.",
    bio: "Electrical Engineering graduate with hands-on industrial exposure in quality inspection, industrial safety, automation and SCADA learning. I also build modern software products and backend systems using Rust and web technologies.",
    supportingParagraph:
      "Electrical Engineering graduate with hands-on industrial exposure in quality inspection, industrial safety, and automation / SCADA learning. Also building toward backend systems, Rust, APIs, and practical web products with a focus on reliability, clarity, and system behavior.",
    location: "India",
    availability: "Open to opportunities",
    availabilityLine:
      "Based in India — available for remote and on-site opportunities.",
    // Leave blank until confirmed — the UI shows graceful placeholders when empty.
    email: "",
    github: "",
    linkedin: "",
    resumeUrl: "",
  },

  // Used for canonical URLs, sitemap, robots and OG metadata.
  // Overridden by NEXT_PUBLIC_SITE_URL when set.
  siteUrl: "https://your-domain.com",

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
      body: "Understand how a system actually behaves — its inputs, failure modes, and constraints — before changing anything.",
    },
    {
      title: "Build with constraints",
      body: "Design for the real limits: safety, reliability, cost, and the people who operate the system day to day.",
    },
    {
      title: "Document what matters",
      body: "Capture decisions, tradeoffs, and states clearly so the work stays maintainable and trustworthy.",
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
        "Precision and repeatable documentation matter as much as the measurement itself.",
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
        "Control systems are about disciplined state handling — the same instinct applies to software.",
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
        "Safety-first, SOP-driven work is a mindset, not a checklist.",
      evidenceUrl: "",
    },
    {
      company: "Education — B.Tech Electrical Engineering",
      role: "Bachelor's degree in Electrical Engineering",
      period: "Completed 2026",
      location: "India",
      type: "Education",
      summary: [
        "Core electrical engineering foundation with a systems and reliability focus",
        "Complemented by self-directed software and backend learning",
      ],
      domains: ["Electrical engineering", "Systems thinking"],
      reflection:
        "Formal EE grounding paired with hands-on software curiosity.",
      evidenceUrl: "",
    },
  ],

  experienceSynthesis:
    "Across industrial quality, automation training, and steel-plant vocational work, one theme repeats: reliable systems come from clear observation, disciplined documentation, and respect for real-world constraints. I carry that same discipline into the software and backend systems I build.",

  education: {
    degree: "B.Tech / Bachelor's degree in Electrical Engineering",
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
      status: "In progress" as ProjectStatus,
      featured: true,
      oneLine:
        "An online test / CBT-platform direction being explored with careful attention to system design and Rust-backend interest.",
      stack: ["Rust [Confirm / add details]", "APIs [Confirm / add details]", "Web systems"],
      github: "",
      demo: "",
    },
    {
      slug: "project-2",
      title: "Project 2",
      category: "Placeholder",
      status: "Planned" as ProjectStatus,
      featured: false,
      oneLine: "Replace with a real case study.",
      stack: ["[Confirm / add details]"],
      github: "",
      demo: "",
    },
    {
      slug: "project-3",
      title: "Project 3",
      category: "Placeholder",
      status: "Planned" as ProjectStatus,
      featured: false,
      oneLine: "Replace with a real case study.",
      stack: ["[Confirm / add details]"],
      github: "",
      demo: "",
    },
  ],

  skills: {
    electricalIndustrial: [
      { name: "Electrical engineering fundamentals", level: "Working knowledge" as SkillLevel },
      { name: "Industrial safety awareness", level: "Industrial exposure" as SkillLevel },
      { name: "Quality inspection exposure", level: "Hands-on exposure" as SkillLevel },
      { name: "Hardness-testing exposure", level: "Hands-on exposure" as SkillLevel },
      { name: "Automation and SCADA learning", level: "Learning" as SkillLevel },
    ],
    softwareSystems: [
      { name: "Rust", level: "Learning" as SkillLevel },
      { name: "Backend development", level: "Learning" as SkillLevel },
      { name: "APIs", level: "Learning" as SkillLevel },
      { name: "Web systems", level: "Learning" as SkillLevel },
      { name: "Cloud deployment learning", level: "Learning" as SkillLevel },
    ],
    toolsWorkflow: [
      { name: "Documentation", level: "Hands-on exposure" as SkillLevel },
      { name: "Git / GitHub", level: "[Confirm / add details]" as SkillLevel },
      { name: "HTML / CSS / JavaScript / TypeScript", level: "[Confirm / add details]" as SkillLevel },
    ],
  },

  now: {
    focus: [
      "Deepening Rust and backend systems fundamentals",
      "Exploring the Lumino XP product direction and its planned architecture",
      "Strengthening automation / SCADA understanding",
    ],
    // Starter log entries only — clearly marked. Replace with real dated notes.
    log: [
      {
        date: "2026-07",
        note: "Starter entry — replace with a real note. Documenting Lumino XP scope and drawing the planned architecture.",
      },
      {
        date: "2026-06",
        note: "Starter entry — replace with a real note. Working through Rust ownership and API design basics.",
      },
    ],
  },

  contact: {
    headline: "Looking for someone dependable?",
    body: "I'm open to graduate electrical engineering, automation, quality, technical operations, and junior backend / systems roles. Send a message and I'll get back to you.",
    // Set CONTACT_FORM_ENDPOINT in env to enable real submissions.
    // With no endpoint and no email, the form uses a graceful placeholder state.
  },
};

export type SiteConfig = typeof siteConfig;
export type ExperienceEntry = (typeof siteConfig.experience)[number];
export type Project = (typeof siteConfig.projects)[number];
