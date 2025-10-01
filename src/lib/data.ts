export type ProjectCategory = "website" | "web-app" | "mobile-app";
export type ProjectStatus = "in-production" | "ongoing" | "shipped";

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  description: string;
  summary: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  year: number;
  category: ProjectCategory;
  status: ProjectStatus;
  image?: string;
  themeColor: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  appIcon?: string;
  platform?: "ios" | "android" | "cross-platform";
  downloadCount?: string;
  rating?: number;
}

export interface HeroData {
  title: string;
  name: string;
  subtitle: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface AboutData {
  bio: string[];
  stats: { label: string; value: string }[];
  skills: string[];
  resumeUrl: string;
  image: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  accomplishments: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  outcomes: string[];
}

export interface ContactData {
  headline: string;
  subheadline: string;
  email: string;
  tel: string;
  location: string;
}

export interface SocialNetwork {
  id: string;
  label: string;
  url: string;
  icon: "github" | "linkedin" | "twitter";
}

export const headData = {
  title: "Mohamed Abdullahi | Full Stack Engineering Lead",
  lang: "en",
  description:
    "Engineering lead translating complex workflows into resilient digital platforms for agritech, logistics, and public-sector teams in East Africa.",
};

export const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "websites", label: "Websites" },
  // { id: "webapps", label: "Web Apps" },
  // { id: "mobile", label: "Mobile" },
  { id: "contact", label: "Contact" },
] as const;

export const heroData: HeroData = {
  title: "Full Stack Engineering Lead",
  name: "Mohamed Abdullahi",
  subtitle: "Turning complex operations into dependable software",
  description:
    "I partner with product, data, and operations leaders to translate field workflows into resilient web and mobile tools. Recent programs include agritech pricing platforms, procurement systems, and civic portals used daily across East Africa.",
  ctaPrimary: "Explore work",
  ctaSecondary: "Download résumé",
};

export const aboutData: AboutData = {
  bio: [
    "I design and scale platforms that keep cooperatives, procurement teams, and public services connected; from commodity price intelligence to legal research dashboards.",
    "Across cross-functional squads I steward architecture decisions, guide refactors, and balance delivery velocity with maintainable codebases and reliable data loops.",
  ],
  stats: [
    { label: "Years scaling platforms", value: "6+" },
    { label: "Cross-functional launches", value: "35+" },
    { label: "Countries supported", value: "4" },
  ],
  skills: [
    "TypeScript",
    "Next.js",
    "React Native",
    "Django",
    "Node.js",
    "Vue",
    "PostgreSQL",
    "Tailwind CSS",
    "Azure",
    "Kubernetes",
    "Docker",
    "CI/CD",
  ],
  resumeUrl: "https://drive.google.com/file/d/1BCb9VUMWTrm-YtKMBxAg7jmoJkWgNhmf/view?usp=sharing",
  image: "/profile.jpg",
};

export const experiences: ExperienceItem[] = [
  {
    id: "latitude-enterprises",
    company: "Latitude Enterprises",
    role: "Lead Full Stack Engineer",
    period: "2022 — Present",
    accomplishments: [
      "Defined a modular design system spanning procurement, logistics, and engineering portals, cutting front-end build time by 40%",
      "Delivered instrumentation-rich analytics processing 500K+ monthly events to unlock same-day operational decisions",
      "Led the move to Azure Kubernetes Service with automated observability, cost controls, and blue/green delivery",
    ],
  },
  {
    id: "agritech-coalition",
    company: "Kenya Agritech Coalition",
    role: "Senior Software Engineer",
    period: "2020 — 2022",
    accomplishments: [
      "Delivered the FarmSync platform with offline-first mobile journeys connecting 12+ cooperatives to live price signals",
      "Built commodity pricing intelligence tooling now referenced by national planning partners",
      "Formalised CI/CD workflows and onboarding guides that cut release friction by 60%",
    ],
  },
];

export const services: ServiceItem[] = [
  {
    id: "product-engineering",
    title: "Product Engineering",
    description:
      "Designing and delivering web platforms anchored in user journeys, measurable KPIs, and sustainable delivery cadence.",
    outcomes: [
      "Component libraries with visual regression coverage",
      "Performance budgets with actionable dashboards",
      "Release pipelines with automated QA gates",
    ],
  },
  {
    id: "platform-architecture",
    title: "Platform Architecture",
    description:
      "Evolving platforms through modular architectures, observability, and pragmatic DevOps enablement for distributed teams.",
    outcomes: ["Cloud-native blueprints", "Resilience playbooks", "Scalability roadmaps"],
  },
  {
    id: "mobile-delivery",
    title: "Mobile Delivery",
    description:
      "Shipping cross-platform mobile experiences that respect offline workflows, compliance requirements, and growth loops.",
    outcomes: ["Store deployment", "Analytics instrumentation", "Growth experiments"],
  },
];

