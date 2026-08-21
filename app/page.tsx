import { SiteNav } from '@/components/site-nav'
import { HeroDeck } from '@/components/hero-deck'
import { Portfolio } from '@/components/portfolio'
import { Approach } from '@/components/approach'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="bg-background">
      <SiteNav />
      <HeroDeck />
      <Portfolio />
      <Approach />
      <SiteFooter />
    </main>
  )
}
