import Container from '../common/Container.jsx'
import Reveal from '../common/Reveal.jsx'
import galleryOne from '../../assets/site-image/sect-six-image.jpeg'
import galleryTwo from '../../assets/site-image/sect-eight-image.jpeg'

function Gallery() {
  return (
    <section className="section section--alt">
      <Container>
        <Reveal className="section-header">
          <span className="eyebrow">Container Homes</span>
          <h2 className="section-title">Real, Tangible Living Spaces</h2>
        </Reveal>

        <div className="gallery-grid">
          <Reveal x={-30} y={0}>
            <div className="gallery-item">
              <img
                src={galleryOne}
                alt="Row of modern container homes surrounded by greenery"
              />
            </div>
          </Reveal>
          <Reveal x={30} y={0} delay={0.1}>
            <div className="gallery-item">
              <img
                src={galleryTwo}
                alt="Two-storey container home in an open field"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default Gallery
