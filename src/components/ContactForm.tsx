'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function ContactForm() {
  const t = useTranslations('contact.form')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission - connect to EmailJS/Formspree later
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy dark:text-white mb-2">{t('thankYou')}</h3>
        <p className="text-text-secondary dark:text-dark-text-secondary">{t('success')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-text-primary dark:text-dark-text mb-2">
            {t('name')}
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 rounded-xl border border-border dark:border-dark-border bg-white dark:bg-dark-card text-text-primary dark:text-dark-text placeholder:text-text-muted dark:placeholder:text-dark-text-muted focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-sm"
            placeholder={t('name')}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-primary dark:text-dark-text mb-2">
            {t('email')}
          </label>
          <input
            type="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-border dark:border-dark-border bg-white dark:bg-dark-card text-text-primary dark:text-dark-text placeholder:text-text-muted dark:placeholder:text-dark-text-muted focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-sm"
            placeholder={t('email')}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-primary dark:text-dark-text mb-2">
          {t('phone')}
        </label>
        <input
          type="tel"
          className="w-full px-4 py-3 rounded-xl border border-border dark:border-dark-border bg-white dark:bg-dark-card text-text-primary dark:text-dark-text placeholder:text-text-muted dark:placeholder:text-dark-text-muted focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-sm"
          placeholder={t('phone')}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-primary dark:text-dark-text mb-2">
          {t('message')}
        </label>
        <textarea
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-border dark:border-dark-border bg-white dark:bg-dark-card text-text-primary dark:text-dark-text placeholder:text-text-muted dark:placeholder:text-dark-text-muted focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-sm resize-none"
          placeholder={t('message')}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto bg-gold text-navy font-semibold px-8 py-3.5 rounded-xl hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? t('sending') : t('submit')}
      </button>
    </form>
  )
}
