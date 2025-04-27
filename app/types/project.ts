export interface Technology {
    name: string;
    color: string;
  }
  
  export interface ProjectLink {
    type: 'github' | 'youtube' | 'demo';
    url: string;
  }
  
  export interface IProject {
    id: string;
    title: string;
    description: string | JSX.Element;
    imageUrl: string;
    links: ProjectLink[];
    technologies: Technology[];
  }