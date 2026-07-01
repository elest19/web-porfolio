import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'
import { profile } from '../../data/profile'

function ArrowDownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5 animate-bounce"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-sky-400">
            Hello, I&apos;m
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight text-slate-100 sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mt-4 text-xl font-medium text-sky-400 sm:text-2xl">
            {profile.title}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            {profile.tagline}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/projects" variant="primary">
              View Projects
            </Button>
            <Button to="/contact" variant="ghost">
              Contact Me
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <div className="mt-16 flex justify-center">
            <Link
              to="/about"
              className="flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-sky-400"
              aria-label="Scroll to learn more about me"
            >
              <span className="text-xs uppercase tracking-wider">
                Learn more
              </span>
              <ArrowDownIcon />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
