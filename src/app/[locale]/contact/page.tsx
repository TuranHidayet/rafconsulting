import { getTranslations } from 'next-intl/server'
import ContactForm from '@/components/ContactForm'

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale })

  const info = t.raw('contact.info') as { email: string; phone: string; website: string }

  return (
    <>
      <section className="gradient-bg relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(201,162,39,0.08)_0%,_transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-gold tracking-widest uppercase">{t('common.getInTouch')}</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              {t('contact.desc')}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-alt dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-dark-card rounded-2xl p-8 border border-border dark:border-dark-border">
                <h2 className="text-xl font-bold text-navy dark:text-white mb-6">{t('contactPage.sendMessage')}</h2>
                <ContactForm />
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="space-y-5">
                <div className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-border dark:border-dark-border">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-3">
                    <span className="text-lg">📧</span>
                  </div>
                  <h3 className="font-semibold text-navy dark:text-white mb-1 text-sm">{t('contactPage.email')}</h3>
                  <a href={`mailto:${info.email}`} className="text-sm text-gold hover:text-gold-light transition-colors">
                    {info.email}
                  </a>
                </div>

                <div className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-border dark:border-dark-border">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-3">
                    <span className="text-lg">📱</span>
                  </div>
                  <h3 className="font-semibold text-navy dark:text-white mb-1 text-sm">{t('contactPage.phone')}</h3>
                  <a href={`tel:${info.phone}`} className="text-sm text-gold hover:text-gold-light transition-colors">
                    {info.phone}
                  </a>
                </div>

                <div className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-border dark:border-dark-border">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-3">
                    <span className="text-lg">🌐</span>
                  </div>
                  <h3 className="font-semibold text-navy dark:text-white mb-1 text-sm">{t('contactPage.website')}</h3>
                  <span className="text-sm text-gold">{info.website}</span>
                </div>

                <div className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-border dark:border-dark-border">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-3">
                    <span className="text-lg">🔗</span>
                  </div>
                  <h3 className="font-semibold text-navy dark:text-white mb-1 text-sm">{t('contactPage.linkedin')}</h3>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gold hover:text-gold-light transition-colors"
                  >
                    {t('contactPage.linkedin')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
