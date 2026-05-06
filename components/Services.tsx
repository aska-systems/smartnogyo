const services = [
  {
    badge: null,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: 'SS自動運転\nITインフラ開発',
    description:
      'スピードスプレイヤー（SS）の自動運転プロジェクトに必要なITインフラを構築・運用します。自動運転ログデータおよび気象データの収集・管理システムを担当し、安全で効率的な自動運転を支えます。',
    features: ['自動運転ログデータの収集・管理', '気象データの収集・管理', 'データ可視化・分析基盤構築'],
  },
  {
    badge: '試験運用中',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: '高精度測位\n基準局サービス',
    description:
      'RTK-GNSSを活用した高精度測位の基準局を設置・運営します。農業機械の自動運転に必要なセンチメートル級の測位精度を提供し、作業の自動化を支援するサブスクリプション型サービスとして展開予定です。',
    features: ['RTK-GNSS基準局の運営', 'センチメートル級の高精度測位', '農業機械の自動運転精度向上'],
  },
  {
    badge: null,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: '農業DX\nシステム開発',
    description:
      '農家・農協の業務効率化に役立つシステムを受託開発します。栽培管理・防除記録・収穫管理など、現場のニーズに合わせたカスタムシステムの設計・開発を行います。',
    features: ['農家・農協向け業務システム', '栽培管理・防除記録システム', '業務フロー最適化・DX支援'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-green-600 font-medium text-sm tracking-widest uppercase mb-3">Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">サービス</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            農業の自動化・効率化に必要な3つのITサービスを提供しています。
          </p>
        </div>

        {/* システム概要図 */}
        <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/system-overview.jpg"
              alt="スマート農業ITシステム概要図 — SS自動運転、RTK-GNSS測位、クラウドデータ管理、モニタリングダッシュボードの連携を示す図"
              className="w-full object-cover"
              style={{ maxHeight: '420px', objectPosition: 'center' }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/70 to-transparent px-6 py-4">
              <p className="text-white text-sm font-medium">
                システム全体像 — SS・測位・クラウド・モニタリングを一体で構築します
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                  {service.icon}
                </div>
                {service.badge && (
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                    {service.badge}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 whitespace-pre-line">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6 flex-grow">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
