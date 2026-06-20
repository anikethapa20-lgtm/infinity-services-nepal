import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Moon,
  Sun,
  X
} from 'lucide-react'
import { company } from '../data'

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('infinity-theme')
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    const initialTheme =
      savedTheme || (prefersDark ? 'dark' : 'light')

    setTheme(initialTheme)
    document.documentElement.setAttribute(
      'data-theme',
      initialTheme
    )
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  function toggleTheme() {
    const nextTheme = theme === 'light' ? 'dark' : 'light'

    setTheme(nextTheme)
    document.documentElement.setAttribute(
      'data-theme',
      nextTheme
    )
    window.localStorage.setItem(
      'infinity-theme',
      nextTheme
    )
  }

  return (
    <div>
      <header className="site-header">
        <div className="container nav">
          <NavLink
            to="/"
            className="brand"
            onClick={closeMenu}
            aria-label="Infinity Services home"
          >
            <img
              src={company.logo}
              alt={company.name}
            />
          </NavLink>

          <div className="nav-actions">
            <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>

              <NavLink to="/about" onClick={closeMenu}>
                About
              </NavLink>

              <NavLink to="/services" onClick={closeMenu}>
                Services
              </NavLink>

              <NavLink to="/our-work" onClick={closeMenu}>
                Our Work
              </NavLink>

              <NavLink
                to="/global-authors-award"
                onClick={closeMenu}
              >
                Global Authors Award
              </NavLink>

              <NavLink
                to="/contact"
                className="btn small"
                onClick={closeMenu}
              >
                Start a Project
              </NavLink>
            </nav>

            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={
                theme === 'light'
                  ? 'Switch to dark mode'
                  : 'Switch to light mode'
              }
              title={
                theme === 'light'
                  ? 'Dark mode'
                  : 'Light mode'
              }
            >
              {theme === 'light' ? (
                <Moon size={19} />
              ) : (
                <Sun size={19} />
              )}
            </button>

            <button
              type="button"
              className="menu-btn"
              onClick={() =>
                setMenuOpen((current) => !current)
              }
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <img
              className="footer-logo"
              src={company.logo}
              alt={company.name}
            />

            <p>
              Printing, events, travel, marketing, branding,
              and recognition programs planned and delivered
              from Kathmandu.
            </p>
          </div>

          <div>
            <h4>Company</h4>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/our-work">Our Work</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <div>
            <h4>Services</h4>
            <NavLink to="/services/printing-packaging-production">
              Printing
            </NavLink>
            <NavLink to="/services/event-planning-management">
              Events
            </NavLink>
            <NavLink to="/services/travel-tours-coordination">
              Travel
            </NavLink>
            <NavLink to="/services/marketing-advertising-branding">
              Marketing
            </NavLink>
          </div>

          <div>
            <h4>Connect</h4>

            <a
              href={company.socials.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <Facebook size={16} />
              Facebook
            </a>

            <a
              href={company.socials.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={16} />
              Instagram
            </a>

            <a
              href={company.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          © 2026 Infinity Services Pvt. Ltd. • Established 2012
        </div>
      </footer>
    </div>
  )
}
