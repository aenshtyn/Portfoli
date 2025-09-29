import { nanoid } from 'nanoid';

// Enhanced types for better type safety
export interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
  category: 'web-app' | 'mobile-app' | 'website' | 'api' | 'other';
  year: number;
  image: string;
  status: 'completed' | 'ongoing' | 'planned';
}

export interface HeroData {
  title: string;
  name: string;
  subtitle: string;
  cta?: string;
}

export interface AboutData {
  img: string;
  paragraphOne: string;
  paragraphTwo: string;
  paragraphThree: string;
  resume?: string;
  skills: string[];
}

export interface ContactData {
  cta: string;
  btn: string;
  email: string;
  tel: string;
}

export interface SocialNetwork {
  id: string;
  name: string;
  url: string;
  icon: string;
}

// HEAD DATA
export const headData = {
  title: 'Mohamed | Full Stack Developer',
  lang: 'en',
  description: 'Welcome to my Portfolio - Full Stack Developer specializing in modern web technologies',
};

// HERO DATA
export const heroData: HeroData = {
  title: 'Hello! My name is',
  name: 'Mohamed',
  subtitle: 'A Full Stack Software Developer',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData: AboutData = {
  img: 'profile.jpg',
  paragraphOne: 'With 4+ years of experience building, maintaining and testing applications of different scales, I specialize in full-stack development with modern technologies.',
  paragraphTwo: 'I am proficient in Python/Django, JavaScript/TypeScript with React, Vue, Angular, and Elixir. I love creating efficient, scalable solutions.',
  paragraphThree: 'I am passionate about clean code, user experience, and continuous learning. Ready to tackle projects of any complexity.',
  resume: 'https://drive.google.com/file/d/1BCb9VUMWTrm-YtKMBxAg7jmoJkWgNhmf/view?usp=sharing',
  skills: ['React', 'Next.js', 'TypeScript', 'Python', 'Django', 'Vue.js', 'Angular', 'Elixir', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'],
};

// PROJECTS DATA
export const projectsData: ProjectData[] = [
  {
    id: nanoid(),
    title: 'FarmSync',
    description: 'A comprehensive agricultural platform connecting farmers with buyers, featuring real-time market data, inventory management, and logistics coordination.',
    longDescription: 'FarmSync is a modern web application that revolutionizes agricultural commerce by providing farmers with direct access to buyers, real-time market pricing, inventory tracking, and streamlined logistics. Built with cutting-edge web technologies for optimal performance and user experience.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://farmsync.co.ke',
    githubUrl: 'https://github.com/aenshtyn/farmsync-website',
    featured: true,
    category: 'web-app',
    year: 2025,
    image: 'farmsync.jpg',
    status: 'completed',
  },
  {
    id: nanoid(),
    title: 'Tito & Associates Law Firm',
    description: 'A comprehensive web application built on Angular and Django providing client information and analytics dashboard for law firm management.',
    longDescription: 'Full-stack application with client portal, case management, document handling, and advanced analytics dashboard for law firm operations.',
    technologies: ['Angular', 'Django', 'TypeScript', 'Python', 'PostgreSQL', 'REST API'],
    liveUrl: 'https://titolaw.netlify.app/',
    githubUrl: 'https://github.com/aenshtyn/Tito',
    featured: true,
    category: 'web-app',
    year: 2024,
    image: 'tito.jpg',
    status: 'ongoing',
  },
  {
    id: nanoid(),
    title: 'Regal Studios',
    description: 'An interactive single page website showcasing the creative works of the Regal group with modern animations and responsive design.',
    longDescription: 'A comprehensive portfolio website built with modern web technologies, featuring smooth animations, interactive galleries, and optimized performance.',
    technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'GSAP'],
    liveUrl: 'https://aenshtyn.github.io/regalstudios/',
    githubUrl: 'https://github.com/aenshtyn/regalstudios',
    featured: true,
    category: 'website',
    year: 2024,
    image: 'regal.jpg',
    status: 'completed',
  },
  {
    id: nanoid(),
    title: 'Feed Formula Calculator API',
    description: 'A RESTful API for animal feed formulation calculations, optimizing nutritional content and cost-effectiveness for livestock feeding.',
    longDescription: 'A sophisticated backend API that handles complex mathematical calculations for animal feed formulation. Provides endpoints for ingredient analysis, nutritional optimization, and cost calculation for efficient livestock feeding programs.',
    technologies: ['Python', 'Django', 'REST API', 'PostgreSQL', 'NumPy', 'SciPy'],
    liveUrl: 'https://formulatorapi-production.up.railway.app/',
    githubUrl: 'https://github.com/aenshtyn/FormulatorAPI',
    featured: true,
    category: 'api',
    year: 2024,
    image: 'formulator.jpg',
    status: 'completed',
  },
  {
    id: nanoid(),
    title: 'Feed Formula',
    description: 'A web application for livestock feed formulation with advanced calculations and nutritional optimization features.',
    longDescription: 'Complete web application for animal nutritionists and farmers to create optimized feed formulas. Features ingredient management, nutritional analysis, cost optimization, and formula comparison tools.',
    technologies: ['React', 'JavaScript', 'Bootstrap', 'Chart.js', 'REST API'],
    liveUrl: 'https://feedformula.netlify.app/',
    githubUrl: 'https://github.com/aenshtyn/feedformula',
    featured: true,
    category: 'web-app',
    year: 2024,
    image: 'feedformula.jpg',
    status: 'completed',
  },
  {
    id: nanoid(),
    title: 'Kalima Agricultural Platform',
    description: 'An ongoing cooperative platform for Kajiado farmers to help with marketing and selling their produce with real-time market data.',
    longDescription: 'Agricultural technology platform connecting farmers directly with buyers, featuring market analytics, inventory management, and logistics coordination.',
    technologies: ['Vue.js', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Chart.js'],
    liveUrl: 'https://aenshtyn.github.io/Kalima2/',
    githubUrl: 'https://github.com/aenshtyn/Kalima2',
    featured: true,
    category: 'web-app',
    year: 2024,
    image: 'kalima.jpg',
    status: 'ongoing',
  },
];

// CONTACT DATA
export const contactData: ContactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's Talk",
  email: 'mohamed@example.com',
  tel: '+254 714 347 036',
};

// SOCIAL NETWORKS
export const socialNetworks: SocialNetwork[] = [
  {
    id: nanoid(),
    name: 'twitter',
    url: 'https://twitter.com/aenshtyn',
    icon: 'fa-twitter',
  },
  {
    id: nanoid(),
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/aenshtyn/',
    icon: 'fa-linkedin',
  },
  {
    id: nanoid(),
    name: 'github',
    url: 'http://github.com/aenshtyn',
    icon: 'fa-github',
  },
];

// Github buttons
export const githubButtons = {
  isEnabled: false, // Disabled for cleaner look
};