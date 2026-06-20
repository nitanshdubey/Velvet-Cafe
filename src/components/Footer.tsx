export default function Footer() {
    return (
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <p className="footer-brand-name">Velvet Brew</p>
              <p className="footer-tagline">Every Cup Tells a Story.</p>
              <p className="footer-bio">
                A luxury specialty café for those who believe that the finest moments
                in life arrive slowly, in a warm cup, with nowhere to be.
              </p>
            </div>
  
            <div className="footer-col">
              <p className="footer-col-title">Navigate</p>
              <ul>
                <li><a href="#story">Our Story</a></li>
                <li><a href="#menu">Collection</a></li>
                <li><a href="#space">The Space</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#cta">Reserve</a></li>
              </ul>
            </div>
  
            <div className="footer-col">
              <p className="footer-col-title">Opening Hours</p>
              <ul>
                <li><span>Mon – Fri</span></li>
                <li><span>7:00 am – 10:00 pm</span></li>
                <li style={{ marginTop: '12px' }}><span>Sat – Sun</span></li>
                <li><span>8:00 am – 11:00 pm</span></li>
              </ul>
            </div>
  
            <div className="footer-col">
              <p className="footer-col-title">Find Us</p>
              <ul>
                <li><span>12, Elgin Road</span></li>
                <li><span>Ballygunge, Kolkata</span></li>
                <li><span>West Bengal 700020</span></li>
                <li style={{ marginTop: '16px' }}><a href="mailto:hello@velvetbrew.com">hello@velvetbrew.com</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer">@velvetbrewcafe</a></li>
              </ul>
            </div>
          </div>
  
          <div className="footer-bottom">
            <p className="footer-copy">© 2024 Velvet Brew Café. All rights reserved.</p>
            <p className="footer-by">Crafted with care by ChangeIt Labs</p>
          </div>
        </div>
      </footer>
    )
  }