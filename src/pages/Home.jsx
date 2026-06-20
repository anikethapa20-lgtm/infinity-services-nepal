import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import { company, services } from '../data'

export default function Home() {
  return (
    <>
      <Hero />

      <section className="trust-strip">
        <div className="container trust-grid">
          <div>
            <strong>Reliability</strong>
            <span>Clear communication</span>
          </div>

          <div>
            <strong>Creativity</strong>
            <span>Original solutions</span>
          </div>

          <div>
            <strong>Quality</strong>
            <span>Professional execution</span>
          </div>

          <div>
            <strong>Partnership</strong>
            <span>Long-term relationships</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Who we are"
            title="A multi-service partner for ambitious organizations."
            text="Founded in 2012, Infinity Services combines strategy, creativity, and dependable coordination to help clients move from idea to execution."
          />
        </div>
      </section>

      <section className="section ivory">
        <div className="container">
          <SectionTitle
            eyebrow="What we do"
            title="Four service areas. One trusted team."
            text="One point of contact across production, events, travel, and brand communication."
          />

          <div className="service-grid">
            {services.map((service) => (
              <Link
                to={`/services/${service.slug}`}
                className="service-card"
                key={service.slug}
              >
                <span>{service.number}</span>

                <h3>{service.title}</h3>

                <p>{service.short}</p>

                <b>Explore service →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <SectionTitle
            eyebrow="What we deliver"
            title="Projects designed around real needs."
            text="Strong photography and case studies can be added later without changing the structure."
          />

          <div className="project-grid">
            <article className="project large">
              <div>
                <span>Events</span>
                <h3>
                  From concept to final applause.
                </h3>
              </div>
            </article>

            <article className="project travel">
              <div>
                <span>Travel</span>
                <h3>
                  Every movement coordinated.
                </h3>
              </div>
            </article>

            <article className="project brand">
              <div>
                <span>Branding</span>
                <h3>
                  Ideas made visible.
                </h3>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container founder-grid">
          <div className="founder-photo">
            <img
              src={company.founderPhoto}
              alt={company.founder}
            />

            <div>
              <small>
                {company.founderTitle}
              </small>

              <strong>
                {company.founder}
              </strong>
            </div>
          </div>

          <div>
            <span className="eyebrow">
              Leadership
            </span>

            <h2>
              Vision with the discipline to deliver.
            </h2>

            <p className="lead">
              Infinity Services is guided by a commitment to thoughtful
              service, creative problem-solving, and dependable execution.
            </p>

            <p>
              Under Sheetal Khadka’s leadership, the company continues
              to support businesses, organizations, institutions, and
              individuals through practical, flexible, and professional
              solutions.
            </p>

            <blockquote>
              “We listen closely, think creatively, and deliver with care—
              because every project represents our client’s reputation.”
            </blockquote>

            <Link to="/about" className="text-link">
              Read our story →
            </Link>
          </div>
        </div>
      </section>

      <section className="section award-band">
        <div className="container award-grid">
          <div>
            <span className="eyebrow gold">
              Presented by Infinity Services
            </span>

            <h2>
              Global Authors Award 2026
            </h2>

            <p>
              A platform celebrating literary excellence, emerging voices,
              and the power of stories to shape the world.
            </p>

            <div className="actions">
              <Link
                to="/global-authors-award"
                className="btn lime"
              >
                Explore the Award
              </Link>
            </div>
          </div>

          <div className="award-mark">
            <small>GLOBAL</small>
            <strong>AUTHORS</strong>
            <span>AWARD 2026</span>
          </div>
        </div>
      </section>

      <section className="section ivory">
        <div className="container cta-grid">
          <div>
            <span className="eyebrow">
              Start a conversation
            </span>

            <h2>
              Let’s make your next project easier.
            </h2>

            <p>
              Tell us what you are planning, producing, promoting,
              or coordinating.
            </p>
          </div>

          <div className="contact-card">
            <a
              className="phone"
              href={`tel:${company.phoneHref}`}
            >
              {company.phoneDisplay}
            </a>

            <span>
              {company.address}
            </span>

            <a
              href={`mailto:${company.email}`}
              className="btn"
            >
              Send an Inquiry
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
