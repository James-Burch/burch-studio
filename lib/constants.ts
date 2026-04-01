import {
  Smartphone,
  LockOpen,
  Timer,
  EyeOff,
  Zap,
  Search,
  Target,
  Rocket,
} from "lucide-react";
import type {
  NavLink,
  ServiceCardData,
  StatData,
  ProblemCardData,
  TestimonialData,
  ProcessStepData,
  SolutionPoint,
  PageMeta,
  SectionHeader,
  FooterColumn,
  FAQItem,
  PortfolioProject,
  WorkProject,
} from "./types";

// ==========================================
// SITE CONFIG
// ==========================================

export const SITE_CONFIG = {
  name: "Burch Studio",
  tagline: "Web design & development studio",
  url: "https://burch-studio.co.uk",
  email: "contact@burch-studio.co.uk",
  phone: "+44 7407 195061",
  location: "UK",
} as const;

// ==========================================
// NAVIGATION
// ==========================================

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const NAV_CTA = {
  label: "Free Audit",
  href: "/contact?audit",
} as const;

// ==========================================
// HOME PAGE - META
// ==========================================

export const HOME_META: PageMeta = {
  title: "Burch Studio - Web Design & Development | UK",
  description:
    "Premium websites for businesses that want to be taken seriously and robust web applications for companies building real digital products.",
  canonical: SITE_CONFIG.url,
};

// ==========================================
// HOME PAGE - HERO
// ==========================================

export const HERO = {
  tag: "Web design & development studio",
  headlines: [
    {
      lead: "Built for businesses",
      accent: "worth noticing.",
    },
    {
      lead: "Websites that show",
      accent: "the standard.",
    },
    {
      lead: "Software built with",
      accent: "real care.",
    },
  ],
  subtext:
    "We started Burch Studio to help good businesses get seen properly. Websites that show the standard of your work. Web platforms built with the care your customers depend on.",
  primaryCTA: { label: "See Our Work", href: "/portfolio" },
  secondaryCTA: { label: "Get in Touch", href: "/contact" },
} as const;

// ==========================================
// HOME PAGE - TRUSTED BY
// ==========================================

export const TRUSTED_BY = {
  label: "Trusted by",
  names: ["Private SaaS Client", "Noble Mortgages", "Refine Barbers"],
} as const;

// ==========================================
// HOME PAGE - SELECTED WORK
// ==========================================

export const WORK_SECTION_HEADER: SectionHeader = {
  label: "Selected work",
  heading: "Every project has a story.",
  subtext:
    "Different businesses. Different goals. The same standard of care in how the work is understood, designed and built.",
};

export const WORK_PROJECTS: WorkProject[] = [
  {
    category: "SaaS Platform · Ongoing",
    categoryColor: "var(--color-brand-accent)",
    title: "Private SaaS Client",
    description:
      "A live company intelligence platform for UK businesses. Real-time financial health monitoring, AI-powered analysis and risk detection. Built from the ground up.",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Auth0"],
    href: "/portfolio",
    linkText: "Read the full story",
    stats: ["100+ endpoints", "30+ workers", "40+ pages"],
  },
  {
    category: "Client Website",
    categoryColor: "#60a5fa",
    title: "Noble Mortgages",
    description:
      "A mortgage broker with no website at all. We built their entire digital presence. Conversion-focused design, lead generation forms and SEO. Enquiries started arriving in week one.",
    tags: ["HTML", "CSS", "JavaScript", "SEO"],
    href: "/portfolio",
    linkText: "Read the full story",
    image: "/images/noble-mortgages-image-1.webp",
    imageAlt: "Homepage preview of the Noble Mortgages website",
  },
  {
    category: "Client Website",
    categoryColor: "#f472b6",
    title: "Refine Barbers",
    description:
      "A popular barber shop running on word of mouth alone. We gave them a clean, mobile-first website with Booksy booking integration. Now customers can find them, see prices and book online.",
    tags: ["React", "Node.js", "CSS"],
    href: "/portfolio",
    linkText: "Read the full story",
    image: "/images/refine-barbers.webp",
    imageAlt: "Homepage preview of the Refine Barbers website",
  },
];

