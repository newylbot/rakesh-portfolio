/**
 * Lumino XP — case study content.
 * Kept adjacent to site-config.ts so all editable content lives under /content.
 * STATUS IS IN PROGRESS. Do not imply production, users, payments, uptime,
 * or security certifications unless later confirmed.
 */

export const luminoXp = {
  slug: "lumino-xp",
  title: "Lumino XP",
  status: "In progress" as const,
  oneLine:
    "A planned online test / CBT-platform direction being explored with a focus on architecture, system clarity, and dependable backend design.",
  quickFacts: [
    { label: "Role", value: "Product designer / builder [Confirm exact role phrasing]" },
    { label: "Timeline", value: "[Confirm / add details]" },
    { label: "Stack", value: "Rust [Confirm], backend APIs [Confirm], web stack [Confirm]" },
    { label: "Status", value: "In progress" },
    { label: "GitHub", value: "" },
    { label: "Live demo", value: "" },
  ],
  context: [
    "Online testing systems need more than a surface-level interface. They must handle structured question delivery, timing, navigation, data handling, and clear user states without becoming confusing under pressure.",
    "Lumino XP is being framed as a technical and product exercise around that problem space: what a dependable online test platform could look like, which users it would serve, and how its system behavior should be structured.",
  ],
  intendedUsers: [
    "Candidates taking structured online tests",
    "Administrators or organizers managing assessments [Confirm / add details]",
    "Review / operations roles [Confirm / add details]",
  ],
  scope: {
    current: [
      "Candidate authentication / access flow [Confirm / add details]",
      "Test selection or assignment flow [Confirm / add details]",
      "Timed question interface",
      "Submission flow and confirmation states",
      "Administrative / monitoring capabilities [Confirm / add details]",
    ],
    notClaimed: [
      "Production deployment",
      "Active users",
      "Payment handling",
      "Uptime guarantees",
      "Security certifications",
      "Enterprise-scale monitoring",
    ],
  },
  constraints: [
    "Technical: stack choices and backend architecture are still being confirmed.",
    "User: exam flows must remain clear under time pressure.",
    "Deployment: no production deployment should be implied unless confirmed.",
    "Time: current work is in-progress exploration and build planning.",
    "Evidence: GitHub, demo links, and implementation proof shown only when real.",
    "Scope: features must be split into confirmed work versus planned direction.",
  ],
  architecture: [
    { layer: "Client interface", detail: "Candidate-facing web interface for authentication, test navigation, timer visibility, and answer submission." },
    { layer: "Application / API", detail: "Handles session logic, question delivery, answer recording, validation rules, and administrative workflows." },
    { layer: "Data storage", detail: "Stores question sets, user sessions, submissions, and configuration data." },
    { layer: "External services", detail: "Optional email, auth, analytics, or deployment services [Confirm / add details]." },
  ],
  decisions: [
    {
      decision: "Treat the project as transparent work in progress",
      alternatives: "Present it like a fully launched product.",
      why: "Honesty increases credibility and keeps the case study aligned with real progress.",
      tradeoff: "The project appears earlier-stage, but the technical judgment reads as more trustworthy.",
    },
    {
      decision: "Emphasize architecture and states over visual polish alone",
      alternatives: "Build a visually impressive but shallow mockup.",
      why: "Backend and system behavior are central to the project’s value.",
      tradeoff: "The presentation feels more technical and less promotional.",
    },
    {
      decision: "Keep feature claims narrow until implementation details are confirmed",
      alternatives: "Describe aspirational platform capabilities as if they already exist.",
      why: "It protects the integrity of the portfolio.",
      tradeoff: "Some sections remain intentionally incomplete until more evidence is available.",
    },
  ],
  milestones: [
    "Discovery: define target users, test workflows, and scope boundaries.",
    "Product structure: map candidate journey, admin needs, and required data flows.",
    "Architecture planning: define client, API, and storage responsibilities.",
    "Prototype / implementation: build key paths incrementally.",
    "Testing: validate edge cases, loading states, empty states, and failures.",
    "Next iteration: refine based on real implementation progress.",
  ],
  states: [
    { name: "Desktop", detail: "A structured workspace with clear hierarchy, stable timer visibility, strong contrast, and low-distraction navigation." },
    { name: "Tablet", detail: "A simplified layout that preserves test flow and readability without losing navigation clarity." },
    { name: "Mobile", detail: "A reduced but still dependable experience for review or selected candidate workflows [Confirm / add details]." },
    { name: "Loading", detail: "Clear progress indication without ambiguity about whether the test is loading, saving, or submitting." },
    { name: "Empty", detail: "Explain why no test, result, or data is visible and what the next user action should be." },
    { name: "Error", detail: "Plain language, preserved context, and no silent failures during important actions like submission." },
  ],
  outcomes:
    "At this stage, the strongest outcomes are architectural clarity, interface-state planning, and a better understanding of how an online testing system should behave. The value is currently in design thinking, technical direction, and disciplined scoping rather than in reported metrics.",
  nextSteps: [
    "Confirm current implementation scope",
    "Add real GitHub and demo links if available",
    "Document architecture choices with implementation evidence",
    "Add confirmed screenshots or prototypes",
    "Define which features belong in MVP versus later phases",
  ],
};

export type CaseStudy = typeof luminoXp;
