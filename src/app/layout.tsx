import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Bob — Engineer. Maker. Builder.',
  description:
    'Personal portfolio of Bob — mechanical engineer, AI researcher, and TEDx speaker.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`} style={{ backgroundColor: '#0A0A0A' }}>
      <body className="min-h-screen flex flex-col bg-dark-950 text-gray-100">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
