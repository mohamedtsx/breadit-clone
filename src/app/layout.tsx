import '@/styles/globals.css'
import { Inter } from 'next/font/google'

import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar'



const inter = Inter({subsets: ['latin']});


export const metadata = {
  title: 'Breadit',
  description: 'A Reddit clone built with Next.js and TypeScript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={cn('text-slate-900 antialiased', inter.className)}>
      <body>
        <Navbar />
        <main className='container '>
          {children}
        </main>
      </body>
    </html>
  )
}
