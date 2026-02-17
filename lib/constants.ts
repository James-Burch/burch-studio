import type {
  NavLink,
  HeroWord,
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
  { label: "Contact", href: "/contact" },
];

export const NAV_CTA = {
  label: "Free Audit",
  href: "/contact",
} as const;

// ==========================================
// HOME PAGE — META
// ==========================================

export const HOME_META: PageMeta = {
  title: "Burch Studio — Web Design & Development | UK",
  description:
    "Modern websites and web applications for businesses of all sizes. From trade business sites to full-scale SaaS platforms — built to perform.",
  canonical: SITE_CONFIG.url,
};

// ==========================================
// HOME PAGE — HERO
// ==========================================

export const HERO = {
  tag: "Web design & development studio",
  headlineWords: [
    { text: "We", accent: false },
    { text: "build", accent: false },
    { text: "websites", accent: false },
    { text: "that", accent: false },
    { text: "actually", accent: true },
    { text: "work.", accent: true },
  ] satisfies HeroWord[],
  subtext:
    "From mobile-first websites for local businesses to full-scale web applications and SaaS platforms — we build fast, modern, production-ready software.",
  primaryCTA: { label: "Get in Touch", href: "/contact" },
  secondaryCTA: { label: "See What We Do", href: "/services" },
} as const;

// ==========================================
// HOME PAGE — PROBLEMS
// ==========================================

export const PROBLEMS_HEADER: SectionHeader = {
  label: "The Problem",
  heading: "Your website might be costing you customers.",
  subtext:
    "We audit trade businesses every week. These are the issues we find most — and every one of them is losing you work.",
};

export const PROBLEMS: ProblemCardData[] = [
  {
    icon: "📱",
    title: "Not mobile-friendly",
    description:
      "Your customers are searching on their phones. If your site doesn't work on mobile, they'll tap the back button and call a competitor.",
    stat: "60%+ of all web traffic is now mobile",
  },
  {
    icon: "🔓",
    title: "No SSL security",
    description:
      'Browsers show a "Not Secure" warning before customers even see your site. Many won\'t click past it — and Google penalises you for it.',
    stat: "Google has penalised non-HTTPS sites since 2014",
  },
  {
    icon: "⏱️",
    title: "Painfully slow",
    description:
      "Every second your site takes to load, you lose visitors. Heavy images, old code, and cheap hosting are the usual culprits.",
    stat: "53% of visitors leave after 3 seconds",
  },
  {
    icon: "👻",
    title: "Invisible on Google",
    description:
      "No SEO means no visibility. If your site has thin content and no local targeting, your competitors will always rank above you.",
    stat: "76% of local searches lead to a same-day visit",
  },
];

// ==========================================
// HOME PAGE — SERVICES OVERVIEW
// ==========================================

export const SERVICES_HEADER: SectionHeader = {
  label: "What We Do",
  heading: "Here's how we help.",
  subtext:
    "Whether you need a website that wins local customers or a platform that scales to thousands of users — we've got you covered.",
};

export const SERVICES: ServiceCardData[] = [
  {
    icon: "⚡",
    title: "Website Design & Development",
    description:
      "Custom-built, mobile-first websites that load fast, look professional, and make it effortless for customers to get in touch. No templates. No page builders.",
    href: "/services/web-design",
    linkText: "Learn more",
  },
  {
    icon: "🔍",
    title: "SEO & Google Ranking",
    description:
      "Get found when it matters. Local SEO, technical optimisation, and content strategy that puts your business in front of the right people.",
    href: "/services/seo",
    linkText: "Learn more",
  },
  {
    icon: "🎯",
    title: "Branding & Professional Setup",
    description:
      "Custom domain, professional email, SSL security, and consistent branding that makes your business look as good online as the service you deliver.",
    href: "/services/branding",
    linkText: "Learn more",
  },
  {
    icon: "🚀",
    title: "Web Applications & SaaS",
    description:
      "Full-stack web applications and SaaS platforms built with Next.js, TypeScript, and PostgreSQL. Scalable architecture, secure by design.",
    href: "/services/web-apps",
    linkText: "Learn more",
  },
];