// ==========================================
// HOME PAGE - HOW WE WORK
// ==========================================

export const HOW_WE_WORK = {
  label: "How we work",
  heading: "Built on trust, not templates.",
  paragraphs: [
    "Every project starts with understanding the business properly. How you win work, what customers look for, where trust is lost and what your website or platform needs to do in the real world.",
    "For service businesses, that means showing the quality of the work, telling the story clearly and making it easy for the right people to get in touch. For software companies, it means building something stable, clear and ready to support a real service.",
    "We keep the standard high in both worlds. Thoughtful design. Careful engineering. Straight answers. No unnecessary features. No inflated process. No shortcuts that come back to bite later.",
  ],
} as const;

// ==========================================
// HOME PAGE - PROBLEMS
// ==========================================

export const PROBLEMS_HEADER: SectionHeader = {
  label: "The Problem",
  heading: "Your website might be costing you customers.",
  subtext:
    "We audit trade businesses every week. These are the issues we find most and every one of them is losing you work.",
};

export const PROBLEMS: ProblemCardData[] = [
  {
    icon: Smartphone,
    title: "Not mobile-friendly",
    description:
      "Your customers are searching on their phones. If your site doesn't work on mobile, they'll tap the back button and call a competitor.",
    stat: "60%+ of all web traffic is now mobile",
  },
  {
    icon: LockOpen,
    title: "No SSL security",
    description:
      'Browsers show a "Not Secure" warning before customers even see your site. Many won\'t click past it and Google penalises you for it.',
    stat: "Google has penalised non-HTTPS sites since 2014",
  },
  {
    icon: Timer,
    title: "Painfully slow",
    description:
      "Every second your site takes to load, you lose visitors. Heavy images, old code and cheap hosting are the usual culprits.",
    stat: "53% of visitors leave after 3 seconds",
  },
  {
    icon: EyeOff,
    title: "Invisible on Google",
    description:
      "No SEO means no visibility. If your site has thin content and no local targeting, your competitors will always rank above you.",
    stat: "76% of local searches lead to a same-day visit",
  },
];

// ==========================================
// HOME PAGE - SERVICES OVERVIEW
// ==========================================

export const SERVICES_HEADER: SectionHeader = {
  label: "What We Do",
  heading: "Here's how we help.",
  subtext:
    "Whether you need a website that wins local customers or a platform that scales to thousands of users, we've got you covered.",
};

export const SERVICES: ServiceCardData[] = [
  {
    icon: Zap,
    title: "Website Design & Development",
    description:
      "Custom-built, mobile-first websites that load fast, look professional and make it effortless for customers to get in touch. No templates. No page builders.",
    href: "/services/web-design",
    linkText: "Learn more",
  },
  {
    icon: Search,
    title: "SEO & Google Ranking",
    description:
      "Get found when it matters. Local SEO, technical optimisation and content strategy that puts your business in front of the right people.",
    href: "/services/seo",
    linkText: "Learn more",
  },
  {
    icon: Target,
    title: "Branding & Professional Setup",
    description:
      "Custom domain, professional email, SSL security and consistent branding that makes your business look as good online as the service you deliver.",
    href: "/services/branding",
    linkText: "Learn more",
  },
  {
    icon: Rocket,
    title: "Web Applications & SaaS",
    description:
      "Full-stack web applications and SaaS platforms built with Next.js, TypeScript and PostgreSQL. Scalable architecture, secure by design.",
    href: "/services/web-apps",
    linkText: "Learn more",
  },
];

// ==========================================
// HOME PAGE - STATS (PRD Section 6.2 - exact values only)
// ==========================================

export const STATS_HEADER: SectionHeader = {
  label: "The Numbers",
  heading: "The data doesn't lie.",
};

export const STATS: StatData[] = [
  {
    value: "60%+",
    label: "of all web traffic is now from mobile devices",
    source: "StatCounter / Statista",
  },
  {
    value: "76%",
    label: "of local mobile searches lead to a visit within 24 hours",
    source: "Google",
  },
  {
    value: "3s",
    label: "is all it takes for 53% of visitors to give up and leave",
    source: "Google research",
  },
  {
    value: "75%",
    label: "of people judge credibility by website design alone",
    source: "Stanford Web Credibility Research",
  },
];

