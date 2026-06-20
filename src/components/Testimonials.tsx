const reviews = [
    {
      text: "I've sat in cafés across three continents. Velvet Brew is the first one I felt reluctant to leave. The light, the coffee, the silence — it all conspires to make you feel like yourself.",
      name: 'Aanya Mehta',
      role: 'Creative Director, Mumbai',
      letter: 'A',
      bg: 'linear-gradient(135deg,#c9a96e,#a07840)',
    },
    {
      text: "I wrote the first chapter of my novel here. Something about this place unlocks things in you. The Midnight Espresso and a corner seat — that's my religion now.",
      name: 'Rohan Iyer',
      role: 'Author & Filmmaker, Bangalore',
      letter: 'R',
      bg: 'linear-gradient(135deg,#6b4c2a,#4a3020)',
    },
    {
      text: "We had our first serious conversation here over a Caramel Cloud. Three years later, we came back for our anniversary. This café holds more of our story than our apartment does.",
      name: 'Sara & Karan',
      role: 'Architects, Delhi',
      letter: 'S',
      bg: 'linear-gradient(135deg,#2d4a3a,#1e3028)',
    },
  ]
  
  const delays = ['', 'reveal-delay-1', 'reveal-delay-2']
  
  export default function Testimonials() {
    return (
      <section id="testimonials" className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <p className="section-eyebrow reveal">Moments Remembered</p>
            <h2 className="section-headline reveal reveal-delay-1">
              What our guests <em>carry home.</em>
            </h2>
          </div>
  
          <div className="testimonials-grid">
            {reviews.map((r, i) => (
              <div key={r.name} className={`testimonial-card reveal ${delays[i]}`}>
                <div className="testimonial-quote-mark">"</div>
                <p className="testimonial-text">{r.text}</p>
                <div className="testimonial-divider"></div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" style={{ background: r.bg }}>
                    {r.letter}
                  </div>
                  <div>
                    <p className="testimonial-name">{r.name}</p>
                    <p className="testimonial-role">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }