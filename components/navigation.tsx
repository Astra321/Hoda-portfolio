'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1E1E1E] border-b border-[#333]">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="comment">// </span>
            <span className="font-bold">huda</span>
            <span className="variable">web_dev</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="nav-link">home</Link>
            <Link href="/about" className="nav-link">about</Link>
            <Link href="/portfolio" className="nav-link">portfolio</Link>
            <Link href="/services" className="nav-link">services</Link>
            <Link href="/resume" className="nav-link">resume</Link>
            <Link href="/contact" className="nav-link">contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="nav-link">home</Link>
              <Link href="/about" className="nav-link">about</Link>
              <Link href="/portfolio" className="nav-link">portfolio</Link>
              <Link href="/services" className="nav-link">services</Link>
              <Link href="/resume" className="nav-link">resume</Link>
              <Link href="/contact" className="nav-link">contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