// ==========================================
// HOME PAGE - TESTIMONIALS
// ==========================================

export const TESTIMONIALS_HEADER: SectionHeader = {
  label: "In their words",
  heading: "Don't take ours for it.",
};

export const TESTIMONIALS: TestimonialData[] = [
  {
    quote:
      "We had no website at all before Burch Studio. Now customers can find us online, check our services and book straight through the site. It's made a real difference to the business.",
    name: "Rob Cunliffe",
    role: "Refine Barbers",
    initials: "RC",
    rating: 5,
  },
  {
    quote:
      "Professional, straightforward and no jargon. The site looks fantastic and we started getting enquiries within the first week of going live. Couldn't recommend them enough.",
    name: "Alan Kingston",
    role: "Noble Mortgages",
    initials: "AK",
    rating: 5,
  },
];

// ==========================================
// HOME PAGE - CTA BANNER
// ==========================================

export const CTA_BANNER = {
  label: "Let's talk",
  heading: "Ready to raise the standard?",
  subtext:
    "If you want a website that reflects the standard of your business, or a platform that is ready to support a serious service, let's talk.",
  cta: { label: "Get in Touch", href: "/contact" },
} as const;

// ==========================================
// SERVICES HUB PAGE (/services)
// ==========================================

export const SERVICES_HUB_META: PageMeta = {
  title: "Our Services | Web Design, SEO, Branding & Web Apps | Burch Studio",
  description:
    "Website design, SEO, branding and web application development for businesses that care about how they are seen and how their service is delivered.",
  canonical: `${SITE_CONFIG.url}/services`,
};

export const SERVICES_HUB_HERO: SectionHeader = {
  label: "Our Services",
  heading: "Everything you need to succeed online.",
  subtext:
    "From websites that help good businesses stand out to web applications that support serious products, every service is built around clarity, trust and long-term quality.",
};

export const SERVICES_HUB_BOTTOM_CTA = {
  heading: "Not sure what you need?",
  subtext:
    "Tell us where the business is now, what is missing and where you want it to go. We'll help you choose the right next step.",
  cta: { label: "Let's Chat", href: "/contact" },
} as const;

// ==========================================
// WEB DESIGN SERVICE PAGE (/services/web-design)
// ==========================================

export const WEB_DESIGN_META: PageMeta = {
  title: "Website Design for Tradesmen | Burch Studio Peterborough",
  description:
    "Custom mobile-first websites for plumbers, electricians and local trades. Fast, modern, built to generate leads.",
  canonical: `${SITE_CONFIG.url}/services/web-design`,
};

export const WEB_DESIGN_HERO: SectionHeader = {
  label: "Website Design & Development",
  heading: "A website that works as hard as you do.",
  subtext:
    "Custom-built, mobile-first websites for trade businesses, designed to load fast, rank on Google and turn visitors into customers.",
};

export const WEB_DESIGN_PROBLEMS_HEADER: SectionHeader = {
  label: "The Problem",
  heading: "Sound familiar?",
  subtext:
    "We see the same issues on trade business websites every single week.",
};

export const WEB_DESIGN_PROBLEM_LIST = [
  "Outdated designs that look like they were built in 2010",
  "Broken navigation that frustrates mobile users",
  "Walls of text with no clear call to action",
  "Template sites that all look the same",
] as const;

export const WEB_DESIGN_SOLUTION_HEADER: SectionHeader = {
  label: "The Solution",
  heading: "What a Burch Studio site delivers.",
  subtext:
    "Every website we build is custom-designed around your business, your customers and your goals.",
};

export const WEB_DESIGN_SOLUTIONS: SolutionPoint[] = [
  {
    title: "Mobile-first design",
    description:
      "Built for phones first, because that's where your customers are. Looks great on every screen size.",
  },
  {
    title: "Lightning fast",
    description:
      "Optimised for Google Core Web Vitals. Fast load times mean fewer customers bouncing.",
  },
  {
    title: "Built to convert",
    description:
      "Clear calls to action, visible contact details and a layout designed to turn visitors into enquiries.",
  },
  {
    title: "Custom, not template",
    description:
      "No page builders or cookie-cutter themes. Your site is built from scratch to stand out from competitors.",
  },
  {
    title: "SEO baked in",
    description:
      "Every page is structured to help Google understand your business and rank you for local searches.",
  },
  {
    title: "Ongoing support",
    description:
      "We don't disappear after launch. Updates, tweaks and support whenever you need it.",
  },
];

