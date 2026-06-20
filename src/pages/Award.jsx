import { Link } from 'react-router-dom'

export default function Award() {
  const highlights = [
    {
      number: '01',
      title: 'Recognizing Excellence',
      text: 'Celebrating authors whose work demonstrates originality, impact, creativity, and literary quality.'
    },
    {
      number: '02',
      title: 'Supporting Emerging Voices',
      text: 'Creating opportunities for new and independent writers to receive meaningful recognition.'
    },
    {
      number: '03',
      title: 'Connecting Communities',
      text: 'Bringing together authors, readers, publishers, educators, and literary professionals.'
    },
    {
      number: '04',
      title: 'Global Perspective',
      text: 'Honoring diverse stories, cultures, ideas, and voices from Nepal and around the world.'
    }
  ]

  const categories = [
    'Fiction',
    'Nonfiction',
    'Poetry',
    'Children’s Literature',
    'Young Adult Literature',
    'Biography & Memoir',
    'Academic & Research Writing',
    'Emerging Author',
    'Lifetime Achievement',
    'Special Recognition'
  ]

  return (
    <>
      <section className="award-hero">
        <div className="container award-hero-grid">
          <div>
            <span className="eyebrow gold">
              Presented by Infinity Services Pvt. Ltd.
            </span>

            <h1>
              Global Authors Award 2026
            </h1>

            <p>
              Celebrating literary excellence, creative voices,
              meaningful stories, and authors whose work inspires
              readers across borders.
            </p>

            <div className="actions">
              <a
                href="mailto:infinityaward2025@gmail.com"
                className="btn lime"
              >
                Contact the Award Team
              </a>

              <Link
                to="/contact"
                className="btn outline light"
              >
                Partner With Us
              </Link>
            </div>
          </div>

          <div className="award-mark large">
            <small>GLOBAL</small>
            <strong>AUTHORS</strong>
            <span>AWARD 2026</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">
              About the initiative
            </span>

            <h2>
              A platform created to recognize the power of authorship.
            </h2>
          </div>

          <div>
            <p className="lead">
              The Global Authors Award 2026 is a signature initiative
              presented by Infinity Services Pvt. Ltd. to celebrate
              writers whose work contributes to literature, culture,
              education, knowledge, and society.
            </p>

            <p>
              The initiative aims to create a respected platform where
              established and emerging authors can be recognized,
              connected, and encouraged to continue sharing meaningful
              work with the world.
            </p>
          </div>
        </div>
      </section>

      <section className="section ivory">
        <div className="container">
          <div className="award-highlight-grid">
            {highlights.map((item) => (
              <article key={item.title}>
                <span>
                  {item.number}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
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
              Award categories
            </span>

            <h2>
              Recognition across multiple forms of writing.
            </h2>

            <p>
              Final categories, eligibility requirements, and judging
              criteria may be updated by the organizing committee.
            </p>
          </div>

          <div className="category-list">
            {categories.map((category) => (
              <div key={category}>
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mission-grid">
            <article>
              <span className="eyebrow">
                For Authors
              </span>

              <h3>
                A meaningful platform for recognition.
              </h3>

              <p>
                Authors gain an opportunity to present their work,
                connect with literary communities, and receive
                recognition for their contribution.
              </p>
            </article>

            <article>
              <span className="eyebrow">
                For Partners
              </span>

              <h3>
                Support literature and creative achievement.
              </h3>

              <p>
                Institutions, publishers, sponsors, media partners,
                and literary organizations can collaborate with the
                initiative to strengthen its reach and impact.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section award-band">
        <div className="container award-grid">
          <div>
            <span className="eyebrow gold">
              Participate • Partner • Support
            </span>

            <h2>
              Be part of Global Authors Award 2026.
            </h2>

            <p>
              For nominations, partnerships, sponsorships,
              collaboration, media inquiries, or general information,
              contact the organizing team.
            </p>

            <div className="actions">
              <a
                href="mailto:infinityaward2025@gmail.com"
                className="btn lime"
              >
                infinityaward2025@gmail.com
              </a>
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
        <div className="container cta-simple">
          <div>
            <span className="eyebrow">
              Presented by
            </span>

            <h2>
              Infinity Services Pvt. Ltd.
            </h2>

            <p>
              Planning, production, communication, recognition,
              and event coordination from Kathmandu, Nepal.
            </p>
          </div>

          <Link
            to="/about"
            className="btn"
          >
            About Infinity Services
          </Link>
        </div>
      </section>
    </>
  )
}
