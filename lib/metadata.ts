import { Metadata } from "next";

export const siteConfig = {
  name: "Shahriar - Senior Javascript, Typescript, Golang, Python Full Stack Developer",

  description:
    "Senior Software Engineer specializing in JavaScript, Golang, React, Next.js, AWS, Nestjs, GraphQL, Typescript, Node, FastAPI, Mongodb, Postgresql,  and Python. Building scalable backend systems, microservices, and modern web applications.",
    
  url: "https://shahsau.vercel.app/",
  ogImage: "https://shahsau.vercel.app/og-image.jpg",

  keywords: [
    "Senior Developer",
    "Golang Developer",
    "Python Developer",
    "JavaScript Developer",
    "Senior Software Engineer",
    "Full-stack developer",
    "TypeScript",
    "React",
    "Next.js",
    "NestJS",
    "FastAPI",
    "Web Development",
    "Scalable Systems",
    "Cloud Computing",
    "Software Engineering",
    "Frontend Development",
    "Backend Development",
    "API Development",
    "Database Design",
    "Performance Optimization",
    "Code Quality",
    "Agile Methodologies",
    "Team Collaboration",
    "Problem Solving",
    "Tech Enthusiast",
    "Continuous Learning",
    "Open Source Contributor",
    "Mentorship",
    "System Design",
    "Backend Architecture",
    "Microservices",
    "RESTful APIs",
    "Frontend Frameworks",
    "UI/UX Design",
    "Testing and Debugging",
    "Version Control",
    "CI/CD",
    "Cloud Platforms",
    "AWS",
    "GCP",
    "Azure",
    "Docker",
    "Kubernetes",
    "Serverless Computing",
    "GraphQL",
    "NoSQL Databases",
    "SQL Databases",
    "Performance Tuning",
    "Security Best Practices",
    "DevOps",
    "Agile Development",
    "Scrum",
    "Kanban",
    "Collaboration Tools",
    "JIRA",
    "Confluence",
    "Slack",
    "GitHub",
    "GitLab",
    "Code Reviews",
    "Node.js",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "MongoDB",
    "DevOps",
    "Serverless",
    "GraphQL",
    "Tailwind CSS",
  ],
  author: {
    name: "Shahriar",
    email: "shahriarksaurov@gmail.com",
    twitter: "@shahriar_karim",
    github: "shahsau",
    linkedin: "shahriar-saurov",
  },
};

export function generateMetadata(): Metadata {
  return {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [
      {
        name: siteConfig.author.name,
        url: siteConfig.url,
      },
    ],
    creator: siteConfig.author.name,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
      creator: siteConfig.author.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
  };
}

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    url: siteConfig.url,
    email: siteConfig.author.email,
    jobTitle: "Senior Software Engineer, Full Stack Developer, Frontend Developer, Backend Developer",
    description: siteConfig.description,
    sameAs: [
      `https://github.com/${siteConfig.author.github}`,
      `https://linkedin.com/in/${siteConfig.author.linkedin}`,
      `https://twitter.com/${siteConfig.author.twitter.replace("@", "")}`,
    ],
    knowsAbout: [ "TypeScript", "React", "Next.js", "NestJS", "FastAPI", "Web Development", "Scalable Systems", "Cloud Computing", "Frontend Development", "Backend Development", "API Development", "Database Design", "Performance Optimization", "Code Quality", "Agile Methodologies", "System Design", "Backend Architecture", "Microservices", "RESTful APIs", "Frontend Frameworks", "UI/UX Design", "Testing and Debugging", "Version Control", "CI/CD", "Cloud Platforms", "AWS", "GCP", "Azure", "Docker", "Kubernetes", "Serverless Computing", "GraphQL", "NoSQL Databases", "SQL Databases", "Performance Tuning", "Security Best Practices", "DevOps", "Agile Development", "GitHub", "GitLab", "Node.js", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "DevOps", "Serverless", "GraphQL", "Tailwind CSS"]
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
  };
}
