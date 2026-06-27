import { getTranslations } from 'next-intl/server'
import Button from '@/components/Button'
import AnimatedBackground from '@/components/AnimatedBackground'
import { AccountingIcon, TaxIcon, FinancialIcon, IfrsIcon, CfoIcon, BankIcon } from '@/components/ServiceIcons'

const icons = [AccountingIcon, TaxIcon, FinancialIcon, IfrsIcon, CfoIcon, BankIcon]

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale })

  const items = t.raw('services.items') as Array<{ title: string; desc: string }>

  return (
    <>
      <section className="gradient-bg relative overflow-hidden py-24 sm:py-32">
        <AnimatedBackground variant="services" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,162,39,0.08)_0%,_transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-gold tracking-widest uppercase">{t('common.ourExpertise')}</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              {t('services.title')}
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              {t('servicesPage.desc')}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-alt dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {items.map((item: { title: string; desc: string }, i: number) => {
              const Icon = icons[i] || icons[0]
              return (
              <div
                key={i}
                className="bg-white dark:bg-dark-card rounded-2xl p-8 border border-border dark:border-dark-border"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center">
                      <Icon className="w-9 h-9 text-gold" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-navy dark:text-white mb-3">{item.title}</h2>
                    <p className="text-text-secondary dark:text-dark-text-secondary mb-6 max-w-2xl">{item.desc}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xs font-semibold text-gold uppercase tracking-wider mb-3">{t('servicesPage.servicesLabel')}</h4>
                        <ul className="space-y-2">
                          {[
                            [t('servicesPage.feat1'), t('servicesPage.feat2'), t('servicesPage.feat3'), t('servicesPage.feat4')],
                            [t('servicesPage.feat5'), t('servicesPage.feat6'), t('servicesPage.feat7')],
                            [t('servicesPage.feat8'), t('servicesPage.feat9'), t('servicesPage.feat10'), t('servicesPage.feat11')],
                            [t('servicesPage.feat12'), t('servicesPage.feat13'), t('servicesPage.feat14')],
                            [t('servicesPage.feat15'), t('servicesPage.feat16'), t('servicesPage.feat17')],
                            [t('servicesPage.feat18'), t('servicesPage.feat19'), t('servicesPage.feat20')],
                          ][i]?.map((f, j) => (
                            <li key={j} className="text-sm text-text-primary dark:text-dark-text flex items-center gap-2">
                              <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-gold uppercase tracking-wider mb-3">{t('servicesPage.benefitsLabel')}</h4>
                        <ul className="space-y-2">
                          {[
                            [t('servicesPage.benefit1'), t('servicesPage.benefit2'), t('servicesPage.benefit3')],
                            [t('servicesPage.benefit4'), t('servicesPage.benefit5'), t('servicesPage.benefit6')],
                            [t('servicesPage.benefit7'), t('servicesPage.benefit8'), t('servicesPage.benefit9')],
                            [t('servicesPage.benefit10'), t('servicesPage.benefit11'), t('servicesPage.benefit12')],
                            [t('servicesPage.benefit13'), t('servicesPage.benefit14'), t('servicesPage.benefit15')],
                            [t('servicesPage.benefit16'), t('servicesPage.benefit17'), t('servicesPage.benefit18')],
                          ][i]?.map((b, j) => (
                            <li key={j} className="text-sm text-text-primary dark:text-dark-text flex items-center gap-2">
                              <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,162,39,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t('common.readyToStart')}</h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            {t('contact.desc')}
          </p>
          <Button href="/contact" className="text-base px-8 py-4 shadow-xl shadow-gold/20">
            {t('common.scheduleCTA')}
          </Button>
        </div>
      </section>
    </>
  )
}
