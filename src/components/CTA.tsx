export default function CTA() {
    return (
      <section id="cta" className="section-padding-lg">
        <div className="cta-bg"></div>
        <div className="container-narrow" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <p className="cta-eyebrow reveal">Your Table Awaits</p>
          <h2 className="cta-headline reveal reveal-delay-1">
            Let's share your next<br /><em>favourite cup.</em>
          </h2>
          <p className="cta-sub reveal reveal-delay-2">
            Whether you're meeting friends, working quietly, or celebrating life —
            we'll have your table waiting.
          </p>
          <div className="cta-buttons reveal reveal-delay-3">
            <a href="mailto:hello@velvetbrew.com" className="btn-primary">Reserve a Table</a>
            <a
              href="#space"
              className="btn-ghost"
              style={{ color: 'rgba(247,243,237,.7)', borderColor: 'rgba(201,169,110,.3)' }}
            >
              Visit Us Today
            </a>
            <a href="tel:+919876543210" className="btn-outline">Call Us</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="btn-outline">
              Instagram
            </a>
          </div>
          <div className="cta-divider"></div>
          <div className="cta-social reveal">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </section>
    )
  }