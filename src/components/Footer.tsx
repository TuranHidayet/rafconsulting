'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

const links = [
  { href: '/', key: 'home' },
  { href: '/services', key: 'services' },
  { href: '/about', key: 'about' },
  { href: '/blog', key: 'blog' },
  { href: '/contact', key: 'contact' },
]

export default function Footer() {
  const t = useTranslations('footer')
  const nav = useTranslations('nav')
  const contactPage = useTranslations('contactPage')

  return (
    <footer className="bg-navy-dark dark:bg-[#060D1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
                <span className="text-navy font-extrabold text-sm">RAF</span>
              </div>
              <div>
                <div className="text-sm font-bold text-white">RAF Consulting Services</div>
                <div className="text-[10px] text-white/50 tracking-wider uppercase">{t('tagline')}</div>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm">
              {t('description')}
            </p>
            <p className="text-gold font-semibold mt-4 text-sm">{t('slogan')}</p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold text-white/70 uppercase tracking-widest mb-5">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-gold transition-colors"
                  >
                    {nav(link.key as 'home')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold text-white/70 uppercase tracking-widest mb-5">{t('contactUs')}</h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-center gap-3">
                <span className="text-gold">✉</span>
                info@rafconsulting.az
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold">📞</span>
                +994 10 512 00 09
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold">📍</span>
                {t('address')}
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold">🔗</span>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  {contactPage('linkedin')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} RAF Consulting Services. {t('rights')}.
          </p>
          <div className="flex gap-4 text-xs text-white/30">
            <span>{t('privacy')}</span>
            <span>{t('terms')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
