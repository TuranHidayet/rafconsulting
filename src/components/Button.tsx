import Link from 'next/link'

interface ButtonProps {
  href?: string
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  className?: string
}

export default function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200'

  const variants = {
    primary: 'bg-gold text-navy hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20',
    outline: 'border-2 border-navy dark:border-white text-navy dark:text-white hover:bg-navy hover:text-white dark:hover:bg-white dark:hover:text-navy',
    ghost: 'text-text-secondary dark:text-dark-text-secondary hover:text-navy dark:hover:text-gold hover:bg-gray-50 dark:hover:bg-dark-card',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return <button className={classes}>{children}</button>
}
