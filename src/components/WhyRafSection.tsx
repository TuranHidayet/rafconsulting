import { getTranslations } from 'next-intl/server'

export default async function WhyRafSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale })

  const items = t.raw('whyRaf.items') as Array<{ title: string; desc: string }>

  return (
    <section id="why-raf" className="section-padding bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-gold tracking-widest uppercase">{t('common.whyChooseUs')}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy dark:text-white mt-3 mb-4">
            {t('whyRaf.title')}
          </h2>
          <div className="gold-line" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {items.map((item: { title: string; desc: string }, i: number) => (
            <div key={i} className="group">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-gold text-lg font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy dark:text-white mb-1.5 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
