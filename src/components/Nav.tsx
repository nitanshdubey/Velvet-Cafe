export default function Nav() {
    return (
      <nav id="main-nav">
        <a href="#" className="nav-logo">Velvet Brew</a>
        <div className="nav-links">
          <a href="#story">Our Story</a>
          <a href="#menu">Collection</a>
          <a href="#space">The Space</a>
          <a href="#experience">Experience</a>
        </div>
        <button
          className="nav-reserve"
          onClick={() =>
            document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Reserve a Table
        </button>
      </nav>
    )
  }