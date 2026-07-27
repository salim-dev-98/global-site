import { useState } from 'react'
import Container from '../components/common/Container.jsx'
import PageBanner from '../components/common/PageBanner.jsx'
import Reveal from '../components/common/Reveal.jsx'
import FaqAccordion from '../components/common/FaqAccordion.jsx'
import { PhoneIcon, MailIcon, MapPinIcon } from '../components/common/icons.jsx'
import { faqs } from '../data/faqs.js'
import bannerImage from '../assets/site-image/sect-fur-image.jpeg'

const contactInfo = [
  {
    label: 'Call Us',
    value: '+1 780 531 6230',
    href: 'tel:+17805316230',
    Icon: PhoneIcon,
  },
  {
    label: 'Email Us',
    value: 'malagu4@yahoo.com',
    href: 'mailto:malagu4@yahoo.com',
    Icon: MailIcon,
  },
  {
    label: 'View on Map',
    value: 'Find us on Google Maps',
    href: 'https://maps.google.com',
    Icon: MapPinIcon,
  },
]

const initialForm = { name: '', email: '', phone: '', message: '' }

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Reach out today and let our team guide you with clear and practical solutions for your project needs."
        image={bannerImage}
      />

      <section className="section">
        <Container>
          <div className="contact-grid">
            <Reveal x={-40} y={0}>
              <h2 className="section-title">Get in Touch</h2>
              <p className="contact-copy__text">
                Reach out today and let our team guide you with clear and
                practical solutions for your project needs.
              </p>

              <div className="contact-info-list">
                {contactInfo.map(({ label, value, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact-info-link"
                  >
                    <span className="contact-info-icon">
                      <Icon className="icon-sm" />
                    </span>
                    <span>
                      <span className="contact-info-label">{label}</span>
                      <span className="contact-info-value">{value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal x={40} y={0} delay={0.1}>
              <form onSubmit={handleSubmit} className="contact-form">
                {submitted && (
                  <p className="form-success">
                    Thank you! Your message has been received — our team will
                    get back to you shortly.
                  </p>
                )}

                <div className="form-row">
                  <div>
                    <label htmlFor="name" className="form-label field-gap">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="form-input input-field fluid-text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="form-label field-gap">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="form-input input-field fluid-text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="form-label field-gap">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="form-input input-field fluid-text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="form-label field-gap">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="form-input input-field fluid-text-sm"
                  />
                </div>

                <button type="submit" className="form-submit btn">
                  Send Message
                </button>
              </form>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section section--alt">
        <Container>
          <Reveal className="section-header">
            <span className="eyebrow">FAQs</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </Reveal>

          <Reveal delay={0.1} className="faq-wrap">
            <FaqAccordion items={faqs} />
          </Reveal>
        </Container>
      </section>
    </>
  )
}

export default Contact