// ==========================================
// HOME PAGE — STATS (PRD Section 6.2 — exact values only)
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
// HOME PAGE — TESTIMONIALS (Replace with real feedback)
// ==========================================

export const TESTIMONIALS_HEADER: SectionHeader = {
  label: "Results",
  heading: "What our clients say.",
  subtext:
    "Don't just take our word for it — here's what our clients have to say.",
};

export const TESTIMONIALS_DISCLAIMER =
  "* Example testimonials — replace with real client feedback";

export const TESTIMONIALS: TestimonialData[] = [
  {
    quote:
      "Within two weeks of launching our new site, we had more enquiries than we'd had in the previous three months. The phone hasn't stopped ringing.",
    name: "David Mitchell",
    role: "Mitchell Plumbing & Heating, Peterborough",
    initials: "DM",
    rating: 5,
  },
  {
    quote:
      'The team explained everything without the jargon. We went from invisible on Google to ranking on the first page for "electrician Stamford". Brilliant work.',
    name: "Sarah Keane",
    role: "Keane Electrical Services, Stamford",
    initials: "SK",
    rating: 5,
  },
];

// ==========================================
// HOME PAGE — CTA BANNER
// ==========================================

export const CTA_BANNER = {
  heading: "Not sure if your website is costing you customers?",
  subtext:
    "Get a free, no-obligation website audit. We'll show you exactly what's holding you back — and how to fix it.",
  cta: { label: "Request Your Free Audit", href: "/contact" },
} as const;

// ==========================================
// SERVICES HUB PAGE (/services)
// ==========================================

export const SERVICES_HUB_META: PageMeta = {
  title: "Our Services | Web Design, SEO, Branding & Web Apps | Burch Studio",
  description:
    "Website design, SEO, branding and web application development. From local business sites to scalable SaaS platforms.",
  canonical: `${SITE_CONFIG.url}/services`,
};

export const SERVICES_HUB_HERO: SectionHeader = {
  label: "Our Services",
  heading: "Everything you need to succeed online.",
  subtext:
    "From a website that wins you work, to SEO that gets you found, to full-scale web applications — we build it all.",
};

export const SERVICES_HUB_BOTTOM_CTA = {
  heading: "Not sure what you need?",
  subtext:
    "No worries — get in touch and we'll work it out together. No pressure, no jargon.",
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
    "Custom-built, mobile-first websites for trade businesses — designed to load fast, rank on Google, and turn visitors into customers.",
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
    "Every website we build is custom-designed around your business, your customers, and your goals.",
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
      "Clear calls to action, visible contact details, and a layout designed to turn visitors into enquiries.",
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
      "We don't disappear after launch. Updates, tweaks, and support whenever you need it.",
  },
];