export const WEB_DESIGN_PROCESS: ProcessStepData[] = [
  {
    number: 1,
    title: "Discovery",
    description:
      "We learn about your business, your customers and what you need your website to do.",
  },
  {
    number: 2,
    title: "Design",
    description:
      "A bespoke layout built around your brand, with mobile-first responsiveness from day one.",
  },
  {
    number: 3,
    title: "Build",
    description:
      "Clean, fast code with SEO baked in. No page builders, no bloat, just performance.",
  },
  {
    number: 4,
    title: "Launch",
    description:
      "Thorough testing across every device, then we go live with your custom domain and SSL.",
  },
  {
    number: 5,
    title: "Support",
    description:
      "Ongoing support to keep your site fast, secure and up to date.",
  },
];

// ==========================================
// SEO SERVICE PAGE (/services/seo)
// ==========================================

export const SEO_META: PageMeta = {
  title: "Local SEO for Trade Businesses | Burch Studio UK",
  description:
    "Get found on Google. Local SEO services for tradesmen in the U.K.",
  canonical: `${SITE_CONFIG.url}/services/seo`,
};

export const SEO_HERO: SectionHeader = {
  label: "SEO & Google Ranking",
  heading: "Get found when it matters most.",
  subtext:
    'Show up when local customers search "plumber near me" or "electrician near me". We make sure Google knows your business exists.',
};

export const SEO_PROBLEMS_HEADER: SectionHeader = {
  label: "The Problem",
  heading: "Why you're invisible on Google.",
  subtext:
    "If your website isn't built with search engines in mind, potential customers will never find you.",
};

export const SEO_PROBLEM_LIST = [
  "No local keywords - Google doesn't know where you work or what you do",
  "Thin content - pages with a few sentences give Google nothing to rank",
  "No Google Business Profile - you're missing from Maps and local results",
  "Poor mobile experience - Google uses mobile-first indexing since 2024",
] as const;

export const SEO_SOLUTION_HEADER: SectionHeader = {
  label: "The Solution",
  heading: "How local SEO works for your business.",
  subtext:
    "We make sure Google understands what you do, where you do it and why you're the best choice.",
};

export const SEO_SOLUTIONS: SolutionPoint[] = [
  {
    title: "Local keyword targeting",
    description:
      'We optimise your site for the searches your customers actually make, like "plumber Peterborough" and "emergency electrician near me".',
  },
  {
    title: "Google Business Profile",
    description:
      "We set up and optimise your Google profile so you show up on Maps and in local search results.",
  },
  {
    title: "Technical SEO",
    description:
      "Page speed, SSL, structured data and meta tags. This is the behind-the-scenes work that tells Google your site is trustworthy.",
  },
  {
    title: "Content that ranks",
    description:
      "Service pages, location pages and blog content written to answer the questions your customers are searching for.",
  },
  {
    title: "Mobile-first indexing",
    description:
      "Google ranks based on your mobile site. We make sure your mobile experience is flawless.",
  },
  {
    title: "Measurable results",
    description:
      "Ranking reports and traffic data so you can see exactly what's working and where you're improving.",
  },
];

// ==========================================
// BRANDING SERVICE PAGE (/services/branding)
// ==========================================

export const BRANDING_META: PageMeta = {
  title: "Branding & Professional Setup | Burch Studio",
  description:
    "Professional domains, email, SSL and branding for trade businesses. Look as good online as the service you deliver.",
  canonical: `${SITE_CONFIG.url}/services/branding`,
};

export const BRANDING_HERO: SectionHeader = {
  label: "Branding & Professional Setup",
  heading: "Look as professional online as you are in person.",
  subtext:
    "Custom domain, professional email, SSL security and consistent branding that builds trust before you even pick up the phone.",
};

