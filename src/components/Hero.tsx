export default function Hero() {
    return (
      <section id="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-grain"></div>
  
        <div className="bean"></div>
        <div className="bean"></div>
        <div className="bean"></div>
        <div className="bean"></div>
        <div className="bean"></div>
  
        <div className="steam-container">
          <div className="steam"></div>
          <div className="steam"></div>
          <div className="steam"></div>
        </div>
  
        <div className="hero-content">
          <p className="hero-eyebrow">Velvet Brew Café — Est. 2024</p>
          <h1 className="hero-headline">
            Not Just Coffee.<br /><em>A Ritual.</em>
          </h1>
          <p className="hero-sub">
            Crafted for slow mornings, meaningful conversations,<br />
            and unforgettable evenings.
          </p>
          <div className="hero-buttons">
            <a href="#cta" className="btn-primary">Reserve a Table</a>
            <a href="#story" className="btn-ghost">Explore Our Story</a>
          </div>
        </div>
  
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>
    )
  }