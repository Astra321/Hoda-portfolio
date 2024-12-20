import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Metadata, Viewport } from 'next'
import DynamicFavicon from '@/components/dynamic-favicon'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Web Developer',
  description: 'Professional web developer portfolio showcasing modern web applications and design work',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icons/favicon.svg', type: 'image/svg+xml' },
      { url: '/icons/icon192.svg', sizes: '192x192', type: 'image/svg+xml' },
      { url: '/icons/icon512.svg', sizes: '512x512', type: 'image/svg+xml' },
    ],
  },
  keywords: ['web developer', 'portfolio', 'react', 'next.js', 'frontend developer'],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1E1E1E',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <DynamicFavicon />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Source+Code+Pro:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <div className="cyber-grid" />
        <div className="grid-overlay" />
        <div className="scan-line" />
        <Navigation />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

