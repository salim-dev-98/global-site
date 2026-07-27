import Container from '../common/Container.jsx'
import Button from '../common/Button.jsx'
import Reveal from '../common/Reveal.jsx'
import aboutImage from '../../assets/site-image/sect2-image.jpeg'

function AboutSection() {
  return (
    <section className="section about-section">
      <Container>
        <div className="split-grid">
          <Reveal x={-40} y={0}>
            <div className="split-media">
              <img src={aboutImage} alt="Architects planning a modern building design" />
            </div>
          </Reveal>
          <Reveal x={40} y={0} delay={0.1} className="split-copy">
            <span className="eyebrow">Who We Are</span>
            <h2 className="section-title">Practical Solutions with Clear Guidance</h2>
            <p className="split-copy__text">
              We are committed to structured education and practical
              guidance, helping people across Canada, US, UK, Australia and
              New Zealand access their savings with clarity, transparency and
              confidence, without compromising their values.
            </p>
            <div className="split-copy__cta">
              <Button to="/about-us" variant="dark">
                Learn More
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
