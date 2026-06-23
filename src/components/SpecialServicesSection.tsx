import { getTranslations } from 'next-intl/server'

export default async function SpecialServicesSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale })

  const items = t.raw('specialServices.items') as Array<{ title: string; desc: string }>

  return (
    <section className="section-padding bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-gold tracking-widest uppercase">{t('common.ourExpertise')}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy dark:text-white mt-3 mb-4">
            {t('specialServices.title')}
          </h2>
          <div className="gold-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item: { title: string; desc: string }, i: number) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-2xl bg-surface-alt dark:bg-dark-surface border border-border dark:border-dark-border card-hover"
            >
              <h3 className="text-lg font-bold text-navy dark:text-white mb-3">{item.title}</h3>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
