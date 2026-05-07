import type { Metadata } from 'next'
import './globals.css'

const BASE_URL = 'https://aska-intelligence.com/smartnogyo'

export const metadata: Metadata = {
  title: 'Aska Intelligence スマート農業事業部',
  description:
    '果樹農業の自動化・効率化に必要なITインフラ開発とデータ分析を提供します。SS自動運転ITインフラ・高精度測位基準局・農業DXシステム開発。',
  openGraph: {
    title: 'Aska Intelligence スマート農業事業部',
    description: '果樹農業の自動化・効率化に必要なITインフラ開発とデータ分析を提供します。',
    url: BASE_URL,
    type: 'website',
    locale: 'ja_JP',
    images: [
      {
        url: `${BASE_URL}/images/system-overview.jpg`,
        width: 1280,
        height: 540,
        alt: 'Aska Intelligence スマート農業事業部 — SS自動運転・高精度測位・クラウドデータ管理システム',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aska Intelligence スマート農業事業部',
    description: '果樹農業の自動化・効率化に必要なITインフラ開発とデータ分析を提供します。',
    images: [`${BASE_URL}/images/system-overview.jpg`],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
