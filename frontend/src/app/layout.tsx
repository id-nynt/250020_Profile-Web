import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Ngoc Yen Nhi Tran | Portfolio',
  description: 'Software Developer Intern - Master of Computer Science student passionate about full-stack development and cloud technologies.',
  keywords: ['Software Developer', 'Computer Science', 'React', 'Next.js', 'Python', 'AWS', 'Portfolio'],
  authors: [{ name: 'Ngoc Yen Nhi Tran' }],
  openGraph: {
    title: 'Ngoc Yen Nhi Tran | Portfolio',
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
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}