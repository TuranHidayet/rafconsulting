'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { href: '/', key: 'home', section: 'home' },
  { href: '/#services', key: 'services', pageHref: '/services' },
  { href: '/about', key: 'about' },
  { href: '/blog', key: 'blog' },
  { href: '/#contact', key: 'contact', pageHref: '/contact' },
]

export default function Header() {
  const t = useTranslations('nav')
  const footer = useTranslations('footer')
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isHome, setIsHome] = useState(false)

  useEffect(() => {
    const locale = pathname.split('/')[1]
    const path = pathname.replace(`/${locale}`, '') || '/'
    setIsHome(path === '/')
  }, [pathname])

  const getHref = (item: typeof navItems[number]) => {
    if (isHome) return item.href
    return item.pageHref || item.href
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-dark-bg/90 backdrop-blur-xl border-b border-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-navy dark:bg-gold flex items-center justify-center">
              <span className="text-white dark:text-navy font-extrabold text-sm tracking-wider">RAF</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-navy dark:text-white tracking-tight leading-tight">
                RAF Consulting Services
              </div>
              <div className="text-[10px] text-text-muted dark:text-dark-text-muted tracking-wider uppercase">
                {footer('tagline')}
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={getHref(item)}
                className="px-4 py-2 text-sm font-medium text-text-secondary dark:text-dark-text-secondary hover:text-navy dark:hover:text-gold hover:bg-gray-50 dark:hover:bg-dark-card rounded-lg transition-all"
              >
                {t(item.key as 'home')}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href="/contact"
              className="hidden sm:inline-flex bg-gold text-navy font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all"
            >
              {t('cta')}
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
              aria-label={t('toggleMenu')}
            >
              <svg className="w-5 h-5 text-text-primary dark:text-dark-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border dark:border-dark-border bg-white dark:bg-dark-bg">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={getHref(item)}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-text-secondary dark:text-dark-text-secondary hover:text-navy dark:hover:text-gold hover:bg-gray-50 dark:hover:bg-dark-card rounded-lg transition-all"
              >
                {t(item.key as 'home')}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm font-semibold text-navy bg-gold rounded-lg text-center mt-3"
            >
              {t('cta')}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
