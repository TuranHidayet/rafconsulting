'use client'

import { usePathname, useRouter } from '@/i18n/navigation'
import { useParams } from 'next/navigation'

const locales = [
  { code: 'az', label: 'AZ', flag: '🇦🇿' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'ru', label: 'RU', flag: '🇷🇺' },
]

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const params = useParams()
  const currentLocale = (params.locale as string) || 'az'

  const switchTo = (locale: string) => {
    router.replace(pathname, { locale })
  }

  return (
    <div className="flex items-center gap-0.5 bg-gray-100 dark:bg-dark-card rounded-lg p-0.5">
      {locales.map((loc) => (
        <button
          key={loc.code}
          onClick={() => switchTo(loc.code)}
          className={`px-2 py-1 text-xs font-medium rounded-md transition-all ${
            currentLocale === loc.code
              ? 'bg-white dark:bg-dark-surface text-navy dark:text-gold shadow-sm'
              : 'text-text-muted dark:text-dark-text-muted hover:text-text-primary dark:hover:text-dark-text'
          }`}
        >
          {loc.label}
        </button>
      ))}
    </div>
  )
}
