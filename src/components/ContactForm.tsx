'use client'

import { useState, useRef } from 'react'
import { useTranslations } from 'next-intl'

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || ''

export default function ContactForm() {
  const t = useTranslations('contact.form')
  const formRef = useRef<HTMLFormElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (!FORMSPREE_ID) {
      setLoading(false)
      setSubmitted(true)
      return
    }

    try {
      const formData = new FormData(e.currentTarget)
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error('Formspree error')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
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
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="p-3 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm">
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-text-primary dark:text-dark-text mb-2">
            {t('name')}
          </label>
          <input
            type="text"
            name="name"
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
            name="email"
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
          name="phone"
          className="w-full px-4 py-3 rounded-xl border border-border dark:border-dark-border bg-white dark:bg-dark-card text-text-primary dark:text-dark-text placeholder:text-text-muted dark:placeholder:text-dark-text-muted focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-sm"
          placeholder={t('phone')}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-primary dark:text-dark-text mb-2">
          {t('message')}
        </label>
        <textarea
          name="message"
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
