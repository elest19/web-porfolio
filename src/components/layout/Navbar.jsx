import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { profile } from '../../data/profile'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience & Certifications' },
  { to: profile.resumeUrl, label: 'Resume', external: true, download: true },
  { to: '/contact', label: 'Contact' },
]

function MenuIcon({ open }) {
  if (open) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
          clipRule="evenodd"
        />
      </svg>
    )
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  )
}

const linkClass = ({ isActive }) =>
  `rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ${
    isActive
      ? 'bg-slate-800 text-sky-400'
      : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
  }`

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="text-lg font-bold tracking-tight text-slate-100 transition-colors hover:text-sky-400"
        >
          <span className="text-sky-400"> Welcome To My Portfolio</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) =>
            link.external ? (
              <li key={link.label}>
                <a
                  href={link.to}
                  download={link.download}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors duration-300 hover:bg-slate-800/50 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.to}>
                <NavLink to={link.to} end={link.end} className={linkClass}>
                  {link.label}
                </NavLink>
              </li>
            ),
          )}
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`border-t border-slate-800 bg-slate-950/95 backdrop-blur-md md:hidden ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) =>
            link.external ? (
              <li key={link.label}>
                <a
                  href={link.to}
                  download={link.download}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-slate-800 text-sky-400'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ),
          )}
        </ul>
      </div>
    </header>
  )
}
