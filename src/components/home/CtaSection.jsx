import Container from '../common/Container.jsx'
import Button from '../common/Button.jsx'
import Reveal from '../common/Reveal.jsx'

function CtaSection() {
  return (
    <section className="cta-band">
      <Container>
        <Reveal className="cta-band__inner">
          <div>
            <h2 className="cta-band__title">Take the Next Step with Confidence</h2>
            <p className="cta-band__subtitle">
              Start with clear guidance and practical support.
            </p>
          </div>
          <Button to="/contact" variant="outline">
            Get Started
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}

export default CtaSection
