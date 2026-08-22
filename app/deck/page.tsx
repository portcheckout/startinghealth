import type { Metadata } from 'next'
import { DeckViewer } from '@/components/deck/deck-viewer'

export const metadata: Metadata = {
  title: 'Investor Deck — Starting.Health',
  description: 'Confidential family office investment overview for Starting.Health.',
  robots: { index: false, follow: false, nocache: true },
}

export default function DeckPage() {
  return <DeckViewer />
}