export const projectsData: ProjectData[] = [
  {
    id: "latitude-enterprises",
    slug: "latitude-enterprises",
    title: "Latitude Enterprises",
    description:
      "Corporate presence aligning Latitude's procurement, logistics, and engineering practices around sector case studies and RFP capture.",
    summary:
      "Led a modular WordPress build with translation-ready blocks, CRM-integrated funnels, and Cloudflare caching tuned for East African audiences.",
    technologies: ["WordPress", "PHP", "MySQL", "Elementor", "Cloudflare"],
    liveUrl: "https://latitudeenterprises.com",
    year: 2024,
    category: "website",
    status: "shipped",
    image: "/projects/latitude-enterprises.svg",
    themeColor: "#38bdf8",
  },
  {
    id: "farmsync",
    slug: "farmsync",
    title: "FarmSync",
    description:
      "Growth and acquisition hub for FarmSync's agritech marketplace showcasing live price signals and cooperative success stories.",
    summary:
      "Shipped a Next.js experience with geotargeted hero messaging, newsroom workflow, and CRM-connected lead capture powering agritech KPIs.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    liveUrl: "https://farmsync.co.ke",
    githubUrl: "https://github.com/aenshtyn/farmsync-website",
    year: 2025,
    category: "website",
    status: "shipped",
    image: "/projects/farmsync.svg",
    themeColor: "#22d3ee",
  },
  {
    id: "regal-studios",
    slug: "regal-studios",
    title: "Regal Studios",
    description:
      "Immersive portfolio for Regal Studios' film and photography collective blending editorial storytelling with high-impact visuals.",
    summary:
      "Implemented a single-page React experience with parallax sequences, modular galleries, and enquiry CTAs aligned to the studio's brand voice.",
    technologies: ["React", "GSAP", "CSS Modules", "Vercel"],
    liveUrl: "https://aenshtyn.github.io/regalstudios/",
    githubUrl: "https://github.com/aenshtyn/regalstudios",
    year: 2024,
    category: "website",
    status: "shipped",
    image: "/projects/regal-studios.svg",
    themeColor: "#f472b6",
  },
  {
    id: "feed-formulator",
    slug: "feed-formulator",
    title: "Feed Formulator",
    description:
      "Web application helping livestock nutritionists balance formulas, compare ingredients, and export full ration reports in minutes.",
    summary:
      "Built a responsive React interface with real-time optimisation, charting dashboards, and Django APIs for solver accuracy and data governance.",
    technologies: ["React", "TypeScript", "Django", "Chart.js", "Railway"],
    liveUrl: "https://feedformula.netlify.app/",
    githubUrl: "https://github.com/aenshtyn/feedformula",
    year: 2024,
    category: "web-app",
    status: "shipped",
    themeColor: "#6366f1",
  },
  {
    id: "dairy-management",
    slug: "dairy-management",
    title: "Dairy Management System",
    description:
      "Operations cockpit for dairy farms covering herd health, production tracking, feed planning, and KPI dashboards.",
    summary:
      "Delivered a Vue + Django stack with granular roles, offline-ready data capture, and analytics surfacing actionable farm insights across cooperatives.",
    technologies: ["Vue", "Django", "PostgreSQL", "Chart.js", "Bootstrap"],
    liveUrl: "https://dairymanagement.netlify.app/",
    githubUrl: "https://github.com/aenshtyn/dairy-management",
    year: 2024,
    category: "web-app",
    status: "shipped",
    themeColor: "#0ea5e9",
  },
  {
    id: "farmsync-mobile",
    slug: "farmsync-mobile",
    title: "FarmSync Mobile",
    description:
      "Cross-platform companion app keeping farmers synced with price alerts, task lists, and buyer conversations on the go.",
    summary:
      "Led delivery of a React Native application with offline storage, push notifications, and geo-tagged activity feeds wired into the FarmSync backend.",
    technologies: ["React Native", "Expo", "TypeScript", "Redux", "Firebase"],
    liveUrl: "https://farmsync.co.ke/mobile",
    githubUrl: "https://github.com/aenshtyn/farmsync-mobile",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.farmsync.mobile",
    appStoreUrl: "https://apps.apple.com/app/farmsync/id123456789",
    year: 2025,
    category: "mobile-app",
    status: "ongoing",
    appIcon: "/projects/farmsync-mobile-icon.svg",
    platform: "cross-platform",
    downloadCount: "1K+",
    rating: 4.5,
    themeColor: "#22d3ee",
  },
  {
    id: "feed-calculator-pro",
    slug: "feed-calculator-pro",
    title: "Feed Calculator Pro",
    description:
      "Android toolkit calculating balanced rations, generating PDF reports, and syncing ingredient libraries for nutrition consultants.",
    summary:
      "Built a Flutter experience featuring offline persistence, exportable nutrition reports, and analytics instrumentation for growth experiments.",
    technologies: ["Flutter", "Dart", "SQLite", "Firebase", "Analytics"],
    liveUrl: "https://feedformula.com/mobile",
    githubUrl: "https://github.com/aenshtyn/feed-calculator-mobile",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.feedcalculator.pro",
    year: 2024,
    category: "mobile-app",
    status: "shipped",
    appIcon: "/projects/feed-calculator-icon.svg",
    platform: "android",
    downloadCount: "500+",
    rating: 4.8,
    themeColor: "#6366f1",
  },
];

export const contactData: ContactData = {
  headline: "Ready to accelerate your platform roadmap?",
  subheadline: "I help growth teams ship dependable software across East Africa. Let's align on goals and build a delivery plan.",
  email: "demahom93@gmail.com",
  tel: "+254 714 347 036",
  location: "Nairobi, Kenya",
};

export const socialNetworks: SocialNetwork[] = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/aenshtyn",
    icon: "github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/aenshtyn/",
    icon: "linkedin",
  },
  {
    id: "twitter",
    label: "Twitter",
    url: "https://twitter.com/aenshtyn",
    icon: "twitter",
  },
];
