export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-green-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-green-600 font-medium text-sm tracking-widest uppercase mb-3">Contact</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">お問い合わせ</h2>
        <p className="text-slate-500 leading-relaxed mb-10 text-lg">
          プロジェクトのご相談・受託開発のご依頼など、
          <br className="hidden sm:block" />
          お気軽にメールでご連絡ください。
        </p>

        <div className="bg-white rounded-2xl p-10 shadow-sm">
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <div>
              <p className="text-slate-500 text-sm mb-2">メールアドレス</p>
              <a
                href="mailto:contact@aska.systems"
                className="text-xl font-medium text-green-600 hover:text-green-700 transition-colors break-all"
              >
                contact@aska.systems
              </a>
            </div>

            <a
              href="mailto:contact@aska.systems"
              className="mt-2 px-10 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full transition-colors shadow-md hover:shadow-lg"
            >
              メールで問い合わせる
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-100 text-slate-500 text-sm space-y-1">
            <p className="font-medium text-slate-700">合同会社Aska Intelligence</p>
            <p>スマート農業事業部</p>
          </div>
        </div>
      </div>
    </section>
  )
}
