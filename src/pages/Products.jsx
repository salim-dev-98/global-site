import { useState } from 'react'
import Container from '../components/common/Container.jsx'
import PageBanner from '../components/common/PageBanner.jsx'
import ProductCard from '../components/products/ProductCard.jsx'
import { products as allProducts } from '../data/products.js'
import bannerImage from '../assets/site-image/producet-one.jpeg'

const sortOptions = [
  { value: 'default', label: 'Default sorting' },
  { value: 'popularity', label: 'Sort by popularity' },
  { value: 'latest', label: 'Sort by latest' },
  { value: 'price-asc', label: 'Sort by price: low to high' },
  { value: 'price-desc', label: 'Sort by price: high to low' },
]

function Products() {
  const [sort, setSort] = useState('default')

  const products = [...allProducts].sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price
    if (sort === 'price-desc') return b.price - a.price
    if (sort === 'popularity') return b.popularity - a.popularity
    if (sort === 'latest') return new Date(b.dateAdded) - new Date(a.dateAdded)
    return 0
  })

  return (
    <>
      <PageBanner
        title="Products"
        subtitle="Practical resources and services to support your container home project."
        image={bannerImage}
      />

      <section className="section">
        <Container>
          <div className="products-toolbar">
            <p className="results-count">Showing all {products.length} results</p>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="sort-select input-field fluid-text-sm"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="products-grid">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} delay={index * 0.12} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export default Products
