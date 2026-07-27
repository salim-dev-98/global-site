import Container from './Container.jsx'
import Reveal from './Reveal.jsx'

function PageBanner({ title, subtitle, image }) {
  return (
    <section className="page-banner">
      <img src={image} alt="" className="page-banner__bg" />
      <div className="page-banner__overlay" />
      <Container className="page-banner__content">
        <Reveal className="page-banner__inner">
          <h1 className="page-banner__title">{title}</h1>
          {subtitle && <p className="page-banner__subtitle">{subtitle}</p>}
        </Reveal>
      </Container>
    </section>
  )
}

export default PageBanner
