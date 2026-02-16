export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Problem {
  icon: string;
  title: string;
  description: string;
  stat: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  rating: number;
}
