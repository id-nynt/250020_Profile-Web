import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Janny Tran | Portfolio',
  description: 'Software Developer Intern - Master of Computer Science student passionate about full-stack development and cloud technologies.',
  keywords: ['Software Developer', 'Computer Science', 'React', 'Next.js', 'Python', 'AWS', 'Portfolio'],
  authors: [{ name: 'Janny Tran' }],
  openGraph: {
    title: 'Janny Tran | Portfolio',
    description: 'Software Developer Intern - Master of Computer Science student',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}