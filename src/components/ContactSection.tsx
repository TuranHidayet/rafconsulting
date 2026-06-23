import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

export default async function ContactSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale })

  const info = t.raw('contact.info') as { email: string; phone: string; website: string }

  const contacts = [
    { icon: '📧', label: t('contactPage.email'), value: info.email, href: `mailto:${info.email}` },
    { icon: '📱', label: t('contactPage.phone'), value: info.phone, href: `tel:${info.phone}` },
    { icon: '🌐', label: t('contactPage.website'), value: info.website, href: null },
  ]

  return (
    <section id="contact" className="section-padding bg-surface-alt dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-gold tracking-widest uppercase">{t('common.getInTouch')}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy dark:text-white mt-3 mb-4">
            {t('contact.title')}
          </h2>
          <div className="gold-line" />
          <p className="text-text-secondary dark:text-dark-text-secondary mt-6 max-w-lg mx-auto">
            {t('contact.desc')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {contacts.map((contact, i) => (
            <div
              key={i}
              className="group text-center p-6 rounded-2xl bg-white dark:bg-dark-card border border-border dark:border-dark-border card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 dark:bg-gold/20 flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform">
                {contact.icon}
              </div>
              <h3 className="font-semibold text-navy dark:text-white mb-1.5 text-sm">{contact.label}</h3>
              {contact.href ? (
                <a href={contact.href} className="text-sm text-gold hover:text-gold-light transition-colors font-medium">
                  {contact.value}
                </a>
              ) : (
                <span className="text-sm text-gold font-medium">{contact.value}</span>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-8 py-3.5 rounded-xl hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all"
          >
            {t('common.sendMessage')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
