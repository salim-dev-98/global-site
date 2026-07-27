import Container from '../common/Container.jsx'
import Reveal from '../common/Reveal.jsx'
import avatar from '../../assets/site-image/testmonal-image.jpg'

const testimonials = [
  {
    name: 'Mark Wellberg',
    role: 'Client',
    quote:
      'The team made a complicated process feel simple. Clear guidance from start to finish.',
  },
  {
    name: 'Mark Wellberg',
    role: 'Client',
    quote:
      'Professional, transparent and genuinely helpful. I would recommend them to anyone.',
  },
  {
    name: 'Mark Wellberg',
    role: 'Client',
    quote:
      'Practical solutions and honest support made all the difference for our project.',
  },
]

function Testimonials() {
  return (
    <section className="section section--alt">
      <Container>
        <Reveal className="section-header">
          <span className="eyebrow">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </Reveal>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={index * 0.12}>
              <div className="testimonial-card">
                <p className="testimonial-quote">“{testimonial.quote}”</p>
                <div className="testimonial-footer">
                  <img src={avatar} alt={testimonial.name} className="testimonial-avatar" />
                  <div>
                    <p className="testimonial-name">{testimonial.name}</p>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Testimonials
