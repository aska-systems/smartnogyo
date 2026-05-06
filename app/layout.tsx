import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aska Intelligence スマート農業事業部',
  description:
    '果樹農業の自動化・効率化に必要なITインフラ開発とデータ分析を提供します。SS自動運転ITインフラ・高精度測位基準局・農業DXシステム開発。',
  openGraph: {
    title: 'Aska Intelligence スマート農業事業部',
    description: '果樹農業の自動化・効率化に必要なITインフラ開発とデータ分析を提供します。',
    type: 'website',
    locale: 'ja_JP',
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
