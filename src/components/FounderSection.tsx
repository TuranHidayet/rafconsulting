import { getTranslations } from 'next-intl/server'

export default async function FounderSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale })

  const experience = t.raw('founder.experience') as string[]

  return (
    <section id="founder" className="section-padding bg-surface-alt dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-gold tracking-widest uppercase">{t('common.meetFounder')}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy dark:text-white mt-3 mb-4">{t('common.meetFounder')}</h2>
          <div className="gold-line" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-dark-card rounded-2xl p-8 sm:p-12 border border-border dark:border-dark-border">
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center ring-2 ring-gold/30">
                  <span className="text-4xl font-extrabold gradient-text">RS</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy dark:text-white mb-1">{t('founder.name')}</h3>
                <p className="text-gold font-semibold mb-4">{t('founder.title')}</p>
                <p className="text-text-secondary dark:text-dark-text-secondary leading-relaxed mb-6">
                  {t('founder.desc')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.map((exp: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-navy/5 dark:bg-white/5 text-xs text-text-secondary dark:text-dark-text-secondary font-medium"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
