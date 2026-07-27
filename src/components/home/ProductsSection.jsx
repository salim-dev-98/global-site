import Container from '../common/Container.jsx'
import Button from '../common/Button.jsx'
import Reveal from '../common/Reveal.jsx'
import productOne from '../../assets/site-image/producet-one.jpeg'
import productTwo from '../../assets/site-image/producet-two.jpeg'
import productThree from '../../assets/site-image/producet-three.jpeg'

const products = [
  {
    title: 'Flat Pack Container House System',
    description:
      'A complete, ready-to-assemble container housing system designed for durability and ease of installation.',
    image: productOne,
  },
  {
    title: 'Container House Installation Kit',
    description:
      'Step-by-step installation instructions and materials to help you set up your container house correctly.',
    image: productTwo,
  },
  {
    title: 'Architectural Design Scheme Services',
    description:
      'Professional design scheme services tailored to your project needs and site requirements.',
    image: productThree,
  },
]

function ProductsSection() {
  return (
    <section className="section section--alt">
      <Container>
        <Reveal className="section-header">
          <span className="eyebrow">Our Products</span>
          <h2 className="section-title">Modern Solutions Built for Real Needs</h2>
        </Reveal>

        <div className="products-grid">
          {products.map((product, index) => (
            <Reveal key={product.title} delay={index * 0.12}>
              <div className="product-card">
                <div className="product-card__media">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-card__body">
                  <h3 className="product-card__title">{product.title}</h3>
                  <p className="product-card__desc">{product.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="products-more" delay={0.2}>
          <Button to="/products" variant="dark">
            More Products
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}

export default ProductsSection
