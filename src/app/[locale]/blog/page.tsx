import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { getBlogPosts } from '@/lib/blog'
import AnimatedBackground from '@/components/AnimatedBackground'

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale })
  const posts = getBlogPosts(locale)

  return (
    <>
      <section className="gradient-bg relative overflow-hidden py-24 sm:py-32">
        <AnimatedBackground variant="insights" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(201,162,39,0.08)_0%,_transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-gold tracking-widest uppercase">{t('common.insights')}</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              {t('blog.title')}
            </h1>
            <p className="text-lg text-white/70">
              {t('blog.insightsDesc')}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-alt dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <p className="text-text-secondary dark:text-dark-text-secondary">{t('blog.noPosts')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white dark:bg-dark-card rounded-2xl border border-border dark:border-dark-border overflow-hidden card-hover"
                >
                  <div className="h-2 bg-gradient-to-r from-navy to-gold" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-text-muted dark:text-dark-text-muted mb-3">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-text-muted" />
                      <span>{post.author}</span>
                    </div>
                    <h2 className="text-lg font-bold text-navy dark:text-white mb-2 group-hover:text-gold transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:gap-2 transition-all">
                      {t('blog.readMore')}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