export const BRANDING_PROBLEMS_HEADER: SectionHeader = {
  label: "The Problem",
  heading: "What your customers see right now.",
  subtext:
    "Small details make a big difference. These are the things that make potential customers think twice.",
};

export const BRANDING_PROBLEM_LIST = [
  "A Gmail or Outlook email address instead of info@yourbusiness.co.uk",
  '"Not Secure" warnings in the browser because there\'s no SSL certificate',
  "Inconsistent branding - different logos, colours and fonts everywhere",
  "No Google Business Profile - invisible on Maps and local search",
] as const;

export const BRANDING_SOLUTION_HEADER: SectionHeader = {
  label: "The Solution",
  heading: "The Burch Studio branding package.",
  subtext:
    "Small changes that make a huge impression. We handle the technical setup so you don't have to.",
};

export const BRANDING_SOLUTIONS: SolutionPoint[] = [
  {
    title: "Custom domain",
    description:
      "Your own .co.uk domain that's easy to remember and looks professional, with no more freebie URLs.",
  },
  {
    title: "Professional email",
    description:
      "info@yourbusiness.co.uk instead of dave_plumber_87@gmail.com. Instant credibility with every message you send.",
  },
  {
    title: "SSL certificate",
    description:
      'HTTPS security so browsers show the padlock, not a "Not Secure" warning. Google rewards it too.',
  },
  {
    title: "Consistent branding",
    description:
      "Logo, colours and fonts that work together across your website, email signature and social profiles.",
  },
  {
    title: "Google Business Profile",
    description:
      "Show up on Google Maps with your hours, reviews and contact details, where customers actually look.",
  },
  {
    title: "Social media setup",
    description:
      "Consistent profiles across the platforms that matter for your trade, with your branding applied.",
  },
];

// ==========================================
// ABOUT PAGE (/about)
// ==========================================

export const ABOUT_META: PageMeta = {
  title: "About Burch Studio | Web Developer Peterborough",
  description:
    "Burch Studio is a UK-based studio building premium websites for ambitious businesses and robust web applications for companies delivering real services.",
  canonical: `${SITE_CONFIG.url}/about`,
};

export const ABOUT_HERO: SectionHeader = {
  label: "About",
  heading: "Built around high standards.",
  subtext:
    "Burch Studio was started to help good businesses present themselves properly online and to build software with the care serious companies need.",
};

export const ABOUT_CONTENT = {
  intro:
    "Burch Studio started with a simple belief. A business can do excellent work and still get overlooked if its website fails to show that standard. We wanted to fix that and to build software with the same level of care.",
  background:
    "We're a UK-based studio building fast, modern websites and robust web applications with Next.js, React, Node.js and PostgreSQL. Whether it's a five-page website or a multi-tenant SaaS platform, the goal stays the same: understand the business properly, make the right decisions early and build something that holds up.",
  whyTrades:
    "We like working with trade and service businesses because the gap is so obvious. You can see years of graft, skill and pride in the work, then land on a website that says none of it. A good website should carry that standard across, help people trust you faster and make it easier for the right customers to choose you.",
  whySaas:
    "We also work with companies building software as a service, internal platforms and more complex web products. In that world, care shows up in architecture, reliability, security and clarity. The platform is the service, so it has to be built with real responsibility from the start.",
  approach:
    "We keep the process straightforward. We listen first, challenge what needs challenging and stay focused on what will move the business forward. No jargon for the sake of it. No unnecessary features. No pretending every project needs a bloated process.",
  techNote:
    "Our core stack includes Next.js, React, TypeScript, Node.js, PostgreSQL, containerised workers and AWS infrastructure. Modern tools, chosen for performance, maintainability and long-term reliability.",
} as const;

// ==========================================
// CONTACT PAGE (/contact)
// ==========================================

export const CONTACT_META: PageMeta = {
  title: "Contact Burch Studio | Free Website Audit",
  description:
    "Get in touch for a free website audit. Based in Peterborough, working with trade businesses across Cambridgeshire.",
  canonical: `${SITE_CONFIG.url}/contact`,
};

