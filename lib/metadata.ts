import { Metadata } from 'next';

export const siteConfig = {
  name: 'Shahriar - Portfolio',
  description: 'Full-stack developer specializing in React, Next.js, and modern web technologies. Explore my projects and experience.',
  url: 'https://shahsau.vercel.app/',
  ogImage: 'https://shahsau.vercel.app/og-image.jpg',
  keywords: [
    'portfolio',
    'web developer',
    'full-stack developer',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'frontend developer',
    'backend developer',
    'software engineer',
    'GraphQL',
    'Node.js',
    'CSS',
    'Golang',
    'Tailwind CSS',
    'MongoDB',
    'PostgreSQL',
    'Docker',
    'Kubernetes',
    'AWS',
    'DevOps',
    'Angular',
    'Serverless',
    'Senior Developer',
  ],
  author: {
    name: 'Shahriar',
    email: 'shahriarksaurov@gmail.com',
    twitter: '@shahriar_karim',
    github: 'shahsau',
    linkedin: 'shahriar-saurov',
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
      type: 'website',
      locale: 'en_US',
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
      card: 'summary_large_image',
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
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
  };
}

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author.name,
    url: siteConfig.url,
    email: siteConfig.author.email,
    jobTitle: 'Full-Stack Developer',
    description: siteConfig.description,
    sameAs: [
      `https://github.com/${siteConfig.author.github}`,
      `https://linkedin.com/in/${siteConfig.author.linkedin}`,
      `https://twitter.com/${siteConfig.author.twitter.replace('@', '')}`,
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
    },
  };
}
