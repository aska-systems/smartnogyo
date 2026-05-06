'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#about', label: '私たちについて' },
  { href: '#services', label: 'サービス' },
  { href: '#technology', label: '技術' },
  { href: '#contact', label: 'お問い合わせ' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className={`font-bold text-lg leading-tight transition-colors duration-300 ${scrolled ? 'text-green-600' : 'text-green-400'}`}>
              Aska Intelligence
            </span>
            <span className={`hidden sm:inline text-sm transition-colors duration-300 ${scrolled ? 'text-slate-500' : 'text-white/80'}`}>
              スマート農業事業部
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${scrolled ? 'text-slate-600 hover:text-green-600' : 'text-white/90 hover:text-white'}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className={`md:hidden p-2 rounded-md transition-colors duration-300 ${scrolled ? 'text-slate-600 hover:text-green-600' : 'text-white/90 hover:text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニューを開く"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-slate-600 hover:text-green-600 hover:bg-green-50 rounded-md text-sm font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
