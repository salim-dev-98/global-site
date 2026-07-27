import Container from '../common/Container.jsx'
import Button from '../common/Button.jsx'
import Reveal from '../common/Reveal.jsx'
import {
  BuildingIcon,
  HomeIcon,
  CoinsIcon,
  DropletIcon,
} from '../common/icons.jsx'

const features = [
  {
    icon: <BuildingIcon />,
    title: 'The Warehouses',
    description:
      'Modern industrial bays for high-growth logistics and trade.',
  },
  {
    icon: <HomeIcon />,
    title: 'Mixed-Use Multifamily Hub',
    description:
      'Prime retail and residential intersection with high-growth potential, offering stable and significant asset appreciation.',
  },
]

const capitalSources = [
  {
    icon: <BuildingIcon />,
    title: 'Registered Funds',
    items: ['RRSP & TFSA', 'LIRA & RIF', 'LIF (Life Income Fund)'],
  },
  {
    icon: <CoinsIcon />,
    title: 'Transition Capital',
    items: ['Pension Transfers', 'Severance Packages', 'Deferred Profit Sharing'],
  },
  {
    icon: <DropletIcon />,
    title: 'Liquid Assets',
    items: ['Cash Holdings', 'Corporate Retained Earnings', 'Private Equity'],
  },
]

function WealthPromo() {
  return (
    <section className="section wealth-section">
      <Container>
        <div className="split-grid">
          <Reveal x={-40} y={0}>
            <div className="wealth-feature-card">
              <span className="eyebrow">Proven Assets &middot; Strategic Locations</span>
              <h3 className="wealth-feature-card__title">
                The British Columbia Warehouse Project &amp; Mixed-Use
                Multifamily/Retail Hub
              </h3>

              <div className="wealth-feature-list">
                {features.map((feature) => (
                  <div key={feature.title} className="wealth-feature-item">
                    <span className="wealth-feature-item__icon">
                      {feature.icon}
                    </span>
                    <div>
                      <h4 className="wealth-feature-item__title">
                        {feature.title}
                      </h4>
                      <p className="wealth-feature-item__desc">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal x={40} y={0} delay={0.1} className="split-copy">
            <span className="eyebrow">Unlock Your Wealth</span>
            <h2 className="section-title">From Bank Paper to Real Property Assets</h2>
            <p className="split-copy__text">
              We specialize in unlocking trapped capital from registered
              funds, transition capital and liquid assets, moving it into
              proven, strategically located property assets secured by
              physical land and infrastructure.
            </p>
            <div className="split-copy__cta">
              <Button to="/contact" variant="dark">
                Get In Touch
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="capital-sources">
          <p className="capital-sources__eyebrow">Unleash Your Capital</p>
          <h3 className="capital-sources__title">
            We specialize in &ldquo;unlocking&rdquo; trapped capital using:
          </h3>

          <div className="capital-sources__grid">
            {capitalSources.map((source, index) => (
              <Reveal key={source.title} delay={index * 0.1}>
                <div className="capital-card">
                  <span className="capital-card__icon">{source.icon}</span>
                  <h4 className="capital-card__title">{source.title}</h4>
                  <ul className="capital-card__list">
                    {source.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="property-tagline">
          The Real Property Advantage
        </Reveal>
      </Container>
    </section>
  )
}

export default WealthPromo
