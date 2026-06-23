import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

const iconMap: Record<string, string> = {
  accounting: '📊',
  tax: '💰',
  financial: '📈',
  ifrs: '📑',
  cfo: '🎯',
  bank: '🏦',
}

export default async function ServicesSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale })

  const items = t.raw('services.items') as Array<{ title: string; desc: string }>

  return (
    <section id="services" className="section-padding bg-surface-alt dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-gold tracking-widest uppercase">{t('common.whatWeDo')}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy dark:text-white mt-3 mb-4">
            {t('services.title')}
          </h2>
          <div className="gold-line" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item: { title: string; desc: string }, i: number) => (
            <div
              key={i}
              className="group relative bg-white dark:bg-dark-card rounded-2xl p-6 border border-border dark:border-dark-border card-hover"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 to-gold/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gold/10 dark:bg-gold/20 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                  {iconMap[Object.keys(iconMap)[i]] || '📋'}
                </div>
                <h3 className="text-lg font-semibold text-navy dark:text-white mb-2 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy dark:text-gold hover:text-gold dark:hover:text-gold-light transition-colors group"
          >
            {t('common.viewAllServices')}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
