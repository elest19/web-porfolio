export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignClass =
    align === 'left' ? 'text-left' : 'mx-auto max-w-2xl text-center'

  return (
    <div className={`mb-12 ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-sky-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-slate-400">
          {description}
        </p>
      )}
    </div>
  )
}
