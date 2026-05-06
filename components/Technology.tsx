const technologies = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'クラウドインフラ',
    description: 'スケーラブルなクラウド基盤を設計・構築。農業データを安全かつ効率的に管理します。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'IoTデータ収集',
    description: '農業機械・気象センサーからリアルタイムにデータを収集・蓄積するIoT基盤を構築します。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '高精度測位（RTK-GNSS）',
    description: 'センチメートル級の測位精度を実現するRTK-GNSSシステムを運営し、自動運転の安全性を支えます。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'データ分析・可視化',
    description: '収集したデータを分析・可視化し、農業経営の改善や自動化システムの最適化に活かします。',
  },
]

export default function Technology() {
  return (
    <section id="technology" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-green-600 font-medium text-sm tracking-widest uppercase mb-3">Technology</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">技術的強み</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            農業の現場で求められる高度な技術領域を横断的にカバーします。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.title}
              className="flex gap-5 p-6 rounded-2xl border border-slate-100 hover:border-green-200 hover:bg-green-50 transition-all"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                {tech.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{tech.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
