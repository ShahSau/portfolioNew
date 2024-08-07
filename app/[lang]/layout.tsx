
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import { Locale } from '@/i18n.config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shahriar Karim Saurov',
  description: 'I am Shahriar, an accomplished experienced Full Stack Developer in Berlin, Germany who is passionate about transforming complex challenges into elegant digital solutions', 
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  return (
    <html lang={params}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
