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
  title: "Mohamed Abdullahi | Full Stack Software Engineer",
  lang: "en",
  description:
    "Full Stack Engineer crafting resilient web and mobile platforms for agritech, fintech, and government partners.",
};

export const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "websites", label: "Websites" },
  { id: "webapps", label: "Web Apps" },
  { id: "mobile", label: "Mobile" },
  { id: "contact", label: "Contact" },
] as const;

export const heroData: HeroData = {
  title: "Full Stack Engineer",
  name: "Mohamed Abdullahi",
  subtitle: "Designing resilient platforms for emerging markets",
  description:
    "I help product teams ship dependable web and mobile experiences – from real-time agritech platforms to enterprise dashboards and public-sector portals.",
  ctaPrimary: "Explore work",
  ctaSecondary: "Download résumé",
};

export const aboutData: AboutData = {
  bio: [
    "I build platforms that connect people to critical services — from agricultural marketplaces to legal intelligence dashboards.",
    "My focus is on performance, developer experience, and long-term maintainability. I lead teams through architecture decisions, guide refactors, and ship incrementally without sacrificing quality.",
  ],
  stats: [
    { label: "Years of experience", value: "6+" },
    { label: "Projects delivered", value: "35" },
    { label: "Markets served", value: "4" },
  ],
  skills: [
    "TypeScript",
    "Next.js",
    "React Native",
    "Django",
    "Vue",
    "Angular",
    "PostgreSQL",
    "Tailwind CSS",
    "Azure",
    "Docker",
    "CI/CD",
    "System design",
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
      "Architected a composable design system that cut build times by 40%",
      "Delivered analytics dashboards processing 500K+ monthly events",
      "Led migration to Kubernetes and Azure-managed services",
    ],
  },
  {
    id: "agritech-coalition",
    company: "Kenya Agritech Coalition",
    role: "Senior Software Engineer",
    period: "2020 — 2022",
    accomplishments: [
      "Shipped FarmSync platform with offline-first mobile companion",
      "Built pricing intelligence tooling adopted by 12 co-ops",
      "Introduced CI/CD workflows that reduced release friction by 60%",
    ],
  },
];

export const services: ServiceItem[] = [
  {
    id: "product-engineering",
    title: "Product Engineering",
    description: "End-to-end delivery of responsive web experiences with measurable KPIs.",
    outcomes: ["Design system integration", "Web vitals optimisation", "Automated QA"],
  },
  {
    id: "platform-architecture",
    title: "Platform Architecture",
    description: "Evolving systems through modular architecture, observability, and DevOps best practices.",
    outcomes: ["Cloud-native blueprints", "CI/CD pipelines", "Scalability roadmaps"],
  },
  {
    id: "mobile-delivery",
    title: "Mobile Delivery",
    description: "Shipping cross-platform mobile apps with offline-first journeys and native polish.",
    outcomes: ["Store deployment", "Analytics instrumentation", "Growth experiments"],
  },
];

export const projectsData: ProjectData[] = [
  {
    id: "latitude-enterprises",
    slug: "latitude-enterprises",
    title: "Latitude Enterprises",
    description:
      "Corporate presence for Latitude's procurement, logistics, and engineering practice with sector-specific case studies and tender funnels.",
    summary:
      "Crafted a WordPress build with reusable content blocks, multilingual-ready architecture, and conversion-focused calls to action tuned for regional SEO.",
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
      "Marketing hub for FarmSync's digital marketplace featuring live price signals, produce category highlights, and cooperative success stories.",
    summary:
      "Delivered a blazing-fast Next.js site with geotargeted messaging, newsroom publishing workflow, and CRM-integrated lead capture tied to agritech metrics.",
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
      "Immersive portfolio for Regal Studios' film and photography collective, blending editorial storytelling with high-impact visuals.",
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
      "Web application that helps livestock nutritionists balance formulas, compare ingredients, and export full ration reports in minutes.",
    summary:
      "Built a responsive React interface with real-time optimisation, charting dashboards, and Django-powered APIs for solver accuracy and data governance.",
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
      "Delivered a Vue + Django stack with granular roles, offline-ready data capture, and analytics that surface actionable farm insights across cooperatives.",
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
      "Cross-platform companion app that keeps farmers synced with price alerts, task lists, and buyer conversations on the go.",
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
      "Android toolkit that calculates balanced rations, generates PDF reports, and syncs ingredient libraries for nutrition consultants.",
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
  headline: "Have a product idea or platform to evolve?",
  subheadline: "Let's map the roadmap, define success metrics, and ship with confidence.",
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