export const WEB_DESIGN_PROCESS: ProcessStepData[] = [
  {
    number: 1,
    title: "Discovery",
    description:
      "We learn about your business, your customers, and what you need your website to do.",
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
      "Clean, fast code with SEO baked in. No page builders, no bloat — just performance.",
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
      "Ongoing support to keep your site fast, secure, and up to date.",
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
  "No local keywords — Google doesn't know where you work or what you do",
  "Thin content — pages with a few sentences give Google nothing to rank",
  "No Google Business Profile — you're missing from Maps and local results",
  "Poor mobile experience — Google uses mobile-first indexing since 2024",
] as const;

export const SEO_SOLUTION_HEADER: SectionHeader = {
  label: "The Solution",
  heading: "How local SEO works for your business.",
  subtext:
    "We make sure Google understands what you do, where you do it, and why you're the best choice.",
};

export const SEO_SOLUTIONS: SolutionPoint[] = [
  {
    title: "Local keyword targeting",
    description:
      'We optimise your site for the searches your customers actually make — "plumber Peterborough", "emergency electrician near me", and more.',
  },
  {
    title: "Google Business Profile",
    description:
      "We set up and optimise your Google profile so you show up on Maps and in local search results.",
  },
  {
    title: "Technical SEO",
    description:
      "Page speed, SSL, structured data, meta tags — the behind-the-scenes work that tells Google your site is trustworthy.",
  },
  {
    title: "Content that ranks",
    description:
      "Service pages, location pages, and blog content written to answer the questions your customers are searching for.",
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
    "Custom domain, professional email, SSL security, and consistent branding that builds trust before you even pick up the phone.",
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
  "Inconsistent branding — different logos, colours, and fonts everywhere",
  "No Google Business Profile — invisible on Maps and local search",
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
      "Your own .co.uk domain that's easy to remember and looks professional — no more freebie URLs.",
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
      "Logo, colours, and fonts that work together across your website, email signature, and social profiles.",
  },
  {
    title: "Google Business Profile",
    description:
      "Show up on Google Maps with your hours, reviews, and contact details — where customers actually look.",
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
    "Burch Studio — a UK-based web development studio helping businesses succeed online with modern websites and scalable web applications.",
  canonical: `${SITE_CONFIG.url}/about`,
};

export const ABOUT_HERO: SectionHeader = {
  label: "About",
  heading: "Built by someone who ships.",
  subtext:
    "A UK-based web development studio building everything from local business websites to enterprise SaaS platforms.",
};

export const ABOUT_CONTENT = {
  intro:
    "Burch Studio was started because we saw two gaps in the market. Trade businesses losing customers to terrible websites. And companies needing serious web applications built by a team that actually cares about the architecture.",
  background:
    "We're a full-stack TypeScript studio based in the UK. We build fast, modern websites and scalable web applications using Next.js, React, Node.js, and PostgreSQL. Whether it's a five-page website or a multi-tenant SaaS platform, we apply the same standards: clean code, solid architecture, and production-ready engineering.",
  whyTrades:
    "We work with trade businesses because the gap between the quality of their work and the quality of their online presence is massive. A plumber who's been in the game for 20 years shouldn't be losing jobs to a competitor with a flashier website.",
  whySaas:
    "On the other side, we build and lead development on complex web applications — multi-tenant platforms with event-driven architectures, role-based access control, background job pipelines, and strict security requirements. We bring the same clarity and discipline to both.",
  approach:
    "We keep things simple. No jargon, no unnecessary features, no surprise invoices. Just honest conversations about what your business needs and software that delivers it.",
  techNote:
    "Core stack: Next.js, React, TypeScript, Node.js, PostgreSQL, containerised workers, and AWS cloud infrastructure. The same technologies used by companies like Vercel, Netflix, and Stripe.",
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
  heading: "Let's talk about your website.",
  subtext:
    "Whether you need a new site, better SEO, or just want to know where you stand — get in touch and we'll get back to you within 24 hours.",
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
      "Every project is different, but most trade business websites start from a few hundred pounds. We'll give you an honest quote after understanding what you need — no hidden fees.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most sites are designed, built, and live within 2–4 weeks. Larger projects may take a little longer, but we'll always give you a clear timeline upfront.",
  },
  {
    question: "Do I need to provide content?",
    answer:
      "It helps if you have photos of your work and a rough idea of what you want to say, but we can help write the copy and source imagery if needed.",
  },
  {
    question: "Will my site work on mobile?",
    answer:
      "Absolutely — every site we build is mobile-first. That means it's designed for phones first, then enhanced for tablets and desktops.",
  },
  {
    question: "What about hosting and domains?",
    answer:
      "We handle everything — domain registration, hosting setup, SSL certificates, and professional email. You don't need to worry about the technical stuff.",
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
  heading: "Our work speaks for itself.",
  subtext:
    "Real projects, real results. Here are some examples of what we've built.",
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: "noble-mortgages",
    title: "Noble Mortgages",
    category: "Client Website",
    description:
      "Professional mortgage broker website with lead generation focus. Conversion-optimised design with mortgage calculator, multi-step forms, and SEO-ready structure.",
    image: "/images/noble-mortgages.webp",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "SEO"],
    liveUrl: "https://noblemortgages.co.uk/",
    problem:
      "A mortgage broker competing against larger firms with an outdated, non-mobile-friendly website. Potential clients couldn't easily understand services or get quick mortgage estimates, and the site was generating almost no inbound leads.",
    solution:
      "Designed and developed a conversion-focused website with clean, professional design. Implemented an interactive mortgage calculator, multi-step lead generation forms, clear service pages, and a testimonials section — all optimised for search engines and mobile devices.",
    results: [
      "250% increase in website enquiries",
      "Improved Google search rankings for key terms",
      "95+ Google PageSpeed score",
      "40% increase in qualified leads reported by client",
    ],
  },
  {
    slug: "refine-barbers",
    title: "Refine Barbers",
    category: "Client Website",
    description:
      "Modern booking website for a local barber shop. Real-time appointment scheduling, user authentication, and responsive mobile-first design.",
    image: "/images/refine-barbers.webp",
    technologies: ["React", "JavaScript", "Node.js", "CSS"],
    liveUrl: "https://refinebarbers-website.vercel.app",
    problem:
      "A local barber shop losing customers due to an outdated phone-only booking system. Customers couldn't see availability, staff spent too much time managing appointments manually, and the business was missing growth opportunities through lack of digital presence.",
    solution:
      "Built a modern, responsive booking platform with a React frontend and Node.js backend. Implemented real-time availability checking, automated confirmation emails, user authentication, and an admin dashboard for staff to manage appointments.",
    results: [
      "300% increase in online bookings in first month",
      "40% reduction in no-shows through email reminders",
      "Improved customer satisfaction scores",
      "50+ regular customers using the platform",
    ],
  },
];

