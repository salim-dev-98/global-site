import Container from '../components/common/Container.jsx'
import PageBanner from '../components/common/PageBanner.jsx'
import Reveal from '../components/common/Reveal.jsx'
import FaqAccordion from '../components/common/FaqAccordion.jsx'
import CtaSection from '../components/home/CtaSection.jsx'
import whoWeAreImage from '../assets/site-image/set-three.jpeg'
import bannerImage from '../assets/site-image/sect2-image.jpeg'
import { faqs } from '../data/faqs.js'

const foundation = [
  {
    title: 'Our Vision',
    description:
      'To build a future where people are informed, prepared, and able to make better decisions through accessible knowledge and real world solutions.',
  },
  {
    title: 'Our Mission',
    description:
      'To provide clear guidance, structured support, and practical solutions that help individuals move forward with confidence and stability.',
  },
  {
    title: 'Our Global Reach',
    description:
      'We provide services across multiple countries and are continuously expanding to support more regions with structured and adaptable solutions.',
  },
  {
    title: 'Our Values',
    description:
      'We operate with honesty, transparency, confidentiality, and a strong focus on supporting people through clear and responsible practices.',
  },
]

function AboutUs() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Structured education and practical guidance, built on clarity and trust."
        image={bannerImage}
      />

      <section className="section about-hero-split">
        <Container>
          <div className="split-grid">
            <Reveal x={-40} y={0}>
              <div className="split-media split-media--portrait">
                <img src={whoWeAreImage} alt="Team reviewing plans on a laptop" />
              </div>
            </Reveal>
            <Reveal x={40} y={0} delay={0.1}>
              <span className="eyebrow">Who We Are</span>
              <h2 className="section-title">Practical Solutions with Clear Guidance</h2>
              <p className="split-copy__text">
                Global Retirement Funds is focused on providing structured
                education, guidance, and practical solutions to help
                individuals understand systems, improve decision making, and
                move forward with clarity.
              </p>
              <p className="split-copy__text">
                We serve clients across Canada, US, UK, Australia and New
                Zealand, offering container housing systems, design planning,
                and digital services as contemporary solutions for practical
                needs.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section section--alt">
        <Container>
          <Reveal className="section-header">
            <span className="eyebrow">Our Foundation</span>
            <h2 className="section-title">Guided by Purpose and Clarity</h2>
          </Reveal>

          <div className="foundation-grid">
            {foundation.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <div className="foundation-card">
                  <span className="foundation-number">{index + 1}</span>
                  <h3 className="foundation-card__title">{item.title}</h3>
                  <p className="foundation-card__desc">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />

      <section className="section">
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

export default AboutUs
