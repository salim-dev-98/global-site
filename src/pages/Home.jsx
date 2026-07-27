import Hero from '../components/home/Hero.jsx'
import AboutSection from '../components/home/AboutSection.jsx'
import HowItWorks from '../components/home/HowItWorks.jsx'
import ProductsSection from '../components/home/ProductsSection.jsx'
import WhyChooseUs from '../components/home/WhyChooseUs.jsx'
import Gallery from '../components/home/Gallery.jsx'
import WealthPromo from '../components/home/WealthPromo.jsx'
import Testimonials from '../components/home/Testimonials.jsx'
import CtaSection from '../components/home/CtaSection.jsx'

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <HowItWorks />
      <ProductsSection />
      <WhyChooseUs />
      <Gallery />
      <WealthPromo />
      <Testimonials />
      <CtaSection />
    </>
  )
}

export default Home
