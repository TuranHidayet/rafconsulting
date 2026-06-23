import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic', 'latin-ext'] })

export const metadata: Metadata = {
  title: 'RAF Consulting Services | Your Reliable Accounting and Finance Partner',
  description:
    'Professional accounting, financial consulting, IFRS reporting and business advisory services in Azerbaijan.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
