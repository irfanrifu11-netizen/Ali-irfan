export const siteConfig = {
  name: "ALI IRFAN",
  shortName: "Ali Irfan",
  role: "Creative Developer / Designer / Digital Creator",
  headline: "Crafting digital experiences that inspire.",
  email: "hello@yourdomain.com",
  location: "Your City, Country",
  availability: "Available for select projects",
  description:
    "Ali Irfan is a creative developer and designer crafting immersive, high-performance websites and digital experiences.",
  url: "https://your-domain.com",
  socials: [
    { label: "GitHub", shortLabel: "GH", href: "https://github.com" },
    { label: "LinkedIn", shortLabel: "IN", href: "https://www.linkedin.com" },
    { label: "Instagram", shortLabel: "IG", href: "https://www.instagram.com" },
    { label: "Dribbble", shortLabel: "DR", href: "https://dribbble.com" },
  ],
};

export const navItems = [
  { id: "about", label: "About", index: "01" },
  { id: "skills", label: "Skills", index: "02" },
  { id: "work", label: "Work", index: "03" },
  { id: "experience", label: "Experience", index: "04" },
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
    description: "Semantic, accessible structure that gives every experience a solid base.",
  },
  {
    name: "CSS",
    icon: "css",
    level: 94,
    category: "Foundation",
    description: "Fluid layouts, expressive motion and interfaces that feel alive at every size.",
  },
  {
    name: "JavaScript",
    icon: "javascript",
    level: 92,
    category: "Engineering",
    description: "Clean, thoughtful logic that turns static ideas into rich interactions.",
  },
  {
    name: "React",
    icon: "react",
    level: 91,
    category: "Engineering",
    description: "Composable interface systems built for clarity, speed and scale.",
  },
  {
    name: "Next.js",
    icon: "nextjs",
    level: 90,
    category: "Engineering",
    description: "Production-grade builds with excellent performance and thoughtful SEO.",
  },
  {
    name: "UI/UX Design",
    icon: "uiux",
    level: 88,
    category: "Design",
    description: "Human-centred journeys where every detail earns its place.",
  },
  {
    name: "Figma",
    icon: "figma",
    level: 90,
    category: "Design",
    description: "Design systems, prototypes and pixel-perfect handoff without the friction.",
  },
  {
    name: "Web Development",
    icon: "web",
    level: 93,
    category: "Engineering",
    description: "End-to-end builds — from the first sketch to the final deployment.",
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
  demoUrl: string;
  sourceUrl: string;
  accent: string;
  size: "wide" | "tall";
};

export const projects: Project[] = [
  {
    id: "nova",
    title: "NOVA",
    subtitle: "Finance, reimagined",
    description:
      "A cinematic analytics experience for a modern finance platform — pairing dense data with a calm, confident interface.",
    year: "2025",
    image: "/projects/nova.svg",
    alt: "NOVA finance dashboard visual",
    tech: ["Next.js", "TypeScript", "Motion"],
    demoUrl: "https://example.com",
    sourceUrl: "https://github.com",
    accent: "#6478ff",
    size: "wide",
  },
  {
    id: "aura",
    title: "AURA",
    subtitle: "Editorial commerce",
    description:
      "A slow-fashion storefront where editorial storytelling and effortless checkout live in the same elegant world.",
    year: "2025",
    image: "/projects/aura.svg",
    alt: "AURA editorial commerce visual",
    tech: ["Next.js", "Tailwind CSS", "CMS"],
    demoUrl: "https://example.com",
    sourceUrl: "https://github.com",
    accent: "#d8c4a5",
    size: "tall",
  },
  {
    id: "orbit",
    title: "ORBIT",
    subtitle: "A studio in motion",
    description:
      "A spatial portfolio for an architecture studio, built around bold typography, scale and a sense of quiet motion.",
    year: "2024",
    image: "/projects/orbit.svg",
    alt: "ORBIT architecture studio visual",
    tech: ["React", "Three.js", "GSAP"],
    demoUrl: "https://example.com",
    sourceUrl: "https://github.com",
    accent: "#8b5cf6",
    size: "tall",
  },
  {
    id: "pulse",
    title: "PULSE",
    subtitle: "Sound meets intelligence",
    description:
      "An experimental interface for an AI music tool — visualising rhythm, mood and sound in real time.",
    year: "2024",
    image: "/projects/pulse.svg",
    alt: "PULSE AI music interface visual",
    tech: ["Next.js", "Web Audio", "Canvas"],
    demoUrl: "https://example.com",
    sourceUrl: "https://github.com",
    accent: "#22d3ee",
    size: "wide",
  },
];

export type TimelineItem = {
  period: string;
  role: string;
  company: string;
  description: string;
  type: "Experience" | "Education" | "Achievement";
};

export const timeline: TimelineItem[] = [
  {
    period: "2024 — Present",
    role: "Independent Creative Developer",
    company: "Self-directed practice",
    description:
      "Designing and building end-to-end digital experiences for founders, studios and ambitious brands.",
    type: "Experience",
  },
  {
    period: "2022 — 2024",
    role: "Frontend Developer",
    company: "Your Company",
    description:
      "Translated design systems into responsive, accessible interfaces with a strong focus on motion and performance.",
    type: "Experience",
  },
  {
    period: "2020 — 2022",
    role: "UI/UX Designer",
    company: "Your Studio",
    description:
      "Shaped product journeys, prototypes and visual identities from early discovery through to final handoff.",
    type: "Experience",
  },
  {
    period: "2018 — 2022",
    role: "Interaction Design",
    company: "Your University",
    description:
      "Studied the relationship between people, interfaces and technology. Replace with your own education details.",
    type: "Education",
  },
  {
    period: "Add a date",
    role: "Your Proudest Milestone",
    company: "Award / Certification",
    description:
      "A space for an award, certification or project milestone that deserves the spotlight.",
    type: "Achievement",
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
      "Fast, resilient websites built with modern tools and a meticulous eye for detail.",
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
