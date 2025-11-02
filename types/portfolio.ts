export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  location?: string;
  description: string;
  logo: string;
  technologies: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  text: string;
  avatar: string;
}
