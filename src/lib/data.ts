export const siteConfig = {
  name: "Ali Irfan",
  shortName: "Ali Irfan",
  role: "Web Developer & UI/UX Designer",
  headline: "Web developer in Kerala crafting digital experiences that inspire.",
  // TODO: replace with the real contact email before launch.
  email: "hello@yourdomain.com",
  location: "Kerala, India",
  region: "Kerala",
  country: "India",
  availability: "Available for select projects",
  description:
    "Ali Irfan is a web developer and UI/UX designer based in Kerala, India. He builds fast, accessible and thoughtfully designed websites with Next.js, React and modern front-end tools for clients across Kerala and worldwide.",
  // TODO: switch to a custom domain here once one is live.
  url: "https://ali-irfan.vercel.app",
  // No verified public profiles yet — add real URLs to surface social links and
  // include them in the Person structured data (sameAs).
  socials: [] as { label: string; shortLabel: string; href: string }[],
};

export const navItems = [
  { id: "about", label: "About", index: "01" },
  { id: "skills", label: "Skills", index: "02" },
  { id: "work", label: "Work", index: "03" },
  { id: "experience", label: "Process", index: "04" },
  { id: "services", label: "Services", index: "05" },
  { id: "contact", label: "Contact", index: "06" },
];

export const stats = [
  { value: 8, suffix: "", label: "Core creative disciplines" },
  { value: 5, suffix: "", label: "Ways I can help" },
  { value: 100, suffix: "%", label: "Responsive by default" },
  { value: 0, suffix: "∞", label: "Curiosity & growth" },
];

export type Skill = {
  name: string;
  icon: string;
  level: number;
  category: string;
  description: string;
};

export const skills: Skill[] = [
  {
    name: "HTML",
    icon: "html",
    level: 96,
    category: "Foundation",
    description:
      "Semantic, accessible structure that gives every experience a solid base.",
  },
  {
    name: "CSS",
    icon: "css",
    level: 94,
    category: "Foundation",
    description:
      "Fluid layouts, expressive motion and interfaces that feel alive at every size.",
  },
  {
    name: "JavaScript",
    icon: "javascript",
    level: 92,
    category: "Engineering",
    description:
      "Clean, thoughtful logic that turns static ideas into rich interactions.",
  },
  {
    name: "React",
    icon: "react",
    level: 91,
    category: "Engineering",
    description:
      "Composable interface systems built for clarity, speed and scale.",
  },
  {
    name: "Next.js",
    icon: "nextjs",
    level: 90,
    category: "Engineering",
    description:
      "Production-grade builds with excellent performance and thoughtful SEO.",
  },
  {
    name: "UI/UX Design",
    icon: "uiux",
    level: 88,
    category: "Design",
    description:
      "Human-centred journeys where every detail earns its place.",
  },
  {
    name: "Figma",
    icon: "figma",
    level: 90,
    category: "Design",
    description:
      "Design systems, prototypes and pixel-perfect handoff without the friction.",
  },
  {
    name: "Web Development",
    icon: "web",
    level: 93,
    category: "Engineering",
    description:
      "End-to-end builds — from the first sketch to the final deployment.",
  },
];

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  image: string;
  alt: string;
  tech: string[];
  accent: string;
  size: "wide" | "tall";
};

