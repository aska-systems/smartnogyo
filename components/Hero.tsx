import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <Image
          src="/images/orchard.jpg"
          alt="りんご畑"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <p className="text-green-400 font-medium text-sm sm:text-base tracking-widest uppercase mb-4">
            Smart Agriculture × IT Infrastructure
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            農業の未来を、
            <br />
            <span className="text-green-400">ITで支える。</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed">
            果樹農業の自動化・効率化に必要な
            <br className="hidden sm:block" />
            ITインフラ開発とデータ分析を提供します。
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-3 bg-green-500 hover:bg-green-400 text-white font-medium rounded-full transition-colors shadow-lg hover:shadow-xl text-center"
            >
              サービスを見る
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3 border-2 border-white/60 text-white hover:bg-white/10 font-medium rounded-full transition-colors text-center"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
