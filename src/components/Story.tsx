export default function Story() {
  return (
    <section id="story" className="section-padding-lg">
      <div className="container">
        <div className="story-grid">
          <div>
            <p className="story-eyebrow reveal">Our Story</p>
            <h2 className="story-headline reveal reveal-delay-1">
              Coffee worth
              <br />
              slowing <em>down for.</em>
            </h2>

            <p className="story-body reveal reveal-delay-2">
              At Velvet Brew, we believe coffee is not a beverage. It is a pause.
              A breath. A quiet conversation with yourself before the world
              demands your attention.
            </p>

            <p className="story-body reveal reveal-delay-3">
              Every bean we source carries a story — from the mist-covered hills
              of Ethiopia to the volcanic slopes of Guatemala. We roast slowly.
              We brew with intention. We serve with care.
            </p>

            <p className="story-body reveal reveal-delay-4">
              Because the richest memories begin with the simplest rituals.
            </p>
          </div>

          <div className="story-image reveal reveal-delay-2">
            <img
              src="https://github.com/nitanshdubey/Velvet-Cafe/blob/main/nathan-dumlao-6VhPY27jdps-unsplash.jpg?raw=true"
              alt="Freshly brewed coffee"
              className="story-image-inner"
            />
          </div>
        </div>

        <blockquote className="pullquote reveal">
          "We don't rush coffee.
          <br />
          Neither should life."
        </blockquote>
      </div>
    </section>
  );
}