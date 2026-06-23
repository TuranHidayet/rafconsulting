'use client'

import { useTranslations } from 'next-intl'

interface PackageCardProps {
  name: string
  target: string
  desc: string
  features: string[]
  targets: string[]
  highlighted: boolean
}

export default function PackageCard({ name, target, desc, features, targets, highlighted }: PackageCardProps) {
  const t = useTranslations('packages')

  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 ${
        highlighted
          ? 'bg-navy dark:bg-navy text-white border-gold shadow-xl shadow-gold/10 scale-[1.02]'
          : 'bg-white dark:bg-dark-card text-text-primary dark:text-dark-text border-border dark:border-dark-border'
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-navy text-xs font-bold rounded-full uppercase tracking-wider">
          {t('mostPopular')}
        </span>
      )}
      <div className="mb-6">
        <h3 className={`text-2xl font-extrabold tracking-tight ${highlighted ? 'text-gold' : 'text-navy dark:text-white'}`}>
          {name}
        </h3>
        <p className={`text-sm mt-1 font-medium ${highlighted ? 'text-white/70' : 'text-text-muted dark:text-dark-text-muted'}`}>
          {target}
        </p>
      </div>
      <p className={`text-sm leading-relaxed mb-8 ${highlighted ? 'text-white/80' : 'text-text-secondary dark:text-dark-text-secondary'}`}>
        {desc}
      </p>

      <div className="flex-1">
        <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${highlighted ? 'text-gold' : 'text-gold'}`}>
          {t('idealFor')}
        </p>
        <ul className="space-y-2 mb-8">
          {features.map((feature: string, i: number) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${highlighted ? 'text-gold' : 'text-gold'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className={highlighted ? 'text-white/90' : 'text-text-secondary dark:text-dark-text-secondary'}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${highlighted ? 'text-gold/70' : 'text-text-muted dark:text-dark-text-muted'}`}>
          Ideal For
        </p>
        <div className="flex flex-wrap gap-1.5">
          {targets.map((t: string, i: number) => (
            <span
              key={i}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg ${
                highlighted
                  ? 'bg-white/10 text-white/80'
                  : 'bg-navy/5 dark:bg-white/5 text-text-secondary dark:text-dark-text-secondary'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
