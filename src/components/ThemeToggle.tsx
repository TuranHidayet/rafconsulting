'use client'

import { useTheme } from 'next-themes'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

const themes = ['light', 'dark', 'system'] as const
const icons: Record<string, string> = {
  light: '☀️',
  dark: '🌙',
  system: '💻',
}

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const t = useTranslations('theme')
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="w-9 h-9" />

  const currentTheme = theme || 'system'
  const nextTheme = themes[(themes.indexOf(currentTheme as 'light' | 'dark' | 'system') + 1) % themes.length]

  return (
    <button
      onClick={() => setTheme(nextTheme)}
      aria-label={`${t('currentTheme')} ${t(currentTheme)}`}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card transition-colors text-lg"
    >
      {icons[currentTheme] || icons.system}
    </button>
  )
}
