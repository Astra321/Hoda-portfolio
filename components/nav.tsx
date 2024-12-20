'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 px-4 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center space-x-2">
          <span className="code-comment">// </span>
          <span className="font-bold">samantha</span>
          <span className="text-blue-400">web_dev</span>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#home" className="nav-link">home</a>
          <a href="#about" className="nav-link">about</a>
          <a href="#portfolio" className="nav-link">portfolio</a>
          <a href="#services" className="nav-link">services</a>
          <a href="#resume" className="nav-link">resume</a>
          <a href="#contact" className="nav-link">contact</a>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#1E1E1E] border-t border-gray-800 lg:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#home" className="nav-link">home</a>
              <a href="#about" className="nav-link">about</a>
              <a href="#portfolio" className="nav-link">portfolio</a>
              <a href="#services" className="nav-link">services</a>
              <a href="#resume" className="nav-link">resume</a>
              <a href="#contact" className="nav-link">contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

