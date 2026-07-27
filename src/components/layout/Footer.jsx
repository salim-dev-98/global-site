import { Link } from 'react-router-dom'
import Container from '../common/Container.jsx'
import {
  FacebookIcon,
  XIcon,
  YoutubeIcon,
  InstagramIcon,
  PhoneIcon,
  MailIcon,
} from '../common/icons.jsx'
import logo from '../../assets/site-image/footer-logo-global.png'

const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'X', href: 'https://x.com', Icon: XIcon },
  { label: 'YouTube', href: 'https://youtube.com', Icon: YoutubeIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
]

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Products', to: '/products' },
  { label: 'Contact Us', to: '/contact' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-grid">
          <div>
            <img src={logo} alt="Global Retirement Inc. logo" className="footer-logo" />
            <p className="footer-desc">
              Ethical global training and support to access your savings tax
              free without compromising your values.
            </p>
          </div>

          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Contact</h3>
            <ul className="contact-list">
              <li>
                <a href="tel:+17805316230" className="contact-link">
                  <PhoneIcon className="icon-xs" />
                  +1 780 531 6230
                </a>
              </li>
              <li>
                <a href="mailto:malagu4@yahoo.com" className="contact-link">
                  <MailIcon className="icon-xs" />
                  malagu4@yahoo.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Follow Us</h3>
            <div className="social-list">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-link icon-btn"
                >
                  <Icon className="icon-xs" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Global Retirement Funds. All rights
          reserved.
        </div>
      </Container>
    </footer>
  )
}

export default Footer
