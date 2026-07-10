/**
 * Lumino XP case-study content. Work-in-progress by design — keep the
 * `In progress` framing and do not add production, users, uptime, payment, or
 * security-certification claims unless verified.
 */

export interface Decision {
  decision: string;
  alternatives: string;
  why: string;
  tradeoff: string;
}

export interface ScreenState {
  name: string;
  sees: string;
  action: string;
}

export const luminoXp = {
  slug: "lumino-xp",
  title: "Lumino XP",
  status: "In progress",
  oneLine:
    "An online test / CBT-platform direction being explored with careful attention to system design and a Rust-backend interest.",
  quickFacts: [
    { label: "Role", value: "Builder / designer [Confirm if needed]" },
    { label: "Timeline", value: "[Add real dates]" },
    { label: "Stack", value: "Rust-backend interest, APIs, web frontend [confirm specifics]" },
    { label: "Status", value: "In progress" },
  ],
  links: { github: "", demo: "" },
  context:
    "An online testing system lives or dies on trust and timing. Candidates need clarity about what is happening; organizers need dependable state handling; and the system must behave predictably under interruption. This project explores how to design for that clarity before scaling features.",
  intendedUsers: [
    "Candidates taking tests",
    "Organizers / administrators creating and managing tests",
    "Review / operations roles [optional if relevant]",
  ],
  scope: {
    current: [
      "Product direction and problem framing",
      "Interface and state planning for the core test flow",
      "Planned architecture and technology exploration",
    ],
    planned: [
      "Prototype implementation of the candidate flow",
      "Organizer / admin views",
      "Result handling and review",
    ],
    notClaimed: [
      "Production deployment",
      "Active users or usage metrics",
      "Payments, uptime guarantees, or security certifications",
    ],
  },
  decisions: [
    {
      decision: "Explore a Rust-oriented backend",
      alternatives: "A more familiar high-level backend stack",
      why: "Interest in reliability, performance, and strong typing for correctness-sensitive test logic.",
      tradeoff: "A steeper learning curve while skills are still developing.",
    },
    {
      decision: "Design interface states before features",
      alternatives: "Building screens feature-first and handling states later",
      why: "Testing flows fail at the edges — loading, empty, and error states matter as much as the happy path.",
      tradeoff: "Slower to a flashy demo, but a more dependable foundation.",
    },
  ] as Decision[],
  buildProcess: [
    "Discovery",
    "Scope definition",
    "Architecture planning",
    "Prototype / implementation",
    "Validation",
    "Next iteration",
  ],
  screens: [
    { name: "Candidate dashboard", sees: "Available and upcoming tests with clear status.", action: "Start or resume a test." },
    { name: "Active test", sees: "Question, timer, navigation, and progress indicator.", action: "Answer, navigate, and submit." },
    { name: "Submission confirmation", sees: "A clear confirmation that the attempt was recorded.", action: "Return to the dashboard." },
    { name: "Organizer view [mock]", sees: "A simplified overview of tests and attempts.", action: "Manage test setup [planned]." },
    { name: "Loading state", sees: "A calm loading indicator with no layout shift.", action: "Wait — nothing destructive is possible." },
    { name: "Empty state", sees: "Guidance when there are no tests yet.", action: "Understand what to do next." },
    { name: "Error state", sees: "A clear message describing what went wrong.", action: "Retry safely." },
  ] as ScreenState[],
  outcomes: [
    "Clearer product scope and boundaries",
    "Stronger architecture thinking",
    "Deliberate interface-state planning",
    "Better awareness of technical tradeoffs",
  ],
  nextSteps: [
    "Add confirmed stack details",
    "Add repository link",
    "Add prototype screenshots",
    "Document the current implementation boundary",
    "Define MVP vs later phases",
  ],
};

export type LuminoXp = typeof luminoXp;
