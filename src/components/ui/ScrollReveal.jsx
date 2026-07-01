import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function ScrollReveal({ children, className = '', delay = 0 }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`translate-y-6 opacity-0 transition-all duration-700 ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