export const CONTACT_HERO: SectionHeader = {
  label: "Get in Touch",
  heading: "Let's talk about what the business needs.",
  subtext:
    "Whether you need a stronger website, better visibility, or a platform built with more care, get in touch and we'll come back with clear advice.",
};

export const CONTACT_FORM = {
  successMessage: "Thanks! We'll get back to you within 24 hours.",
  errorMessage:
    "Something went wrong. Please try again or email us directly at",
} as const;

export const CONTACT_FAQS: FAQItem[] = [
  {
    question: "How much does a website cost?",
    answer:
      "Every project is different, but most trade business websites start from a few hundred pounds. We'll give you an honest quote after understanding what you need, with no hidden fees.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most sites are designed, built and live within 2–4 weeks. Larger projects may take a little longer but we'll always give you a clear timeline upfront.",
  },
  {
    question: "Do I need to provide content?",
    answer:
      "It helps if you have photos of your work and a rough idea of what you want to say, but we can help write the copy and source imagery if needed.",
  },
  {
    question: "Will my site work on mobile?",
    answer:
      "Absolutely. Every site we build is mobile-first. That means it's designed for phones first, then enhanced for tablets and desktops.",
  },
  {
    question: "What about hosting and domains?",
    answer:
      "We handle everything: domain registration, hosting setup, SSL certificates and professional email. You don't need to worry about the technical stuff.",
  },
];

// ==========================================
// PORTFOLIO PAGE (/portfolio)
// ==========================================

export const PORTFOLIO_META: PageMeta = {
  title: "Portfolio | Burch Studio",
  description:
    "Case studies and examples of websites and web applications built by Burch Studio. Real projects, real results.",
  canonical: `${SITE_CONFIG.url}/portfolio`,
};

export const PORTFOLIO_HERO: SectionHeader = {
  label: "Portfolio",
  heading: "Work built with care.",
  subtext:
    "A look at the businesses and products we've helped shape and the standard we bring to every project.",
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: "private-saas-client",
    title: "Private SaaS Client",
    category: "SaaS Platform",
    description:
      "A live company intelligence platform for UK businesses. Real-time monitoring of financial health, risk signals and corporate events, powered by AI-generated analysis and multi-source data pipelines.",
    image: "/images/private-saas.webp",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Auth0",
      "AI Integration",
      "Vercel",
    ],
    problem:
      "Businesses trading with, lending to or depending on UK companies had no simple way to monitor financial health and risk signals in real time. Existing tools were fragmented, expensive and required manual effort to interpret raw filings and corporate data.",
    solution:
      "Designed and built the entire platform from scratch: architecture, frontend, API, background workers and AI integration. The system pulls data from Companies House, The Gazette and news sources into a unified feed. AI extracts financial data from both digital and paper filings, scores company health using established models and generates plain-English summaries of every detected change. Multi-tenant with role-based access, configurable alerts and a report builder for meeting-ready PDFs.",
    results: [
      "Live platform serving real users in production",
      "100+ API endpoints, 30+ background job processors, 40+ UI pages",
      "Sub-2-second page loads across the application",
      "AI-powered extraction from both digital and paper-filed accounts",
    ],
  },
  {
    slug: "noble-mortgages",
    title: "Noble Mortgages",
    category: "Client Website",
    description:
      "Professional mortgage broker website with lead generation focus. Conversion-optimised design with mortgage calculator, multi-step forms and SEO-ready structure.",
    image: "/images/noble-mortgages-image-1.webp",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "SEO"],
    liveUrl: "https://noble-mortgages-new.vercel.app/",
    problem:
      "A mortgage broker with no website at all, relying entirely on word of mouth and referrals. Potential clients had no way to find them online, understand their services, or get in touch outside of business hours.",
    solution:
      "Designed and developed a conversion-focused website with clean, professional design. Implemented an interactive mortgage calculator, multi-step lead generation forms, clear service pages and a testimonials section, all optimised for search engines and mobile devices.",
    results: [
      "First professional web presence for the business",
      "Generating inbound enquiries from day one",
      "95+ Google PageSpeed score",
      "Ranking on Google for local mortgage terms",
    ],
  },
  {
    slug: "refine-barbers",
    title: "Refine Barbers",
    category: "Client Website",
    description:
      "Modern website for a local barber shop with no previous online presence. Clean, mobile-first design showcasing services, pricing and a direct link to their Booksy booking platform.",
    image: "/images/refine-barbers.webp",
    technologies: ["React", "JavaScript", "Node.js", "CSS"],
    liveUrl: "https://refinebarbers-website.vercel.app",
    problem:
      "A popular local barber shop with no website and zero online visibility. Customers could only find them through word of mouth and there was no way to check services, pricing or opening hours without calling or visiting in person.",
    solution:
      "Built a clean, mobile-first website showcasing the shop's services, pricing and team. Integrated a direct link to their existing Booksy booking platform so customers can book online without the shop needing to change their workflow.",
    results: [
      "First online presence for the business",
      "Customers can now check services and pricing anytime",
      "Direct Booksy integration drives online bookings",
      "Mobile-first design - works perfectly on phones",
    ],
  },
];

