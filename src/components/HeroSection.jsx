import { Link } from 'react-router-dom'
import {
  CalendarDays,
  Megaphone,
  PackageCheck,
  Plane
} from 'lucide-react'

export default function Hero() {
  const services = [
    {
      icon: PackageCheck,
      title: 'Printing and Production'
    },
    {
      icon: CalendarDays,
      title: 'Events and Experiences'
    },
    {
      icon: Plane,
      title: 'Travel Coordination'
    },
    {
      icon: Megaphone,
      title: 'Marketing and Branding'
    }
  ]

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            Infinity Services • Nepal
          </span>

          <h1>
            Ideas planned.
            <br />
            Experiences delivered.
            <br />
            Brands remembered.
          </h1>

          <p>
            Professional printing, event planning, travel coordination,
            marketing, advertising, and branding solutions for companies,
            organizations, and individuals.
          </p>

          <div className="actions">
            <Link to="/contact" className="btn">
              Start a Project
            </Link>

            <Link to="/services" className="btn outline">
              Explore Services
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-visual-card">
            <div className="hero-visual-top">
              <span className="eyebrow">
                Complete Project Support
              </span>

              <strong>
                One team.
                <br />
                Every detail.
              </strong>
            </div>

            <div className="hero-service-list">
              {services.map(({ icon: Icon, title }) => (
                <div className="hero-service-item" key={title}>
                  <span>
                    <Icon size={18} />
                  </span>

                  <b>{title}</b>
                </div>
              ))}
            </div>

            <div className="hero-panel">
              <span className="eyebrow">
                Since 2012
              </span>

              <div className="stat-grid">
                <div>
                  <strong>4</strong>
                  <span>Core service areas</span>
                </div>

                <div>
                  <strong>360°</strong>
                  <span>Project coordination</span>
                </div>

                <div>
                  <strong>1</strong>
                  <span>Dedicated partner</span>
                </div>

                <div>
                  <strong>∞</strong>
                  <span>Creative possibilities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
