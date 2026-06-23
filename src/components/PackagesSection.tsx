import { getTranslations } from 'next-intl/server'
import PackageCard from './PackageCard'

interface PackageData {
  name: string
  target: string
  desc: string
  features: string[]
  targets: string[]
}

export default async function PackagesSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale })

  const start = t.raw('packages.start') as PackageData
  const grow = t.raw('packages.grow') as PackageData
  const pro = t.raw('packages.pro') as PackageData

  const packages = [
    { ...start, highlighted: false },
    { ...grow, highlighted: true },
    { ...pro, highlighted: false },
  ]

  return (
    <section id="packages" className="section-padding bg-surface-alt dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-gold tracking-widest uppercase">{t('common.pricing')}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy dark:text-white mt-3 mb-4">
            {t('packages.title')}
          </h2>
          <div className="gold-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {packages.map((pkg, i) => (
            <PackageCard key={i} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  )
}
