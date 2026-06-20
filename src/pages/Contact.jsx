import { useState } from 'react'
import { company } from '../data'
import { supabase } from '../lib/supabase'

export default function Contact() {
const [form, setForm] = useState({
name: '',
email: '',
phone: '',
organization: '',
service: '',
message: ''
})

const [status, setStatus] = useState('')
const [submitting, setSubmitting] = useState(false)

function handleChange(event) {
const { name, value } = event.target

```
setForm((current) => ({
  ...current,
  [name]: value
}))
```

}

async function handleSubmit(event) {
event.preventDefault()
setSubmitting(true)
setStatus('')

```
try {
  if (supabase) {
    const { error } = await supabase
      .from('contact_inquiries')
      .insert([
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          organization: form.organization,
          service: form.service,
          message: form.message
        }
      ])

    if (error) {
      throw error
    }

    setStatus(
      'Thank you. Your inquiry has been submitted successfully.'
    )

    setForm({
      name: '',
      email: '',
      phone: '',
      organization: '',
      service: '',
      message: ''
    })
  } else {
    const subject = encodeURIComponent(
      `Website inquiry from ${form.name}`
    )

    const body = encodeURIComponent(
      `Name: ${form.name}
```

Email: ${form.email}
Phone: ${form.phone}
Organization: ${form.organization}
Service: ${form.service}

Message:
${form.message}`
)

```
    window.location.href =
      `mailto:${company.email}?subject=${subject}&body=${body}`

    setStatus(
      'Your email application has been opened. Please send the prepared message.'
    )
  }
} catch (error) {
  console.error(error)

  setStatus(
    'We could not submit the form. Please email or call us directly.'
  )
} finally {
  setSubmitting(false)
}
```

}

return (
<> <section className="page-hero"> <div className="container"> <span className="eyebrow">
Contact Infinity Services </span>

```
      <h1>
        Let’s discuss your next project.
      </h1>

      <p>
        Tell us what you are planning, producing, promoting,
        printing, or coordinating. Our team will help organize
        the right solution.
      </p>
    </div>
  </section>

  <section className="section">
    <div className="container contact-layout">
      <div className="contact-details">
        <span className="eyebrow">
          Get in touch
        </span>

        <h2>
          One conversation can simplify the entire project.
        </h2>

        <p className="lead">
          Contact Infinity Services for printing, event planning,
          travel coordination, marketing, advertising, branding,
          or integrated project support.
        </p>

        <div className="contact-info-grid">
          <article>
            <small>
              Phone
            </small>

            <a href={`tel:${company.phoneHref}`}>
              {company.phoneDisplay}
            </a>
          </article>

          <article>
            <small>
              Email
            </small>

            <a href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </article>

          <article>
            <small>
              Address
            </small>

            <span>
              {company.address}
            </span>
          </article>

          <article>
            <small>
              Business Hours
            </small>

            <span>
              Sunday–Friday
              <br />
              9:00 AM–5:30 PM
            </span>
          </article>
        </div>
      </div>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <div className="form-row">
          <label>
            Full Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </label>

          <label>
            Email Address
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+977"
            />
          </label>

          <label>
            Organization
            <input
              type="text"
              name="organization"
              value={form.organization}
              onChange={handleChange}
              placeholder="Company or organization"
            />
          </label>
        </div>

        <label>
          Service Required
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="">
              Select a service
            </option>

            <option value="Printing, Packaging & Production">
              Printing, Packaging & Production
            </option>

            <option value="Event Planning & Management">
              Event Planning & Management
            </option>

            <option value="Travel, Tours & Coordination">
              Travel, Tours & Coordination
            </option>

            <option value="Marketing, Advertising & Branding">
              Marketing, Advertising & Branding
            </option>

            <option value="Global Authors Award">
              Global Authors Award
            </option>

            <option value="Multiple Services">
              Multiple Services
            </option>
          </select>
        </label>

        <label>
          Project Details
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="7"
            placeholder="Tell us about your project, timeline, location, and requirements."
          />
        </label>

        <button
          type="submit"
          className="btn"
          disabled={submitting}
        >
          {submitting
            ? 'Submitting...'
            : 'Send Inquiry'}
        </button>

        {status && (
          <p className="form-status">
            {status}
          </p>
        )}
      </form>
    </div>
  </section>

  <section className="section ivory">
    <div className="container cta-simple">
      <div>
        <span className="eyebrow">
          Prefer direct contact?
        </span>

        <h2>
          Call or email our team.
        </h2>

        <p>
          We will review your requirements and help determine
          the next steps.
        </p>
      </div>

      <a
        href={`tel:${company.phoneHref}`}
        className="btn"
      >
        Call {company.phoneDisplay}
      </a>
    </div>
  </section>
</>
```

)
}
