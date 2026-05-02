interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  className?: string
}

export default function SectionHeading({ label, title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${className}`}>
      {label && (
        <span className="inline-block text-yellow-400 text-sm font-mono font-bold uppercase tracking-widest mb-3">
          {label}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-black text-gray-100">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-gray-300 max-w-2xl">{subtitle}</p>}
    </div>
  )
}
