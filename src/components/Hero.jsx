import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">
            Infinity Services • Nepal
          </span>

          <h1>
            Ideas planned. Experiences delivered. Brands remembered.
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
    </section>
  )
}
