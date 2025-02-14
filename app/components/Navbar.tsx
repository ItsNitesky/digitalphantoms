"use client"

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const socialLinks = [
  { name: 'X (Twitter)', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'YouTube', href: '#' },
]

export default function Navbar() {
  const [showSocial, setShowSocial] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowSocial(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="fixed w-full z-50 top-0 px-4 py-3 backdrop-blur-sm bg-phantom-black/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          href="/" 
          className="text-phantom-red/80 font-orbitron text-lg tracking-wider hover:text-phantom-red transition-colors relative group"
        >
          <span className="relative">
            DP
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-phantom-red transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>

        <div className="flex items-center space-x-8">
          <Link 
            href="/portfolio" 
            className="text-gray-400 hover:text-phantom-red/80 transition-colors font-inter tracking-wide relative group"
          >
            <span className="relative">
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-phantom-red transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          
          <Link 
            href="/contact" 
            className="text-gray-400 hover:text-phantom-red/80 transition-colors font-inter tracking-wide relative group"
          >
            <span className="relative">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-phantom-red transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setShowSocial(!showSocial)}
              className="flex items-center text-gray-400 hover:text-phantom-red/80 transition-colors font-inter tracking-wide group"
            >
              <span className="relative">
                Social
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-phantom-red transition-all duration-300 group-hover:w-full"></span>
              </span>
              <ChevronDownIcon 
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${showSocial ? 'rotate-180' : ''}`}
              />
            </button>

            {showSocial && (
              <div className="absolute right-0 mt-2 w-48 cyberpunk-border bg-phantom-black/95 backdrop-blur-sm py-1 animate-fadeIn">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-2 text-sm font-inter tracking-wide text-gray-400 hover:text-phantom-red hover:bg-phantom-red/10 transition-colors relative group"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-phantom-red transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
} 