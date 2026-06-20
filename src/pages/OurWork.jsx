import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'

export default function OurWork() {
const projects = [
{
category: 'Event Management',
title: 'Corporate conferences and institutional programs',
text: 'Planning, venue coordination, branding, registration, guest management, production, and on-site execution.'
},
{
category: 'Printing and Production',
title: 'Business, publication, and event materials',
text: 'Brochures, reports, books, certificates, banners, backdrops, signage, packaging, and promotional materials.'
},
{
category: 'Travel Coordination',
title: 'Group, corporate, and event travel',
text: 'Tickets, accommodation, transportation, itineraries, delegations, airport support, and local coordination.'
},
{
category: 'Branding and Marketing',
title: 'Campaigns, identities, and promotional support',
text: 'Brand strategy, graphic design, advertising materials, social content, campaign planning, and launch support.'
},
{
category: 'Recognition Programs',
title: 'Awards and community initiatives',
text: 'Concept development, nominations, communication, judging coordination, ceremonies, and recognition materials.'
},
{
category: 'Integrated Projects',
title: 'Multiple services managed through one team',
text: 'Projects combining events, printing, travel, promotion, branding, logistics, and guest experience.'
}
]

return (




Our Work



      <h1>
        Thoughtful planning. Professional delivery.
      </h1>

      <p>
        Infinity Services supports projects of different sizes and
        purposes through coordinated planning, creative production,
        and dependable execution.
      </p>
    </div>
  </section>

  <section className="section">
    <div className="container">
      <SectionTitle
        eyebrow="Project capabilities"
        title="Work that brings multiple details together."
        text="Our portfolio continues to grow across events, printing, travel, branding, marketing, and recognition initiatives."
      />

      <div className="work-grid">
        {projects.map((project, index) => (
          <article
            className="work-card"
            key={project.title}
          >
            <div className="work-number">
              {String(index + 1).padStart(2, '0')}
            </div>

            <span className="eyebrow">
              {project.category}
            </span>

            <h3>
              {project.title}
            </h3>

            <p>
              {project.text}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>

  <section className="section soft">
    <div className="container two-col">
      <div>
        <span className="eyebrow">
          Our Approach
        </span>

        <h2>
          Every project begins with understanding the purpose.
        </h2>
      </div>

      <div>
        <p className="lead">
          We begin by understanding the client goals, audience,
          budget, timeline, and expected result.
        </p>

        <p>
          From there, we create a practical plan, coordinate the
          required services, manage suppliers and logistics, and
          maintain clear communication through delivery.
        </p>
      </div>
    </div>
  </section>

  <section className="section ivory">
    <div className="container">
      <SectionTitle
        eyebrow="How we deliver"
        title="A clear process from idea to completion."
      />

      <div className="process-grid">
        <article>
          <span>
            01
          </span>

          <h3>
            Understand
          </h3>

          <p>
            We listen to the purpose, requirements, timeline,
            audience, and expected outcome.
          </p>
        </article>

        <article>
          <span>
            02
          </span>

          <h3>
            Plan
          </h3>

          <p>
            We organize the services, schedule, budget, vendors,
            responsibilities, and delivery plan.
          </p>
        </article>

        <article>
          <span>
            03
          </span>

          <h3>
            Coordinate
          </h3>

          <p>
            We manage production, communication, logistics,
            suppliers, and project details.
          </p>
        </article>

        <article>
          <span>
            04
          </span>

          <h3>
            Deliver
          </h3>

          <p>
            We complete the project professionally and provide
            support through final execution.
          </p>
        </article>
      </div>
    </div>
  </section>

  <section className="section award-band">
    <div className="container award-grid">
      <div>
        <span className="eyebrow gold">
          Featured Initiative
        </span>

        <h2>
          Global Authors Award 2026
        </h2>

        <p>
          A signature recognition initiative celebrating authors,
          literary achievement, creativity, and meaningful stories.
        </p>

        <div className="actions">
          <Link
            to="/global-authors-award"
            className="btn lime"
          >
            View the Initiative
          </Link>
        </div>
      </div>

      <div className="award-mark">
        <small>
          GLOBAL
        </small>

        <strong>
          AUTHORS
        </strong>

        <span>
          AWARD 2026
        </span>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="container cta-simple">
      <div>
        <span className="eyebrow">
          Plan Your Next Project
        </span>

        <h2>
          Let us create something meaningful together.
        </h2>
      </div>

      <Link
        to="/contact"
        className="btn"
      >
        Start a Project
      </Link>
    </div>
  </section>
</div>

)
}
