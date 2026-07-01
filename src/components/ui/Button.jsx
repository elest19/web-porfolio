import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-sky-500 text-white hover:bg-sky-400 focus-visible:outline-sky-400',
  outline:
    'border border-slate-600 text-slate-100 hover:border-sky-400 hover:text-sky-400 focus-visible:outline-sky-400',
  ghost:
    'text-slate-300 hover:bg-slate-800 hover:text-white focus-visible:outline-sky-400',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  to,
  external = false,
  download,
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        {...(external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
