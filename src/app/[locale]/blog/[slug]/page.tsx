import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { getBlogPost, getAllSlugs } from '@/lib/blog'

export function generateStaticParams({ params }: { params: { locale: string } }) {
  return getAllSlugs(params.locale).map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const t = await getTranslations({ locale })
  const post = getBlogPost(locale, slug)

  if (!post) notFound()

  return (
    <>
      <section className="gradient-bg relative overflow-hidden py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            {t('blog.backToBlog')}
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-sm text-white/50 mb-4">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>{post.author}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      <article className="section-padding bg-white dark:bg-dark-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-navy dark:prose-headings:text-white prose-headings:font-bold prose-a:text-gold prose-strong:text-navy dark:prose-strong:text-white [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-text-secondary [&_p]:dark:text-dark-text-secondary [&_p]:leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/\n/g, '<br/>')
                .replace(/## (.*?)(?:<br\/>)/g, '<h2>$1</h2>')
                .replace(/### (.*?)(?:<br\/>)/g, '<h3>$1</h3>')
                .replace(/- (.*?)(?:<br\/>)/g, '<li>$1</li>'),
            }}
          />
        </div>
      </article>

      <section className="py-16 bg-surface-alt dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy dark:text-white mb-4">
            {t('blog.readMore')}
          </h2>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-6 py-3 rounded-xl hover:bg-gold-light transition-all"
          >
            {t('blog.allArticles')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
