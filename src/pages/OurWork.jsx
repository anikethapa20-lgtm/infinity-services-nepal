import { Link } from 'react-router-dom'

export default function OurWork() {
const projects = [
{
title: 'Event Planning and Management',
text: 'Corporate events, conferences, workshops, award programs, exhibitions, and private celebrations.'
},
{
title: 'Printing and Production',
text: 'Business printing, publications, event materials, packaging, signage, and promotional products.'
},
{
title: 'Travel Coordination',
text: 'Tickets, hotels, transportation, group travel, delegations, and local support.'
},
{
title: 'Marketing and Branding',
text: 'Brand identity, advertising, social media, graphic design, and campaign support.'
},
{
title: 'Recognition Programs',
text: 'Awards, nominations, judging coordination, ceremonies, and recognition materials.'
},
{
title: 'Integrated Projects',
text: 'Multiple services coordinated through one professional and dependable team.'
}
]

return (




Our Work



      <h1>
        Thoughtful planning. Professional delivery.
      </h1>

      <p>
        Infinity Services supports events, printing, travel,
        marketing, branding, and recognition initiatives.
      </p>
    </div>
  </section>

  <section className="section">
    <div className="container">
      <div className="section-head">
        <div>
          <span className="eyebrow">
            Project Capabilities
          </span>

          <h2>
            Work that brings every detail together.
          </h2>
        </div>

        <p>
          Our team coordinates projects from planning through
          final delivery.
        </p>
      </div>

      <div className="work-grid">
        {projects.map((project, index) => (
          <article
            className="work-card"
            key={project.title}
          >
            <div className="work-number">
              {String(index + 1).padStart(2, '0')}
            </div>

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
          Our Process
        </span>

        <h2>
          A clear path from idea to completion.
        </h2>
      </div>

      <div>
        <p className="lead">
          We begin by understanding the purpose, budget,
          audience, schedule, and expected result.
        </p>

        <p>
          We then coordinate services, suppliers, production,
          communication, logistics, and final delivery.
        </p>
      </div>
    </div>
  </section>

  <section className="section ivory">
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
