import { Link, useParams } from 'react-router-dom'
import { services } from '../data'

export default function ServiceDetail() {
  const { slug } = useParams()

  const service = services.find(
    (item) => item.slug === slug
  )

  if (!service) {
    return (
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            Service
          </span>

          <h1>
            Service not found.
          </h1>

          <p>
            The service page you requested does not exist.
          </p>

          <div className="actions">
            <Link to="/services" className="btn">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            {service.number} • Service
          </span>

          <h1>
            {service.headline}
          </h1>

          <p>
            {service.intro}
          </p>

          <div className="actions">
            <Link
              to="/contact"
              className="btn"
            >
              Discuss Your Project
            </Link>

            <Link
              to="/services"
              className="btn outline"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="detail-grid">
            {service.groups.map((group) => (
              <article key={group.title}>
                <h3>
                  {group.title}
                </h3>

                <ul>
                  {group.items.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container two-col">
          <div>
            <span className="eyebrow">
              Why work with us
            </span>

            <h2>
              Practical planning with dependable execution.
            </h2>
          </div>

          <div>
            <p className="lead">
              Infinity Services coordinates each project around the
              client’s goals, schedule, budget, and expected outcome.
            </p>

            <p>
              Our multi-service structure also allows us to combine
              printing, event planning, travel, branding, marketing,
              and production support when a project requires more than
              one area of expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="section ivory">
        <div className="container cta-simple">
          <div>
            <span className="eyebrow">
              Need a customized plan?
            </span>

            <h2>
              Tell us what you need and we’ll coordinate the details.
            </h2>
          </div>

          <Link
            to="/contact"
            className="btn"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
