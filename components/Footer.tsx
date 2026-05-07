const navLinks = [
  { href: '#about', label: '私たちについて' },
  { href: '#services', label: 'サービス' },
  { href: '#technology', label: '技術' },
  { href: '#contact', label: 'お問い合わせ' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-slate-800 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <a
              href="https://aska-intelligence.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold text-lg hover:text-green-400 transition-colors"
            >
              Aska Intelligence
            </a>
            <p className="text-slate-400 text-sm mt-1">スマート農業事業部</p>
            <a
              href="https://aska-intelligence.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-300 text-xs mt-2 transition-colors"
            >
              当社について
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-700 text-center text-sm">
          <p>&copy; {year} 合同会社Aska Intelligence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
