export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
  youtubeLink: string;
  dockerLink: string;
  type: string;
  technologies: string[];
  description: string;
  longDescription: string;
  featured?: boolean;
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