export const projects: Project[] = [
  {
    id: "nova",
    title: "NOVA",
    subtitle: "Finance, reimagined",
    description:
      "A cinematic analytics concept for a modern finance platform — pairing dense data with a calm, confident interface.",
    year: "2025",
    image: "/projects/nova.svg",
    alt: "NOVA finance dashboard concept interface design",
    tech: ["Next.js", "TypeScript", "Motion"],
    accent: "#6478ff",
    size: "wide",
  },
  {
    id: "aura",
    title: "AURA",
    subtitle: "Editorial commerce",
    description:
      "A slow-fashion storefront concept where editorial storytelling and effortless checkout live in the same elegant world.",
    year: "2025",
    image: "/projects/aura.svg",
    alt: "AURA editorial commerce concept storefront design",
    tech: ["Next.js", "Tailwind CSS", "CMS"],
    accent: "#d8c4a5",
    size: "tall",
  },
  {
    id: "orbit",
    title: "ORBIT",
    subtitle: "A studio in motion",
    description:
      "A spatial portfolio concept for an architecture studio, built around bold typography, scale and a sense of quiet motion.",
    year: "2024",
    image: "/projects/orbit.svg",
    alt: "ORBIT architecture studio portfolio concept design",
    tech: ["React", "Three.js", "GSAP"],
    accent: "#8b5cf6",
    size: "tall",
  },
  {
    id: "pulse",
    title: "PULSE",
    subtitle: "Sound meets intelligence",
    description:
      "An experimental interface concept for an AI music tool — visualising rhythm, mood and sound in real time.",
    year: "2024",
    image: "/projects/pulse.svg",
    alt: "PULSE AI music interface concept design",
    tech: ["Next.js", "Web Audio", "Canvas"],
    accent: "#22d3ee",
    size: "wide",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  focus: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    step: "01 — Discover",
    title: "Understand the goal",
    focus: "Strategy & scope",
    description:
      "Every project starts with questions: who is this for, what does success look like and what can we remove. Clear thinking early saves rework later.",
  },
  {
    step: "02 — Design",
    title: "Shape the experience",
    focus: "UI/UX & prototyping",
    description:
      "Wireframes become interfaces. I design in the browser where it matters, balancing hierarchy, motion and accessibility from the very start.",
  },
  {
    step: "03 — Develop",
    title: "Build it properly",
    focus: "Front-end engineering",
    description:
      "Semantic, component-driven builds with Next.js and React — fast by default, responsive at every size and straightforward to maintain.",
  },
  {
    step: "04 — Deliver",
    title: "Refine and launch",
    focus: "Performance & polish",
    description:
      "Before launch I tune Core Web Vitals, test across devices and hand over clear documentation so the site keeps performing after go-live.",
  },
];

export type Principle = {
  title: string;
  tag: string;
  description: string;
};

export const principles: Principle[] = [
  {
    title: "Performance first",
    tag: "Core Web Vitals",
    description:
      "Fast sites rank better and convert better. Speed is treated as a feature, not an afterthought.",
  },
  {
    title: "Accessible by default",
    tag: "WCAG-aware",
    description:
      "Semantic HTML, keyboard support and sufficient contrast are built in, so more people can use the work.",
  },
  {
    title: "Design with intention",
    tag: "Craft",
    description:
      "Nothing decorative for its own sake — every detail should earn its place and serve the goal.",
  },
];

export type Service = {
  title: string;
  icon: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    title: "Website Development",
    icon: "code",
    description:
      "Fast, resilient websites built with modern tools and a meticulous eye for detail — for businesses in Kerala and beyond.",
    deliverables: ["Next.js", "TypeScript", "CMS integration"],
  },
  {
    title: "UI/UX Design",
    icon: "pen",
    description:
      "Interfaces that feel intuitive from the first click and memorable long after the last.",
    deliverables: ["Research", "Wireframes", "UI systems"],
  },
  {
    title: "Responsive Web Design",
    icon: "devices",
    description:
      "Fluid experiences that hold their character on every screen, from pocket to panorama.",
    deliverables: ["Mobile-first", "Fluid type", "Accessibility"],
  },
  {
    title: "Creative Development",
    icon: "sparkles",
    description:
      "Immersive interactions, motion and 3D moments that give a brand a distinct pulse.",
    deliverables: ["Motion", "WebGL", "Interaction"],
  },
  {
    title: "Website Optimization",
    icon: "gauge",
    description:
      "Sharper performance, stronger fundamentals and smoother experiences at every touchpoint.",
    deliverables: ["Core Web Vitals", "SEO", "Analytics"],
  },
];

export const marqueeWords = [
  "Creative Development",
  "UI/UX Design",
  "Digital Experiences",
  "Motion Design",
  "Frontend Engineering",
  "Brand Interactions",
];
