/**
 * SINGLE SOURCE OF TRUTH FOR SITE CONTENT
 * ---------------------------------------
 * Edit this file to update the site. Components read from here so you should
 * (almost) never have to touch component code to change copy, links, or data.
 *
 * TRUTHFULNESS RULES:
 * - Leave links as empty strings ("") until they are real.
 * - Use the exact placeholder "[Confirm / add details]" for unknown facts.
 * - Do NOT convert placeholders into real claims until confirmed.
 * - Do NOT add metrics, users, uptime, certifications, or deployment claims
 *   unless verified.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string; // "" until real
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string[];
  systems: string[];
  reflection: string;
  evidenceUrl: string; // "" until real
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  status: string; // e.g. "In progress" | "Planned"
  oneLine: string;
  stack: string[];
  github: string; // "" until real
  demo: string; // "" until real
  placeholder?: boolean; // true = empty-state slot, do not present as a real build
}

export interface Skill {
  name: string;
  level: string;
}

export const siteConfig = {
  person: {
    name: "Rakesh Kumar Behera",
    shortName: "Rakesh",
    monogram: "RKB",
    role: "Electrical Engineering Graduate | Industrial Systems & Software Builder",
    headline: "Engineering reliable systems \u2014 from the factory floor to the web.",
    altHeadline:
      "I build dependable systems at the intersection of electrical engineering, industrial operations, and software.",
    heroParagraph:
      "Electrical Engineering graduate with hands-on industrial exposure in quality inspection, industrial safety, and automation / SCADA learning. Also building toward backend systems, Rust, APIs, and practical web products with a focus on reliability, clarity, and system behavior.",
    bio:
      "Electrical Engineering graduate with hands-on industrial exposure in quality inspection, industrial safety, automation and SCADA learning. I also build modern software products and backend systems using Rust and web technologies.",
    location: "India",
    availability: "Open to opportunities",
    availabilityLine: "Based in India \u2014 available for remote and on-site opportunities.",
    // TODO: fill these in — leave blank until real.
    email: "",
    github: "",
    linkedin: "",
    resumeUrl: "", // e.g. "/docs/rakesh-behera-resume.pdf"
  },

  nav: [
    { label: "Work", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],

  social: [
    { label: "GitHub", href: "" },
    { label: "LinkedIn", href: "" },
    { label: "Email", href: "" },
  ] as SocialLink[],

  opportunities: [
    "Graduate Electrical Engineer roles",
    "Electrical maintenance and industrial engineering roles",
    "Automation / SCADA trainee roles",
    "Quality and manufacturing engineering roles",
    "Technical operations roles",
    "Junior backend / systems-development opportunities",
    "Remote internships and early-stage product roles",
  ],

  home: {
    credibility: [
      "Electrical Engineering",
      "Industrial Quality Exposure",
      "Automation & SCADA Learning",
      "Rust & Backend Systems",
      "Available for Opportunities",
    ],
    approach: [
      {
        title: "Observe the system",
        body: "Understand how a system actually behaves \u2014 its inputs, constraints, failure modes, and edges \u2014 before changing anything.",
      },
      {
        title: "Build with constraints",
        body: "Design around real limits: safety, reliability, cost, and time. Constraints sharpen decisions instead of blocking them.",
      },
      {
        title: "Document what matters",
        body: "Capture decisions, tradeoffs, and state so the work stays legible to the next person \u2014 including future me.",
      },
    ],
    finalCta: {
      headline: "Have a system worth improving?",
      body: "Recruiters, engineering teams, and collaborators \u2014 let\u2019s connect around dependable, systems-oriented work.",
    },
  },

  about: {
    intro:
      "I\u2019m an Electrical Engineering graduate who likes systems \u2014 how they\u2019re wired, how they fail, and how to make them dependable. My path runs through the factory floor and into software, and I treat both as the same discipline: understand the system, respect the constraints, and document the decisions.",
    whyEngineering:
      "Electrical engineering taught me to think in terms of signals, loads, and safety margins \u2014 systems that either work reliably or fail with consequences. That mindset carries into everything I build.",
    industrialToSoftware:
      "On the industrial side I\u2019ve worked around quality inspection, hardness testing, and safety-driven procedures. On the software side I\u2019m building toward backend and systems development with Rust, APIs, and web technologies. I see them as complementary strengths, not separate tracks.",
    principles: [
      "Reliability over cleverness.",
      "Make state and decisions visible.",
      "Safety and correctness first.",
      "Keep it honest \u2014 no invented claims.",
    ],
    currentFocus: [
      "Deepening Rust and backend fundamentals",
      "Studying industrial automation and SCADA concepts",
      "Designing the Lumino XP architecture (in progress)",
    ],
    beyondWork:
      "[Confirm / add details] \u2014 add a short, human line here about interests outside of work.",
  },

  experience: [
    {
      company: "Sakthi Auto Component Ltd (SACL)",
      role: "Electrical / Quality Control Intern",
      period: "Dec 2025 \u2013 Apr 2026",
      location: "Tiruppur, India",
      type: "Internship",
      summary: [
        "Assisted with quality inspection of steering-knuckle components",
        "Performed or supported hardness-testing activities and recording results",
        "Inspected components for visible quality issues such as defects, burrs, porosity, rust, or machining-related issues",
        "Supported inspection documentation and non-conformance / rejection records",
      ],
      systems: ["Quality inspection", "Hardness testing", "Non-conformance documentation"],
      reflection:
        "Reinforced how disciplined inspection and clear records protect downstream reliability.",
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
      systems: ["Industrial automation", "SCADA fundamentals", "Control systems"],
      reflection:
        "Connected classroom control theory to how real automation and monitoring systems are structured.",
      evidenceUrl: "",
    },
    {
      company: "SAIL \u2014 Rourkela Steel Plant",
      role: "Vocational Industrial Trainee",
      period: "Jun 2024 \u2013 Jul 2024",
      location: "Rourkela, India",
      type: "Vocational Training",
      summary: [
        "Learned about electrical installations, transformers, motors, and control panels",
        "Built safety awareness around PPE, lockout / tagout, and SOP-driven work",
        "Gained exposure to electrical distribution, instrumentation, and energy-management learning",
      ],
      systems: ["Transformers & motors", "Control panels", "Electrical distribution", "Industrial safety"],
      reflection:
        "Saw first-hand how safety discipline and SOPs keep heavy electrical systems dependable.",
      evidenceUrl: "",
    },
    {
      company: "Education",
      role: "B.Tech / Bachelor\u2019s in Electrical Engineering",
      period: "\u2014 2026",
      location: "India",
      type: "Education",
      summary: [
        "Core electrical engineering foundation: circuits, machines, control, and power systems",
        "Building software and systems skills alongside the degree",
      ],
      systems: ["Circuits", "Electrical machines", "Control systems", "Power systems"],
      reflection: "The through-line: reliable systems, whether electrical or software.",
      evidenceUrl: "",
    },
  ] as ExperienceItem[],

  education: {
    degree: "B.Tech / Bachelor\u2019s degree in Electrical Engineering",
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
        "An online test / CBT-platform direction being explored with careful attention to system design and Rust-backend interest.",
      stack: ["Rust [Confirm / add details]", "APIs [Confirm / add details]", "Web systems"],
      github: "",
      demo: "",
      placeholder: false,
    },
    {
      slug: "project-2",
      title: "Project 2",
      category: "Placeholder",
      status: "Planned",
      oneLine: "Project slot reserved for a real, verified build.",
      stack: ["[Confirm / add details]"],
      github: "",
      demo: "",
      placeholder: true,
    },
    {
      slug: "project-3",
      title: "Project 3",
      category: "Placeholder",
      status: "Planned",
      oneLine: "Add a second verified build here.",
      stack: ["[Confirm / add details]"],
      github: "",
      demo: "",
      placeholder: true,
    },
  ] as Project[],

  skills: {
    intro:
      "Framed honestly. Levels reflect real exposure, not inflated claims \u2014 from hands-on work to active learning.",
    electricalIndustrial: [
      { name: "Electrical engineering fundamentals", level: "Working knowledge" },
      { name: "Industrial safety awareness", level: "Industrial exposure" },
      { name: "Quality inspection exposure", level: "Hands-on exposure" },
      { name: "Hardness-testing exposure", level: "Hands-on exposure" },
      { name: "Automation and SCADA learning", level: "Learning" },
    ] as Skill[],
    softwareSystems: [
      { name: "Rust", level: "Learning" },
      { name: "Backend development", level: "Learning" },
      { name: "APIs", level: "Learning" },
      { name: "Web systems", level: "Learning" },
      { name: "Cloud deployment learning", level: "Learning" },
    ] as Skill[],
    toolsWorkflow: [
      { name: "Documentation", level: "Hands-on exposure" },
      { name: "Git / GitHub", level: "[Confirm / add details]" },
      { name: "HTML / CSS / JavaScript / TypeScript", level: "[Confirm / add details]" },
    ] as Skill[],
  },

  now: {
    updated: "[Add date]",
    focus: [
      "Deepening Rust and backend fundamentals",
      "Studying industrial automation and SCADA concepts",
      "Planning the Lumino XP architecture",
    ],
    log: [
      {
        date: "[Add date]",
        note: "Starter entry \u2014 replace with a real update. Keep this log as a concise engineering notebook.",
      },
    ],
  },

  resume: {
    note: "An HTML summary is below. Add a downloadable PDF via person.resumeUrl in content/site-config.ts.",
  },

  seo: {
    defaultDescription:
      "Portfolio of Rakesh Kumar Behera \u2014 Electrical Engineering graduate building reliable industrial and software systems: quality inspection, automation & SCADA learning, and Rust / backend systems.",
    keywords: [
      "Rakesh Kumar Behera",
      "Electrical Engineer",
      "Industrial Systems",
      "SCADA",
      "Automation",
      "Rust",
      "Backend Developer",
      "Portfolio",
    ],
  },
};

export type SiteConfig = typeof siteConfig;
