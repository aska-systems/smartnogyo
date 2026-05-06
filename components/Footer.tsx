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
            <p className="text-white font-bold text-lg">Aska Intelligence</p>
            <p className="text-slate-400 text-sm mt-1">スマート農業事業部</p>
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
