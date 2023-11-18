import '@/styles/globals.css'

import React from 'react';
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'


import { cn } from '@/lib/utils';
import { locales } from '../../config';

import Navbar from '@/components/Navbar'


interface RootLayoutProps {
  children: React.ReactNode,
  params: {
    locale: 'en' | 'ar'
  }
}

const inter = Inter({subsets: ['latin']});


export const metadata = {
  title: 'Breadit',
  description: 'A Reddit clone built with Next.js and TypeScript.',
}

export default function RootLayout({ children, params: { locale }} : RootLayoutProps ) {

   if (!locales.includes(locale as any)) notFound();

  return (
    <html 
      lang={locale} 
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className={cn('text-slate-900 antialiased', inter.className)}
    >
      <body>
        <Navbar />
        <main className='container '>
          {children}
        </main>
      </body>
    </html>
  )
}


export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}