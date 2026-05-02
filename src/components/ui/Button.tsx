import type { ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
  variant?: 'primary' | 'ghost'
  href?: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function Button({ variant = 'primary', href, children, className = '', onClick }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 font-bold px-6 py-3 rounded-lg transition-all duration-200 text-base cursor-pointer'
  const variants = {
    primary: 'bg-yellow-400 text-dark-950 hover:bg-yellow-500 active:bg-yellow-600',
    ghost: 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-dark-950',
  }
  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    if (href.startsWith('http') || href.startsWith('//')) {
      return <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{children}</a>
    }
    if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      return <a href={href} className={classes}>{children}</a>
    }
    return <Link href={href} className={classes}>{children}</Link>
  }

  return <button onClick={onClick} className={classes}>{children}</button>
}
