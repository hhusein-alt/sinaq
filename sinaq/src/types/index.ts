export interface JobSimCard {
  title: string;
  category: string;
  difficulty: "Introductory" | "Intermediate" | "Advanced";
  duration: string;
  href: string;
  imageAlt: string;
  imageSrc: string;
  badge?: string;
}

export interface CompanyLogo {
  src: string;
  alt: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  outcome: string;
  imageSrc: string;
  imageAlt: string;
}

export interface EmployerCard {
  name: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface StatItem {
  value: string;
  description: string;
}
