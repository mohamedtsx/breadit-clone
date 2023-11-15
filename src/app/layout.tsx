import '@/styles/globals.css'

import Navbar from '@/components/Navbar'

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
    <html lang='en'>
      <body>
        <Navbar />
        <main className='container '>
          {children}
        </main>
      </body>
    </html>
  )
}
