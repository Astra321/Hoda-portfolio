import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-[#333] py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="/" className="nav-link">home</Link>
            <Link href="/about" className="nav-link">about</Link>
            <Link href="/portfolio" className="nav-link">portfolio</Link>
            <Link href="/services" className="nav-link">services</Link>
            <Link href="/resume" className="nav-link">resume</Link>
            <Link href="/contact" className="nav-link">contact</Link>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-[#40E0D0]">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#40E0D0]">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#40E0D0]">
              <Twitter className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="comment">Copyright © 2023 Web Developer Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