// ==========================================
// WEB APPS SERVICE PAGE (/services/web-apps)
// ==========================================

export const WEB_APPS_META: PageMeta = {
  title: "Web Applications & SaaS Development | Burch Studio",
  description:
    "Full-stack web application and SaaS platform development. Next.js, TypeScript, PostgreSQL. Scalable, secure, production-ready.",
  canonical: `${SITE_CONFIG.url}/services/web-apps`,
};

export const WEB_APPS_HERO: SectionHeader = {
  label: "Web Applications & SaaS",
  heading: "Software built to scale.",
  subtext:
    "Full-stack web applications and SaaS platforms — architected for growth, engineered for reliability, built with modern TypeScript.",
};

export const WEB_APPS_PROBLEMS_HEADER: SectionHeader = {
  label: "The Problem",
  heading: "Why most web apps fail.",
  subtext:
    "Building a web application is hard. Building one that scales, stays secure, and doesn't fall apart under real-world usage is harder.",
};

export const WEB_APPS_PROBLEM_LIST = [
  "Rushed architecture that crumbles when real users arrive",
  "No separation of concerns — everything tangled together",
  "Security as an afterthought, not a foundation",
  "No plan for scaling beyond the first version",
] as const;

export const WEB_APPS_SOLUTION_HEADER: SectionHeader = {
  label: "The Solution",
  heading: "Production-ready from day one.",
  subtext:
    "Every application we build is designed around clear architecture, strict type safety, and the kind of engineering practices that hold up in production.",
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
      "Event-driven models, background workers, and clear separation between monitoring, processing, and presentation layers.",
  },
  {
    title: "Secure by design",
    description:
      "Role-based access control, secure authentication flows, audit logging, and encryption built in from the start — not bolted on later.",
  },
  {
    title: "Database design",
    description:
      "PostgreSQL with well-designed schemas, proper migrations, and query optimisation. Data modelling that scales with your business.",
  },
  {
    title: "Multi-tenant ready",
    description:
      "Strict data isolation between tenants, configurable per-tenant settings, and infrastructure that supports growth.",
  },
  {
    title: "Cloud deployment",
    description:
      "AWS infrastructure with containerised workers, CI/CD pipelines, and monitoring. Production-ready from launch day.",
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
      { label: "Contact", href: "/contact" },
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
  "Modern, mobile-first websites for trade businesses. Built to rank. Designed to convert.";