// ==========================================
// WEB APPS SERVICE PAGE (/services/web-apps)
// ==========================================

export const WEB_APPS_META: PageMeta = {
  title: "Web Applications & SaaS Development | Burch Studio",
  description:
    "Web application and SaaS development for companies that need reliable platforms, thoughtful architecture and software built with care.",
  canonical: `${SITE_CONFIG.url}/services/web-apps`,
};

export const WEB_APPS_HERO: SectionHeader = {
  label: "Web Applications & SaaS",
  heading: "Software built with responsibility.",
  subtext:
    "For companies delivering a real service through software, we build platforms that are stable, clear and ready to earn trust at scale.",
};

export const WEB_APPS_PROBLEMS_HEADER: SectionHeader = {
  label: "The Problem",
  heading: "Why most web apps fail.",
  subtext:
    "Too many platforms are rushed into the world before the foundations are strong enough to support the service behind them.",
};

export const WEB_APPS_PROBLEM_LIST = [
  "Rushed architecture that crumbles when real users arrive",
  "No separation of concerns - everything tangled together",
  "Security as an afterthought, not a foundation",
  "No plan for scaling beyond the first version",
] as const;

export const WEB_APPS_SOLUTION_HEADER: SectionHeader = {
  label: "The Solution",
  heading: "Production-ready from day one.",
  subtext:
    "We build around the service the platform needs to provide, then make the technical decisions that keep it dependable as the product grows.",
};

export const WEB_APPS_SOLUTIONS: SolutionPoint[] = [
  {
    title: "Full-stack TypeScript",
    description:
      "Next.js and Node.js with strict TypeScript throughout. End-to-end type safety from database to UI.",
  },
  {
    title: "Scalable architecture",
    description:
      "Event-driven models, background workers and clear separation between monitoring, processing and presentation layers.",
  },
  {
    title: "Secure by design",
    description:
      "Role-based access control, secure authentication flows, audit logging and encryption built in from the start, not bolted on later.",
  },
  {
    title: "Database design",
    description:
      "PostgreSQL with well-designed schemas, proper migrations and query optimisation. Data modelling that scales with your business.",
  },
  {
    title: "Multi-tenant ready",
    description:
      "Strict data isolation between tenants, configurable per-tenant settings and infrastructure that supports growth.",
  },
  {
    title: "Cloud deployment",
    description:
      "AWS infrastructure with containerised workers, CI/CD pipelines and monitoring. Production-ready from launch day.",
  },
];

// ==========================================
// FOOTER
// ==========================================

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Services",
    links: [
      { label: "Web Design", href: "/services/web-design" },
      { label: "SEO & Ranking", href: "/services/seo" },
      { label: "Branding", href: "/services/branding" },
      { label: "Web Apps & SaaS", href: "/services/web-apps" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
  {
    heading: "Get in touch",
    links: [
      {
        label: SITE_CONFIG.email,
        href: `mailto:${SITE_CONFIG.email}`,
        external: true,
      },
      {
        label: SITE_CONFIG.phone,
        href: `tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`,
        external: true,
      },
      { label: SITE_CONFIG.location, href: "#" },
    ],
  },
];

export const FOOTER_TAGLINE =
  "Premium websites for businesses that deserve to be noticed and robust platforms for companies building real services.";
