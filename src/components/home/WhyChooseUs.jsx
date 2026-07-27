import Container from '../common/Container.jsx'
import Reveal from '../common/Reveal.jsx'
import whyImage from '../../assets/site-image/sect-fur-image.jpeg'

const pillars = [
  {
    title: 'Practical Solutions',
    description:
      'Clear, actionable guidance built around real-world needs, not theory.',
  },
  {
    title: 'Professional Support',
    description:
      'A dedicated team guiding you through every step of the process.',
  },
  {
    title: 'Modern Design Approach',
    description:
      'Contemporary solutions that combine function with lasting value.',
  },
  {
    title: 'Trusted Process',
    description:
      'Honest, transparent and confidential support you can rely on.',
  },
]

function WhyChooseUs() {
  return (
    <section className="section why-section">
      <Container>
        <div className="split-grid">
          <Reveal x={-40} y={0}>
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="section-title">Guided by Purpose and Clarity</h2>

            <div className="why-list">
              {pillars.map((pillar, index) => (
                <div key={pillar.title} className="why-item">
                  <span className="why-number">{index + 1}</span>
                  <div>
                    <h3 className="why-item__title">{pillar.title}</h3>
                    <p className="why-item__desc">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal x={40} y={0} delay={0.1}>
            <div className="split-media split-media--portrait">
              <img src={whyImage} alt="Design team reviewing architectural plans" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default WhyChooseUs
