const drinks = [
  {
    cls: 'card-espresso',
    label: 'Deep & Bold',
    name: 'Midnight Espresso',
    desc: 'Darkness in a cup. Single-origin Ethiopian Yirgacheffe, pulled slow and long. Velvety crema. Lingering finish.',
    price: '₹ 320',
    image: 'https://github.com/nitanshdubey/Velvet-Cafe/blob/main/dani-ZLqxSzvVr7I-unsplash.jpg?raw=true',
  },
  {
    cls: 'card-velvet',
    label: 'Silky & Warm',
    name: 'Velvet Cappuccino',
    desc: 'Microfoam that dissolves on your tongue. Balanced, warm, and impossibly smooth. Our most beloved cup.',
    price: '₹ 380',
    image: 'https://github.com/nitanshdubey/Velvet-Cafe/blob/main/jonas-jacobsson-RFHFV7lVQBY-unsplash.jpg?raw=true',
  },
  {
    cls: 'card-caramel',
    label: 'Sweet & Golden',
    name: 'Caramel Cloud',
    desc: 'Slow-dripped caramel woven through steamed oat milk. Dessert and morning ritual, unified.',
    price: '₹ 420',
    image: 'https://github.com/nitanshdubey/Velvet-Cafe/blob/main/theo-crazzolara-BpcTCHoruSo-unsplash.jpg?raw=true',
  },
  {
    cls: 'card-hazelnut',
    label: 'Rich & Nutty',
    name: 'Hazelnut Reserve',
    desc: 'Roasted Guatemalan beans with our house hazelnut reduction. Earthy, warm, and deeply comforting.',
    price: '₹ 390',
    image: 'https://github.com/nitanshdubey/Velvet-Cafe/blob/main/jonas-jacobsson-RFHFV7lVQBY-unsplash.jpg?raw=true',
  },
  {
    cls: 'card-matcha',
    label: 'Serene & Green',
    name: 'Matcha Bloom',
    desc: 'Ceremonial-grade Uji matcha, whisked to a foam, floated over cold macadamia milk. Elegance in stillness.',
    price: '₹ 440',
    image: 'https://github.com/nitanshdubey/Velvet-Cafe/blob/main/jason-leung-Z-hvocTfR_s-unsplash.jpg?raw=true',
  },
  {
    cls: 'card-cold',
    label: 'Midnight & Cold',
    name: 'Cold Brew Noir',
    desc: 'Steeped for 18 hours in near-darkness. Smooth as night. Bold as a secret. Served over hand-cut ice.',
    price: '₹ 360',
    image: 'https://github.com/nitanshdubey/Velvet-Cafe/blob/main/demi-deherrera-L-sm1B4L1Ns-unsplash.jpg?raw=true',
  },
]

const delays = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4', 'reveal-delay-5']

export default function Menu() {
  return (
    <section id="menu" className="section-padding">
      <div className="container">
        <div className="menu-header">
          <p className="section-eyebrow reveal">Signature Collection</p>
          <h2 className="section-headline reveal reveal-delay-1">
            Coffee as <em>an art form.</em>
          </h2>
        </div>

        <div className="menu-grid">
          {drinks.map((d, i) => (
            <div key={d.name} className={`menu-card ${d.cls} reveal ${delays[i]}`}>
              <div className="menu-card-image">
                <div className="menu-card-img-bg">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="menu-card-img"
                  />
                </div>
              </div>

              <div className="menu-card-body">
                <div className="menu-card-divider"></div>
                <h3 className="menu-card-name">{d.name}</h3>
                <p className="menu-card-desc">{d.desc}</p>
                <span className="menu-card-price">{d.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}