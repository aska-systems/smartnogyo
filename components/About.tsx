const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: '技術力',
    description: 'クラウド・IoT・測位技術を組み合わせ、農業現場に最適なITシステムを構築します。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'データ活用',
    description: '収集したログデータ・気象データを分析し、農業の意思決定を支援するインサイトを提供します。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: '現場密着',
    description: '農家・農協の現場ニーズを深く理解し、実際の業務に根ざしたシステムを開発します。',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-green-600 font-medium text-sm tracking-widest uppercase mb-3">About Us</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">私たちについて</h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-lg mb-4">
            Aska Intelligence スマート農業事業部は、りんごをはじめとする果樹農業のIT化を支援しています。
          </p>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-lg">
            農業そのものではなく、農業の<strong className="text-slate-700">自動化・効率化に必要なITインフラ開発・データ分析</strong>を専門とし、農家・農協・関連企業のデジタルトランスフォーメーションをサポートします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-green-600 shadow-sm mb-5">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h3>
              <p className="text-slate-500 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
