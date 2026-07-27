import Container from '../common/Container.jsx'
import Reveal from '../common/Reveal.jsx'
import StructureDiagram from './StructureDiagram.jsx'

function HowItWorks() {
  return (
    <section className="section section--dark">
      <Container>
        <Reveal className="section-header">
          <span className="eyebrow">How It Works</span>
          <h2 className="section-title section-title--white">
            Structure for Global Retirement Saving
          </h2>
          <p className="section-subtitle section-subtitle--white">
            A clear, transparent path connecting your registered funds to
            real, tangible property assets.
          </p>
        </Reveal>

        <StructureDiagram />
      </Container>
    </section>
  )
}

export default HowItWorks
