export const SITE_CONFIG = {
  name: "Burch Studio",
  tagline: "Web design for local trades",
  url: "https://burchstudio.co.uk",
  email: "hello@burchstudio.co.uk",
  phone: "+44 XXXX XXXXXX",
  location: "Peterborough, UK",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

export const STATS = {
  mobileTraffic: {
    value: "60%+",
    label: "of all web traffic is now from mobile devices",
  },
  localSearch: {
    value: "76%",
    label: "of local mobile searches lead to a visit within 24 hours",
  },
  loadTime: {
    value: "3s",
    label: "is all it takes for 53% of visitors to give up and leave",
  },
  credibility: {
    value: "75%",
    label: "of people judge credibility by website design alone",
  },
} as const;

export const PROBLEMS = [
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
      "Browsers show a \"Not Secure\" warning before customers even see your site. Many won't click past it — and Google penalises you for it.",
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
] as const;

export const SERVICES = [
  {
    icon: "⚡",
    title: "Website Design & Development",
    description:
      "Custom-built, mobile-first websites that load fast, look professional, and make it effortless for customers to get in touch.",
    href: "/services/web-design",
  },
  {
    icon: "🔍",
    title: "SEO & Google Ranking",
    description:
      "Show up when someone searches \"plumber near me\" or \"electrician Peterborough\". Local SEO, technical optimisation, and content that ranks.",
    href: "/services/seo",
  },
  {
    icon: "🎯",
    title: "Branding & Professional Setup",
    description:
      "Custom domain, professional email, SSL security, and consistent branding that matches the quality of your work.",
    href: "/services/branding",
  },
] as const;
