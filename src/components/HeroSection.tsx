import { getTranslations } from 'next-intl/server'
import Button from './Button'
import AnimatedBackground from './AnimatedBackground'

export default async function HeroSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale })

  return (
    <section className="gradient-bg relative overflow-hidden min-h-[85vh] flex items-center">
      <AnimatedBackground variant="services" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,162,39,0.1)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(15,45,82,0.4)_0%,_transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-20">
        <div className="max-w-3xl">
          <span className="text-gold text-xs font-semibold tracking-wider uppercase">{t('hero.title')}</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 leading-[1.1] tracking-tight">
            {t('hero.subtitle')}
          </h1>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              href="/contact"
              className="text-base px-8 py-4 shadow-xl shadow-gold/20 text-center"
            >
              {t('hero.cta')}
            </Button>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 rounded-lg text-base font-semibold text-white border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all"
            >
              {t('common.exploreServices')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
