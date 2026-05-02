import type { ReactNode } from 'react'

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block bg-dark-700 text-yellow-400 text-xs font-mono px-2 py-1 rounded border border-dark-600">
      {children}
    </span>
  )
}
