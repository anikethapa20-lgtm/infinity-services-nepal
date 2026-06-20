import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import { services } from '../data'

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            Our Services
          </span>

          <h1>
            One company. Multiple solutions.
          </h1>

          <p>
            Infinity Services provides coordinated support across
            printing, event planning, travel, marketing, advertising,
            and branding.
          </p>
        </div>
      </section>

      <section className="section ivory">
        <div className="container">
          <SectionTitle
            eyebrow="Core services"
            title="Choose one service—or combine several."
            text="Our flexible structure allows clients to use a single service or coordinate complete projects through one team."
          />

          <div className="service-grid large">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="service-card"
              >
                <span>
                  {service.number}
                </span>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.short}
                </p>

                <b>
                  View full service →
                </b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">
              Why Infinity Services
            </span>

            <h2>
              One point of contact from planning to delivery.
            </h2>
          </div>

          <div>
            <p className="lead">
              Many projects require more than one service. An event may
              need travel coordination, printing, branding, advertising,
              and on-site management.
            </p>

            <p>
              Infinity Services brings these areas together under one
              coordinated team, reducing complexity and helping clients
              save time.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="mission-grid">
            <article>
              <span className="eyebrow">
                Flexible
              </span>

              <h3>
                Support based on your actual needs.
              </h3>

              <p>
                Choose complete project management or only the individual
                services required for your timeline and budget.
              </p>
            </article>

            <article>
              <span className="eyebrow">
                Coordinated
              </span>

              <h3>
                Fewer vendors. Clearer communication.
              </h3>

              <p>
                Work with one central team for planning, production,
                travel, branding, promotion, and delivery.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section ivory">
        <div className="container cta-simple">
          <div>
            <span className="eyebrow">
              Not sure where to begin?
            </span>

            <h2>
              Tell us about the project and we’ll help organize it.
            </h2>
          </div>

          <Link
            to="/contact"
            className="btn"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>
    </>
  )
}
