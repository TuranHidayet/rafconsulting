import { getTranslations } from 'next-intl/server'
import Button from '@/components/Button'
import AnimatedBackground from '@/components/AnimatedBackground'

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale })

  const experience = t.raw('founder.experience') as string[]

  return (
    <>
      <section className="gradient-bg relative overflow-hidden py-24 sm:py-32">
        <AnimatedBackground variant="about" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(201,162,39,0.08)_0%,_transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-gold tracking-widest uppercase">{t('common.whoWeAre')}</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              {t('about.title')}
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-text-secondary dark:text-dark-text-secondary leading-relaxed mb-12">
              {t('about.mission')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="p-8 rounded-2xl bg-surface-alt dark:bg-dark-surface border border-border dark:border-dark-border">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-white mb-3">{t('about.missionTitle')}</h3>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  {t('about.missionDesc')}
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-surface-alt dark:bg-dark-surface border border-border dark:border-dark-border">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-white mb-3">{t('about.visionTitle')}</h3>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  {t('about.visionDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-alt dark:bg-dark-surface">
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

      <section className="section-padding bg-white dark:bg-dark-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy dark:text-white mb-4">
            {t('common.letsWork')}
          </h2>
          <p className="text-text-secondary dark:text-dark-text-secondary mb-8 max-w-lg mx-auto">
            {t('contact.desc')}
          </p>
          <Button href="/contact" className="text-base px-8 py-4">
            {t('common.getInTouchCTA')}
          </Button>
        </div>
      </section>
    </>
  )
}
