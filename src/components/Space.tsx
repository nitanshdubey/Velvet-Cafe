const galleryItems = [
  {
    cls: 'g1',
    label: 'Coffee Bar',
    overlay: 'The Bar',
    image: 'https://github.com/nitanshdubey/Velvet-Cafe/blob/main/edgar-chaparro-Lwx-q6OdGAc-unsplash.jpg?raw=true',
  },
  {
    cls: 'g2',
    label: 'Interior',
    overlay: 'The Interior',
    image: 'https://github.com/nitanshdubey/Velvet-Cafe/blob/main/alexander-fae-PK1pzUGQSjc-unsplash.jpg?raw=true',
  },
  {
    cls: 'g3',
    label: 'Outdoor Seating',
    overlay: 'Al Fresco',
    image: 'https://github.com/nitanshdubey/Velvet-Cafe/blob/main/jamie-webster-bxJmEo60640-unsplash.jpg?raw=true',
  },
  {
    cls: 'g4',
    label: 'Roastery',
    overlay: 'The Roastery',
    image: 'https://github.com/nitanshdubey/Velvet-Cafe/blob/main/calvin-polen-5vUqkkYzmug-unsplash.jpg?raw=true',
  },
  {
    cls: 'g5',
    label: 'Desserts',
    overlay: 'Patisserie',
    image: 'https://github.com/nitanshdubey/Velvet-Cafe/blob/main/andy-li-RndRFJ1v1kk-unsplash.jpg?raw=true',
  },
  {
    cls: 'g6',
    label: 'Workspace',
    overlay: 'Workspace Corner',
    image: 'https://github.com/nitanshdubey/Velvet-Cafe/blob/main/jiran-family-ohVCTatblUQ-unsplash.jpg?raw=true',
  },
  {
    cls: 'g7',
    label: 'Lounge',
    overlay: 'The Lounge',
    image: 'https://github.com/nitanshdubey/Velvet-Cafe/blob/main/jiran-family-SvpodZLzaGo-unsplash.jpg?raw=true',
  },
  {
    cls: 'g8',
    label: 'Terrace',
    overlay: 'Terrace',
    image: 'https://github.com/nitanshdubey/Velvet-Cafe/blob/main/edwin-petrus-FrVsyYZvfP8-unsplash.jpg?raw=true',
  },
]

const poems = [
  { word: 'Golden light.', desc: 'Warm amber filtering through linen curtains every afternoon.' },
  { word: 'Soft jazz.', desc: "Vinyl records. Low tempo. The kind of music you forget you're hearing." },
  { word: 'Fresh pastries.', desc: 'Baked at dawn. Gone by noon. Worth setting your alarm for.' },
  { word: 'Quiet conversations.', desc: 'The kind you only have when the coffee is good and the world slows down.' },
]

const delays = [
  '',
  'reveal-delay-1',
  'reveal-delay-2',
  'reveal-delay-3',
  'reveal-delay-4',
  'reveal-delay-5',
  'reveal-delay-4',
  'reveal-delay-5',
]

export default function Space() {
  return (
    <section id="space" className="section-padding">
      <div className="container">
        <div className="space-header">
          <p className="section-eyebrow reveal">The Space</p>

          <h2
            className="section-headline reveal reveal-delay-1"
            style={{ color: 'var(--cream)' }}
          >
            A room that <em style={{ color: 'var(--gold)' }}>remembers you.</em>
          </h2>
        </div>

        <div className="gallery-masonry">
          {galleryItems.map((item, i) => (
            <div
              key={item.cls}
              className={`gallery-item ${item.cls} reveal ${delays[i]}`}
            >
              <div className="gallery-img">
                <img
                  src={item.image}
                  alt={item.label}
                  className="gallery-image"
                />
              </div>

              <div className="gallery-overlay">
                <span className="gallery-label">{item.overlay}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-poem">
          {poems.map((p, i) => (
            <div key={p.word} className={`poem-item reveal ${delays[i]}`}>
              <p className="poem-word">{p.word}</p>
              <p className="poem-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}