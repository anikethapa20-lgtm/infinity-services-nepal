import SectionTitle from '../components/SectionTitle'
import { company } from '../data'

export default function About() {
  const values = [
    {
      number: '01',
      title: 'Reliability',
      text: 'We deliver what we promise and communicate clearly throughout every project.'
    },
    {
      number: '02',
      title: 'Creativity',
      text: 'We develop practical and original ideas that help our clients stand out.'
    },
    {
      number: '03',
      title: 'Quality',
      text: 'We pay attention to detail and aim for professional results in every service.'
    },
    {
      number: '04',
      title: 'Partnership',
      text: 'We build long-term relationships based on trust, respect, and collaboration.'
    },
    {
      number: '05',
      title: 'Flexibility',
      text: 'We adapt our services to the needs, budget, and objectives of each client.'
    },
    {
      number: '06',
      title: 'Excellence',
      text: 'We continuously improve our work and strive to exceed expectations.'
    }
  ]

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            About Infinity Services
          </span>

          <h1>
            Built on service. Growing through trust.
          </h1>

          <p>
            Infinity Services Pvt. Ltd. is a Kathmandu-based
            multi-service company supporting businesses,
            organizations, institutions, and individuals since 2012.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionTitle
              eyebrow="Our story"
              title="From practical support to complete project delivery."
            />
          </div>

          <div>
            <p className="lead">
              Founded in 2012, Infinity Services provides dependable
              support across printing and production, event planning,
              travel coordination, marketing, advertising, and branding.
            </p>

            <p>
              We manage projects from planning to delivery, helping
              clients save time, simplify coordination, and achieve
              professional results. Every assignment is approached with
              clear communication, careful execution, and attention to
              detail.
            </p>

            <p>
              Our goal is to become a trusted long-term partner for
              clients who need one team to coordinate multiple services
              efficiently and professionally.
            </p>
          </div>
        </div>
      </section>

      <section className="section ivory">
        <div className="container founder-grid">
          <div className="founder-photo">
            <img
              src={company.founderPhoto}
              alt={`${company.founder}, ${company.founderTitle}`}
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
              A leadership approach centered on trust and dependable execution.
            </h2>

            <p className="lead">
              Infinity Services is guided by Sheetal Khadka’s vision
              of combining creativity, responsibility, and practical
              service to help clients achieve meaningful results.
            </p>

            <p>
              Under her leadership, the company continues to support
              businesses, organizations, institutions, and individuals
              through printing, events, travel, marketing, branding,
              and recognition initiatives.
            </p>

            <blockquote>
              “Our goal is to understand every client’s purpose and
              turn it into work that is thoughtful, professional,
              and impactful.”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mission-grid">
            <article>
              <span className="eyebrow">
                Mission
              </span>

              <h3>
                Empower through dependable service.
              </h3>

              <p>
                To provide practical, creative, and reliable printing,
                event, travel, marketing, and branding solutions that
                help our clients achieve their goals with confidence.
              </p>
            </article>

            <article>
              <span className="eyebrow">
                Vision
              </span>

              <h3>
                Lead through excellence and meaningful impact.
              </h3>

              <p>
                To become a trusted and leading multi-service partner
                for companies, organizations, and individuals in Nepal
                and beyond.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <SectionTitle
            eyebrow="Our values"
            title="How we work."
            text="The principles that guide every client relationship, project, and decision."
          />

          <div className="value-grid">
            {values.map((value) => (
              <article key={value.title}>
                <span>
                  {value.number}
                </span>

                <h3>
                  {value.title}
                </h3>

                <p>
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section ivory">
        <div className="container cta-simple">
          <div>
            <span className="eyebrow">
              Work with Infinity Services
            </span>

            <h2>
              One team for planning, production, and delivery.
            </h2>
          </div>

          <a
            href={`mailto:${company.email}`}
            className="btn"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </>
  )
}
